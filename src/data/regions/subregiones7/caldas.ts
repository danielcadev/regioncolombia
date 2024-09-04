import { SubRegion } from '@/types/regions';

export const caldas: SubRegion = {
  name: "Caldas",
  insigniaUrl: "/CALDAS.png",
  description: "DEPARTAMENTO DE CALDAS: CORAZÓN CAFETERO DE COLOMBIA CON DIVERSIDAD CULTURAL Y NATURAL",
  interestPlaces: [
    "Parque Nacional Natural Los Nevados",
    "Catedral de Manizales",
    "Termales de Santa Rosa de Cabal",
    "Nevado del Ruiz",
    "Reserva Ecológica Río Blanco",
    "Cerro de Oro en Manizales"
  ],
  communityProjects: "Caldas se destaca por sus iniciativas de desarrollo sostenible en la industria cafetera, proyectos de ecoturismo comunitario y programas de conservación de la biodiversidad andina.",
  sustainableDevelopment: "El departamento impulsa proyectos de innovación en la producción de café, desarrollo de energías limpias y preservación del Paisaje Cultural Cafetero como Patrimonio de la Humanidad.",
  imageUrl: "/caldas.jpg",
  surface: "7.888 km²",
  population: "1.018.453 Hab. (Proyección DANE 2024)",
  density: "129,11 Hab/Km²",
  capital: "Manizales – 434.403 Hab. (Proyección DANE 2024)",
  location: "Caldas está ubicado en el centro-occidente de Colombia, en la región andina, sobre la Cordillera Central. Limita con los departamentos de Antioquia, Boyacá, Cundinamarca, Risaralda y Tolima.",
  zonas: [
    {
      name: "Región Magdalena Caldense",
      imageUrl: "/subregion-magdalena-caldense.jpg",
      surface: "1.924 km²",
      population: "130.000 habitantes (Proyección 2024)",
      density: "67,57 hab/km²",
      capital: "La Dorada",
      location: "Oriente del departamento, en el valle del río Magdalena",
      description: "Región cálida de gran riqueza natural y cultural, conocida como tierra de hamacas y chinchorros. Comparte historia con el Magdalena Medio y la Botánica de Mutis.",
      municipios: [
        { name: "La Dorada", link: "/regiones/caldas/magdalena-caldense/la-dorada" },
        { name: "Victoria", link: "/regiones/caldas/magdalena-caldense/victoria" },
        { name: "Norcasia", link: "/regiones/caldas/magdalena-caldense/norcasia" },
        { name: "Samaná", link: "/regiones/caldas/magdalena-caldense/samana" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/subregion-norte-caldas.jpg",
      surface: "1.540 km²",
      population: "95.000 habitantes (Proyección 2024)",
      density: "61,69 hab/km²",
      capital: "Aguadas",
      location: "Norte del departamento, entre los ríos Arma y Tareas",
      description: "Reconocida por su arquitectura paisa y declarada Monumento Nacional. Parte del Paisaje Cultural Cafetero, Patrimonio de la Humanidad.",
      municipios: [
        { name: "Aguadas", link: "/regiones/caldas/norte/aguadas" },
        { name: "Aranzazu", link: "/regiones/caldas/norte/aranzazu" },
        { name: "Pácora", link: "/regiones/caldas/norte/pacora" },
        { name: "Salamina", link: "/regiones/caldas/norte/salamina" }
      ]
    },
    {
      name: "Región Centrosur",
      imageUrl: "/subregion-centrosur-caldas.jpg",
      surface: "1.730 km²",
      population: "625.000 habitantes (Proyección 2024)",
      density: "361,27 hab/km²",
      capital: "Manizales",
      location: "Centro-sur del departamento",
      description: "Corazón económico y administrativo de Caldas, con gran riqueza hídrica y parte del Parque Nacional Natural Los Nevados.",
      municipios: [
        { name: "Manizales", link: "/regiones/caldas/centrosur/manizales" },
        { name: "Chinchiná", link: "/regiones/caldas/centrosur/chinchina" },
        { name: "Neira", link: "/regiones/caldas/centrosur/neira" },
        { name: "Palestina", link: "/regiones/caldas/centrosur/palestina" },
        { name: "Villamaría", link: "/regiones/caldas/centrosur/villamaria" }
      ]
    },
    {
      name: "Región Bajo Occidente",
      imageUrl: "/subregion-bajo-occidente-caldas.jpg",
      surface: "1.020 km²",
      population: "85.000 habitantes (Proyección 2024)",
      density: "83,33 hab/km²",
      capital: "Anserma",
      location: "Occidente del departamento, en la vertiente occidental del río Cauca",
      description: "Caracterizada por su relieve accidentado y diversidad de pisos térmicos. Destacan sus atractivos turísticos como el monumento a Cristo Rey.",
      municipios: [
        { name: "Anserma", link: "/regiones/caldas/bajo-occidente/anserma" },
        { name: "Belalcázar", link: "/regiones/caldas/bajo-occidente/belalcazar" },
        { name: "Risaralda", link: "/regiones/caldas/bajo-occidente/risaralda" },
        { name: "San José", link: "/regiones/caldas/bajo-occidente/san-jose" },
        { name: "Viterbo", link: "/regiones/caldas/bajo-occidente/viterbo" }
      ]
    },
    {
      name: "Región Alto Oriente",
      imageUrl: "/subregion-alto-oriente-caldas.jpg",
      surface: "1.274 km²",
      population: "55.000 habitantes (Proyección 2024)",
      density: "43,17 hab/km²",
      capital: "Pensilvania",
      location: "Oriente del departamento, en la vertiente oriental de la Cordillera Central",
      description: "Región cordillerana con abundantes aguas y múltiples ecosistemas. Destaca por su economía agropecuaria y la industria maderera en Pensilvania.",
      municipios: [
        { name: "Pensilvania", link: "/regiones/caldas/alto-oriente/pensilvania" },
        { name: "Manzanares", link: "/regiones/caldas/alto-oriente/manzanares" },
        { name: "Marquetalia", link: "/regiones/caldas/alto-oriente/marquetalia" },
        { name: "Marulanda", link: "/regiones/caldas/alto-oriente/marulanda" }
      ]
    },
    {
      name: "Región Alto Occidente",
      imageUrl: "/subregion-alto-occidente-caldas.jpg",
      surface: "1.400 km²",
      population: "98.000 habitantes (Proyección 2024)",
      density: "70 hab/km²",
      capital: "Riosucio",
      location: "Occidente del departamento, en el cañón del Río Cauca",
      description: "Territorio mestizo con rica historia del oro y café. Destacan sus festividades como el 'Carnaval del diablo' en Riosucio y la minería de oro en Marmato y Supía.",
      municipios: [
        { name: "Riosucio", link: "/regiones/caldas/alto-occidente/riosucio" },
        { name: "Filadelfia", link: "/regiones/caldas/alto-occidente/filadelfia" },
        { name: "La Merced", link: "/regiones/caldas/alto-occidente/la-merced" },
        { name: "Marmato", link: "/regiones/caldas/alto-occidente/marmato" },
        { name: "Supía", link: "/regiones/caldas/alto-occidente/supia" }
      ]
    }
  ]
};