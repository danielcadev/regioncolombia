import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { auth , hashPassword } from "@/lib/auth"


const prisma = new PrismaClient()

interface UpdateUserData {
  name?: string;
  role?: string;
  password?: string;
}

export async function GET() {
  try {
    const session = await auth()
    const users = await prisma.user.findMany({
      include: {
        accounts: true
      }
    })
    let currentUser = users.find(user => user.email === session?.user?.email)
    if (session?.user && !currentUser) {
      currentUser = {
        id: 'session-user',
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || null,
        role: 'USER',
        emailVerified: null,
        password: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        accounts: []
      }
      users.push(currentUser)
    }
    return NextResponse.json({ users })
  } catch (error: any) {
    console.error('Error in GET /api/users:', error)
    return NextResponse.json({ error: 'Error fetching users', details: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const session = await auth()

    // Verificar si el usuario actual es un administrador
    if (session?.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Only administrators can create new users' }, { status: 403 })
    }

    // Si no se proporciona un rol, asignar 'USER' por defecto
    if (!data.role) {
      data.role = 'USER'
    }

    // Hash the password before storing
    const hashedPassword = data.password ? await hashPassword(data.password) : null

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      }
    })
    
    // Remove password from the response
    const { password, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword, { status: 201 })
  } catch (error: any) {
    console.error('Error in POST /api/users:', error)
    return NextResponse.json({ error: 'Error creating user', details: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    const session = await auth();

    // Verificar si el usuario actual es un administrador
    if (session?.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Only administrators can update user roles' }, { status: 403 })
    }

    let user;
    if (id === 'session-user') {
      if (!session?.user?.email) {
        return NextResponse.json({ error: 'No authenticated user' }, { status: 401 });
      }
      user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (!user) {
        user = await prisma.user.create({
          data: {
            name: data.name || session.user.name || '',
            email: session.user.email,
            image: session.user.image || null,
            role: 'USER', // Asignar siempre 'USER' para nuevos usuarios
            password: null,
          }
        });
      }
    } else {
      user = await prisma.user.findUnique({ where: { id } });
    }
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
   
    const updateData: UpdateUserData = {
      name: data.name,
      role: data.role,
    };
    // If a new password is provided, hash it
    if (data.password) {
      updateData.password = await hashPassword(data.password);
    }
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: updateData
    });
    // Remove password from the response
    const { password, ...userWithoutPassword } = updatedUser;
    return NextResponse.json(userWithoutPassword);
  } catch (error: any) {
    console.error('Error in PUT /api/users:', error);
    return NextResponse.json({ error: 'Error updating user', details: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth()
    // Verificar si el usuario actual es un administrador
    if (session?.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Only administrators can delete users' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }
    await prisma.user.delete({ where: { id } })
    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error: any) {
    console.error('Error in DELETE /api/users:', error)
    return NextResponse.json({ error: 'Error deleting user', details: error.message }, { status: 500 })
  }
}