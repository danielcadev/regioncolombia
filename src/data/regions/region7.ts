import { Region } from "@/types/regions";
import { caldas} from "@/data/regions/subregiones7/caldas"
import { quindio} from "@/data/regions/subregiones7/quindio"
import { risaralda} from "@/data/regions/subregiones7/risaralda"
export const region7: Region = {
  id: 7,
  name: "Región 7",
    subRegions: [caldas,quindio,risaralda]
};

