import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { createUrl, normalizeZoneName } from '@/lib/utils';
import { proyectoComunitarioSchema, ProyectoComunitarioFormValues } from '@/schemas/proyectoComunitario';

interface User {
  id: string;
  name: string;
  email: string;
}

export const useProjectForm = (onSubmit: (data: FormData) => Promise<void>) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<ProyectoComunitarioFormValues>({
    resolver: zodResolver(proyectoComunitarioSchema),
    defaultValues: {
      title: '',
      slug: '',
      zone: '',
      authorName: '',
      content1: '',
      content2: '',
      content3: '',
    },
  });

  const { watch, setValue } = form;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', createUrl(value.title || ''));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : data.users || Object.values(data));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (data: ProyectoComunitarioFormValues) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File || typeof value === 'string') {
          formData.append(key, value);
        }
      });
      
      // Normalize the zone name before submitting
      const normalizedZone = normalizeZoneName(data.zone);
      formData.set('zone', normalizedZone);

      await onSubmit(formData);
      toast({
        title: 'Proyecto creado',
        description: 'El proyecto se ha creado exitosamente.',
      });
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      toast({
        title: 'Error',
        description: 'Hubo un error al crear el proyecto. Por favor, intente de nuevo.',
        variant: 'destructive',
      });
    }
  };

  return { form, handleSubmit, users, isLoading, error };
};