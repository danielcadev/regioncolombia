// src/app/admin/dashboard/content/create/page.tsx

import { auth } from "@/lib/auth"
import CreateProjectForm from "@/components/admin/content/CreateProjectForm"
import { User } from "@/types/user"

export default async function CreateProjectPage() {
  const session = await auth()
 
  if (!session?.user) {
    return <div>Acceso no autorizado</div>
  }

  // Asegúrate de que al menos id, name y email estén presentes
  const user: Partial<User> = {
    id: session.user.id,
    name: session.user.name || null,
    email: session.user.email || null,
    // Añade aquí otras propiedades si están disponibles en session.user
  };

  return <CreateProjectForm user={user} />
}