// subregiones/guajira.ts
import { SubRegion } from '@/types/regions';

export const guajira: SubRegion = {
  name: "La Guajira",
  insigniaUrl: "/LAGUAJIRA.png",
  description: "2 REGIONES DE LA GUAJIRA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Cabo de la Vela",
    "Parque Nacional Natural Macuira",
    "Santuario de Flora y Fauna Los Flamencos",
    "Punta Gallinas",
    "Mina de Sal de Manaure",
    "Playas de Palomino"
  ],
  communityProjects: "La Guajira se destaca por sus iniciativas comunitarias en gestión sostenible del agua, energías renovables y preservación de la cultura wayúu.",
  sustainableDevelopment: "La región impulsa proyectos de energía eólica y solar, turismo sostenible y adaptación al cambio climático en zonas desérticas y costeras.",
  imageUrl: "/laguajira.jpg",
  surface: "20.848 km²",
  population: "980.000 Hab. (Proyección DANE 2024)",
  density: "47 Hab/Km²",
  capital: "Riohacha – 300.000 Hab. (Proyección DANE 2024)",
  location: "La Guajira está ubicada en el extremo norte de Colombia y de Sudamérica, en la región Caribe. Su geografía incluye desiertos, playas vírgenes, montañas (Sierra Nevada de Santa Marta y Serranía de Macuira) y una extensa costa en el Mar Caribe y el Océano Atlántico.",
  zonas: [
    {
      name: "Región Sur",
      imageUrl: "/sur-guajira.jpg",
      surface: "10.675 km²",
      population: "230.000 habitantes",
      density: "21,54 hab/km²",
      capital: "Fonseca",
      location: "Sur del departamento de La Guajira, limitando con los departamentos del Cesar y Magdalena",
      description: "La Región Sur de La Guajira, hacia 2024, se ha convertido en un modelo de desarrollo sostenible y diversificación económica en el Caribe colombiano. Caracterizada por su variada geografía que incluye parte de la Sierra Nevada de Santa Marta y la Serranía del Perijá, la región ha logrado un equilibrio entre la agricultura tecnificada, la conservación ambiental y el turismo sostenible.",
      municipios: [
        { name: "Fonseca", link: "/regiones/guajira/sur/fonseca" },
        { name: "Barrancas", link: "/regiones/guajira/sur/barrancas" },
        { name: "Distracción", link: "/regiones/guajira/sur/distraccion" },
        { name: "Hatonuevo", link: "/regiones/guajira/sur/hatonuevo" },
        { name: "San Juan del Cesar", link: "/regiones/guajira/sur/san-juan-del-cesar" },
        { name: "El Molino", link: "/regiones/guajira/sur/el-molino" },
        { name: "Villanueva", link: "/regiones/guajira/sur/villanueva" },
        { name: "Urumita", link: "/regiones/guajira/sur/urumita" },
        { name: "La Jagua del Pilar", link: "/regiones/guajira/sur/la-jagua-del-pilar" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-guajira.jpg",
      surface: "9.825 km²",
      population: "520.000 habitantes",
      density: "52,93 hab/km²",
      capital: "Riohacha",
      location: "Norte del departamento de La Guajira, incluyendo la península de La Guajira y limitando con Venezuela y el Mar Caribe",
      description: "La Región Norte de La Guajira, hacia 2024, se ha transformado en un modelo de desarrollo sostenible adaptado a condiciones desérticas y costeras. Caracterizada por su paisaje único que incluye desiertos, playas vírgenes y ecosistemas marinos, la región ha logrado un equilibrio entre la conservación ambiental, el desarrollo económico sostenible y la preservación de la cultura wayuu.",
      municipios: [
        { name: "Riohacha", link: "/regiones/guajira/norte/riohacha" },
        { name: "Maicao", link: "/regiones/guajira/norte/maicao" },
        { name: "Uribia", link: "/regiones/guajira/norte/uribia" },
        { name: "Manaure", link: "/regiones/guajira/norte/manaure" },
        { name: "Albania", link: "/regiones/guajira/norte/albania" },
        { name: "Dibulla", link: "/regiones/guajira/norte/dibulla" }
      ]
    }
  ]
};