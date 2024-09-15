import { ProyectosComunitario } from '@/payload-types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

function normalizeString(str: string): string {
  const normalized = str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]+/g, " ")
    .trim();
  
  const result = normalized.split(/\s+/).map(word => {
    const lowercaseWords = ['de', 'del', 'la', 'las', 'los', 'y', 'e', 'o', 'u'];
    if (lowercaseWords.includes(word)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join("-");
  
  return result;
}

export async function fetchProyectosComunitariosByZona(zonaName: string): Promise<ProyectosComunitario[]> {
  const normalizedZoneName = normalizeString(zonaName);
  console.log(`Buscando proyectos para la zona: ${normalizedZoneName}`);
  
  try {
    const url = `${API_URL}/api/proyectos-comunitarios`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   
    const data = await response.json();
    const filteredProyectos = data.docs.filter((proyecto: ProyectosComunitario) => {
      const projectZone = normalizeString(proyecto.Zone || '');
      return projectZone === normalizedZoneName;
    });

    console.log(`Se encontraron ${filteredProyectos.length} proyectos para la zona ${normalizedZoneName}`);
    return filteredProyectos;
  } catch (error) {
    console.error('Error al obtener proyectos comunitarios:', error);
    return [];
  }
}

export async function fetchProyectoComunitarioBySlug(slug: string): Promise<ProyectosComunitario | null> {
  try {
    const queryParams = new URLSearchParams({
      where: JSON.stringify({
        slug: {
          equals: slug,
        },
      }),
    }).toString();
    const url = `${API_URL}/api/proyectos-comunitarios?${queryParams}`;
   
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   
    const data = await response.json();
   
    if (data.docs && data.docs.length > 0) {
      return data.docs[0] as ProyectosComunitario;
    } else {
      console.log(`No se encontró ningún proyecto con el slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener proyecto comunitario por slug:', error);
    return null;
  }
}