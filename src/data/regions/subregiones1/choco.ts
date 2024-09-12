// subregiones/choco.ts
import { SubRegion } from '@/types/regions';

export const choco: SubRegion = {
  name: "Chocó",
  insigniaUrl: "/CHOCO.png",
  description: "5 REGIONES DEL CHOCO DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Parque Nacional Natural Utría",
    "Bahía Solano",
    "Nuquí",
    "Capurganá",
    "Cascada La Chococita",
    "Río Atrato",
  ],
  communityProjects: "El Chocó se destaca por sus iniciativas comunitarias en conservación de la biodiversidad y turismo ecológico responsable.",
  sustainableDevelopment: "La región impulsa proyectos de manejo sostenible de bosques, pesca artesanal responsable y protección de ecosistemas costeros.",
  imageUrl: "/choco.jpg",
  surface: "46.530 km²",
  population: "544.764 Hab. (Proyección DANE 2024)",
  density: "11,7 Hab/Km²",
  capital: "Quibdó – 116.199 Hab. (Proyección DANE 2024)",
  location: "El Chocó está ubicado en el noroeste de Colombia, en la región del Pacífico, conocido por su gran biodiversidad y riqueza cultural.",
  zonas: [
    {
      name: "Región San Juan",
      imageUrl: "/san-juan-choco.jpg",
      surface: "12.282 km²",
      population: "140.000 habitantes",
      density: "11,40 hab/km²",
      capital: "Istmina",
      location: "Sur del departamento del Chocó, en la cuenca del río San Juan",
      description: "La Región San Juan, una de las cinco subregiones del departamento del Chocó, se ha transformado significativamente hacia 2024. Caracterizada por su rica biodiversidad, abundancia hídrica y diversidad étnica, la región ha avanzado en el desarrollo sostenible y la protección de su patrimonio natural y cultural. Se destaca por el ecoturismo responsable, la producción agrícola sostenible, la minería artesanal regulada y la preservación de las tradiciones afrocolombianas e indígenas. La implementación de proyectos de infraestructura sostenible y el fortalecimiento de la gobernanza local han mejorado las condiciones de vida de sus habitantes, mientras se mantiene un enfoque en la conservación del medio ambiente.",
      municipios: [
        { name: "Istmina", link: "/regiones/choco/san-juan/istmina" },
        { name: "Condoto", link: "/regiones/choco/san-juan/condoto" },
        { name: "Nóvita", link: "/regiones/choco/san-juan/novita" },
        { name: "Sipí", link: "/regiones/choco/san-juan/sipi" },
        { name: "Medio San Juan", link: "/regiones/choco/san-juan/medio-san-juan" },
        { name: "San José del Palmar", link: "/regiones/choco/san-juan/san-jose-del-palmar" },
        { name: "Litoral del San Juan", link: "/regiones/choco/san-juan/litoral-del-san-juan" },
        { name: "Tadó", link: "/regiones/choco/san-juan/tado" },
        { name: "Río Iró", link: "/regiones/choco/san-juan/rio-iro" },
        { name: "Unión Panamericana", link: "/regiones/choco/san-juan/union-panamericana" },
        { name: "Cértegui", link: "/regiones/choco/san-juan/certegui" }
      ],
    },
    {
      name: "Región Atrato",
      imageUrl: "/atrato.jpg",
      surface: "15.820 km²",
      population: "230.000 habitantes",
      density: "14,54 hab/km²",
      capital: "Quibdó",
      location: "Centro del departamento del Chocó, en la cuenca del río Atrato",
      description: "La Región Atrato, hacia 2024, se ha consolidado como un ejemplo de desarrollo sostenible y conservación ambiental en el Pacífico colombiano. Caracterizada por su inmensa riqueza hídrica, biodiversidad excepcional y diversidad cultural, la región ha avanzado significativamente en la protección de sus ecosistemas acuáticos y terrestres. Se destaca por el ecoturismo comunitario, la producción agrícola sostenible, la pesca responsable y la preservación de las tradiciones afrocolombianas e indígenas. La implementación de tecnologías limpias y proyectos de infraestructura verde han mejorado la calidad de vida de sus habitantes, mientras se mantiene un fuerte compromiso con la conservación del río Atrato, reconocido como sujeto de derechos.",
      municipios: [
        { name: "Quibdó", link: "/regiones/atrato/quibdo" },
        { name: "Medio Atrato", link: "/regiones/atrato/medio-atrato" },
        { name: "Bojayá", link: "/regiones/atrato/bojaya" },
        { name: "Vigía del Fuerte", link: "/regiones/atrato/vigia-del-fuerte" },
        { name: "Carmen del Darién", link: "/regiones/atrato/carmen-del-darien" },
        { name: "Río Quito", link: "/regiones/atrato/rio-quito" },
        { name: "Lloró", link: "/regiones/atrato/lloro" },
        { name: "Atrato", link: "/regiones/atrato/atrato" },
        { name: "Bagadó", link: "/regiones/atrato/bagado" },
        { name: "Carmen de Atrato", link: "/regiones/atrato/carmen-de-atrato" }
      ],
    },
    {
      name: "Región Pacífico Sur",
      imageUrl: "/pacifico-sur.jpg",
      surface: "5.600 km²",
      population: "70.000 habitantes",
      density: "12,5 hab/km²",
      capital: "Bahía Solano",
      location: "Costa Pacífica sur del departamento del Chocó",
      description: "La Región Pacífico Sur, hacia 2024, se ha convertido en un modelo de desarrollo sostenible que equilibra la conservación de sus ecosistemas costeros y selváticos con el progreso económico de sus comunidades. Caracterizada por su biodiversidad excepcional, riqueza cultural y belleza paisajística, la región ha fortalecido su identidad a través de iniciativas que promueven el ecoturismo responsable, la pesca artesanal sostenible y la preservación de tradiciones afrocolombianas e indígenas. La implementación de tecnologías verdes y la mejora en infraestructura sostenible han impulsado la calidad de vida de sus habitantes, mientras se mantiene un fuerte compromiso con la protección de los ecosistemas marinos y terrestres.",
      municipios: [
        { name: "Bahía Solano", link: "/regiones/choco/pacifico-sur/bahia-solano" },
        { name: "Nuquí", link: "/regiones/choco/pacifico-sur/nuqui" },
        { name: "Juradó", link: "/regiones/choco/pacifico-sur/jurado" },
        { name: "Bajo Baudó", link: "/regiones/choco/pacifico-sur/bajo-baudo" },
        { name: "Alto Baudó", link: "/regiones/choco/pacifico-sur/alto-baudo" }
      ],
    },
    {
      name: "Región Darién",
      imageUrl: "/darien.jpg",
      surface: "7.500 km²",
      population: "95.000 habitantes",
      density: "12,67 hab/km²",
      capital: "Unguía",
      location: "Extremo noroccidental del departamento del Chocó, en la frontera con Panamá",
      description: "La Región Darién, hacia 2024, se ha convertido en un área de crucial importancia ecológica y geopolítica. Caracterizada por su densa selva tropical, su biodiversidad única y su posición estratégica entre Sudamérica y Centroamérica, la región ha logrado un delicado equilibrio entre la conservación ambiental, el desarrollo sostenible y la seguridad fronteriza. Se destaca por sus esfuerzos en la protección de ecosistemas transfronterizos, el desarrollo de alternativas económicas sostenibles para las comunidades locales, y la preservación de las culturas indígenas y afrocolombianas. La implementación de tecnologías verdes y proyectos de conectividad sostenible han mejorado la calidad de vida de sus habitantes mientras se mantiene la integridad ecológica de la región.",
      municipios: [
        { name: "Unguía", link: "/regiones/choco/darien/unguia" },
        { name: "Acandí", link: "/regiones/choco/darien/acandi" },
        { name: "Riosucio", link: "/regiones/choco/darien/riosucio" }
      ],
    }
  ],
};
