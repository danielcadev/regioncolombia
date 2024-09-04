// subregiones/magdalena.ts
import { SubRegion } from '@/types/regions';


export const magdalena: SubRegion = {
    name: "Magdalena",
    insigniaUrl: "/MAGDALENA.png",
    description: "5 REGIONES DEL MAGDALENA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
    interestPlaces: [
      "Parque Nacional Natural Tayrona",
      "Centro Histórico de Santa Marta",
      "Ciénaga Grande de Santa Marta",
      "Pueblo Palafítico de Nueva Venecia",
      "Sierra Nevada de Santa Marta",
      "Playas de Bahía Concha"
    ],
    communityProjects: "El Magdalena se distingue por sus iniciativas comunitarias en ecoturismo de montaña y playa, conservación de la Sierra Nevada y desarrollo sostenible en la Ciénaga Grande.",
    sustainableDevelopment: "La región implementa proyectos de protección de ecosistemas marinos y de montaña, turismo responsable y agricultura orgánica.",
    imageUrl: "/magdalena.jpg",
    surface: "23.188 km²",
    population: "1'450.000 Hab. (Proyección DANE 2024)",
    density: "62,5 Hab/Km²",
    capital: "Santa Marta – 550.000 Hab. (Proyección DANE 2024)",
    location: "El Magdalena está ubicado en el norte de Colombia, en la región Caribe. Su geografía es diversa, incluyendo costas en el Mar Caribe, la Sierra Nevada de Santa Marta (la montaña costera más alta del mundo), ciénagas, y parte del valle del río Magdalena.",
    zonas: [
    {
      name: "Región Sur",
      imageUrl: "/sur-magdalena.jpg",
      surface: "7.580 km²",
      population: "280.000 habitantes",
      density: "36,94 hab/km²",
      capital: "El Banco",
      location: "Sur del departamento del Magdalena, en la confluencia de los ríos Magdalena y Cesar",
      description: "La Región Sur del Magdalena, hacia 2024, se ha transformado en un modelo de desarrollo sostenible que integra la gestión de recursos hídricos con el crecimiento económico inclusivo. Caracterizada por su complejo sistema de ciénagas, la confluencia de importantes ríos y su rica biodiversidad, la región ha potenciado su vocación agrícola, pesquera y ecoturística de manera sostenible. Se destaca por la implementación de sistemas agroproductivos adaptados a ciclos de inundación, el desarrollo de un turismo de naturaleza responsable, y la conservación activa de sus ecosistemas acuáticos. La región ha mejorado significativamente su conectividad fluvial y terrestre, fortaleciendo la integración regional y la resiliencia ante el cambio climático.",
      municipios: [
        { name: "El Banco", link: "/regiones/magdalena/sur/el-banco" },
        { name: "Guamal", link: "/regiones/magdalena/sur/guamal" },
        { name: "San Sebastián de Buenavista", link: "/regiones/magdalena/sur/san-sebastian-de-buenavista" },
        { name: "San Zenón", link: "/regiones/magdalena/sur/san-zenon" },
        { name: "Pijiño del Carmen", link: "/regiones/magdalena/sur/pijino-del-carmen" }
      ]
    },
    {
      name: "Región Santa Marta",
      imageUrl: "/santa-marta-magdalena.jpg",
      surface: "2.393 km²",
      population: "550.000 habitantes",
      density: "229,84 hab/km²",
      capital: "Santa Marta",
      location: "Norte del departamento del Magdalena, en la costa del Mar Caribe",
      description: "La Región de Santa Marta, hacia 2024, se ha consolidado como un destino turístico sostenible de clase mundial y un polo de desarrollo que integra innovación, conservación y cultura. Caracterizada por su diversidad de ecosistemas que van desde playas caribeñas hasta las nieves perpetuas de la Sierra Nevada, la región ha logrado un equilibrio entre el desarrollo urbano, la preservación ambiental y la puesta en valor de su rico patrimonio histórico y cultural. Se destaca por la implementación de soluciones urbanas inteligentes, el desarrollo de un turismo de alto valor agregado y bajo impacto, y la consolidación de iniciativas de economía azul y verde. La región ha fortalecido significativamente su resiliencia ante el cambio climático y se ha posicionado como un referente en desarrollo sostenible en el Caribe colombiano.",
      municipios: [
        { name: "Santa Marta", link: "/regiones/magdalena/santa-marta/santa-marta" }
      ]
    },
    {
      name: "Región Río Magdalena",
      imageUrl: "/rio-magdalena-region.jpg",
      surface: "3.850 km²",
      population: "320.000 habitantes",
      density: "83,12 hab/km²",
      capital: "Plato",
      location: "Occidente del departamento del Magdalena, a lo largo del río Magdalena",
      description: "La Región Río Magdalena, hacia 2024, se ha transformado en un corredor de desarrollo sostenible que aprovecha la importancia del río como eje de conectividad y fuente de vida. Caracterizada por su estrecha relación con el río Magdalena, sus extensas llanuras aluviales y su rica biodiversidad, la región ha potenciado su vocación agrícola, pesquera y logística de manera sostenible. Se destaca por la implementación de sistemas de producción adaptados a los ciclos del río, el desarrollo de un transporte fluvial moderno y ecoeficiente, y la conservación activa de los ecosistemas ribereños. La región ha mejorado significativamente su resiliencia ante inundaciones y ha fortalecido su papel como nodo estratégico en la conectividad nacional.",
      municipios: [
        { name: "Plato", link: "/regiones/magdalena/rio-magdalena/plato" },
        { name: "Tenerife", link: "/regiones/magdalena/rio-magdalena/tenerife" },
        { name: "Pedraza", link: "/regiones/magdalena/rio-magdalena/pedraza" },
        { name: "Zapayán", link: "/regiones/magdalena/rio-magdalena/zapayan" },
        { name: "Concordia", link: "/regiones/magdalena/rio-magdalena/concordia" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-magdalena.jpg",
      surface: "5.250 km²",
      population: "280.000 habitantes",
      density: "53,33 hab/km²",
      capital: "Ciénaga",
      location: "Norte del departamento del Magdalena, entre la Sierra Nevada de Santa Marta y el Mar Caribe",
      description: "La Región Norte del Magdalena, hacia 2024, se ha consolidado como un modelo de desarrollo sostenible que integra la conservación de la biodiversidad, el turismo responsable y la producción agrícola innovadora. Caracterizada por su diversidad geográfica que incluye zonas costeras, valles fértiles y estribaciones de la Sierra Nevada, la región ha potenciado su vocación agroindustrial, turística y portuaria de manera sostenible. Se destaca por la implementación de prácticas agrícolas regenerativas, el desarrollo de un turismo de naturaleza y cultural de alto valor, y la conservación activa de sus ecosistemas costeros y de montaña. La región ha mejorado significativamente su conectividad y ha fortalecido su resiliencia ante el cambio climático, posicionándose como un referente en sostenibilidad en el Caribe colombiano.",
      municipios: [
        { name: "Ciénaga", link: "/regiones/magdalena/norte/cienaga" },
        { name: "Zona Bananera", link: "/regiones/magdalena/norte/zona-bananera" },
        { name: "Puebloviejo", link: "/regiones/magdalena/norte/puebloviejo" },
        { name: "Sitionuevo", link: "/regiones/magdalena/norte/sitionuevo" },
        { name: "Aracataca", link: "/regiones/magdalena/norte/aracataca" }
      ]
    },
    {
      name: "Región Centro",
      imageUrl: "/centro-magdalena.jpg",
      surface: "4.720 km²",
      population: "210.000 habitantes",
      density: "44,49 hab/km²",
      capital: "Fundación",
      location: "Centro del departamento del Magdalena, entre la Sierra Nevada de Santa Marta y el río Magdalena",
      description: "La Región Centro del Magdalena, hacia 2024, se ha transformado en un núcleo de desarrollo agroindustrial sostenible y un corredor estratégico de biodiversidad. Caracterizada por su variedad geográfica que incluye zonas de piedemonte de la Sierra Nevada, llanuras fértiles y áreas de bosque seco tropical, la región ha potenciado su vocación agrícola, ganadera y de conservación de manera innovadora. Se destaca por la implementación de sistemas agroforestales, el desarrollo de una ganadería sostenible, y la consolidación de iniciativas de turismo rural comunitario. La región ha fortalecido significativamente su conectividad vial y digital, mejorando la integración entre sus municipios y posicionándose como un eje articulador entre las zonas norte y sur del departamento.",
      municipios: [
        { name: "Fundación", link: "/regiones/magdalena/centro/fundacion" },
        { name: "Ariguaní", link: "/regiones/magdalena/centro/ariguani" },
        { name: "Pivijay", link: "/regiones/magdalena/centro/pivijay" },
        { name: "Algarrobo", link: "/regiones/magdalena/centro/algarrobo" },
        { name: "Sabanas de San Ángel", link: "/regiones/magdalena/centro/sabanas-de-san-angel" }
      ]
    }
  ]
};