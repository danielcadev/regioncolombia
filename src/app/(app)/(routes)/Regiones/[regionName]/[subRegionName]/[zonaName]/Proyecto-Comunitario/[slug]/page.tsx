import { notFound } from 'next/navigation';
import { fetchProyectoComunitarioBySlug } from '@/lib/payload-api'; // Asume que has creado esta función
import ProyectoComunitarioDetails from '@/components/Regiones/ProyectoComunitarioDetails';
import { ProyectosComunitario } from '@/payload-types';

async function getProyectoData(slug: string): Promise<ProyectosComunitario | null> {
  try {
    return await fetchProyectoComunitarioBySlug(slug);
  } catch (error) {
    console.error('Error fetching proyecto comunitario:', error);
    return null;
  }
}

export default async function ProyectoComunitarioPage({
  params
}: {
  params: { slug: string; regionName: string; subRegionName: string; zonaName: string; }
}) {
  const proyecto = await getProyectoData(params.slug);
  if (!proyecto) {
    notFound();
  }
  return <ProyectoComunitarioDetails proyecto={proyecto} />;
}