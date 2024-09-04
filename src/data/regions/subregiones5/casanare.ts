import { SubRegion } from '@/types/regions';

export const casanare: SubRegion = {
  name: "Casanare",
  insigniaUrl: "/CASANARE.png",
  description: "4 SUBREGIONES DE CASANARE DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Reserva Natural La Aurora",
    "Laguna del Tinije",
    "Parque Wisirare",
    "Cascada La Algarroba",
    "Hato La Berlina",
    "Parque Natural Municipal Montaña del Venado"
  ],
  communityProjects: "Casanare se destaca por sus iniciativas en ganadería regenerativa, conservación de ecosistemas llaneros y desarrollo de energías renovables.",
  sustainableDevelopment: "La región impulsa proyectos de agroindustria sostenible, protección de la biodiversidad y adaptación al cambio climático en ecosistemas de sabana.",
  imageUrl: "/casanare.jpg",
  surface: "44.640 km²",
  population: "440.000 Hab. (Proyección DANE 2024)",
  density: "9,86 Hab/Km²",
  capital: "Yopal – 170.000 Hab. (Proyección DANE 2024)",
  location: "Casanare está ubicado en el oriente de Colombia, en la región de la Orinoquía, caracterizado por extensas sabanas, ríos caudalosos y una parte del piedemonte de la Cordillera Oriental, ofreciendo una rica biodiversidad y cultura llanera.",
  zonas: [
    {
      name: "Región Norte",
      imageUrl: "/norte-casanare.jpg",
      surface: "15.000 km²",
      population: "80.000 habitantes",
      density: "5,33 hab/km²",
      capital: "Paz de Ariporo",
      location: "Norte del departamento de Casanare, limitando con Arauca y Vichada",
      description: "La Región Norte de Casanare se caracteriza por sus extensas sabanas y la ganadería sostenible. Se enfoca en la implementación de sistemas de ganadería regenerativa, conservación de ecosistemas de sabana y desarrollo de energías renovables adaptadas al contexto llanero.",
      municipios: [
        { name: "Paz de Ariporo", link: "/regiones/casanare/norte/paz-de-ariporo" },
        { name: "Hato Corozal", link: "/regiones/casanare/norte/hato-corozal" },
        { name: "Pore", link: "/regiones/casanare/norte/pore" },
        { name: "Trinidad", link: "/regiones/casanare/norte/trinidad" },
        { name: "San Luis de Palenque", link: "/regiones/casanare/norte/san-luis-de-palenque" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/centro-casanare.jpg",
      surface: "10.000 km²",
      population: "220.000 habitantes",
      density: "22 hab/km²",
      capital: "Yopal",
      location: "Centro del departamento de Casanare, incluyendo el piedemonte llanero",
      description: "La Región Centro de Casanare se distingue por ser el núcleo administrativo y económico del departamento. Se enfoca en el desarrollo urbano sostenible, la innovación en agroindustria y la conservación del piedemonte llanero.",
      municipios: [
        { name: "Yopal", link: "/regiones/casanare/centro/yopal" },
        { name: "Aguazul", link: "/regiones/casanare/centro/aguazul" },
        { name: "Chámeza", link: "/regiones/casanare/centro/chameza" },
        { name: "Nunchía", link: "/regiones/casanare/centro/nunchia" },
        { name: "Recetor", link: "/regiones/casanare/centro/recetor" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/sur-casanare.jpg",
      surface: "12.000 km²",
      population: "100.000 habitantes",
      density: "8,33 hab/km²",
      capital: "Villanueva",
      location: "Sur del departamento de Casanare, limitando con Meta",
      description: "La Región Sur de Casanare se caracteriza por su potencial agroindustrial y energético. Se enfoca en la producción agrícola sostenible, el desarrollo de energías renovables y la conservación de ecosistemas estratégicos.",
      municipios: [
        { name: "Villanueva", link: "/regiones/casanare/sur/villanueva" },
        { name: "Tauramena", link: "/regiones/casanare/sur/tauramena" },
        { name: "Monterrey", link: "/regiones/casanare/sur/monterrey" },
        { name: "Sabanalarga", link: "/regiones/casanare/sur/sabanalarga" },
        { name: "Maní", link: "/regiones/casanare/sur/mani" }
      ]
    },
    {
      name: "Región Oriente",
      imageUrl: "/oriente-casanare.jpg",
      surface: "7.640 km²",
      population: "40.000 habitantes",
      density: "5,24 hab/km²",
      capital: "Orocué",
      location: "Oriente del departamento de Casanare, limitando con Vichada",
      description: "La Región Oriente de Casanare se distingue por sus extensas sabanas inundables y su riqueza hídrica. Se enfoca en la conservación de ecosistemas acuáticos, el desarrollo de prácticas ganaderas sostenibles adaptadas a ciclos de inundación y el aprovechamiento sostenible de recursos pesqueros.",
      municipios: [
        { name: "Orocué", link: "/regiones/casanare/oriente/orocue" },
        { name: "San Luis de Palenque", link: "/regiones/casanare/oriente/san-luis-de-palenque" },
        { name: "Trinidad", link: "/regiones/casanare/oriente/trinidad" }
      ]
    }
  ]
};