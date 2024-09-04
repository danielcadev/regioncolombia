import { notFound } from 'next/navigation';
import { fetchProyectoDetails } from '@/lib/strapi';
import ProyectoComunitarioDetails from '@/components/Regiones/ProyectoComunitarioDetails';

async function getProyectoData(slug: string) {
  try {
    return await fetchProyectoDetails(slug);
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
  const proyecto = await getProyectoData(params.slug);

  if (!proyecto) {
    notFound();
  }

  return <ProyectoComunitarioDetails proyecto={proyecto} />;
}