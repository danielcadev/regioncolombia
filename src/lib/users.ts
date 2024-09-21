import { User } from '@prisma/client'
import { UserCreateInput, UserUpdateInput } from '@/types'
import { signIn } from '@/lib/auth'

export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }
  const data = await response.json();
  return data.users;
}

export async function createUser(data: UserCreateInput): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to create user')
  }

  const newUser = await response.json()

  // Authenticate the newly created user
  const result = await signIn('credentials', {
    redirect: false,
    email: data.email,
    password: data.password,
  })

  if (result?.error) {
    console.error('Error authenticating new user:', result.error)
    throw new Error('User created but failed to authenticate')
  }

  return newUser
}

export async function updateUser(id: string, data: UserUpdateInput): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update user: ${response.status}`);
  }
  
  return response.json();
}

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`/api/users?id=${id}`, { method: 'DELETE' })
  if (!response.ok) {
    throw new Error('Failed to delete user')
  }
}