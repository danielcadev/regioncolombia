import { SubRegion } from '@/types/regions';

export const meta: SubRegion = {
  name: "Meta",
  insigniaUrl: "/META.png",
  description: "4 REGIONES DEL META DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Parque Nacional Natural Sierra de La Macarena",
    "Caño Cristales",
    "Bioparque Los Ocarros",
    "Reserva Natural Vanguardia",
    "Laguna de Lomalinda",
    "Cascadas del Güejar"
  ],
  communityProjects: "El Meta se destaca por sus iniciativas en desarrollo agroindustrial sostenible, conservación de ecosistemas de la Orinoquía y turismo ecológico responsable.",
  sustainableDevelopment: "La región impulsa proyectos de energías renovables, agricultura climáticamente inteligente y protección de la biodiversidad única de los llanos orientales.",
  imageUrl: "/meta.jpg",
  surface: "85.635 km²",
  population: "1'063.454 Hab. (Proyección DANE 2024)",
  density: "12,42 Hab/Km²",
  capital: "Villavicencio – 572.000 Hab. (Proyección DANE 2024)",
  location: "El Meta está situado en la parte central de Colombia, en la región de la Orinoquía. Limita al norte con Cundinamarca y Casanare, al este con Vichada, al sur con Caquetá y Guaviare, y al oeste con Huila y Cundinamarca.",
  zonas: [
    {
      name: "Subregión de Río Meta",
      imageUrl: "/rio-meta-meta.jpg",
      surface: "28.530 km²",
      population: "150.000 habitantes",
      density: "5,26 hab/km²",
      capital: "Puerto López",
      location: "Norte y noreste del departamento del Meta, a lo largo del río Meta",
      description: "La Subregión de Río Meta se caracteriza por su potencial agroindustrial y logístico. Se enfoca en el desarrollo de agricultura sostenible adaptada a la sabana, la implementación de sistemas de riego eficientes y el aprovechamiento del río Meta como vía fluvial estratégica.",
      municipios: [
        { name: "Puerto López", link: "/regiones/meta/rio-meta/puerto-lopez" },
        { name: "Cabuyaro", link: "/regiones/meta/rio-meta/cabuyaro" },
        { name: "Barranca de Upía", link: "/regiones/meta/rio-meta/barranca-de-upia" },
        { name: "Puerto Gaitán", link: "/regiones/meta/rio-meta/puerto-gaitan" }
      ]
    },
    {
      name: "Subregión de Piedemonte",
      imageUrl: "/piedemonte-meta.jpg",
      surface: "21.410 km²",
      population: "250.000 habitantes",
      density: "11,68 hab/km²",
      capital: "Acacías",
      location: "Oeste del departamento del Meta, en las estribaciones de la Cordillera Oriental",
      description: "La Subregión de Piedemonte se distingue por su diversidad ecológica y potencial turístico. Se enfoca en el desarrollo de turismo sostenible, la conservación de ecosistemas de transición andino-orinoquense y la implementación de sistemas agroforestales.",
      municipios: [
        { name: "Acacías", link: "/regiones/meta/piedemonte/acacias" },
        { name: "Guamal", link: "/regiones/meta/piedemonte/guamal" },
        { name: "Cubarral", link: "/regiones/meta/piedemonte/cubarral" },
        { name: "El Castillo", link: "/regiones/meta/piedemonte/el-castillo" },
        { name: "El Dorado", link: "/regiones/meta/piedemonte/el-dorado" }
      ]
    },
    {
      name: "Subregión Capital",
      imageUrl: "/capital-meta.jpg",
      surface: "1.328 km²",
      population: "572.000 habitantes",
      density: "430,72 hab/km²",
      capital: "Villavicencio",
      location: "Noroeste del departamento del Meta, en la transición entre la Cordillera Oriental y los Llanos",
      description: "La Subregión Capital se caracteriza por ser el centro económico y de innovación del departamento. Se enfoca en el desarrollo urbano sostenible, la implementación de soluciones de movilidad inteligente y la consolidación de un ecosistema de emprendimiento e innovación.",
      municipios: [
        { name: "Villavicencio", link: "/regiones/meta/capital/villavicencio" },
        { name: "Restrepo", link: "/regiones/meta/capital/restrepo" }
      ]
    },
    {
      name: "Subregión Ariari",
      imageUrl: "/ariari-meta.jpg",
      surface: "34.367 km²",
      population: "230.000 habitantes",
      density: "6,69 hab/km²",
      capital: "Granada",
      location: "Sur y sureste del departamento del Meta, en la cuenca del río Ariari",
      description: "La Subregión Ariari se destaca por su potencial agrícola y biodiversidad. Se enfoca en el desarrollo de agricultura sostenible y diversificada, la implementación de sistemas de producción climáticamente inteligentes y la conservación de ecosistemas estratégicos como La Macarena.",
      municipios: [
        { name: "Granada", link: "/regiones/meta/ariari/granada" },
        { name: "San Martín", link: "/regiones/meta/ariari/san-martin" },
        { name: "Lejanías", link: "/regiones/meta/ariari/lejanias" },
        { name: "Puerto Lleras", link: "/regiones/meta/ariari/puerto-lleras" },
        { name: "La Macarena", link: "/regiones/meta/ariari/la-macarena" }
      ]
    }
  ]
};