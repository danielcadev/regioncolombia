// subregiones/cesar.ts
import { SubRegion } from '@/types/regions';

export const cesar: SubRegion = {
  name: "Cesar",
  insigniaUrl: "/CESAR.png",
  description: "4 REGIONES DEL CESAR DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Parque Nacional Natural Sierra Nevada de Santa Marta",
    "Complejo Cenagoso de Zapatosa",
    "Serranía del Perijá",
    "Balneario Hurtado",
    "Plaza Alfonso López en Valledupar",
    "Eco Parque Los Besotes"
  ],
  communityProjects: "El Cesar se destaca por sus iniciativas comunitarias en ecoturismo, agricultura sostenible y preservación cultural, especialmente en torno a la música vallenata y las tradiciones indígenas.",
  sustainableDevelopment: "La región impulsa proyectos de energías renovables, gestión sostenible del agua y adaptación al cambio climático en zonas rurales y urbanas.",
  imageUrl: "/cesar.jpg",
  surface: "22.905 km²",
  population: "1'320.000 Hab. (Proyección DANE 2024)",
  density: "57,6 Hab/Km²",
  capital: "Valledupar – 520.000 Hab. (Proyección DANE 2024)",
  location: "El Cesar está ubicado en el norte de Colombia, en la región Caribe, caracterizado por una geografía diversa que incluye parte de la Sierra Nevada de Santa Marta, la Serranía del Perijá, valles y llanuras, ofreciendo una rica biodiversidad y una fuerte tradición cultural vallenata.",
  zonas: [
    {
      name: "Región Sur",
      imageUrl: "/sur-cesar.jpg",
      surface: "8.128 km²",
      population: "180.000 habitantes",
      density: "22,14 hab/km²",
      capital: "Aguachica",
      location: "Sur del departamento del Cesar, limitando con los departamentos de Santander y Norte de Santander",
      description: "La Región Sur del Cesar, hacia 2024, se ha consolidado como un polo de desarrollo agroindustrial sostenible y un nodo estratégico de conectividad interregional. Caracterizada por su variada geografía que incluye zonas de la Serranía del Perijá y el valle del río Magdalena, la región ha potenciado su vocación agrícola, agroindustrial y logística de manera innovadora y sostenible.",
      municipios: [
        { name: "Aguachica", link: "/regiones/cesar/sur/aguachica" },
        { name: "Gamarra", link: "/regiones/cesar/sur/gamarra" },
        { name: "González", link: "/regiones/cesar/sur/gonzalez" },
        { name: "La Gloria", link: "/regiones/cesar/sur/la-gloria" },
        { name: "Pelaya", link: "/regiones/cesar/sur/pelaya" },
        { name: "Río de Oro", link: "/regiones/cesar/sur/rio-de-oro" },
        { name: "San Alberto", link: "/regiones/cesar/sur/san-alberto" },
        { name: "San Martín", link: "/regiones/cesar/sur/san-martin" }
      ]
    },
    {
      name: "Región Noroccidental",
      imageUrl: "/noroccidental-cesar.jpg",
      surface: "4.892 km²",
      population: "155.000 habitantes",
      density: "31,68 hab/km²",
      capital: "Pailitas",
      location: "Noroeste del departamento del Cesar, limitando con los departamentos de Bolívar y Magdalena",
      description: "La Región Noroccidental del Cesar, hacia 2024, se ha transformado en un referente de desarrollo rural sostenible y ecoturismo en Colombia. Caracterizada por su diversidad geográfica que incluye parte de la Serranía del Perijá y extensas llanuras, la región ha logrado un equilibrio entre la producción agropecuaria innovadora y la conservación de sus ecosistemas.",
      municipios: [
        { name: "Pailitas", link: "/regiones/cesar/noroccidental/pailitas" },
        { name: "Pelaya", link: "/regiones/cesar/noroccidental/pelaya" },
        { name: "La Gloria", link: "/regiones/cesar/noroccidental/la-gloria" },
        { name: "Tamalameque", link: "/regiones/cesar/noroccidental/tamalameque" },
        { name: "Curumaní", link: "/regiones/cesar/noroccidental/curumani" }
      ]
    },
    {
      name: "Región Central",
      imageUrl: "/central-cesar.jpg",
      surface: "7.634 km²",
      population: "670.000 habitantes",
      density: "87,76 hab/km²",
      capital: "Valledupar",
      location: "Centro del departamento del Cesar, abarcando el valle del río Cesar y parte de la Sierra Nevada de Santa Marta",
      description: "La Región Central del Cesar, hacia 2024, se ha consolidado como un polo de desarrollo sostenible e innovación en el Caribe colombiano. Caracterizada por su diversidad geográfica que incluye el valle del río Cesar y las estribaciones de la Sierra Nevada de Santa Marta, la región ha logrado un equilibrio entre el desarrollo urbano, la producción agroindustrial de alta tecnología y la preservación de su patrimonio cultural y natural.",
      municipios: [
        { name: "Valledupar", link: "/regiones/cesar/central/valledupar" },
        { name: "Agustín Codazzi", link: "/regiones/cesar/central/agustin-codazzi" },
        { name: "La Paz", link: "/regiones/cesar/central/la-paz" },
        { name: "Manaure Balcón del Cesar", link: "/regiones/cesar/central/manaure-balcon-del-cesar" },
        { name: "San Diego", link: "/regiones/cesar/central/san-diego" },
        { name: "Becerril", link: "/regiones/cesar/central/becerril" },
        { name: "El Paso", link: "/regiones/cesar/central/el-paso" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-cesar.jpg",
      surface: "5.378 km²",
      population: "220.000 habitantes",
      density: "40,91 hab/km²",
      capital: "La Jagua de Ibirico",
      location: "Norte del departamento del Cesar, limitando con los departamentos de La Guajira y Magdalena",
      description: "La Región Norte del Cesar, hacia 2024, se ha transformado en un modelo de transición justa y desarrollo sostenible post-minería. Caracterizada por su paisaje que incluye zonas de la Serranía del Perijá y los valles de los ríos Cesar y Magdalena, la región ha logrado diversificar su economía y regenerar sus ecosistemas afectados por la minería.",
      municipios: [
        { name: "La Jagua de Ibirico", link: "/regiones/cesar/norte/la-jagua-de-ibirico" },
        { name: "Chiriguaná", link: "/regiones/cesar/norte/chiriguana" },
        { name: "El Paso", link: "/regiones/cesar/norte/el-paso" },
        { name: "Astrea", link: "/regiones/cesar/norte/astrea" },
        { name: "Chimichagua", link: "/regiones/cesar/norte/chimichagua" },
        { name: "Bosconia", link: "/regiones/cesar/norte/bosconia" }
      ]
    }
  ]
};