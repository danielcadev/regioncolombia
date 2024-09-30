// src/lib/regionUtils.ts
import { regiones } from '@/data/regiones';
import { normalizeZoneName } from '@/lib/utils';

export async function getRegionInfoByZona(zonaName: string) {
  console.log("Searching for zona:", zonaName);
  const normalizedZonaName = normalizeZoneName(zonaName);
  console.log("Normalized zona name:", normalizedZonaName);

  for (const region of regiones) {
    for (const subRegion of region.subRegions) {
      const zona = subRegion.zonas.find(z => normalizeZoneName(z.name) === normalizedZonaName);
      if (zona) {
        console.log("Found zona in:", region.name, subRegion.name);
        return {
          regionName: region.name,
          subRegionName: subRegion.name,
          zonaName: zona.name
        };
      }
    }
  }
  
  console.log("Zona not found:", zonaName);
  throw new Error(`Zona not found: ${zonaName}`);
}