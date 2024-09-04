import { SubRegion } from '@/types/regions';

export const quindio: SubRegion = {
  name: "Quindío",
  insigniaUrl: "/QUINDIO.png",
  description: "DEPARTAMENTO DE QUINDÍO: CORAZÓN DEL EJE CAFETERO Y PARAÍSO TURÍSTICO DE COLOMBIA",
  interestPlaces: [
    "Valle del Cocora",
    "Parque Nacional del Café",
    "PANACA",
    "Jardín Botánico del Quindío",
    "Mirador de Buenavista",
    "Cementerio Libre de Circasia"
  ],
  communityProjects: "Quindío se destaca por sus iniciativas de turismo sostenible, proyectos de conservación del Paisaje Cultural Cafetero y programas de desarrollo rural integrado.",
  sustainableDevelopment: "El departamento impulsa proyectos de caficultura sostenible, diversificación agrícola y fortalecimiento del ecoturismo como motor de desarrollo local.",
  imageUrl: "/quindio.jpg",
  surface: "1.845 km²",
  population: "562.114 Hab. (Proyección DANE 2024)",
  density: "304,67 Hab/Km²",
  capital: "Armenia – 302.723 Hab. (Proyección DANE 2024)",
  location: "Quindío está ubicado en el centro-occidente de Colombia, en la región andina, sobre la Cordillera Central. Limita con los departamentos de Risaralda, Valle del Cauca y Tolima.",
  zonas: [
    {
      name: "Región	Valle",
      imageUrl: "/subregion-valle-quindio.jpg",
      surface: "435 km²",
      population: "110.000 habitantes (Proyección 2024)",
      density: "252,87 hab/km²",
      capital: "Montenegro",
      location: "Oeste del departamento, entre las cordilleras Central y Occidental",
      description: "Conocida por su producción cafetera y atractivos turísticos como el Parque del Café y PANACA. Se destaca por el turismo agrícola y la cultura cafetera.",
      municipios: [
        { name: "La Tebaida", link: "/regiones/quindio/valle/la-tebaida" },
        { name: "Montenegro", link: "/regiones/quindio/valle/montenegro" },
        { name: "Quimbaya", link: "/regiones/quindio/valle/quimbaya" }
      ]
    },
    {
      name: "Regi	 Norte",
      imageUrl: "/subregion-norte-quindio.jpg",
      surface: "91 km²",
      population: "30.000 habitantes (Proyección 2024)",
      density: "329,67 hab/km²",
      capital: "Circasia",
      location: "Norte del departamento, en la vertiente occidental de la Cordillera Central",
      description: "Conocida por el Cementerio Libre de Circasia, símbolo de libertad e igualdad. Ofrece atractivos como la Reserva Natural de Bremen La Popa y diversos sitios históricos.",
      municipios: [
        { name: "Circasia", link: "/regiones/quindio/norte/circasia" }
      ]
    },
    {
      name: "Regi	 Fría",
      imageUrl: "/subregion-fria-quindio.jpg",
      surface: "450 km²",
      population: "40.000 habitantes (Proyección 2024)",
      density: "88,89 hab/km²",
      capital: "Salento",
      location: "Noreste del departamento, incluyendo el Valle del Cocora",
      description: "Famosa por el místico Valle del Cocora y sus palmas de cera. Ofrece atractivos naturales como el Parque Nacional de los Nevados y senderos ecológicos. Destaca por su arquitectura colonial y belleza paisajística.",
      municipios: [
        { name: "Filandia", link: "/regiones/quindio/fria/filandia" },
        { name: "Salento", link: "/regiones/quindio/fria/salento" }
      ]
    },
    {
      name: "Regi	 Cordillerana",
      imageUrl: "/subregion-cordillerana-quindio.jpg",
      surface: "520 km²",
      population: "25.000 habitantes (Proyección 2024)",
      density: "48,08 hab/km²",
      capital: "Pijao",
      location: "Sur del departamento, sobre la Cordillera Central",
      description: "Caracterizada por su geografía escarpada y potencial en turismo paisajístico. Ofrece atractivos naturales como reservas, lagunas y cerros, ideal para deportes extremos y ecoturismo.",
      municipios: [
        { name: "Córdoba", link: "/regiones/quindio/cordillerana/cordoba" },
        { name: "Génova", link: "/regiones/quindio/cordillerana/genova" },
        { name: "Pijao", link: "/regiones/quindio/cordillerana/pijao" }
      ]
    },
    {
      name: "Regi	 Capital",
      imageUrl: "/subregion-capital-quindio.jpg",
      surface: "349 km²",
      population: "357.114 habitantes (Proyección 2024)",
      density: "1023,25 hab/km²",
      capital: "Armenia",
      location: "Centro del departamento",
      description: "Centro administrativo y económico del Quindío. Combina zonas urbanas con rurales, destacando en comercio, agricultura y turismo. Ofrece atractivos como el Jardín Botánico del Quindío y el Museo del Oro Quimbaya.",
      municipios: [
        { name: "Armenia", link: "/regiones/quindio/capital/armenia" },
        { name: "Buenavista", link: "/regiones/quindio/capital/buenavista" },
        { name: "Calarcá", link: "/regiones/quindio/capital/calarca" }
      ]
    }
  ]
};