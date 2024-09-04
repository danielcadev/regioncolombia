import { SubRegion } from '@/types/regions';

export const narino: SubRegion = {
  name: "Nariño",
  insigniaUrl: "/NARINO.png",
  description: "DEPARTAMENTO DE NARIÑO: DIVERSIDAD CULTURAL Y NATURAL EN EL SUROCCIDENTE COLOMBIANO",
  interestPlaces: [
    "Santuario de Las Lajas",
    "Volcán Galeras",
    "Laguna de La Cocha",
    "Isla de La Corota",
    "Playas de Tumaco",
    "Carnaval de Negros y Blancos"
  ],
  communityProjects: "Nariño se destaca por sus iniciativas de desarrollo rural, proyectos de turismo comunitario y programas de conservación ambiental en sus diversas regiones.",
  sustainableDevelopment: "El departamento impulsa proyectos de agricultura sostenible, energías renovables y conservación de la biodiversidad, buscando un equilibrio entre el desarrollo económico y la preservación de su patrimonio natural y cultural.",
  imageUrl: "/narino.jpg",
  surface: "33.268 km²",
  population: "1.627.589 Hab. (Proyección DANE 2024)",
  density: "48,92 Hab/Km²",
  capital: "San Juan de Pasto – 392.589 Hab. (Proyección DANE 2024)",
  location: "Nariño está ubicado en el extremo suroeste de Colombia. Limita con los departamentos de Cauca y Putumayo, y con las repúblicas de Ecuador y el Océano Pacífico.",
  zonas: [
    {
      name: "Región Central",
      imageUrl: "/region-central-narino.jpg",
      surface: "5.200 km²",
      population: "650.000 habitantes (Proyección 2024)",
      density: "125,00 hab/km²",
      capital: "Pasto",
      location: "Centro del departamento, en la meseta de Túquerres e Ipiales",
      description: "Corazón administrativo y cultural de Nariño. Incluye la capital Pasto y se caracteriza por su clima frío y su rica herencia colonial. Es sede del famoso Carnaval de Negros y Blancos.",
      municipios: [
        { name: "Pasto", link: "/regiones/narino/central/pasto" },
        { name: "Tangua", link: "/regiones/narino/central/tangua" },
        { name: "Yacuanquer", link: "/regiones/narino/central/yacuanquer" },
        { name: "Nariño", link: "/regiones/narino/central/narino" },
        { name: "La Florida", link: "/regiones/narino/central/la-florida" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/region-norte-narino.jpg",
      surface: "4.800 km²",
      population: "220.000 habitantes (Proyección 2024)",
      density: "45,83 hab/km²",
      capital: "La Unión",
      location: "Norte del departamento, limitando con el Cauca",
      description: "Región caracterizada por su producción agrícola, especialmente de café. Presenta una geografía variada que va desde zonas andinas hasta el inicio de la llanura pacífica.",
      municipios: [
        { name: "La Unión", link: "/regiones/narino/norte/la-union" },
        { name: "San Pablo", link: "/regiones/narino/norte/san-pablo" },
        { name: "La Cruz", link: "/regiones/narino/norte/la-cruz" },
        { name: "Buesaco", link: "/regiones/narino/norte/buesaco" },
        { name: "Albán", link: "/regiones/narino/norte/alban" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/region-sur-narino.jpg",
      surface: "3.500 km²",
      population: "280.000 habitantes (Proyección 2024)",
      density: "80,00 hab/km²",
      capital: "Ipiales",
      location: "Sur del departamento, en la frontera con Ecuador",
      description: "Región fronteriza de gran importancia comercial y turística. Alberga el Santuario de Las Lajas, uno de los templos más hermosos y visitados de Colombia.",
      municipios: [
        { name: "Ipiales", link: "/regiones/narino/sur/ipiales" },
        { name: "Pupiales", link: "/regiones/narino/sur/pupiales" },
        { name: "Gualmatán", link: "/regiones/narino/sur/gualmatan" },
        { name: "Cumbal", link: "/regiones/narino/sur/cumbal" },
        { name: "Aldana", link: "/regiones/narino/sur/aldana" }
      ]
    },
    {
      name: "Región Pacífica",
      imageUrl: "/region-pacifica-narino.jpg",
      surface: "16.800 km²",
      population: "327.589 habitantes (Proyección 2024)",
      density: "19,50 hab/km²",
      capital: "Tumaco",
      location: "Oeste del departamento, en la costa del Pacífico",
      description: "Región de gran biodiversidad y riqueza cultural afrodescendiente. Incluye importantes ecosistemas de manglar y selva húmeda tropical. Tumaco es su principal centro urbano y portuario.",
      municipios: [
        { name: "Tumaco", link: "/regiones/narino/pacifica/tumaco" },
        { name: "Barbacoas", link: "/regiones/narino/pacifica/barbacoas" },
        { name: "Roberto Payán", link: "/regiones/narino/pacifica/roberto-payan" },
        { name: "Magüí Payán", link: "/regiones/narino/pacifica/magui-payan" },
        { name: "El Charco", link: "/regiones/narino/pacifica/el-charco" }
      ]
    },
    {
      name: "Región Andina",
      imageUrl: "/region-andina-narino.jpg",
      surface: "2.968 km²",
      population: "150.000 habitantes (Proyección 2024)",
      density: "50,54 hab/km²",
      capital: "Túquerres",
      location: "Centro-oeste del departamento, en la cordillera de los Andes",
      description: "Región de clima frío, caracterizada por su paisaje montañoso y volcánico. Incluye el Volcán Galeras y la Laguna de La Cocha, importantes atractivos turísticos y ecológicos.",
      municipios: [
        { name: "Túquerres", link: "/regiones/narino/andina/tuquerres" },
        { name: "Sapuyes", link: "/regiones/narino/andina/sapuyes" },
        { name: "Ospina", link: "/regiones/narino/andina/ospina" },
        { name: "Guachucal", link: "/regiones/narino/andina/guachucal" },
        { name: "Pasto", link: "/regiones/narino/andina/pasto" }
      ]
    }
  ]
};