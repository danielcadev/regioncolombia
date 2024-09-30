// src/app/admin/dashboard/content/create/page.tsx
import { CreateProjectForm } from "@/components/admin/content/CreateProjectForm";

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
      <CreateProjectForm />
    </div>
  );
}