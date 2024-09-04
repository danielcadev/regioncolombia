import { Region } from "@/types/regions";
import { bolivar } from '@/data/regions/subregiones2/bolivar';
import { sucre } from '@/data/regions/subregiones2/sucre';
import { cordoba } from '@/data/regions/subregiones2/cordoba';

export const region2: Region = {
  id: 2,
  name: "Región 2",
  subRegions: [bolivar,sucre,cordoba ],
};

