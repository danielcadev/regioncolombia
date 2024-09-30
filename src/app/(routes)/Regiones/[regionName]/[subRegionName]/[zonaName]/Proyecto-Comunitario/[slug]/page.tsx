import { notFound } from 'next/navigation';
import { fetchProyectoDetails } from '@/lib/projects';
import ProyectoComunitarioDetails from '@/components/Regiones/ProyectoComunitarioDetails';
import { ProyectoComunitario } from '@/types/blog';
import { normalizeZoneName } from '@/lib/utils';

async function getProyectoData(slug: string, zonaName: string): Promise<ProyectoComunitario | null> {
  try {
    const proyecto = await fetchProyectoDetails(slug);
    
    if (!proyecto) {
      console.error('Proyecto no encontrado');
      return null;
    }

    // Normaliza los nombres para la comparación
    const normalizedZonaName = normalizeZoneName(zonaName);
    const normalizedProyectoZona = normalizeZoneName(proyecto.zona);

    // Compara la zona
    if (normalizedProyectoZona !== normalizedZonaName) {
      console.error('Proyecto no coincide con la zona especificada');
      return null;
    }
   
    return proyecto;
  } catch (error) {
    console.error('Error fetching proyecto detalle:', error);
    return null;
  }
}

export default async function ProyectoComunitarioPage({
  params
}: {
  params: { slug: string; regionName: string; subRegionName: string; zonaName: string; }
}) {
  const { slug, zonaName } = params;
  const proyecto = await getProyectoData(slug, zonaName);
 
  if (!proyecto) {
    notFound();
  }

  return <ProyectoComunitarioDetails proyecto={proyecto} />;
}