import { SubRegion } from '@/types/regions';

export const risaralda: SubRegion = {
  name: "Risaralda",
  insigniaUrl: "/RISARALDA.png",
  description: "DEPARTAMENTO DE RISARALDA: CORAZÓN DEL EJE CAFETERO Y PUERTA AL PACÍFICO COLOMBIANO",
  interestPlaces: [
    "Parque Nacional Natural Tatamá",
    "Termales de Santa Rosa de Cabal",
    "Bioparque Ukumarí",
    "Laguna del Otún",
    "Nevado de Santa Isabel",
    "Zoológico Matecaña"
  ],
  communityProjects: "Risaralda se destaca por sus iniciativas de turismo sostenible, proyectos de conservación del Paisaje Cultural Cafetero y programas de desarrollo rural integrado.",
  sustainableDevelopment: "El departamento impulsa proyectos de caficultura sostenible, conservación de la biodiversidad y desarrollo de energías limpias.",
  imageUrl: "/risaralda.jpg",
  surface: "4.140 km²",
  population: "989.000 Hab. (Proyección DANE 2024)",
  density: "238,89 Hab/Km²",
  capital: "Pereira – 488.839 Hab. (Proyección DANE 2024)",
  location: "Risaralda está ubicado en el centro-occidente de Colombia, en la región andina, abarcando territorios de las cordilleras Central y Occidental. Limita con los departamentos de Antioquia, Caldas, Quindío, Valle del Cauca y Chocó.",
  zonas: [
    {
      name: "Región Vertiente Pacífico",
      imageUrl: "/subregion-vertiente-pacifico-risaralda.jpg",
      surface: "1.240 km²",
      population: "32.000 habitantes (Proyección 2024)",
      density: "25,81 hab/km²",
      capital: "Pueblo Rico",
      location: "Occidente del departamento, en la vertiente del Pacífico",
      description: "Caracterizada por su biodiversidad y atractivos naturales como el Cerro Tamaná. Ofrece turismo de aventura y ecológico en el Río Taiba, Cascada del Fantasma y Parque Natural Municipal Río Negro.",
      municipios: [
        { name: "Mistrató", link: "/regiones/risaralda/vertiente-pacifico/mistrato" },
        { name: "Pueblo Rico", link: "/regiones/risaralda/vertiente-pacifico/pueblo-rico" }
      ]
    },
    {
      name: "Región Vertiente Occidental",
      imageUrl: "/subregion-vertiente-occidental-risaralda.jpg",
      surface: "1.201 km²",
      population: "168.000 habitantes (Proyección 2024)",
      density: "139,88 hab/km²",
      capital: "Belén de Umbría",
      location: "Centro-occidente del departamento, en la vertiente oriental de la cordillera Occidental",
      description: "Destacada por su producción cafetera y potencial en biodiversidad. Ofrece atractivos paisajísticos y culturales relacionados con la cultura cafetera.",
      municipios: [
        { name: "Apía", link: "/regiones/risaralda/vertiente-occidental/apia" },
        { name: "Balboa", link: "/regiones/risaralda/vertiente-occidental/balboa" },
        { name: "Belén de Umbría", link: "/regiones/risaralda/vertiente-occidental/belen-de-umbria" },
        { name: "Guática", link: "/regiones/risaralda/vertiente-occidental/guatica" },
        { name: "La Celia", link: "/regiones/risaralda/vertiente-occidental/la-celia" },
        { name: "Quinchía", link: "/regiones/risaralda/vertiente-occidental/quinchia" },
        { name: "Santuario", link: "/regiones/risaralda/vertiente-occidental/santuario" }
      ]
    },
    {
      name: "Región Vertiente Oriente",
      imageUrl: "/subregion-vertiente-oriente-risaralda.jpg",
      surface: "1.699 km²",
      population: "789.000 habitantes (Proyección 2024)",
      density: "464,39 hab/km²",
      capital: "Pereira",
      location: "Oriente del departamento, en la vertiente occidental de la cordillera Central",
      description: "Corazón económico y administrativo de Risaralda, incluye el Área Metropolitana Centro Occidente. Ofrece una mezcla de atractivos urbanos y naturales, como el Bioparque Ukumarí y la Laguna del Otún.",
      municipios: [
        { name: "Pereira", link: "/regiones/risaralda/vertiente-oriente/pereira" },
        { name: "Dosquebradas", link: "/regiones/risaralda/vertiente-oriente/dosquebradas" },
        { name: "La Virginia", link: "/regiones/risaralda/vertiente-oriente/la-virginia" },
        { name: "Santa Rosa de Cabal", link: "/regiones/risaralda/vertiente-oriente/santa-rosa-de-cabal" },
        { name: "Marsella", link: "/regiones/risaralda/vertiente-oriente/marsella" }
      ]
    }
  ]
};