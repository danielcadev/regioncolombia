import { Region } from "@/types/regions";
import {caqueta} from "@/data/regions/subregiones8/caqueta"
import {putumayo} from "@/data/regions/subregiones8/putumayo"
import {tolima} from "@/data/regions/subregiones8/tolima"
import {huila} from "@/data/regions/subregiones8/huila"
export const region8: Region = {
  id: 8,
  name: "Región 8",
    subRegions: [tolima,huila,caqueta,putumayo,]
};

