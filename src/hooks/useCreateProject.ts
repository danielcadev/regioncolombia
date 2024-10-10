// hooks/useCreateProject.ts

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/lib/projects';
import { User } from '@/types/user';
import { ProyectoComunitario, ExtendedUser } from '@/types/blog';

export function useCreateProject(user: User) {
  const [error, setError] = useState<string | null>(null);

  const handleCreateProject = async (formData: FormData): Promise<ProyectoComunitario> => {
    try {
      const newProject = await createProject(formData);
      return newProject;
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      setError('Error al crear el proyecto');
      throw error;
    }
  };

  const extendedUser: ExtendedUser = {
    ...user,
    project: null
  };

  return {
    error,
    handleCreateProject,
    extendedUser
  };
}