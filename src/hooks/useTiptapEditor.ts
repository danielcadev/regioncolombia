// hooks/useProjectForm.ts
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ProyectoComunitario, ExtendedUser, ProyectoComunitarioFormData } from '@/types/blog';

// Definimos el esquema de validación con Zod
const projectSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  slug: z.string().min(1, 'El slug es requerido'),
  zone: z.string().min(1, 'La zona es requerida'),
  authorId: z.string(),
  mainImage: z.instanceof(File).optional(),
  content1: z.string().min(1, 'El contenido 1 es requerido'),
  image1: z.instanceof(File).optional(),
  content2: z.string().optional(),
  image2: z.instanceof(File).optional(),
  content3: z.string().optional(),
});

export const useProjectForm = (
  onSubmit: (data: ProyectoComunitarioFormData) => Promise<ProyectoComunitario>,
  user: ExtendedUser,
  onSuccess: (url: string) => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isEditing = !!user.project;

  const form = useForm<ProyectoComunitarioFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: user.project?.title || '',
      slug: user.project?.slug || '',
      zone: user.project?.zone || '',
      authorId: user.id,
      content1: user.project?.content1 || '',
      content2: user.project?.content2 || '',
      content3: user.project?.content3 || '',
    },
  });

  const handleSubmit = async (data: ProyectoComunitarioFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await onSubmit(data);
      onSuccess(`/proyectos/${result.slug}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ha ocurrido un error');
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleSubmit: form.handleSubmit(handleSubmit), isLoading, error, isEditing };
};