import { SubRegion } from '@/types/regions';

export const tolima: SubRegion = {
  name: "Tolima",
  insigniaUrl: "/TOLIMA.png",
  description: "DEPARTAMENTO DE TOLIMA: CORAZÓN DE COLOMBIA, TIERRA DE DIVERSIDAD Y RIQUEZA NATURAL",
  interestPlaces: [
    "Parque Nacional Natural Los Nevados",
    "Represa de Prado",
    "Cascadas Saltos y Caracoles",
    "Cerro de Pacandé",
    "Cascada de El Jardín",
    "Museo Antropológico del Tolima"
  ],
  communityProjects: "Tolima se destaca por sus iniciativas de desarrollo rural, proyectos de turismo sostenible y programas de conservación ambiental en sus diversas subregiones.",
  sustainableDevelopment: "El departamento impulsa proyectos de agricultura sostenible, diversificación económica y fortalecimiento del ecoturismo como motores de desarrollo local.",
  imageUrl: "/tolima.jpg",
  surface: "23.562 km²",
  population: "1.317.517 Hab. (Proyección DANE 2024)",
  density: "55,92 Hab/Km²",
  capital: "Ibagué – 541.101 Hab. (Proyección DANE 2024)",
  location: "Tolima está ubicado en el centro-oeste de Colombia, en la región andina, sobre la Cordillera Central. Limita con los departamentos de Caldas, Cundinamarca, Huila, Cauca, Valle del Cauca, Quindío y Risaralda.",
  zonas: [
    {
      name: "Región Sur Oriente",
      imageUrl: "/subregion-sur-oriente-tolima.jpg",
      surface: "3.408 km²",
      population: "100.383 habitantes (Proyección 2024)",
      density: "29,45 hab/km²",
      capital: "Purificación",
      location: "Sureste del departamento, limitando con el Huila",
      description: "Conocida por su riqueza hídrica, incluyendo el Río Magdalena y la Represa de Prado. Se destaca por su producción agrícola de cacao, caña panelera, café y arroz.",
      municipios: [
        { name: "Alpujarra", link: "/regiones/tolima/sur-oriente/alpujarra" },
        { name: "Dolores", link: "/regiones/tolima/sur-oriente/dolores" },
        { name: "Guamo", link: "/regiones/tolima/sur-oriente/guamo" },
        { name: "Prado", link: "/regiones/tolima/sur-oriente/prado" },
        { name: "Purificación", link: "/regiones/tolima/sur-oriente/purificacion" },
        { name: "Saldaña", link: "/regiones/tolima/sur-oriente/saldana" },
        { name: "Suárez", link: "/regiones/tolima/sur-oriente/suarez" }
      ]
    },
    {
      name: "Región Sur",
      imageUrl: "/subregion-sur-tolima.jpg",
      surface: "9.111 km²",
      population: "217.787 habitantes (Proyección 2024)",
      density: "23,90 hab/km²",
      capital: "Chaparral",
      location: "Sur del departamento, limitando con Cauca y Huila",
      description: "Caracterizada por su relieve montañoso y riqueza natural. Ofrece atractivos como el Cerro de Pacandé, el Cerro de los Avechuchos y la Cascada de El Jardín.",
      municipios: [
        { name: "Ataco", link: "/regiones/tolima/sur/ataco" },
        { name: "Chaparral", link: "/regiones/tolima/sur/chaparral" },
        { name: "Coyaima", link: "/regiones/tolima/sur/coyaima" },
        { name: "Natagaima", link: "/regiones/tolima/sur/natagaima" },
        { name: "Ortega", link: "/regiones/tolima/sur/ortega" },
        { name: "Planadas", link: "/regiones/tolima/sur/planadas" },
        { name: "Rioblanco", link: "/regiones/tolima/sur/rioblanco" },
        { name: "Roncesvalles", link: "/regiones/tolima/sur/roncesvalles" },
        { name: "San Antonio", link: "/regiones/tolima/sur/san-antonio" }
      ]
    },
    {
      name: "Región de Oriente",
      imageUrl: "/subregion-oriente-tolima.jpg",
      surface: "1.236 km²",
      population: "65.551 habitantes (Proyección 2024)",
      density: "53,04 hab/km²",
      capital: "Melgar",
      location: "Oriente del departamento, limitando con Cundinamarca",
      description: "Reconocida por su potencial turístico, especialmente en Melgar. Se destaca por sus centros vacacionales, discotecas y lugares de ocio.",
      municipios: [
        { name: "Carmen de Apicalá", link: "/regiones/tolima/oriente/carmen-de-apicala" },
        { name: "Cunday", link: "/regiones/tolima/oriente/cunday" },
        { name: "Icononzo", link: "/regiones/tolima/oriente/icononzo" },
        { name: "Melgar", link: "/regiones/tolima/oriente/melgar" },
        { name: "Villarrica", link: "/regiones/tolima/oriente/villarrica" }
      ]
    },
    {
      name: "Región de Norte",
      imageUrl: "/subregion-norte-tolima.jpg",
      surface: "1.866 km²",
      population: "128.036 habitantes (Proyección 2024)",
      density: "68,62 hab/km²",
      capital: "Honda",
      location: "Norte del departamento, limitando con Caldas",
      description: "Conocida por su clima cálido y su vocación agraria. Se destaca por la producción de arroz, algodón, sorgo y maíz. Honda es un importante centro turístico y pesquero.",
      municipios: [
        { name: "Ambalema", link: "/regiones/tolima/norte/ambalema" },
        { name: "Armero", link: "/regiones/tolima/norte/armero" },
        { name: "Falan", link: "/regiones/tolima/norte/falan" },
        { name: "Fresno", link: "/regiones/tolima/norte/fresno" },
        { name: "Honda", link: "/regiones/tolima/norte/honda" },
        { name: "Mariquita", link: "/regiones/tolima/norte/mariquita" },
        { name: "Palocabildo", link: "/regiones/tolima/norte/palocabildo" }
      ]
    },
    {
      name: "Región Nevados",
      imageUrl: "/subregion-nevados-tolima.jpg",
      surface: "2.236 km²",
      population: "116.360 habitantes (Proyección 2024)",
      density: "52,04 hab/km²",
      capital: "Líbano",
      location: "Norte del departamento, incluyendo parte del Parque Nacional Natural Los Nevados",
      description: "Caracterizada por su relieve montañoso y nevados. Se destaca por la producción de café y el ecoturismo, siendo una de las entradas al Parque Nacional Natural de los Nevados.",
      municipios: [
        { name: "Casabianca", link: "/regiones/tolima/nevados/casabianca" },
        { name: "Herveo", link: "/regiones/tolima/nevados/herveo" },
        { name: "Lérida", link: "/regiones/tolima/nevados/lerida" },
        { name: "Líbano", link: "/regiones/tolima/nevados/libano" },
        { name: "Murillo", link: "/regiones/tolima/nevados/murillo" },
        { name: "Santa Isabel", link: "/regiones/tolima/nevados/santa-isabel" },
        { name: "Venadillo", link: "/regiones/tolima/nevados/venadillo" },
        { name: "Villahermosa", link: "/regiones/tolima/nevados/villahermosa" }
      ]
    },
    {
      name: "Región de Ibagué",
      imageUrl: "/subregion-ibague-tolima.jpg",
      surface: "5.705 km²",
      population: "690.187 habitantes (Proyección 2024)",
      density: "120,98 hab/km²",
      capital: "Ibagué",
      location: "Centro del departamento",
      description: "Principal región del Tolima, alberga la capital departamental. Combina actividades agrícolas, industriales y de servicios. Ofrece atractivos culturales como el Festival Folclórico y diversos museos.",
      municipios: [
        { name: "Alvarado", link: "/regiones/tolima/ibague/alvarado" },
        { name: "Anzoátegui", link: "/regiones/tolima/ibague/anzoategui" },
        { name: "Cajamarca", link: "/regiones/tolima/ibague/cajamarca" },
        { name: "Coello", link: "/regiones/tolima/ibague/coello" },
        { name: "Espinal", link: "/regiones/tolima/ibague/espinal" },
        { name: "Flandes", link: "/regiones/tolima/ibague/flandes" },
        { name: "Ibagué", link: "/regiones/tolima/ibague/ibague" },
        { name: "Piedras", link: "/regiones/tolima/ibague/piedras" },
        { name: "Rovira", link: "/regiones/tolima/ibague/rovira" },
        { name: "San Luis", link: "/regiones/tolima/ibague/san-luis" },
        { name: "Valle de San Juan", link: "/regiones/tolima/ibague/valle-de-san-juan" }
      ]
    }
  ]
};