import { PrismaClient } from '@prisma/client';
import { ProyectoComunitario } from '@/types/blog';

const prisma = new PrismaClient();

export async function createProject(formData: FormData) {
  console.log("createProject called with data:", Object.fromEntries(formData));
  try {
    const response = await fetch('/api/projects/create', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server responded with error:", errorData);
      throw new Error(errorData.message || 'Failed to create project');
    }
    const project = await response.json();
    console.log("Project created successfully:", project);
    return project;
  } catch (error) {
    console.error("Error in createProject:", error);
    throw error;
  }
}

export async function fetchProyectoDetails(slug: string): Promise<ProyectoComunitario | null> {
  try {
    const proyecto = await prisma.proyectoComunitario.findUnique({
      where: { slug },
      include: { author: true },
    });

    if (!proyecto || !proyecto.author) {
      return null;
    }

    return {
      id: proyecto.id,
      title: proyecto.title,
      slug: proyecto.slug,
      zona: proyecto.zona,
      authorName: proyecto.author.name || '',
      mainImage: proyecto.mainImage || undefined,
      content1: proyecto.content1 || undefined,
      image1: proyecto.image1 || undefined,
      content2: proyecto.content2 || undefined,
      image2: proyecto.image2 || undefined,
      content3: proyecto.content3 || undefined,
    };
  } catch (error) {
    console.error('Error fetching proyecto details:', error);
    return null;
  }
}