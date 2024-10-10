// src/app/admin/dashboard/content/view/edit/[id]/page.tsx
import { fetchProject } from '@/lib/projects';
import { auth } from "@/lib/auth";
import EditProjectForm from '@/components/admin/content/EditProjectForm';
import { redirect } from 'next/navigation';
import { User } from '@/types/user';

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const session = await auth();
 
  if (!session) {
    redirect('/api/auth/signin');
  }

  try {
    const project = await fetchProject(params.id);
   
    if (!project) {
      return <div>Proyecto no encontrado</div>;
    }

    // Asegúrate de que el usuario cumpla con el tipo User
    const user: User = {
      id: session.user.id,
      name: session.user.name ?? null,
      email: session.user.email ?? null,
      image: session.user.image ?? null,
      role: session.user.role as "USER" | "ADMIN" | undefined,  // Aseguramos que role sea del tipo correcto
    };

    return <EditProjectForm initialProject={project} initialUser={user} />;
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    return <div>Error al cargar el proyecto</div>;
  }
}