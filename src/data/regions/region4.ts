import { Region } from "@/types/regions";
import { santander } from "@/data/regions/subregiones4/santander";
import { norteDeSantander } from "@/data/regions/subregiones4/norte_santander";

export const region4: Region = {
  id: 4,
  name: "Región 4",
  subRegions: [santander,norteDeSantander],
};

