// components/admin/users/UserList.tsx
"use client"

import React from 'react'
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
import { Pencil, Trash2, UserPlus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from '@/types/user'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserListProps {
  users: User[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onEdit: (user: User) => void;
  onAdd: () => void;
  onDelete: (userId: string) => void;
  onRoleChange: (userId: string, newRole: "USER" | "ADMIN") => Promise<void>;
  showInactiveUsers: boolean;
}

export function UserList({ 
  users, 
  searchTerm,
  onSearchChange,
  onEdit, 
  onAdd, 
  onDelete,
  onRoleChange,
  showInactiveUsers 
}: UserListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Gestión de Usuarios</span>
          <Button onClick={onAdd} className="ml-4">
            <UserPlus className="mr-2 h-4 w-4" /> Agregar Nuevo Usuario
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Input
            className="max-w-sm"
            placeholder="Buscar usuarios..."
            type="search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Select
                      value={user.role}
                      onValueChange={(newRole) => onRoleChange(user.id, newRole as "USER" | "ADMIN")}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USER">Usuario</SelectItem>
                        <SelectItem value="ADMIN">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    {user.isActive ? (
                      <span className="text-green-600">Activo</span>
                    ) : (
                      <span className="text-red-600">Inactivo</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => onEdit(user)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(user.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {users.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">No se encontraron usuarios</div>
        )}
      </CardContent>
    </Card>
  )
}