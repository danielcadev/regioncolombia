import { ViewProjectsTable } from '@/components/admin/content/ViewProjectsTable';

export default function ViewProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Ver proyectos</h1>
      <ViewProjectsTable />
    </div>
  );
}
