"use client"

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@prisma/client'
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
  const [showInactiveUsers, setShowInactiveUsers] = useState(false)

  useEffect(() => {
    if (session?.user?.role === "ADMIN") {
      fetchUsers()
    }
  }, [session, showInactiveUsers])

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/users')
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      setUsers(data.users)
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
      const response = await fetch(`/api/users?id=${user.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete user')
      }
      fetchUsers()
    } catch (error: any) {
      setError(`Failed to delete user. Error: ${error.message}`)
    }
  }

  const handleReactivateUser = async (user: ExtendedUser) => {
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user.id, isActive: true }),
      })
      if (!response.ok) {
        throw new Error('Failed to reactivate user')
      }
      fetchUsers()
    } catch (error: any) {
      setError(`Failed to reactivate user. Error: ${error.message}`)
    }
  }

  const handleSubmitUser = async (userData: UserCreateInput | UserUpdateInput) => {
    try {
      const method = editingUser ? 'PUT' : 'POST'
      const body = editingUser ? JSON.stringify({ id: editingUser.id, ...userData }) : JSON.stringify(userData)
      const response = await fetch('/api/users', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
      if (!response.ok) {
        throw new Error('Failed to submit user')
      }
      setIsAddingUser(false)
      setEditingUser(null)
      setError(null)
      fetchUsers()
    } catch (error: any) {
      setError(`Failed to submit user. Error: ${error.message}`)
    }
  }

  const handleCancelForm = () => {
    setIsAddingUser(false)
    setEditingUser(null)
  }

  const handleRoleChange = async (userId: string, newRole: "USER" | "ADMIN") => {
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId, role: newRole }),
      })
      if (!response.ok) {
        throw new Error('Failed to update user role')
      }
      fetchUsers()
    } catch (error: any) {
      setError(`Failed to update user role. Error: ${error.message}`)
    }
  }

  const toggleShowInactiveUsers = () => {
    setShowInactiveUsers(!showInactiveUsers)
  }

  if (status === "loading") {
    return <div className="text-center py-10">Loading...</div>
  }

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
          <div className="flex justify-between items-center">
            <Button onClick={handleAddUser}>Add New User</Button>
            <Button onClick={toggleShowInactiveUsers}>
              {showInactiveUsers ? "Hide Inactive Users" : "Show Inactive Users"}
            </Button>
          </div>
          <UserList
            users={users.filter(user => showInactiveUsers || user.isActive)}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onAdd={handleAddUser}
            onRoleChange={handleRoleChange}
            onReactivate={handleReactivateUser}
            showInactiveUsers={showInactiveUsers}
          />
        </>
      )}
    </div>
  )
}