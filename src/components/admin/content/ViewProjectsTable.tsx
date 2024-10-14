'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Proyecto } from '@/types/blog';
import {User} from '@/types/user';

interface ProyectoConAutor extends Proyecto {
  author: Pick<User, 'name' | 'email'>;
}

export function ViewProjectsTable() {
  const [projects, setProjects] = useState<ProyectoConAutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log('ViewProjectsTable montado');
    fetchProjects();
  }, []);


  const fetchProjects = async () => {
    console.log('Iniciando fetchProjects');
    try {
      setLoading(true);
      const response = await fetch('/api/projects/list');
      console.log('Respuesta de API recibida:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Datos de proyectos recibidos:', data);
      setProjects(data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener proyectos:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este proyecto?')) {
      try {
        const response = await fetch(`/api/projects/delete?id=${id}`, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error('Error al eliminar el proyecto');
        }
        await fetchProjects(); // Actualizar la lista
      } catch (error) {
        console.error('Error al eliminar el proyecto:', error);
      }
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/dashboard/content/view/edit/${id}`);
  };

  if (loading) return <div>Cargando proyectos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (projects.length === 0) return <div>No hay proyectos para mostrar.</div>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Zona</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead>Fecha de Creación</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.title}</TableCell>
            <TableCell>{project.zone}</TableCell>
            <TableCell>{project.author.name}</TableCell>
            <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button size="sm" className="mr-2" onClick={() => handleEdit(project.id)}>
                Editar
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                Eliminar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}