import { createUrl, normalizeZoneName } from "@/lib/utils";
import { getRegionInfoByZona } from "@/lib/regionUtils";
import { ProyectoComunitario } from "@/types/blog";
import { prisma } from '@/lib/prisma';

export async function createProject(formData: FormData): Promise<ProyectoComunitario> {
  const response = await fetch('/api/projects/create', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create project');
  }

  const data = await response.json();
  
  // Verificar que todos los campos necesarios estén presentes
  const requiredFields = ['id', 'title', 'slug', 'zone', 'content1', 'mainImage', 'authorId'];
  for (const field of requiredFields) {
    if (!(field in data)) {
      throw new Error(`La respuesta del servidor no incluye el campo requerido: ${field}`);
    }
  }

  return data as ProyectoComunitario;
}

export async function updateProject(id: string, formData: FormData): Promise<ProyectoComunitario> {
  // Crear una nueva instancia de FormData
  const updatedFormData = new FormData();
  
  // Copiar todos los campos del formData original
  for (const [key, value] of formData.entries()) {
    updatedFormData.append(key, value);
  }
  
  // Añadir o actualizar el id en el FormData
  updatedFormData.set('id', id);

  const response = await fetch(`/api/projects/edit`, {
    method: 'PUT',
    body: updatedFormData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to update project');
  }

  const updatedProject = await response.json();
  return updatedProject as ProyectoComunitario;
}

export async function fetchProject(id: string): Promise<ProyectoComunitario> {
  try {
    console.log(`Intentando obtener el proyecto con ID: ${id}`);
    const project = await prisma.proyectoComunitario.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!project) {
      console.log(`No se encontró ningún proyecto con ID: ${id}`);
      throw new Error('Proyecto no encontrado');
    }

    // Asegurarse de que zona tenga un valor válido
    const zone = project.zona || 'default-zone';

    // Convertimos el resultado a ProyectoComunitario, manejando posibles valores null
    const proyectoComunitario: ProyectoComunitario = {
      id: project.id,
      title: project.title || '',
      slug: project.slug || '',
      zone: zone,  // Usamos el valor de zone que hemos validado
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      mainImage: project.mainImage || undefined,
      content1: project.content1 || '',
      image1: project.image1 || undefined,
      content2: project.content2 || '',
      image2: project.image2 || undefined,
      content3: project.content3 || '',
      author: {
        id: project.author.id,
        name: project.author.name || '',
        email: project.author.email || '',
      },
      authorId: project.authorId,
    };

    console.log(`Proyecto encontrado:`, proyectoComunitario);
    return proyectoComunitario;
  } catch (error) {
    console.error('Error al obtener el proyecto:', error);
    throw error;
  }
}

export async function getProjectRedirectUrl(zone: string, slug: string): Promise<string> {
  const normalizedZone = normalizeZoneName(zone);
  try {
    const regionInfo = await getRegionInfoByZona(normalizedZone);
    return `/Regiones/${createUrl(regionInfo.regionName)}/${createUrl(regionInfo.subRegionName)}/${createUrl(normalizedZone)}/Proyecto-Comunitario/${createUrl(slug)}`;
  } catch (error) {
    console.error('Error getting region info:', error);
    return `/Regiones/${createUrl(normalizedZone)}/Proyecto-Comunitario/${createUrl(slug)}`;
  }
}

function cleanFormData(formData: FormData): FormData {
  const cleanedFormData = new FormData();
  for (const [key, value] of formData.entries()) {
    if (value instanceof File && value.size > 0) {
      cleanedFormData.append(key, value);
    } else if (typeof value === 'string' && value.trim() !== '') {
      if (key === 'zona' || key === 'zone') {
        const normalizedZone = normalizeZoneName(value);
        cleanedFormData.append('zone', normalizedZone);
      } else {
        cleanedFormData.append(key, value);
      }
    }
  }
  
  // Eliminamos la adición de authorName aquí, ya que usaremos authorId

  return cleanedFormData;
}
  

export async function fetchProyectoDetails(slug: string): Promise<ProyectoComunitario | null> {
  try {
    console.log(`Intentando obtener el proyecto con slug: ${slug}`);
    const project = await prisma.proyectoComunitario.findUnique({
      where: { slug },
      include: {
        author: true,
      },
    });

    if (!project) {
      console.log(`No se encontró ningún proyecto con slug: ${slug}`);
      return null;
    }

    // Adaptamos los datos para que coincidan con ProyectoComunitario
    const adaptedProject: ProyectoComunitario = {
      id: project.id,
      title: project.title ?? '',
      slug: project.slug ?? '',
      zone: project.zona ?? '',  // Cambiado de zona a zone
      mainImage: project.mainImage ?? undefined,
      content1: project.content1 ?? '',
      image1: project.image1 ?? undefined,
      content2: project.content2 ?? undefined,
      image2: project.image2 ?? undefined,
      content3: project.content3 ?? undefined,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      author: {
        id: project.author.id,
        name: project.author.name ?? '',
        email: project.author.email,
      },
      authorId: project.authorId,
    };

    console.log(`Proyecto adaptado:`, adaptedProject);
    return adaptedProject;
  } catch (error) {
    console.error('Error al obtener los detalles del proyecto:', error);
    throw error;
  }
}