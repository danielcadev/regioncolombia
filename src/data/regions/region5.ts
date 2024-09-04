import { Region } from "@/types/regions";
import { arauca } from "@/data/regions/subregiones5/arauca";
import { boyaca } from "@/data/regions/subregiones5/boyaca";
import { casanare } from "@/data/regions/subregiones5/casanare"

export const region5: Region = {
  id: 5,
  name: "Región 5",
  subRegions: [arauca,boyaca,casanare,]
};

