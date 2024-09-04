import { Region } from "@/types/regions";
import { guaviare } from "@/data/regions/subregiones6/guaviare";
import { guainia } from "@/data/regions/subregiones6/guainia";
import { meta } from "@/data/regions/subregiones6/meta";
import { vaupes } from "@/data/regions/subregiones6/vaupes";
import { vichada } from "@/data/regions/subregiones6/vichada";
import { amazonas } from "@/data/regions/subregiones6/amazonas";
import { cundinamarca } from "@/data/regions/subregiones6/cundinamarca";
export const region6: Region = {
  id: 6,
  name: "Región 6",
    subRegions: [cundinamarca,amazonas,vaupes,guaviare,guainia,meta,vichada]
};

