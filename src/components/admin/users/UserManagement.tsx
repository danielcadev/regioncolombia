// components/admin/users/UserManagement.tsx
"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Session } from "next-auth"
import { useUsers } from '@/hooks/useUsers'
import { UserForm } from '@/components/admin/users/UserForm'
import { UserList } from '@/components/admin/users/UserList'
import { User } from '@/types/user'

interface UserManagementProps {
  initialSession: Session | null
}

export default function UserManagement({ initialSession }: UserManagementProps) {
  const [isAddingUser, setIsAddingUser] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const {
    users,
    isLoading,
    error,
    showInactiveUsers,
    searchTerm,
    setSearchTerm,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    handleRoleChange,
    toggleShowInactiveUsers
  } = useUsers(initialSession)

  const handleSubmit = async (data: any) => {
    if (editingUser) {
      await handleUpdateUser({ ...data, id: editingUser.id })
    } else {
      await handleAddUser(data)
    }
    setIsAddingUser(false)
    setEditingUser(null)
  }

  const handleCancelForm = () => {
    setIsAddingUser(false)
    setEditingUser(null)
  }

  const handleAddNewUser = () => setIsAddingUser(true)

  if (!initialSession || initialSession.user.role !== "ADMIN") {
    return (
      <Alert variant="destructive">
        <AlertDescription>Acceso Denegado. Se requieren derechos de administrador.</AlertDescription>
      </Alert>
    )
  }

  if (isLoading) {
    return <div className="text-center py-10">Cargando usuarios...</div>
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Gestionar Usuarios</h1>
     
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
     
      {(isAddingUser || editingUser) ? (
        <UserForm
          user={editingUser || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancelForm}
        />
      ) : (
        <>
          <div className="flex justify-between items-center">
            <Button onClick={toggleShowInactiveUsers}>
              {showInactiveUsers ? "Ocultar Usuarios Inactivos" : "Mostrar Usuarios Inactivos"}
            </Button>
          </div>
          <UserList
            users={users}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onEdit={setEditingUser}
            onAdd={handleAddNewUser}
            onDelete={handleDeleteUser}
            onRoleChange={handleRoleChange}
            showInactiveUsers={showInactiveUsers}
          />
        </>
      )}
    </div>
  )
}