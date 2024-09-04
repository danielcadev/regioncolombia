// @/lib/types.ts

import { StaticImageData } from 'next/image';

export interface Municipio {
  name: string;
  description?: string;
  link: string;
}

export interface Zona {
  name: string;
  description: string;
  imageUrl: string | StaticImageData;
  surface: string;
  population: string;
  density: string;
  capital: string;
  location: string;
  municipios: Municipio[];
}

export interface SubRegion {
  name: string;
  insigniaUrl: string | StaticImageData;
  communityProjects: string;
  sustainableDevelopment: string;
  description: string;
  interestPlaces: string[];
  imageUrl: string | StaticImageData;
  surface: string;
  population: string;
  density: string;
  capital: string;
  location: string;
  zonas: Zona[];
}

export interface Region {
  id: number;
  name: string;
  subRegions: SubRegion[];
}

export type Regiones = Region[];