import { SubRegion } from '@/types/regions';

export const arauca: SubRegion = {
  name: "Arauca",
  insigniaUrl: "/ARAUCA.png",
  description: "3 REGIONES DE ARAUCA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Parque Nacional Natural El Cocuy",
    "Malecón Ecoturístico del río Arauca",
    "Laguna del Lipa",
    "Reserva Natural Caño Limón",
    "Sierra Nevada del Cocuy (parte araucana)",
    "Parque Ecológico Wisirare"
  ],
  communityProjects: "Arauca se destaca por sus iniciativas comunitarias en desarrollo fronterizo sostenible, conservación de ecosistemas llaneros y energías renovables.",
  sustainableDevelopment: "La región impulsa proyectos de agricultura sostenible, gestión de recursos hídricos y adaptación al cambio climático en zonas de sabana.",
  imageUrl: "/arauca.jpg",
  surface: "23.818 km²",
  population: "310.000 Hab. (Proyección DANE 2024)",
  density: "13 Hab/Km²",
  capital: "Arauca – 95.000 Hab. (Proyección DANE 2024)",
  location: "Arauca está ubicada en el noreste de Colombia, en la frontera con Venezuela, caracterizada por extensas llanuras, ríos caudalosos y una parte de la Sierra Nevada del Cocuy, ofreciendo una diversidad de ecosistemas desde páramos hasta sabanas.",
  zonas: [
    {
      name: "Región Arauca",
      imageUrl: "/region-arauca-arauca.jpg",
      surface: "6.407 km²",
      population: "120.000 habitantes",
      density: "18,73 hab/km²",
      capital: "Arauca",
      location: "Norte del departamento de Arauca, limitando al norte y este con Venezuela",
      description: "La Región Arauca se caracteriza por sus extensas sabanas y su ubicación fronteriza estratégica. Se destaca por el desarrollo de soluciones urbanas resilientes al clima, iniciativas de agricultura sostenible y proyectos de energías renovables adaptados a la región.",
      municipios: [
        { name: "Arauca", link: "/regiones/arauca/arauca/arauca" }
      ]
    },
    {
      name: "Región Piedemonte",
      imageUrl: "/region-piedemonte-arauca.jpg",
      surface: "10.200 km²",
      population: "150.000 habitantes",
      density: "14,71 hab/km²",
      capital: "Saravena",
      location: "Oeste del departamento de Arauca, en las estribaciones de la Cordillera Oriental",
      description: "La Región Piedemonte se caracteriza por su diversidad de ecosistemas que van desde las llanuras hasta las montañas. Se enfoca en la conservación de la biodiversidad, el desarrollo de sistemas agroforestales sostenibles y la implementación de proyectos de energía limpia.",
      municipios: [
        { name: "Saravena", link: "/regiones/arauca/piedemonte/saravena" },
        { name: "Arauquita", link: "/regiones/arauca/piedemonte/arauquita" },
        { name: "Fortul", link: "/regiones/arauca/piedemonte/fortul" }
      ]
    },
    {
      name: "Región Sabanas",
      imageUrl: "/region-sabanas-arauca.jpg",
      surface: "7.211 km²",
      population: "40.000 habitantes",
      density: "5,55 hab/km²",
      capital: "Tame",
      location: "Sur del departamento de Arauca, caracterizada por extensas llanuras",
      description: "La Región Sabanas se distingue por sus vastas planicies y rica biodiversidad. Se centra en la implementación de prácticas ganaderas sostenibles, la conservación de ecosistemas de sabana y el desarrollo de proyectos de ecoturismo comunitario.",
      municipios: [
        { name: "Tame", link: "/regiones/arauca/sabanas/tame" },
        { name: "Puerto Rondón", link: "/regiones/arauca/sabanas/puerto-rondon" },
        { name: "Cravo Norte", link: "/regiones/arauca/sabanas/cravo-norte" }
      ]
    }
  ]
};