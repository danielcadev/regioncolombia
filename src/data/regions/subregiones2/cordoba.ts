// subregiones/cordoba.ts
import { SubRegion } from '@/types/regions';

export const cordoba: SubRegion = {
    name: "Córdoba",
    insigniaUrl: "/CORDOBA.png",
    description: "7 REGIONES DE CÓRDOBA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
    interestPlaces: [
      "Bahía de Cispatá",
      "Parque Nacional Natural Paramillo",
      "Playas de Coveñas",
      "Ciénaga de Ayapel",
      "Volcanes de lodo de San Antero",
      "Centro Histórico de Santa Cruz de Lorica"
    ],
    communityProjects: "Córdoba se destaca por sus iniciativas comunitarias en agroecología, conservación de humedales y turismo rural sostenible.",
    sustainableDevelopment: "La región impulsa proyectos de ganadería sostenible, protección de manglares y energías limpias.",
    imageUrl: "/cordoba.jpg",
    surface: "23.980 km²",
    population: "1'900.000 Hab. (Proyección DANE 2024)",
    density: "79,2 Hab/Km²",
    capital: "Montería – 500.000 Hab. (Proyección DANE 2024)",
    location: "Córdoba está ubicado en el norte de Colombia, en la región Caribe, caracterizado por una geografía diversa que incluye costas en el Mar Caribe, el valle del río Sinú, sabanas y zonas montañosas del Nudo de Paramillo, ofreciendo una rica biodiversidad y una fuerte tradición cultural caribeña.",
    zonas: [
    {
      name: "Región Sinú Medio",
      imageUrl: "/sinu-medio-cordoba.jpg",
      surface: "5.678 km²",
      population: "450.000 habitantes",
      density: "79,25 hab/km²",
      capital: "Montería",
      location: "Centro del departamento de Córdoba, en el valle del río Sinú",
      description: "La Región Sinú Medio de Córdoba, hacia 2024, se ha consolidado como un importante centro agroindustrial y de innovación en desarrollo sostenible. Caracterizada por sus extensas llanuras fértiles y la riqueza hídrica del río Sinú, la región ha logrado un equilibrio entre el desarrollo económico y la conservación ambiental. Se destaca por su producción agrícola tecnificada, la ganadería sostenible, y el impulso de energías renovables. La región ha implementado exitosos programas de adaptación al cambio climático, gestión integral del agua y conservación de la biodiversidad, convirtiéndose en un modelo de desarrollo territorial sostenible en Colombia.",
      municipios: [
        { name: "Montería", link: "/regiones/cordoba/sinu-medio/monteria" },
        { name: "Cereté", link: "/regiones/cordoba/sinu-medio/cerete" },
        { name: "San Pelayo", link: "/regiones/cordoba/sinu-medio/san-pelayo" },
        { name: "Ciénaga de Oro", link: "/regiones/cordoba/sinu-medio/cienaga-de-oro" }
      ]
    },
    {
      name: "Región San Jorge",
      imageUrl: "/san-jorge-cordoba.jpg",
      surface: "5.904 km²",
      population: "300.000 habitantes",
      density: "50,81 hab/km²",
      capital: "Montelíbano",
      location: "Sur del departamento de Córdoba, en la cuenca del río San Jorge",
      description: "La Región San Jorge de Córdoba, hacia 2024, se ha transformado en un modelo de desarrollo sostenible y recuperación ambiental. Caracterizada por su riqueza hídrica, biodiversidad y recursos minerales, la región ha logrado un equilibrio entre la actividad minera responsable, la agricultura sostenible y la conservación ecosistémica. Se destaca por la implementación de tecnologías limpias en la extracción de níquel, la recuperación de áreas degradadas, el desarrollo de cadenas productivas agroecológicas y el fortalecimiento del turismo de naturaleza. La región ha avanzado significativamente en la reducción de la pobreza, la mejora de la infraestructura y la protección de su patrimonio natural y cultural.",
      municipios: [
        { name: "Montelíbano", link: "/regiones/cordoba/san-jorge/montelibano" },
        { name: "Puerto Libertador", link: "/regiones/cordoba/san-jorge/puerto-libertador" },
        { name: "San José de Uré", link: "/regiones/cordoba/san-jorge/san-jose-de-ure" },
        { name: "La Apartada", link: "/regiones/cordoba/san-jorge/la-apartada" },
        { name: "Buenavista", link: "/regiones/cordoba/san-jorge/buenavista" }
      ]
    },
    {
      name: "Región Costanera",
      imageUrl: "/costanera-cordoba.jpg",
      surface: "4.893 km²",
      population: "180.000 habitantes",
      density: "36,79 hab/km²",
      capital: "Lorica",
      location: "Norte del departamento de Córdoba, en la costa del Mar Caribe",
      description: "La Región Costanera de Córdoba, hacia 2024, se ha transformado en un modelo de desarrollo sostenible que integra la conservación de ecosistemas costeros con el crecimiento económico. Caracterizada por sus playas, manglares, ciénagas y la desembocadura del río Sinú, la región ha logrado potenciar su riqueza natural y cultural. Se destaca por el desarrollo de un turismo sostenible de alto valor, la implementación de prácticas pesqueras responsables, la producción acuícola innovadora y la protección efectiva de sus ecosistemas marino-costeros. La región ha mejorado significativamente su resiliencia ante el cambio climático, implementando soluciones basadas en la naturaleza para la protección costera y la adaptación de comunidades vulnerables.",
      municipios: [
        { name: "Lorica", link: "/regiones/cordoba/costanera/lorica" },
        { name: "San Bernardo del Viento", link: "/regiones/cordoba/costanera/san-bernardo-del-viento" },
        { name: "Moñitos", link: "/regiones/cordoba/costanera/monitos" },
        { name: "Puerto Escondido", link: "/regiones/cordoba/costanera/puerto-escondido" },
        { name: "Los Córdobas", link: "/regiones/cordoba/costanera/los-cordobas" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/centro-cordoba.jpg",
      surface: "3.141 km²",
      population: "420.000 habitantes",
      density: "133,71 hab/km²",
      capital: "Montería",
      location: "Centro del departamento de Córdoba, en el valle del río Sinú",
      description: "La Región Centro de Córdoba, hacia 2024, se ha consolidado como el núcleo de desarrollo económico y social del departamento. Caracterizada por su ubicación estratégica en el valle del río Sinú, la región ha logrado un equilibrio entre el crecimiento urbano sostenible y la preservación de su riqueza natural y agrícola. Se destaca por su innovación en agroindustria, el desarrollo de un ecosistema de emprendimiento dinámico, la implementación de soluciones de movilidad sostenible y la conservación activa de sus recursos hídricos. La región ha fortalecido su identidad cultural, integrando las tradiciones sinuanas con una visión moderna y cosmopolita, convirtiéndose en un referente de desarrollo inclusivo y sostenible en la costa Caribe colombiana.",
      municipios: [
        { name: "Montería", link: "/regiones/cordoba/centro/monteria" },
        { name: "Cereté", link: "/regiones/cordoba/centro/cerete" },
        { name: "San Carlos", link: "/regiones/cordoba/centro/san-carlos" },
        { name: "San Pelayo", link: "/regiones/cordoba/centro/san-pelayo" },
        { name: "Ciénaga de Oro", link: "/regiones/cordoba/centro/cienaga-de-oro" }
      ]
    },
    {
      name: "Región Bajo Sinú",
      imageUrl: "/bajo-sinu-cordoba.jpg",
      surface: "2.754 km²",
      population: "250.000 habitantes",
      density: "90,78 hab/km²",
      capital: "Lorica",
      location: "Norte del departamento de Córdoba, en la parte baja del río Sinú",
      description: "La Región Bajo Sinú de Córdoba, hacia 2024, se ha transformado en un modelo de desarrollo sostenible que integra la gestión integral de recursos hídricos con el crecimiento económico inclusivo. Caracterizada por su complejo sistema de ciénagas, la desembocadura del río Sinú y su rica herencia cultural, la región ha logrado potenciar su vocación agrícola, pesquera y turística de manera sostenible. Se destaca por la implementación de sistemas de producción agroacuáticos adaptados al ciclo de inundaciones, el desarrollo de un turismo de naturaleza y cultural de alto valor, y la conservación activa de sus ecosistemas de humedales. La región ha mejorado significativamente su resiliencia ante el cambio climático, implementando soluciones basadas en la naturaleza y fortaleciendo las capacidades adaptativas de sus comunidades.",
      municipios: [
        { name: "Lorica", link: "/regiones/cordoba/bajo-sinu/lorica" },
        { name: "Purísima", link: "/regiones/cordoba/bajo-sinu/purisima" },
        { name: "Momil", link: "/regiones/cordoba/bajo-sinu/momil" },
        { name: "Chimá", link: "/regiones/cordoba/bajo-sinu/chima" },
        { name: "Cotorra", link: "/regiones/cordoba/bajo-sinu/cotorra" }
      ]
    },
    {
      name: "Región Alto Sinú",
      imageUrl: "/alto-sinu-cordoba.jpg",
      surface: "5.696 km²",
      population: "220.000 habitantes",
      density: "38,62 hab/km²",
      capital: "Tierralta",
      location: "Sur del departamento de Córdoba, en la parte alta del río Sinú",
      description: "La Región Alto Sinú de Córdoba, hacia 2024, se ha consolidado como un modelo de desarrollo sostenible que equilibra la conservación de su rica biodiversidad con el progreso económico y social. Caracterizada por su complejo sistema montañoso, que incluye parte del Parque Nacional Natural Paramillo, y por ser la cuenca alta del río Sinú, la región ha logrado potenciar su vocación ecoturística, agrícola y de generación de energía limpia. Se destaca por la implementación de sistemas agroforestales innovadores, el desarrollo de un turismo de naturaleza de alto valor, y la gestión integral y sostenible de sus recursos hídricos. La región ha fortalecido significativamente sus prácticas de conservación, implementando corredores biológicos y programas de protección de especies emblemáticas, mientras mejora las condiciones de vida de sus comunidades, incluyendo los pueblos indígenas Embera Katío.",
      municipios: [
        { name: "Tierralta", link: "/regiones/cordoba/alto-sinu/tierralta" },
        { name: "Valencia", link: "/regiones/cordoba/alto-sinu/valencia" }
      ]
    }
  ]
};