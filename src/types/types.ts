// @/types/types.ts

export type Department = string;

export interface SubRegion {
  name: string;
  departments?: Department[];
}

export interface Region {
  id: number;
  name: string;
  subRegions: SubRegion[];
}

export type Regiones = Region[];