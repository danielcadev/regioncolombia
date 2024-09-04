import { ProyectoComunitario, StrapiResponse } from "@/types/blog";
import { normalizeZoneName } from '@/lib/utils';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

function normalizeImageData(imageData: any) {
  if (Array.isArray(imageData?.data)) {
    return imageData.data[0]; // Retorna el primer elemento si es un array
  }
  return imageData?.data; // Retorna el objeto directamente si no es un array
}

export async function fetchProyectosComunitarios(zonaName: string): Promise<ProyectoComunitario[]> {
    if (!strapiUrl) {
      throw new Error('NEXT_PUBLIC_STRAPI_URL is not defined');
    }
    const normalizedZonaName = normalizeZoneName(zonaName);
    const url = new URL(`${strapiUrl}/api/Proyectos-Comunitarios`);
    url.searchParams.append('populate', '*');
    url.searchParams.append('filters[zona][$eq]', normalizedZonaName);
   
    console.log('URL completa para fetch de proyectos:', url.toString());
  
    const res = await fetch(url.toString(), {
      next: {
        revalidate: 3600,
        tags: ['proyectos-comunitarios']
      }
    });
   
    if (!res.ok) {
      throw new Error('Failed to fetch proyectos comunitarios');
    }
   
    const data = await res.json();
    console.log('Respuesta completa de Strapi:', JSON.stringify(data, null, 2));
    return data.data;
  }
  
export async function fetchProyectoDetails(
  slug: string
): Promise<ProyectoComunitario | null> {
  if (!strapiUrl) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
  }
  const url = new URL(`${strapiUrl}/api/Proyectos-Comunitarios`);
  url.searchParams.append("filters[Slug][$eq]", slug);
  url.searchParams.append("populate", "*");
  console.log("Full URL being fetched:", url.toString());

  const res = await fetch(url.toString(), {
    next: {
      revalidate: 3600,
      tags: ["proyectos-comunitario"],
    },
  });

  if (!res.ok) {
    console.error("Strapi response:", await res.text());
    throw new Error("Failed to fetch proyecto details");
  }

  const data = await res.json();
  console.log("Proyecto details:", data);

  if (data.data && data.data.length > 0) {
    const proyecto = data.data[0];

    // Normalizar los datos de imagen
    proyecto.attributes.MainImage = normalizeImageData(
      proyecto.attributes.MainImage
    );
    proyecto.attributes.Image1 = normalizeImageData(proyecto.attributes.Image1);
    proyecto.attributes.Image2 = normalizeImageData(proyecto.attributes.Image2);

    return proyecto;
  }

  return null;
}
