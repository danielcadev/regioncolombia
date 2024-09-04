// subregiones/atlantico.ts
import { SubRegion } from '@/types/regions';

export const atlantico: SubRegion = {
    name: "Atlántico",
    insigniaUrl: "/ATLANTICO.png",
    description: "4 REGIONES DEL ATLÁNTICO DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
    interestPlaces: [
      "Playas de Puerto Colombia",
      "Volcán del Totumo",
      "Parque Biotemático Megua",
      "Embalse del Guájaro",
      "Bocas de Ceniza",
      "Museo del Caribe en Barranquilla"
    ],
    communityProjects: "El Atlántico se destaca por sus iniciativas comunitarias en innovación social, turismo cultural urbano y conservación de ecosistemas costeros.",
    sustainableDevelopment: "La región impulsa proyectos de economía circular, movilidad sostenible y adaptación al cambio climático en zonas costeras.",
    imageUrl: "/atlantico.jpg",
    surface: "3.388 km²",
    population: "2'800.000 Hab. (Proyección DANE 2024)",
    density: "826,7 Hab/Km²",
    capital: "Barranquilla – 1'300.000 Hab. (Proyección DANE 2024)",
    location: "El Atlántico está ubicado en el norte de Colombia, en la región Caribe, caracterizado por su costa en el Mar Caribe, el delta del río Magdalena, y una geografía predominantemente llana con algunas elevaciones menores.",
    zonas: [
    {
      name: "Región Sur",
      imageUrl: "/sur-atlantico.jpg",
      surface: "680 km²",
      population: "150.000 habitantes",
      density: "220,59 hab/km²",
      capital: "Manatí",
      location: "Sur del departamento del Atlántico, limitando con el departamento de Bolívar",
      description: "La Región Sur del Atlántico, hacia 2024, se ha transformado en un ejemplo de resiliencia y adaptación al cambio climático. Caracterizada por su llanura aluvial y su cercanía al Canal del Dique, la región ha desarrollado estrategias innovadoras para la gestión del riesgo de inundaciones y la reactivación económica sostenible. Se destaca por la implementación de sistemas agroproductivos adaptados a condiciones climáticas cambiantes, el desarrollo de un turismo de naturaleza enfocado en sus cuerpos de agua, y la consolidación de una economía circular basada en la innovación social. La región ha fortalecido significativamente su infraestructura verde, mejorando la conectividad ecológica y la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Manatí", link: "/regiones/atlantico/sur/manati" },
        { name: "Candelaria", link: "/regiones/atlantico/sur/candelaria" },
        { name: "Campo de la Cruz", link: "/regiones/atlantico/sur/campo-de-la-cruz" },
        { name: "Santa Lucía", link: "/regiones/atlantico/sur/santa-lucia" },
        { name: "Suan", link: "/regiones/atlantico/sur/suan" }
      ]
    },
    {
      name: "Región Occidente",
      imageUrl: "/occidente-atlantico.jpg",
      surface: "875 km²",
      population: "180.000 habitantes",
      density: "205,71 hab/km²",
      capital: "Sabanalarga",
      location: "Oeste del departamento del Atlántico, limitando con el departamento de Bolívar y el Canal del Dique",
      description: "La Región Occidente del Atlántico, hacia 2024, se ha consolidado como un polo de desarrollo agroindustrial sostenible y un ejemplo de gestión integrada de recursos hídricos. Caracterizada por su relieve ondulado, sus sistemas de arroyos y su cercanía al Canal del Dique, la región ha potenciado su vocación agrícola y ganadera con prácticas innovadoras y ambientalmente responsables. Se destaca por la implementación de sistemas de riego eficientes, el desarrollo de una industria láctea de alto valor agregado, y la consolidación de corredores ecológicos que mejoran la conectividad entre ecosistemas. La región ha fortalecido significativamente su infraestructura vial y logística, convirtiéndose en un nodo estratégico para la conectividad del departamento.",
      municipios: [
        { name: "Sabanalarga", link: "/regiones/atlantico/occidente/sabanalarga" },
        { name: "Luruaco", link: "/regiones/atlantico/occidente/luruaco" },
        { name: "Repelón", link: "/regiones/atlantico/occidente/repelon" },
        { name: "Manatí", link: "/regiones/atlantico/occidente/manati" },
        { name: "Candelaria", link: "/regiones/atlantico/occidente/candelaria" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-atlantico.jpg",
      surface: "626 km²",
      population: "240.000 habitantes",
      density: "383,39 hab/km²",
      capital: "Baranoa",
      location: "Norte del departamento del Atlántico, limitando con el Mar Caribe",
      description: "La Región Norte del Atlántico, hacia 2024, se ha transformado en un polo de desarrollo turístico sostenible y de innovación en economía azul. Caracterizada por su costa caribeña, sus extensiones de manglares y su proximidad al área metropolitana de Barranquilla, la región ha logrado un equilibrio entre el desarrollo urbano, la conservación costera y el aprovechamiento sostenible de sus recursos marinos. Se destaca por la implementación de soluciones basadas en la naturaleza para la protección costera, el desarrollo de un turismo de alto valor agregado, y la consolidación de iniciativas de acuicultura sostenible y energías renovables marinas. La región ha fortalecido significativamente su resiliencia ante el cambio climático, convirtiéndose en un modelo de adaptación costera.",
      municipios: [
        { name: "Puerto Colombia", link: "/regiones/atlantico/norte/puerto-colombia" },
        { name: "Tubará", link: "/regiones/atlantico/norte/tubara" },
        { name: "Juan de Acosta", link: "/regiones/atlantico/norte/juan-de-acosta" },
        { name: "Piojó", link: "/regiones/atlantico/norte/piojo" },
        { name: "Usiacurí", link: "/regiones/atlantico/norte/usiacuri" }
      ]
    },
    {
      name: "Región Oriente",
      imageUrl: "/oriente-atlantico.jpg",
      surface: "432 km²",
      population: "750.000 habitantes",
      density: "1.736,11 hab/km²",
      capital: "Soledad",
      location: "Oriente del departamento del Atlántico, en la margen occidental del río Magdalena",
      description: "La Región Oriente del Atlántico, hacia 2024, se ha consolidado como un centro de innovación logística, desarrollo industrial sostenible y renovación urbana. Caracterizada por su ubicación estratégica junto al río Magdalena y su alta densidad poblacional, la región ha logrado un notable equilibrio entre el crecimiento económico, la sostenibilidad ambiental y la mejora de la calidad de vida urbana. Se destaca por la implementación de soluciones de movilidad inteligente, el desarrollo de parques industriales ecoeficientes, y la regeneración de espacios públicos verdes. La región ha fortalecido significativamente su resiliencia ante inundaciones y ha mejorado la gestión de recursos hídricos, convirtiéndose en un modelo de desarrollo urbano sostenible en la costa Caribe colombiana.",
      municipios: [
        { name: "Soledad", link: "/regiones/atlantico/oriente/soledad" },
        { name: "Malambo", link: "/regiones/atlantico/oriente/malambo" },
        { name: "Sabanagrande", link: "/regiones/atlantico/oriente/sabanagrande" },
        { name: "Santo Tomás", link: "/regiones/atlantico/oriente/santo-tomas" },
        { name: "Palmar de Varela", link: "/regiones/atlantico/oriente/palmar-de-varela" }
      ]
    }
  ]
};