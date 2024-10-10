// /app/admin/dashboard/page.tsx
import React from 'react';
import { auth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ImageIcon, FileText, Settings } from "lucide-react";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardCard = ({ title, icon: Icon, link }: { title: string; icon: React.ElementType; link: string }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-lg font-bold">{title}</CardTitle>
      <Icon className="h-6 w-6 text-primary" />
    </CardHeader>
    <CardContent>
      <Link href={link}>
        <Button className="w-full mt-4">Ver {title}</Button>
      </Link>
    </CardContent>
  </Card>
);

export default async function DashboardPage() {
  const session = await auth();
 
  if (!session) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Acceso Denegado</h1>
        <p>Debes iniciar sesión para ver esta página.</p>
      </div>
    );
  }

  const isAdmin = session.user?.role === 'ADMIN';

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Panel de Control</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Acciones Rápidas</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Seleccionar Acción</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isAdmin && <DropdownMenuItem>Gestionar Usuarios</DropdownMenuItem>}
            <DropdownMenuItem>Ver Contenido</DropdownMenuItem>
            {isAdmin && <DropdownMenuItem>Gestionar Multimedia</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
     
      <div className="grid gap-6 md:grid-cols-3">
        {isAdmin && <DashboardCard title="Usuarios" icon={Users} link="/admin/dashboard/users" />}
        <DashboardCard title="Contenido" icon={FileText} link="/admin/dashboard/content" />
        {isAdmin && <DashboardCard title="Multimedia" icon={ImageIcon} link="/admin/dashboard/media" />}
        <DashboardCard title="Configuración" icon={Settings} link="/admin/dashboard/settings" />
      </div>
     
    </div>
  );
}