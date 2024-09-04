import { Region } from "@/types/regions";
import { guajira } from '@/data/regions/subregiones3/guajira';
import { magdalena } from '@/data/regions/subregiones3/magdalena';
import { cesar } from '@/data/regions/subregiones3/cesar';
import { atlantico } from "@/data/regions/subregiones3/atlantico";
import { sanAndres } from "@/data/regions/subregiones3/sanAndres";

export const region3: Region = {
  id: 3,
  name: "Región 3",
  subRegions: [atlantico,cesar,magdalena,guajira,sanAndres ],
};

