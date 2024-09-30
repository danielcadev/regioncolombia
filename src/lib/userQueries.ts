import { prisma } from './prisma'
import { hashPassword } from '@/lib/auth'
import { User, Prisma } from '@prisma/client'

export async function getUsers() {
  return await prisma.user.findMany({
    include: {
      accounts: true,
      sessions: true,
      Authenticator: true,
      projects: true
    },
    where: {
      isActive: true  // Solo obtener usuarios activos
    }
  })
}

export async function createUser(data: Prisma.UserCreateInput) {
  const hashedPassword = data.password ? await hashPassword(data.password) : null
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      isActive: true,  // Asegurarse de que el nuevo usuario esté activo
      deletedAt: null
    }
  })
}

export async function updateUser(id: string, data: Prisma.UserUpdateInput) {
  const updateData: Prisma.UserUpdateInput = { ...data }
  if (data.password) {
    updateData.password = await hashPassword(data.password as string)
  }
  return await prisma.user.update({
    where: { id },
    data: updateData
  })
}

export async function deleteUser(id: string) {
  // Implementamos deleteUser como un soft delete
  return await softDeleteUser(id)
}

export async function softDeleteUser(id: string) {
  return await prisma.user.update({
    where: { id },
    data: {
      isActive: false,
      deletedAt: new Date(),
      email: `deleted_${id}@example.com`
    }
  })
}

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    include: {
      accounts: true,
      sessions: true,
      Authenticator: true,
      projects: true
    }
  })
}

export async function reactivateUser(id: string, email: string) {
  return await prisma.user.update({
    where: { id },
    data: {
      isActive: true,
      deletedAt: null,
      email: email
    }
  })
}

export async function changeUserRole(userId: string, newRole: "USER" | "ADMIN") {
  return await prisma.user.update({
    where: { id: userId },
    data: { role: newRole }
  })
}