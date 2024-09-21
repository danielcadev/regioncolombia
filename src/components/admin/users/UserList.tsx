"use client"

import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, UserPlus, Check, X } from 'lucide-react'
import { User } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ExtendedUser = User & {
  role: 'USER' | 'ADMIN'
}

interface UserListProps {
  users: ExtendedUser[]
  onEdit: (user: ExtendedUser) => void
  onDelete: (user: ExtendedUser) => Promise<void>
  onAdd: () => void
  onRoleChange: (userId: string, newRole: "USER" | "ADMIN") => Promise<void>
}

export function UserList({ users, onEdit, onDelete, onAdd, onRoleChange }: UserListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [editingUserId, setEditingUserId] = useState<string | null>(null)
  const [editingRole, setEditingRole] = useState<"USER" | "ADMIN" | null>(null)

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRoleChange = async (userId: string, newRole: "USER" | "ADMIN") => {
    setEditingUserId(userId)
    setEditingRole(newRole)
  }

  const confirmRoleChange = async (userId: string) => {
    if (editingRole) {
      await onRoleChange(userId, editingRole)
      setEditingUserId(null)
      setEditingRole(null)
    }
  }

  const cancelRoleChange = () => {
    setEditingUserId(null)
    setEditingRole(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>User Management</span>
          <Button onClick={onAdd} className="ml-4">
            <UserPlus className="mr-2 h-4 w-4" /> Add New User
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Input
            className="max-w-sm"
            placeholder="Search users..."
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {editingUserId === user.id ? (
                      <div className="flex items-center space-x-2">
                        <Select
                          value={editingRole || user.role}
                          onValueChange={(newRole) => handleRoleChange(user.id, newRole as "USER" | "ADMIN")}
                        >
                          <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USER">User</SelectItem>
                            <SelectItem value="ADMIN">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="ghost" size="icon" onClick={() => confirmRoleChange(user.id)}>
                          <Check className="h-4 w-4 text-green-500" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={cancelRoleChange}>
                          <X className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ) : (
                      <span className={user.role === 'ADMIN' ? 'text-blue-600 font-semibold' : ''}>
                        {user.role}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => setEditingUserId(user.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(user)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">No users found</div>
        )}
      </CardContent>
    </Card>
  )
}