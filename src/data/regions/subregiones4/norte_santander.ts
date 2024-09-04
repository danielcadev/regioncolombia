import { SubRegion } from '@/types/regions';

export const norteDeSantander: SubRegion = {
  name: "Norte de Santander",
  insigniaUrl: "/NORTEDESANTANDER.png",
  description: "6 SUBREGIONES DE NORTE DE SANTANDER DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Parque Nacional Natural Catatumbo Barí",
    "Centro Histórico de Cúcuta",
    "Parque Nacional Natural Tamá",
    "Área Natural Única Los Estoraques",
    "Santuario del Agua de La Playa de Belén",
    "Complejo Histórico de Villa del Rosario"
  ],
  communityProjects: "Norte de Santander se distingue por sus iniciativas en desarrollo fronterizo sostenible, conservación de ecosistemas, turismo de naturaleza e innovación urbana.",
  sustainableDevelopment: "La región implementa proyectos de integración fronteriza, agricultura sostenible, turismo responsable y tecnologías limpias.",
  imageUrl: "/nortedesantander.jpg",
  surface: "21.648 km²",
  population: "1'650.000 Hab. (Proyección DANE 2024)",
  density: "76,2 Hab/Km²",
  capital: "Cúcuta – 750.000 Hab. (Proyección DANE 2024)",
  location: "Norte de Santander está ubicado en el noreste de Colombia, en la frontera con Venezuela. Su geografía es diversa, incluyendo parte de la Cordillera Oriental de los Andes, valles, llanuras y la región del Catatumbo, ofreciendo una variedad de climas y ecosistemas.",
  zonas: [
    {
      name: "Región Sur Oriente",
      imageUrl: "/sur-oriente-norte-santander.jpg",
      surface: "3.950 km²",
      population: "115.000 habitantes",
      density: "29,11 hab/km²",
      capital: "Toledo",
      location: "Sur oriente del departamento de Norte de Santander, limitando con Venezuela y el departamento de Boyacá",
      description: "La Región Sur Oriente se ha transformado en un modelo de desarrollo fronterizo sostenible y resiliencia comunitaria. Se destaca por sus proyectos de agroecología adaptada al cambio climático, ecoturismo comunitario e integración socioeconómica fronteriza.",
      municipios: [
        { name: "Toledo", link: "/regiones/norte-de-santander/sur-oriente/toledo" },
        { name: "Labateca", link: "/regiones/norte-de-santander/sur-oriente/labateca" },
        { name: "Chitagá", link: "/regiones/norte-de-santander/sur-oriente/chitaga" },
        { name: "Silos", link: "/regiones/norte-de-santander/sur-oriente/silos" },
        { name: "Cacota", link: "/regiones/norte-de-santander/sur-oriente/cacota" }
      ]
    },
    {
      name: "Región Suroccidental",
      imageUrl: "/suroccidental-norte-santander.jpg",
      surface: "3.800 km²",
      population: "130.000 habitantes",
      density: "34,21 hab/km²",
      capital: "Ocaña",
      location: "Suroeste del departamento de Norte de Santander, limitando con los departamentos de Cesar y Santander",
      description: "La Región Suroccidental se ha consolidado como un polo de desarrollo agroindustrial sostenible y turismo histórico-cultural. Destaca por sus sistemas agrícolas climáticamente inteligentes, turismo experiencial y economía creativa basada en tradiciones locales.",
      municipios: [
        { name: "Ocaña", link: "/regiones/norte-de-santander/suroccidental/ocana" },
        { name: "Ábrego", link: "/regiones/norte-de-santander/suroccidental/abrego" },
        { name: "La Playa", link: "/regiones/norte-de-santander/suroccidental/la-playa" },
        { name: "Hacarí", link: "/regiones/norte-de-santander/suroccidental/hacari" },
        { name: "San Calixto", link: "/regiones/norte-de-santander/suroccidental/san-calixto" },
        { name: "Teorama", link: "/regiones/norte-de-santander/suroccidental/teorama" }
      ]
    },
    {
      name: "Región Oriental",
      imageUrl: "/oriental-norte-santander.jpg",
      surface: "5.200 km²",
      population: "170.000 habitantes",
      density: "32,69 hab/km²",
      capital: "Pamplona",
      location: "Este del departamento de Norte de Santander, limitando con Venezuela",
      description: "La Región Oriental se ha transformado en un modelo de desarrollo fronterizo sostenible e innovación educativa. Se destaca por su campus universitario binacional, corredor de innovación agroindustrial y proyectos de economía circular y energías limpias.",
      municipios: [
        { name: "Pamplona", link: "/regiones/norte-de-santander/oriental/pamplona" },
        { name: "Pamplonita", link: "/regiones/norte-de-santander/oriental/pamplonita" },
        { name: "Herrán", link: "/regiones/norte-de-santander/oriental/herran" },
        { name: "Ragonvalia", link: "/regiones/norte-de-santander/oriental/ragonvalia" },
        { name: "Chinácota", link: "/regiones/norte-de-santander/oriental/chinacota" },
        { name: "Bochalema", link: "/regiones/norte-de-santander/oriental/bochalema" }
      ]
    },
    {
      name: "Región Occidente",
      imageUrl: "/occidente-norte-santander.jpg",
      surface: "4.800 km²",
      population: "145.000 habitantes",
      density: "30,21 hab/km²",
      capital: "Convención",
      location: "Oeste del departamento de Norte de Santander, limitando con los departamentos de Cesar y Santander",
      description: "La Región Occidente se ha consolidado como un modelo de desarrollo rural integral y conservación de la biodiversidad. Destaca por sus sistemas agroforestales innovadores, corredor de conservación y turismo comunitario y de naturaleza.",
      municipios: [
        { name: "Convención", link: "/regiones/norte-de-santander/occidente/convencion" },
        { name: "El Carmen", link: "/regiones/norte-de-santander/occidente/el-carmen" },
        { name: "El Tarra", link: "/regiones/norte-de-santander/occidente/el-tarra" },
        { name: "San Calixto", link: "/regiones/norte-de-santander/occidente/san-calixto" },
        { name: "Teorama", link: "/regiones/norte-de-santander/occidente/teorama" },
        { name: "González", link: "/regiones/norte-de-santander/occidente/gonzalez" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-norte-santander.jpg",
      surface: "5.500 km²",
      population: "980.000 habitantes",
      density: "178,18 hab/km²",
      capital: "Cúcuta",
      location: "Norte del departamento de Norte de Santander, limitando con Venezuela",
      description: "La Región Norte se ha transformado en un modelo de desarrollo fronterizo sostenible e innovación urbana. Se destaca por sus soluciones de ciudad inteligente, ecosistema de emprendimiento transfronterizo y proyectos de economía circular y movilidad sostenible.",
      municipios: [
        { name: "Cúcuta", link: "/regiones/norte-de-santander/norte/cucuta" },
        { name: "Villa del Rosario", link: "/regiones/norte-de-santander/norte/villa-del-rosario" },
        { name: "Los Patios", link: "/regiones/norte-de-santander/norte/los-patios" },
        { name: "Puerto Santander", link: "/regiones/norte-de-santander/norte/puerto-santander" },
        { name: "El Zulia", link: "/regiones/norte-de-santander/norte/el-zulia" },
        { name: "San Cayetano", link: "/regiones/norte-de-santander/norte/san-cayetano" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/centro-norte-santander.jpg",
      surface: "4.600 km²",
      population: "210.000 habitantes",
      density: "45,65 hab/km²",
      capital: "Arboledas",
      location: "Centro del departamento de Norte de Santander, entre las regiones Norte y Sur",
      description: "La Región Centro se ha consolidado como un núcleo de innovación agroindustrial y desarrollo sostenible. Se destaca por sus sistemas de agricultura de precisión, corredor agroecológico y proyectos de turismo rural y aventura.",
      municipios: [
        { name: "Arboledas", link: "/regiones/norte-de-santander/centro/arboledas" },
        { name: "Cucutilla", link: "/regiones/norte-de-santander/centro/cucutilla" },
        { name: "Salazar", link: "/regiones/norte-de-santander/centro/salazar" },
        { name: "Villa Caro", link: "/regiones/norte-de-santander/centro/villa-caro" },
        { name: "Gramalote", link: "/regiones/norte-de-santander/centro/gramalote" },
        { name: "Lourdes", link: "/regiones/norte-de-santander/centro/lourdes" }
      ]
    }
  ]
};