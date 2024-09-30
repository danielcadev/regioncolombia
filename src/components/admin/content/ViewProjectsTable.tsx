'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Proyecto, User } from '@/types/blog';

interface ProyectoConAutor extends Proyecto {
  author: Pick<User, 'name' | 'email'>;
}

export function ViewProjectsTable() {
  const [projects, setProjects] = useState<ProyectoConAutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects/list');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`/api/projects/delete?id=${id}`, { method: 'DELETE' });
        if (!response.ok) {
          throw new Error('Failed to delete project');
        }
        await fetchProjects(); // Refresh the list
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Zone</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.title}</TableCell>
            <TableCell>{project.zona}</TableCell>
            <TableCell>{project.author.name}</TableCell>
            <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button asChild size="sm" className="mr-2">
                <Link href={`/admin/dashboard/content/edit/${project.id}`}>Edit</Link>
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
