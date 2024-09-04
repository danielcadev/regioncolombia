// subregiones/sucre.ts
import { SubRegion } from '@/types/regions';

export const sucre: SubRegion = {
    name: "Sucre",
    insigniaUrl: "/SUCRE.png",
    description: "5 REGIONES DE SUCRE DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
    interestPlaces: [
      "Golfo de Morrosquillo",
      "Coveñas",
      "Santuario de Fauna y Flora El Corchal 'El Mono Hernández'",
      "Reserva Natural Sanguaré",
      "Ciénaga de La Caimanera",
      "Centro Histórico de Sincelejo"
    ],
    communityProjects: "Sucre se distingue por sus iniciativas comunitarias en ecoturismo costero, artesanías sostenibles y conservación de ecosistemas de sabana.",
    sustainableDevelopment: "La región implementa proyectos de pesca responsable, agricultura climáticamente inteligente y protección de manglares.",
    imageUrl: "/sucre.jpg",
    surface: "10.670 km²",
    population: "950.000 Hab. (Proyección DANE 2024)",
    density: "89 Hab/Km²",
    capital: "Sincelejo – 300.000 Hab. (Proyección DANE 2024)",
    location: "Sucre está ubicado en el norte de Colombia, en la región Caribe. Su geografía es diversa, incluyendo costas en el Golfo de Morrosquillo, sabanas, ciénagas y una pequeña zona montañosa, ofreciendo una variedad de ecosistemas que van desde manglares hasta bosques secos tropicales.",
    zonas: [
    {
      name: "Región Mojana",
      imageUrl: "/mojana-sucre.jpg",
      surface: "2.337 km²",
      population: "110.000 habitantes",
      density: "47,07 hab/km²",
      capital: "Sucre",
      location: "Sur del departamento de Sucre, en la depresión momposina",
      description: "La Región Mojana de Sucre, hacia 2024, se ha transformado en un modelo de adaptación al cambio climático y gestión sostenible de ecosistemas inundables. Caracterizada por su complejo sistema de ciénagas, caños y zapales, la región ha desarrollado estrategias innovadoras para convivir con el agua, aprovechando su potencial productivo mientras se protege su rica biodiversidad. Se destaca por su producción agrícola y pesquera adaptada a los ciclos de inundación, el ecoturismo de humedales y la implementación de tecnologías verdes para la resiliencia comunitaria. La mejora en la infraestructura adaptativa y el fortalecimiento de las capacidades locales han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Sucre", link: "/regiones/sucre/mojana/sucre" },
        { name: "Majagual", link: "/regiones/sucre/mojana/majagual" },
        { name: "Guaranda", link: "/regiones/sucre/mojana/guaranda" }
      ]
    },
    {
      name: "Región San Jorge",
      imageUrl: "/san-jorge-sucre.jpg",
      surface: "2.934 km²",
      population: "135.000 habitantes",
      density: "46,01 hab/km²",
      capital: "San Marcos",
      location: "Sur del departamento de Sucre, en la cuenca del río San Jorge",
      description: "La Región San Jorge de Sucre, hacia 2024, se ha consolidado como un territorio de innovación en el manejo sostenible de recursos hídricos y la ganadería ecológica. Caracterizada por su complejo sistema de ciénagas y sabanas inundables, la región ha logrado un equilibrio entre la producción agropecuaria, la conservación de la biodiversidad y la adaptación al cambio climático. Se destaca por la implementación de sistemas silvopastoriles, el desarrollo de ecoturismo comunitario y la recuperación de saberes tradicionales en el manejo del agua. La mejora en la gobernanza ambiental y el fortalecimiento de las cadenas de valor sostenibles han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "San Marcos", link: "/regiones/sucre/san-jorge/san-marcos" },
        { name: "San Benito Abad", link: "/regiones/sucre/san-jorge/san-benito-abad" },
        { name: "La Unión", link: "/regiones/sucre/san-jorge/la-union" },
        { name: "Caimito", link: "/regiones/sucre/san-jorge/caimito" }
      ]
    },
    {
      name: "Región Sabanas",
      imageUrl: "/sabanas-sucre.jpg",
      surface: "2.101 km²",
      population: "180.000 habitantes",
      density: "85,67 hab/km²",
      capital: "Sincelejo",
      location: "Centro-norte del departamento de Sucre",
      description: "La Región Sabanas de Sucre, hacia 2024, se ha consolidado como un polo de desarrollo agroindustrial sostenible y hub de innovación tecnológica del Caribe colombiano. Caracterizada por sus extensas llanuras y su clima tropical de sabana, la región ha logrado un notable equilibrio entre la modernización de su sector agropecuario, la conservación de sus ecosistemas nativos y el desarrollo urbano sostenible. Se destaca por la implementación de prácticas agrícolas climáticamente inteligentes, el desarrollo de energías renovables, y la preservación de su rica cultura y tradiciones. La mejora en la infraestructura, la diversificación económica y la implementación de soluciones tecnológicas han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Sincelejo", link: "/regiones/sucre/sabanas/sincelejo" },
        { name: "Corozal", link: "/regiones/sucre/sabanas/corozal" },
        { name: "Sampués", link: "/regiones/sucre/sabanas/sampues" },
        { name: "Los Palmitos", link: "/regiones/sucre/sabanas/los-palmitos" },
        { name: "Morroa", link: "/regiones/sucre/sabanas/morroa" },
        { name: "Buenavista", link: "/regiones/sucre/sabanas/buenavista" },
        { name: "San Juan de Betulia", link: "/regiones/sucre/sabanas/san-juan-de-betulia" },
        { name: "Sincé", link: "/regiones/sucre/sabanas/since" },
        { name: "El Roble", link: "/regiones/sucre/sabanas/el-roble" },
        { name: "San Pedro", link: "/regiones/sucre/sabanas/san-pedro" },
        { name: "Galeras", link: "/regiones/sucre/sabanas/galeras" }
      ]
    },
    {
      name: "Región Montes de María",
      imageUrl: "/montes-de-maria-sucre.jpg",
      surface: "1.104 km²",
      population: "125.000 habitantes",
      density: "113,22 hab/km²",
      capital: "Ovejas",
      location: "Noroeste del departamento de Sucre, en la serranía de los Montes de María",
      description: "La Región Montes de María de Sucre, hacia 2024, se ha transformado en un territorio de paz, reconciliación y desarrollo sostenible. Históricamente afectada por el conflicto armado, la región ha experimentado una notable recuperación económica, social y ambiental. Se destaca por su producción agrícola diversificada y orgánica, el turismo rural comunitario, la preservación de su rica biodiversidad y la implementación de iniciativas de memoria histórica y construcción de paz. El fortalecimiento del tejido social, la implementación de programas de desarrollo rural integral y la promoción de la cultura y tradiciones locales han impulsado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Ovejas", link: "/regiones/sucre/montes-de-maria/ovejas" },
        { name: "Chalán", link: "/regiones/sucre/montes-de-maria/chalan" },
        { name: "Colosó", link: "/regiones/sucre/montes-de-maria/coloso" },
        { name: "Morroa", link: "/regiones/sucre/montes-de-maria/morroa" },
        { name: "Los Palmitos", link: "/regiones/sucre/montes-de-maria/los-palmitos" }
      ]
    },
    {
      name: "Región Golfo de Morrosquillo",
      imageUrl: "/golfo-morrosquillo-sucre.jpg",
      surface: "1.886 km²",
      population: "170.000 habitantes",
      density: "90,14 hab/km²",
      capital: "Tolú",
      location: "Norte del departamento de Sucre, en la costa del Mar Caribe",
      description: "La Región Golfo de Morrosquillo, hacia 2024, se ha consolidado como un importante destino turístico sostenible en la costa caribe colombiana. Se caracteriza por sus hermosas playas, manglares y una rica biodiversidad marina. En los últimos años, ha experimentado un desarrollo significativo en infraestructura turística eco-amigable, conservación ambiental y proyectos de energía renovable. La región ha logrado un equilibrio entre el desarrollo económico, principalmente impulsado por el turismo y la pesca sostenible, y la preservación de sus ecosistemas costeros y marinos. Se destaca por la implementación de prácticas de turismo comunitario que benefician directamente a las poblaciones locales.",
      municipios: [
        { name: "Tolú", link: "/regiones/sucre/golfo-morrosquillo/tolu" },
        { name: "Coveñas", link: "/regiones/sucre/golfo-morrosquillo/covenas" },
        { name: "San Onofre", link: "/regiones/sucre/golfo-morrosquillo/san-onofre" },
        { name: "Tolúviejo", link: "/regiones/sucre/golfo-morrosquillo/toluviejo" },
        { name: "San Antonio de Palmito", link: "/regiones/sucre/golfo-morrosquillo/san-antonio-palmito" }
      ]
    }
  ]
};