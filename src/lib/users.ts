// lib/users.ts
import { User, UserCreateInput, UserUpdateInput } from '@/types/user'

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error('Error al obtener usuarios')
  }
  const data = await response.json()
  return data.users
}

export async function addUser(userData: UserCreateInput): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error('Error al agregar usuario')
  }
  return response.json()
}

export async function updateUser(userData: UserUpdateInput): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error('Error al actualizar usuario')
  }
  return response.json()
}

export async function deleteUser(userId: string): Promise<void> {
  const response = await fetch(`/api/users?id=${userId}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Error al eliminar usuario')
  }
}

export async function reactivateUser(userId: string): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: userId, isActive: true }),
  })
  if (!response.ok) {
    throw new Error('Error al reactivar usuario')
  }
  return response.json()
}

export async function changeUserRole(userId: string, newRole: "USER" | "ADMIN"): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: userId, role: newRole }),
  })
  if (!response.ok) {
    throw new Error('Error al actualizar el rol del usuario')
  }
  return response.json()
}


// User form submit handler

export async function handleUserSubmit(
  user: User | undefined,
  data: {
    name: string;
    email: string;
    password?: string;
    role: "USER" | "ADMIN";
  }
): Promise<User> {
  let submitData: UserCreateInput | UserUpdateInput;
  
  if (user) {
    // Si estamos editando un usuario existente
    submitData = {
      id: user.id,
      name: data.name,
      email: data.email,
      role: data.role,
    } as UserUpdateInput;
    
    // Solo incluir la contraseña si se proporciona una nueva
    if (data.password && data.password.trim() !== '') {
      submitData.password = data.password;
    }
  } else {
    // Si estamos creando un nuevo usuario
    if (!data.password || data.password.trim() === '') {
      throw new Error('La contraseña es requerida para nuevos usuarios');
    }
    
    submitData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    } as UserCreateInput;
  }

  const response = await fetch('/api/users', {
    method: user ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submitData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Error al enviar usuario');
  }

  return response.json();
}