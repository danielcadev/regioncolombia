import { SubRegion } from '@/types/regions';

export const putumayo: SubRegion = {
  name: "Putumayo",
  insigniaUrl: "/PUTUMAYO.png",
  description: "DEPARTAMENTO DE PUTUMAYO: DIVERSIDAD CULTURAL Y NATURAL EN LA AMAZONÍA COLOMBIANA",
  interestPlaces: [
    "Parque Nacional Natural La Paya",
    "Valle de Sibundoy",
    "Laguna de La Cocha",
    "Cascada del Fin del Mundo",
    "Reserva Natural Fin del Mundo",
    "Centro Experimental Amazónico"
  ],
  communityProjects: "Putumayo se destaca por sus iniciativas de etnoturismo, proyectos de conservación de la cultura indígena y programas de desarrollo sostenible en la Amazonía.",
  sustainableDevelopment: "El departamento impulsa proyectos de agricultura sostenible, conservación de la biodiversidad y aprovechamiento responsable de recursos naturales, buscando un equilibrio entre desarrollo y preservación del entorno amazónico.",
  imageUrl: "/putumayo.jpg",
  surface: "24.885 km²",
  population: "378.483 Hab. (Proyección DANE 2024)",
  density: "15,21 Hab/Km²",
  capital: "Mocoa – 49.789 Hab. (Proyección DANE 2024)",
  location: "Putumayo está ubicado en el suroeste de Colombia, en la región amazónica. Limita con los departamentos de Nariño, Cauca y Caquetá, y con las repúblicas de Ecuador y Perú.",
  zonas: [
    {
      name: "Región Alto Putumayo",
      imageUrl: "/subregion-alto-putumayo.jpg",
      surface: "2.500 km²",
      population: "90.000 habitantes (Proyección 2024)",
      density: "36,00 hab/km²",
      capital: "Sibundoy",
      location: "Noroeste del departamento, en la región andina",
      description: "Conocida como el Valle de Sibundoy, esta región se caracteriza por su clima frío y su riqueza cultural. Es hogar de comunidades indígenas Kamëntsá e Inga, y se destaca por su artesanía y medicina tradicional.",
      municipios: [
        { name: "Sibundoy", link: "/regiones/putumayo/alto-putumayo/sibundoy" },
        { name: "Colón", link: "/regiones/putumayo/alto-putumayo/colon" },
        { name: "Santiago", link: "/regiones/putumayo/alto-putumayo/santiago" },
        { name: "San Francisco", link: "/regiones/putumayo/alto-putumayo/san-francisco" }
      ]
    },
    {
      name: "Región Medio Putumayo",
      imageUrl: "/subregion-medio-putumayo.jpg",
      surface: "7.500 km²",
      population: "200.000 habitantes (Proyección 2024)",
      density: "26,67 hab/km²",
      capital: "Mocoa",
      location: "Centro del departamento, en la transición entre la cordillera y la llanura amazónica",
      description: "Región que alberga la capital departamental y se caracteriza por su biodiversidad. Incluye atractivos como la Cascada del Fin del Mundo y el Centro Experimental Amazónico.",
      municipios: [
        { name: "Mocoa", link: "/regiones/putumayo/medio-putumayo/mocoa" },
        { name: "Villagarzón", link: "/regiones/putumayo/medio-putumayo/villagarzon" },
        { name: "Puerto Guzmán", link: "/regiones/putumayo/medio-putumayo/puerto-guzman" },
        { name: "Puerto Caicedo", link: "/regiones/putumayo/medio-putumayo/puerto-caicedo" }
      ]
    },
    {
      name: "Región Bajo Putumayo",
      imageUrl: "/subregion-bajo-putumayo.jpg",
      surface: "14.885 km²",
      population: "88.483 habitantes (Proyección 2024)",
      density: "5,94 hab/km²",
      capital: "Puerto Asís",
      location: "Sur y este del departamento, en la llanura amazónica",
      description: "Región de gran importancia ecológica, alberga el Parque Nacional Natural La Paya. Se caracteriza por su clima cálido y húmedo, y por su riqueza en biodiversidad y recursos naturales.",
      municipios: [
        { name: "Puerto Asís", link: "/regiones/putumayo/bajo-putumayo/puerto-asis" },
        { name: "Orito", link: "/regiones/putumayo/bajo-putumayo/orito" },
        { name: "Valle del Guamuez", link: "/regiones/putumayo/bajo-putumayo/valle-del-guamuez" },
        { name: "San Miguel", link: "/regiones/putumayo/bajo-putumayo/san-miguel" },
        { name: "Puerto Leguízamo", link: "/regiones/putumayo/bajo-putumayo/puerto-leguizamo" }
      ]
    }
  ]
};