// app/admin/dashboard/content/page.tsx
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Proyectos Comunitarios</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/admin/dashboard/content/view">Ver Proyectos</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/dashboard/content/create">Crear Proyecto</Link>
        </Button>
      </div>
    </div>
  );
}