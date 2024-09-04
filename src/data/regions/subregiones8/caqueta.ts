import { SubRegion } from '@/types/regions';

export const caqueta: SubRegion = {
  name: "Caquetá",
  insigniaUrl: "/CAQUETA.png",
  description: "DEPARTAMENTO DE CAQUETÁ: PUERTA DE LA AMAZONÍA COLOMBIANA",
  interestPlaces: [
    "Parque Nacional Natural Serranía de Chiribiquete",
    "Parque Nacional Natural Cordillera de los Picachos",
    "Cascada del Fin del Mundo",
    "Laguna del Chairá",
    "Reserva Natural Nápoles",
    "Cuevas de Los Guácharos"
  ],
  communityProjects: "Caquetá se destaca por sus iniciativas de conservación de la Amazonía, proyectos de ecoturismo sostenible y programas de desarrollo rural integrado con enfoque ambiental.",
  sustainableDevelopment: "El departamento impulsa proyectos de silvicultura sostenible, agricultura ecológica y conservación de la biodiversidad amazónica, buscando un equilibrio entre desarrollo y preservación del entorno natural.",
  imageUrl: "/caqueta.jpg",
  surface: "88.965 km²",
  population: "512.667 Hab. (Proyección DANE 2024)",
  density: "5,76 Hab/Km²",
  capital: "Florencia – 172.364 Hab. (Proyección DANE 2024)",
  location: "Caquetá está ubicado en el sur de Colombia, en la región amazónica. Limita con los departamentos de Meta, Guaviare, Vaupés, Amazonas, Putumayo, Cauca y Huila.",
  zonas: [
    {
      name: "Región Norte",
      imageUrl: "/subregion-norte-caqueta.jpg",
      surface: "22.000 km²",
      population: "280.000 habitantes (Proyección 2024)",
      density: "12,73 hab/km²",
      capital: "Florencia",
      location: "Norte del departamento, en la transición entre la cordillera Oriental y la llanura amazónica",
      description: "Región más poblada y desarrollada del departamento. Incluye la capital Florencia y se caracteriza por su biodiversidad y atractivos naturales como la Cascada del Fin del Mundo.",
      municipios: [
        { name: "Florencia", link: "/regiones/caqueta/norte/florencia" },
        { name: "Montañita", link: "/regiones/caqueta/norte/montanita" },
        { name: "El Paujil", link: "/regiones/caqueta/norte/el-paujil" },
        { name: "El Doncello", link: "/regiones/caqueta/norte/el-doncello" },
        { name: "Puerto Rico", link: "/regiones/caqueta/norte/puerto-rico" }
      ]
    },
    {
      name: "Región Central",
      imageUrl: "/subregion-central-caqueta.jpg",
      surface: "30.000 km²",
      population: "150.000 habitantes (Proyección 2024)",
      density: "5,00 hab/km²",
      capital: "San Vicente del Caguán",
      location: "Centro del departamento, abarcando gran parte de la llanura amazónica",
      description: "Zona caracterizada por sus extensas llanuras y ríos. San Vicente del Caguán es su principal centro urbano. La ganadería y la agricultura son las principales actividades económicas.",
      municipios: [
        { name: "San Vicente del Caguán", link: "/regiones/caqueta/central/san-vicente-del-caguan" },
        { name: "Cartagena del Chairá", link: "/regiones/caqueta/central/cartagena-del-chaira" },
        { name: "Solano", link: "/regiones/caqueta/central/solano" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/subregion-sur-caqueta.jpg",
      surface: "36.965 km²",
      population: "82.667 habitantes (Proyección 2024)",
      density: "2,24 hab/km²",
      capital: "Curillo",
      location: "Sur del departamento, incluyendo parte del Parque Nacional Natural Serranía de Chiribiquete",
      description: "Región de gran importancia ecológica, alberga parte del Parque Nacional Natural Serranía de Chiribiquete. Se caracteriza por su baja densidad poblacional y su riqueza en biodiversidad.",
      municipios: [
        { name: "Curillo", link: "/regiones/caqueta/sur/curillo" },
        { name: "Valparaíso", link: "/regiones/caqueta/sur/valparaiso" },
        { name: "Solita", link: "/regiones/caqueta/sur/solita" },
        { name: "Albania", link: "/regiones/caqueta/sur/albania" },
        { name: "Milán", link: "/regiones/caqueta/sur/milan" },
        { name: "San José del Fragua", link: "/regiones/caqueta/sur/san-jose-del-fragua" },
        { name: "Belén de los Andaquíes", link: "/regiones/caqueta/sur/belen-de-los-andaquies" },
        { name: "Morelia", link: "/regiones/caqueta/sur/morelia" }
      ]
    }
  ]
};