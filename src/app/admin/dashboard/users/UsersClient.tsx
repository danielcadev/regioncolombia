"use client"

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@prisma/client'
import { getUsers, createUser, updateUser, deleteUser } from '@/lib/users'
import { UserList } from '@/components/admin/users/UserList'
import { UserForm } from '@/components/admin/users/UserForm'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UserCreateInput, UserUpdateInput } from '@/types'
import { Session } from "next-auth"

type ExtendedUser = User & { role: "USER" | "ADMIN" }

interface UsersClientProps {
  initialSession: Session | null
}

export default function UsersClient({ initialSession }: UsersClientProps) {
  const { session, status } = useAuth("ADMIN", initialSession)
  const [users, setUsers] = useState<ExtendedUser[]>([])
  const [isAddingUser, setIsAddingUser] = useState(false)
  const [editingUser, setEditingUser] = useState<ExtendedUser | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (session?.user?.role === "ADMIN") {
      fetchUsers()
    }
  }, [session])

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const fetchedUsers = await getUsers()
      setUsers(fetchedUsers.map(user => ({
        ...user,
        role: user.role as "USER" | "ADMIN"
      })))
      setError(null)
    } catch (error: any) {
      setError(`Failed to fetch users. Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }


  const handleAddUser = () => {
    setIsAddingUser(true)
    setEditingUser(null)
  }

  const handleEditUser = (user: ExtendedUser) => {
    setEditingUser(user)
    setIsAddingUser(false)
  }

  const handleDeleteUser = async (user: ExtendedUser) => {
    try {
      await deleteUser(user.id)
      setUsers(users.filter(u => u.id !== user.id))
    } catch (error: any) {
      setError(`Failed to delete user. Error: ${error.message}`)
    }
  }

  const handleSubmitUser = async (userData: UserCreateInput | UserUpdateInput) => {
    try {
      let updatedUser: ExtendedUser;
      if (editingUser) {
        const apiUser = await updateUser(editingUser.id, userData as UserUpdateInput)
        updatedUser = { ...apiUser, role: apiUser.role as "USER" | "ADMIN" }
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user))
      } else {
        const apiUser = await createUser(userData as UserCreateInput)
        updatedUser = { ...apiUser, role: apiUser.role as "USER" | "ADMIN" }
        setUsers([...users, updatedUser])
      }
      setIsAddingUser(false)
      setEditingUser(null)
      setError(null)
    } catch (error: any) {
      setError(`Failed to submit user. Error: ${error.message}`)
    }
  }

  const handleCancelForm = () => {
    setIsAddingUser(false)
    setEditingUser(null)
  }

  if (status === "loading") {
    return <div className="text-center py-10">Loading...</div>
  }

  // Cambiamos esta condición para usar solo el session
  if (!session || session.user.role !== "ADMIN") {
    return (
      <Alert variant="destructive">
        <AlertDescription>Access Denied. Admin rights required.</AlertDescription>
      </Alert>
    )
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading users...</div>
  }


  return (
    <div className="space-y-6 max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Manage Users</h1>
      
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {(isAddingUser || editingUser) ? (
        <UserForm
          user={editingUser || undefined}
          onSubmit={handleSubmitUser}
          onCancel={handleCancelForm}
        />
      ) : (
        <>
          <Button onClick={handleAddUser}>Add New User</Button>
          <UserList
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onAdd={handleAddUser}
          />
        </>
      )}
    </div>
  )
}