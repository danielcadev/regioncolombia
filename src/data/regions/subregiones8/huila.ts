import { SubRegion } from '@/types/regions';

export const huila: SubRegion = {
  name: "Huila",
  insigniaUrl: "/HUILA.png",
  description: "DEPARTAMENTO DEL HUILA: TIERRA DE CONTRASTES, DESDE EL DESIERTO HASTA LOS NEVADOS",
  interestPlaces: [
    "Parque Arqueológico de San Agustín",
    "Desierto de la Tatacoa",
    "Parque Nacional Natural Cueva de los Guácharos",
    "Represa de Betania",
    "Termales de Rivera",
    "Estrecho del Magdalena"
  ],
  communityProjects: "Huila se destaca por sus iniciativas de turismo sostenible, proyectos de conservación arqueológica y programas de desarrollo agrícola sostenible.",
  sustainableDevelopment: "El departamento impulsa proyectos de energía renovable, agricultura sostenible y conservación de la biodiversidad, especialmente en zonas como el Desierto de la Tatacoa y el Macizo Colombiano.",
  imageUrl: "/huila.jpg",
  surface: "19.890 km²",
  population: "1.122.622 Hab. (Proyección DANE 2024)",
  density: "56,44 Hab/Km²",
  capital: "Neiva – 357.392 Hab. (Proyección DANE 2024)",
  location: "Huila está ubicado en el suroeste de Colombia, en la región andina. Limita con los departamentos de Tolima, Cundinamarca, Meta, Caquetá y Cauca.",
  zonas: [
    {
      name: "Región	 Norte",
      imageUrl: "/subregion-norte-huila.jpg",
      surface: "5.500 km²",
      population: "520.000 habitantes (Proyección 2024)",
      density: "94,55 hab/km²",
      capital: "Neiva",
      location: "Norte del departamento, incluyendo el valle del Alto Magdalena",
      description: "Región que alberga la capital departamental y se caracteriza por su actividad económica diversificada, incluyendo servicios, industria y agricultura. Destaca por atractivos como los Termales de Rivera y parte del Desierto de la Tatacoa.",
      municipios: [
        { name: "Neiva", link: "/regiones/huila/norte/neiva" },
        { name: "Aipe", link: "/regiones/huila/norte/aipe" },
        { name: "Algeciras", link: "/regiones/huila/norte/algeciras" },
        { name: "Baraya", link: "/regiones/huila/norte/baraya" },
        { name: "Campoalegre", link: "/regiones/huila/norte/campoalegre" },
        { name: "Colombia", link: "/regiones/huila/norte/colombia" },
        { name: "Hobo", link: "/regiones/huila/norte/hobo" },
        { name: "Íquira", link: "/regiones/huila/norte/iquira" },
        { name: "Rivera", link: "/regiones/huila/norte/rivera" },
        { name: "Tello", link: "/regiones/huila/norte/tello" },
        { name: "Villavieja", link: "/regiones/huila/norte/villavieja" },
        { name: "Yaguará", link: "/regiones/huila/norte/yaguara" }
      ]
    },
    {
      name: "Región	 Occidente",
      imageUrl: "/subregion-occidente-huila.jpg",
      surface: "4.100 km²",
      population: "220.000 habitantes (Proyección 2024)",
      density: "53,66 hab/km²",
      capital: "La Plata",
      location: "Oeste del departamento, en la vertiente oriental de la Cordillera Central",
      description: "Zona caracterizada por su riqueza natural y cultural, incluyendo parte del Macizo Colombiano. Se destaca por su producción cafetera y atractivos como el Parque Nacional Natural Puracé.",
      municipios: [
        { name: "La Argentina", link: "/regiones/huila/occidente/la-argentina" },
        { name: "La Plata", link: "/regiones/huila/occidente/la-plata" },
        { name: "Nátaga", link: "/regiones/huila/occidente/nataga" },
        { name: "Paicol", link: "/regiones/huila/occidente/paicol" },
        { name: "Tesalia", link: "/regiones/huila/occidente/tesalia" }
      ]
    },
    {
      name: "Región	Centro",
      imageUrl: "/subregion-centro-huila.jpg",
      surface: "4.200 km²",
      population: "180.000 habitantes (Proyección 2024)",
      density: "42,86 hab/km²",
      capital: "Garzón",
      location: "Centro del departamento, en el valle del Magdalena",
      description: "Región conocida como la capital diocesana del Huila. Se caracteriza por su producción agrícola, especialmente de café y frutas. Ofrece atractivos como la Represa de Betania y el Embalse de El Quimbo.",
      municipios: [
        { name: "Agrado", link: "/regiones/huila/centro/agrado" },
        { name: "Altamira", link: "/regiones/huila/centro/altamira" },
        { name: "Garzón", link: "/regiones/huila/centro/garzon" },
        { name: "Gigante", link: "/regiones/huila/centro/gigante" },
        { name: "Guadalupe", link: "/regiones/huila/centro/guadalupe" },
        { name: "Pital", link: "/regiones/huila/centro/pital" },
        { name: "Suaza", link: "/regiones/huila/centro/suaza" },
        { name: "Tarqui", link: "/regiones/huila/centro/tarqui" }
      ]
    },
    {
      name: "Región	Sur",
      imageUrl: "/subregion-sur-huila.jpg",
      surface: "6.090 km²",
      population: "202.622 habitantes (Proyección 2024)",
      density: "33,27 hab/km²",
      capital: "Pitalito",
      location: "Sur del departamento, incluyendo parte del Macizo Colombiano",
      description: "Región de gran importancia arqueológica y natural. Alberga el Parque Arqueológico de San Agustín, patrimonio de la humanidad, y el Parque Nacional Natural Cueva de los Guácharos. Se destaca por su producción de café de alta calidad.",
      municipios: [
        { name: "Acevedo", link: "/regiones/huila/sur/acevedo" },
        { name: "Elías", link: "/regiones/huila/sur/elias" },
        { name: "Isnos", link: "/regiones/huila/sur/isnos" },
        { name: "Oporapa", link: "/regiones/huila/sur/oporapa" },
        { name: "Palestina", link: "/regiones/huila/sur/palestina" },
        { name: "Pitalito", link: "/regiones/huila/sur/pitalito" },
        { name: "Saladoblanco", link: "/regiones/huila/sur/saladoblanco" },
        { name: "San Agustín", link: "/regiones/huila/sur/san-agustin" },
        { name: "Timaná", link: "/regiones/huila/sur/timana" }
      ]
    }
  ]
};