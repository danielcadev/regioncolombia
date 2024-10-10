"use client"

import { ProjectForm } from '@/components/admin/content/ProjectForm';
import { updateProject, getProjectRedirectUrl } from '@/lib/projects';
import { ProyectoComunitario, ExtendedUser } from '@/types/blog';
import { User } from '@/types/user';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface EditProjectFormProps {
  initialProject: ProyectoComunitario;
  initialUser: User;
}

export default function EditProjectForm({ initialProject, initialUser }: EditProjectFormProps) {
  const [project, setProject] = useState(initialProject);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleUpdateProject = async (formData: FormData): Promise<ProyectoComunitario> => {
    try {
      if (!formData.get('zone')) {
        formData.set('zone', project.zone);
      }

      const updatedProject = await updateProject(project.id, formData);
      setProject(updatedProject);
      const redirectUrl = await getProjectRedirectUrl(updatedProject.zone, updatedProject.slug);
      router.push(redirectUrl);
      return updatedProject;
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
      setError('Error al actualizar el proyecto');
      throw error;
    }
  };

  if (error) return <div>Error: {error}</div>;

  const extendedUser: ExtendedUser = {
    ...initialUser,
    project: project
  };

  return (
    <ProjectForm
      onSubmit={handleUpdateProject}
      user={extendedUser}
    />
  );
}