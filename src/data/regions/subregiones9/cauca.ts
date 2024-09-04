import { SubRegion } from '@/types/regions';

export const cauca: SubRegion = {
  name: "Cauca",
  insigniaUrl: "/CAUCA.png",
  description: "DEPARTAMENTO DEL CAUCA: DIVERSIDAD ÉTNICA, CULTURAL Y NATURAL EN EL SUROCCIDENTE COLOMBIANO",
  interestPlaces: [
    "Parque Nacional Natural Puracé",
    "Parque Arqueológico Nacional de Tierradentro",
    "Isla Gorgona",
    "Volcán Puracé",
    "Centro Histórico de Popayán",
    "Silvia y su mercado indígena"
  ],
  communityProjects: "Cauca se destaca por sus iniciativas de etnoturismo, proyectos de conservación cultural y ambiental, y programas de desarrollo rural con enfoque étnico.",
  sustainableDevelopment: "El departamento impulsa proyectos de agricultura sostenible, conservación de ecosistemas y energías renovables, buscando un equilibrio entre el desarrollo económico y la preservación de su rica biodiversidad y patrimonio cultural.",
  imageUrl: "/cauca.jpg",
  surface: "29.308 km²",
  population: "1.491.937 Hab. (Proyección DANE 2024)",
  density: "50,91 Hab/Km²",
  capital: "Popayán – 318.059 Hab. (Proyección DANE 2024)",
  location: "Cauca está ubicado en el suroeste de Colombia. Limita con los departamentos de Valle del Cauca, Tolima, Huila, Caquetá, Putumayo y Nariño, y tiene costa sobre el Océano Pacífico.",
  zonas: [
    {
      name: "Región Norte",
      imageUrl: "/region-norte-cauca.jpg",
      surface: "3.200 km²",
      population: "400.000 habitantes (Proyección 2024)",
      density: "125,00 hab/km²",
      capital: "Santander de Quilichao",
      location: "Norte del departamento, limitando con el Valle del Cauca",
      description: "Región caracterizada por su diversidad étnica y cultural. Es una zona de gran actividad agroindustrial y minera. Incluye municipios con fuerte presencia afrodescendiente e indígena.",
      municipios: [
        { name: "Santander de Quilichao", link: "/regiones/cauca/norte/santander-de-quilichao" },
        { name: "Caloto", link: "/regiones/cauca/norte/caloto" },
        { name: "Miranda", link: "/regiones/cauca/norte/miranda" },
        { name: "Corinto", link: "/regiones/cauca/norte/corinto" },
        { name: "Buenos Aires", link: "/regiones/cauca/norte/buenos-aires" },
        { name: "Suárez", link: "/regiones/cauca/norte/suarez" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/region-centro-cauca.jpg",
      surface: "4.500 km²",
      population: "450.000 habitantes (Proyección 2024)",
      density: "100,00 hab/km²",
      capital: "Popayán",
      location: "Centro del departamento, en la meseta de Popayán",
      description: "Corazón histórico y cultural del Cauca. Alberga la capital Popayán, conocida como la 'Ciudad Blanca' por su arquitectura colonial. Es un importante centro educativo y turístico.",
      municipios: [
        { name: "Popayán", link: "/regiones/cauca/centro/popayan" },
        { name: "Cajibío", link: "/regiones/cauca/centro/cajibio" },
        { name: "Morales", link: "/regiones/cauca/centro/morales" },
        { name: "Piendamó", link: "/regiones/cauca/centro/piendamo" },
        { name: "Timbío", link: "/regiones/cauca/centro/timbio" }
      ]
    },
    {
      name: "Región Oriente",
      imageUrl: "/region-oriente-cauca.jpg",
      surface: "3.800 km²",
      population: "120.000 habitantes (Proyección 2024)",
      density: "31,58 hab/km²",
      capital: "Silvia",
      location: "Oriente del departamento, en la cordillera Central",
      description: "Región de gran riqueza cultural indígena, especialmente de los pueblos Misak y Nasa. Incluye el Parque Arqueológico Nacional de Tierradentro, Patrimonio de la Humanidad.",
      municipios: [
        { name: "Silvia", link: "/regiones/cauca/oriente/silvia" },
        { name: "Páez", link: "/regiones/cauca/oriente/paez" },
        { name: "Inzá", link: "/regiones/cauca/oriente/inza" },
        { name: "Totoró", link: "/regiones/cauca/oriente/totoro" },
        { name: "Jambaló", link: "/regiones/cauca/oriente/jambalo" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/region-sur-cauca.jpg",
      surface: "7.800 km²",
      population: "280.000 habitantes (Proyección 2024)",
      density: "35,90 hab/km²",
      capital: "Bolívar",
      location: "Sur del departamento, abarcando parte del Macizo Colombiano",
      description: "Región de gran importancia hídrica y ecológica. Incluye parte del Macizo Colombiano, conocido como la 'Estrella Fluvial Colombiana'. Se caracteriza por su producción agrícola, especialmente de café.",
      municipios: [
        { name: "Bolívar", link: "/regiones/cauca/sur/bolivar" },
        { name: "Almaguer", link: "/regiones/cauca/sur/almaguer" },
        { name: "La Vega", link: "/regiones/cauca/sur/la-vega" },
        { name: "San Sebastián", link: "/regiones/cauca/sur/san-sebastian" },
        { name: "Santa Rosa", link: "/regiones/cauca/sur/santa-rosa" }
      ]
    },
    {
      name: "Región Pacífico",
      imageUrl: "/region-pacifico-cauca.jpg",
      surface: "10.008 km²",
      population: "241.937 habitantes (Proyección 2024)",
      density: "24,17 hab/km²",
      capital: "Guapi",
      location: "Oeste del departamento, en la costa del Pacífico",
      description: "Región de gran biodiversidad y riqueza cultural afrodescendiente. Incluye la Isla Gorgona, importante destino ecoturístico. Se caracteriza por sus ecosistemas de manglar y selva húmeda tropical.",
      municipios: [
        { name: "Guapi", link: "/regiones/cauca/pacifico/guapi" },
        { name: "Timbiquí", link: "/regiones/cauca/pacifico/timbiqui" },
        { name: "López de Micay", link: "/regiones/cauca/pacifico/lopez-de-micay" }
      ]
    }
  ]
};