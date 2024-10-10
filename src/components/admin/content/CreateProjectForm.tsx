// components/admin/content/CreateProjectForm.tsx

"use client"

import { ProjectForm } from '@/components/admin/content/ProjectForm';
import { useCreateProject } from '@/hooks/useCreateProject';
import { User } from '@/types/user';
import { ProyectoComunitario } from '@/types/blog';

interface CreateProjectFormProps {
  user: Partial<User>;
}

export default function CreateProjectForm({ user }: CreateProjectFormProps) {
  const { error, handleCreateProject, extendedUser } = useCreateProject(user as User);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h1>
      <ProjectForm
        onSubmit={handleCreateProject}
        user={extendedUser}
      />
    </div>
  );
}