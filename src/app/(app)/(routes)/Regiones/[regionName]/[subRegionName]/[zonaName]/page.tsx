// app/Regiones/[regionName]/[subRegionName]/[zonaName]/page.tsx
import { notFound } from 'next/navigation';
import { regiones } from '@/data/regiones';
import ZonaLayout from '@/components/Regiones/ZonaPage';
import { compareUrlParams, createUrl, decodeUrlParam } from '@/lib/utils';

interface PageParams {
  params: { regionName: string; subRegionName: string; zonaName: string };
}

export default function ZonaPage({ params }: PageParams) {
  const decodedRegionName = decodeUrlParam(params.regionName);
  const decodedSubRegionName = decodeUrlParam(params.subRegionName);
  const decodedZonaName = decodeUrlParam(params.zonaName);

  const region = regiones.find(r => compareUrlParams(r.name, decodedRegionName));
  const subRegion = region?.subRegions.find(sr => compareUrlParams(sr.name, decodedSubRegionName));
  const zona = subRegion?.zonas.find(z => compareUrlParams(z.name, decodedZonaName));

  if (!region || !subRegion || !zona) notFound();

  return (
    <ZonaLayout zona={zona} region={region} subRegion={subRegion}>
      {/* Aquí puedes agregar contenido adicional específico de la página si lo necesitas */}
    </ZonaLayout>
  );
}

export function generateStaticParams({ params }: { params: { regionName: string; subRegionName: string } }) {
  const region = regiones.find(r => compareUrlParams(r.name, decodeUrlParam(params.regionName)));
  const subRegion = region?.subRegions.find(sr => compareUrlParams(sr.name, decodeUrlParam(params.subRegionName)));
  return subRegion?.zonas.map((zona) => ({
    regionName: createUrl(region!.name),
    subRegionName: createUrl(subRegion.name),
    zonaName: createUrl(zona.name),
  })) || [];
}