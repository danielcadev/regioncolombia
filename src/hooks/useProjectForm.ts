// hooks/useProjectForm.ts

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { createUrl, normalizeZoneName } from '@/lib/utils';
import { getProjectRedirectUrl } from '@/lib/projects';
import { proyectoComunitarioSchema } from '@/schemas/proyectoComunitario';
import { ProyectoComunitario, ProyectoComunitarioFormData, ExtendedUser } from '@/types/blog';

export const useProjectForm = (
  onSubmit: (data: FormData) => Promise<ProyectoComunitario>,
  user: ExtendedUser,
  redirectFunction: (url: string) => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const existingProject = user.project;
  const isEditing = !!existingProject;

  const form = useForm<ProyectoComunitarioFormData>({
    resolver: zodResolver(proyectoComunitarioSchema),
    defaultValues: existingProject
      ? {
          title: existingProject.title,
          slug: existingProject.slug,
          zone: existingProject.zone,
          authorId: existingProject.authorId,
          content1: existingProject.content1,
          content2: existingProject.content2 || '',
          content3: existingProject.content3 || '',
          mainImage: undefined,
          image1: undefined,
          image2: undefined,
        }
      : {
          title: '',
          slug: '',
          zone: '',
          authorId: user.id,
          content1: '',
          content2: '',
          content3: '',
          mainImage: undefined,
          image1: undefined,
          image2: undefined,
        },
  });

  const { watch, setValue } = form;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title' && !isEditing) {
        setValue('slug', createUrl(value.title || ''));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, isEditing]);

  const handleSubmit = async (data: ProyectoComunitarioFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value === 'string' && value) {
          formData.append(key, value);
        }
      });
     
      const normalizedZone = normalizeZoneName(data.zone);
      formData.set('zone', normalizedZone);
      formData.set('authorId', data.authorId);
      
      const response = await onSubmit(formData);
      
      if (response && response.zone && response.slug) {
        const redirectUrl = await getProjectRedirectUrl(response.zone, response.slug);
        
        toast({
          title: isEditing ? 'Proyecto actualizado' : 'Proyecto creado',
          description: isEditing
            ? 'El proyecto se ha actualizado exitosamente.'
            : 'El proyecto se ha creado exitosamente.',
        });

        redirectFunction(redirectUrl);
      } else {
        throw new Error('No se pudo obtener la información necesaria para la redirección');
      }
    } catch (error) {
      console.error(isEditing ? 'Error al actualizar el proyecto:' : 'Error al crear el proyecto:', error);
      setError(isEditing
        ? 'Hubo un error al actualizar el proyecto. Por favor, intente de nuevo.'
        : 'Hubo un error al crear el proyecto. Por favor, intente de nuevo.');
      toast({
        title: 'Error',
        description: isEditing
          ? 'Hubo un error al actualizar el proyecto. Por favor, intente de nuevo.'
          : 'Hubo un error al crear el proyecto. Por favor, intente de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    handleSubmit,
    isLoading,
    error,
    isEditing
  };
};