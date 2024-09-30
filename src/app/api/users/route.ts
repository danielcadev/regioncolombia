import { NextResponse } from 'next/server'
import { getUsers, createUser, updateUser, deleteUser, changeUserRole, reactivateUser } from '@/lib/userQueries'
import { auth } from "@/lib/auth"

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
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }
    const data = await request.json()
    const user = await createUser(data)
    return NextResponse.json({ user })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
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