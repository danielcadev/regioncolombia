// app/Regiones/[regionName]/[subRegionName]/page.tsx

import { notFound } from 'next/navigation';
import { regiones } from '@/data/regiones';
import { compareUrlParams, createUrl, decodeUrlParam } from '@/lib/utils';
import SubRegionComponent from '@/components/Regiones/SubRegionCard';

export default function SubRegionPage({ params }: { params: { regionName: string; subRegionName: string } }) {
  const decodedRegionName = decodeUrlParam(params.regionName);
  const decodedSubRegionName = decodeUrlParam(params.subRegionName);
 
  const region = regiones.find(r => compareUrlParams(r.name, decodedRegionName));
  const subRegion = region?.subRegions.find(sr => compareUrlParams(sr.name, decodedSubRegionName));
 
  if (!subRegion || !region) notFound();

  return <SubRegionComponent subRegion={subRegion} region={region} />;
}

export function generateStaticParams({ params }: { params: { regionName: string } }) {
  const region = regiones.find(r => compareUrlParams(r.name, decodeUrlParam(params.regionName)));
  return region?.subRegions.map((subRegion) => ({
    regionName: createUrl(region.name),
    subRegionName: createUrl(subRegion.name),
  })) || [];
}