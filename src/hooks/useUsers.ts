// hooks/useUsers.ts
import { useState, useEffect, useMemo } from 'react'
import { User, UserCreateInput, UserUpdateInput } from '@/types/user'
import { fetchUsers, addUser, updateUser, deleteUser, changeUserRole } from '@/lib/users'
import { useToast } from "@/hooks/use-toast"

export function useUsers(initialSession: any) {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showInactiveUsers, setShowInactiveUsers] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    if (initialSession?.user?.role === "ADMIN") {
      loadUsers()
    }
  }, [initialSession])

  const loadUsers = async () => {
    try {
      setIsLoading(true)
      const fetchedUsers = await fetchUsers()
      setUsers(fetchedUsers)
      setError(null)
    } catch (error: any) {
      setError(`Error al obtener usuarios. Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddUser = async (userData: UserCreateInput) => {
    try {
      await addUser(userData)
      toast({ title: "Usuario agregado", description: "El usuario ha sido agregado exitosamente." })
      await loadUsers()
    } catch (error: any) {
      toast({ title: "Error", description: `Error al agregar usuario: ${error.message}`, variant: "destructive" })
    }
  }

  const handleUpdateUser = async (userData: UserUpdateInput) => {
    try {
      await updateUser(userData)
      toast({ title: "Usuario actualizado", description: "El usuario ha sido actualizado exitosamente." })
      await loadUsers()
    } catch (error: any) {
      toast({ title: "Error", description: `Error al actualizar usuario: ${error.message}`, variant: "destructive" })
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId)
      toast({ title: "Usuario eliminado", description: "El usuario ha sido eliminado exitosamente." })
      await loadUsers()
    } catch (error: any) {
      toast({ title: "Error", description: `Error al eliminar usuario: ${error.message}`, variant: "destructive" })
    }
  }

  const handleRoleChange = async (userId: string, newRole: "USER" | "ADMIN") => {
    try {
      await changeUserRole(userId, newRole)
      toast({ title: "Rol actualizado", description: "El rol del usuario ha sido actualizado exitosamente." })
      await loadUsers()
    } catch (error: any) {
      toast({ title: "Error", description: `Error al actualizar el rol: ${error.message}`, variant: "destructive" })
    }
  }

  const toggleShowInactiveUsers = () => {
    setShowInactiveUsers(!showInactiveUsers)
  }

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      (user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false) &&
      (showInactiveUsers || user.isActive)
    )
  }, [users, searchTerm, showInactiveUsers])

  return {
    users: filteredUsers,
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
  }
}