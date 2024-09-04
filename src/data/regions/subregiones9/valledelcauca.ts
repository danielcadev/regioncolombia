import { SubRegion } from '@/types/regions';

export const valledelcauca: SubRegion = {
  name: "Valle del Cauca",
  insigniaUrl: "/VALLE_DEL_CAUCA.png",
  description: "DEPARTAMENTO DEL VALLE DEL CAUCA: DIVERSIDAD CULTURAL Y MOTOR ECONÓMICO DEL SUROCCIDENTE COLOMBIANO",
  interestPlaces: [
    "Parque Nacional Natural Farallones de Cali",
    "Lago Calima",
    "Bahía de Buenaventura",
    "Hacienda El Paraíso",
    "Basílica del Señor de los Milagros en Buga",
    "Zoológico de Cali"
  ],
  communityProjects: "El Valle del Cauca se destaca por sus iniciativas de desarrollo social, proyectos de innovación tecnológica y programas de inclusión para comunidades vulnerables.",
  sustainableDevelopment: "El departamento impulsa proyectos de agricultura sostenible, energías renovables y conservación de la biodiversidad, buscando un equilibrio entre el desarrollo económico y la preservación del medio ambiente.",
  imageUrl: "/valle-del-cauca.jpg",
  surface: "22.140 km²",
  population: "4.937.165 Hab. (Proyección DANE 2024)",
  density: "223,00 Hab/Km²",
  capital: "Cali – 2.496.346 Hab. (Proyección DANE 2024)",
  location: "El Valle del Cauca está ubicado en el suroccidente de Colombia. Limita con los departamentos de Chocó, Risaralda, Quindío, Tolima y Cauca, y tiene costa sobre el Océano Pacífico.",
  zonas: [
    {
      name: "Región Norte",
      imageUrl: "/region-norte-valle.jpg",
      surface: "4.000 km²",
      population: "450.000 habitantes (Proyección 2024)",
      density: "112,50 hab/km²",
      capital: "Cartago",
      location: "Norte del departamento, limitando con Risaralda y Quindío",
      description: "Región conocida por su producción agrícola, especialmente de café. Destaca por su patrimonio histórico y arquitectónico, así como por su desarrollo industrial.",
      municipios: [
        { name: "Cartago", link: "/regiones/valle-del-cauca/norte/cartago" },
        { name: "Zarzal", link: "/regiones/valle-del-cauca/norte/zarzal" },
        { name: "La Unión", link: "/regiones/valle-del-cauca/norte/la-union" },
        { name: "Roldanillo", link: "/regiones/valle-del-cauca/norte/roldanillo" },
        { name: "Sevilla", link: "/regiones/valle-del-cauca/norte/sevilla" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/region-centro-valle.jpg",
      surface: "5.500 km²",
      population: "850.000 habitantes (Proyección 2024)",
      density: "154,55 hab/km²",
      capital: "Tuluá",
      location: "Centro del departamento, en el corazón del valle geográfico del río Cauca",
      description: "Región de gran importancia agroindustrial y comercial. Incluye importantes centros urbanos y es un nodo de conectividad para el departamento.",
      municipios: [
        { name: "Tuluá", link: "/regiones/valle-del-cauca/centro/tulua" },
        { name: "Buga", link: "/regiones/valle-del-cauca/centro/buga" },
        { name: "Bugalagrande", link: "/regiones/valle-del-cauca/centro/bugalagrande" },
        { name: "Andalucía", link: "/regiones/valle-del-cauca/centro/andalucia" },
        { name: "San Pedro", link: "/regiones/valle-del-cauca/centro/san-pedro" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/region-sur-valle.jpg",
      surface: "6.000 km²",
      population: "3.200.000 habitantes (Proyección 2024)",
      density: "533,33 hab/km²",
      capital: "Cali",
      location: "Sur del departamento, incluyendo el área metropolitana de Cali",
      description: "Corazón económico y cultural del departamento. Alberga la capital Cali, tercera ciudad más importante de Colombia. Se caracteriza por su desarrollo industrial, comercial y de servicios.",
      municipios: [
        { name: "Cali", link: "/regiones/valle-del-cauca/sur/cali" },
        { name: "Palmira", link: "/regiones/valle-del-cauca/sur/palmira" },
        { name: "Yumbo", link: "/regiones/valle-del-cauca/sur/yumbo" },
        { name: "Jamundí", link: "/regiones/valle-del-cauca/sur/jamundi" },
        { name: "Candelaria", link: "/regiones/valle-del-cauca/sur/candelaria" }
      ]
    },
    {
      name: "Región Pacífico",
      imageUrl: "/region-pacifico-valle.jpg",
      surface: "6.640 km²",
      population: "437.165 habitantes (Proyección 2024)",
      density: "65,84 hab/km²",
      capital: "Buenaventura",
      location: "Oeste del departamento, en la costa del Pacífico",
      description: "Región de gran importancia logística y comercial, alberga el principal puerto marítimo de Colombia en Buenaventura. Se caracteriza por su biodiversidad y riqueza cultural afrodescendiente.",
      municipios: [
        { name: "Buenaventura", link: "/regiones/valle-del-cauca/pacifico/buenaventura" },
        { name: "Dagua", link: "/regiones/valle-del-cauca/pacifico/dagua" },
        { name: "La Cumbre", link: "/regiones/valle-del-cauca/pacifico/la-cumbre" }
      ]
    }
  ]
};