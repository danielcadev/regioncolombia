import { notFound } from 'next/navigation';
import { regiones } from '@/data/regiones';
import { createUrl } from '@/lib/utils';

export default function RegionPage({ params }: { params: { regionName: string } }) {
  // Siempre redirige a 404
  notFound();
}

export function generateStaticParams() {
  return regiones.map((region) => ({
    regionName: createUrl(region.name),
  }));
}