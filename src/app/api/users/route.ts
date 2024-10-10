import { NextResponse } from 'next/server'
import { getUsers, createUser, updateUser, deleteUser, changeUserRole, reactivateUser } from '@/lib/userQueries'
import { auth } from "@/lib/auth"

import * as z from "zod"
const userSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  role: z.enum(["USER", "ADMIN"])
})

export async function GET() {
  try {
    const session = await auth()
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }
    const users = await getUsers()
    return NextResponse.json({ users })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 })
    }

    const data = await request.json()
    
    // Validar los datos de entrada
    const validationResult = userSchema.safeParse(data)
    if (!validationResult.success) {
      return NextResponse.json({ error: "Datos de usuario inválidos", details: validationResult.error.errors }, { status: 400 })
    }

    const user = await createUser(validationResult.data)
    return NextResponse.json({ user }, { status: 201 })
  } catch (error: any) {
    console.error("Error en POST /api/users:", error)
    if (error.code === 'P2002') {
      return NextResponse.json({ error: "El correo electrónico ya está en uso" }, { status: 409 })
    }
    return NextResponse.json({ error: "Error interno del servidor", details: error.message }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const session = await auth()
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }
    const data = await request.json()
    const { id, ...updateData } = data
    const user = await updateUser(id, updateData)
    return NextResponse.json({ user })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth()
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 })
    }
    await deleteUser(id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}