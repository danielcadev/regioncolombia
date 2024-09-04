import { Region } from "@/types/regions";
import { choco } from '@/data/regions/subregiones1/choco';
import { antioquia } from '@/data/regions/subregiones1/antioquia';
export const region1: Region = {
  id: 1,
  name: "Región 1",
  subRegions: [antioquia, choco],
};

