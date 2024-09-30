"use client";

import { ProjectForm } from "@/components/admin/content/ProjectForm";
import { useRouter } from "next/navigation";
import { getRegionInfoByZona } from "@/lib/regionUtils";
import { normalizeZoneName } from "@/lib/utils";

export function CreateProjectForm() {
  const router = useRouter();

  const handleCreateProject = async (formData: FormData) => {
    const cleanedFormData = new FormData();
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        cleanedFormData.append(key, value);
      } else if (typeof value === 'string' && value.trim() !== '') {
        if (key === 'zone') {
          cleanedFormData.append(key, normalizeZoneName(value));
        } else {
          cleanedFormData.append(key, value);
        }
      }
    }

    try {
      const response = await fetch('/api/projects/create', {
        method: 'POST',
        body: cleanedFormData,
      });

      if (response.ok) {
        const project = await response.json();
        const normalizedZona = normalizeZoneName(project.zona);
       
        try {
          // Get region info
          const regionInfo = await getRegionInfoByZona(normalizedZona);
         
          // Construct the URL
          const url = `/Regiones/${encodeURIComponent(regionInfo.regionName)}/${encodeURIComponent(regionInfo.subRegionName)}/${encodeURIComponent(normalizedZona)}/Proyecto-Comunitario/${encodeURIComponent(project.slug)}`;
         
          router.push(url);
        } catch (error) {
          console.error('Error getting region info:', error);
          // Fallback to a simpler URL if region info is not found
          router.push(`/Regiones/${encodeURIComponent(normalizedZona)}/Proyecto-Comunitario/${encodeURIComponent(project.slug)}`);
        }
      } else {
        console.error('Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return <ProjectForm onSubmit={handleCreateProject} />;
}