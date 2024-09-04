// subregiones/bolivar.ts
import { SubRegion } from '@/types/regions';

export const bolivar: SubRegion = {
    name: "Bolívar",
    insigniaUrl: "/BOLIVAR.png",
    description: "6 REGIONES DE BOLIVAR DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
    interestPlaces: [
      "Cartagena de Indias",
      "Mompox",
      "Islas del Rosario",
      "Volcán del Totumo",
      "Jardín Botánico Guillermo Piñeres",
      "Canal del Dique"
    ],
    communityProjects: "Bolívar se distingue por sus iniciativas comunitarias en turismo cultural, conservación de ecosistemas marinos y desarrollo rural.",
    sustainableDevelopment: "La región implementa proyectos de energía renovable, gestión sostenible del agua y preservación del patrimonio histórico.",
    imageUrl: "/bolivar.jpg",
    surface: "25.978 km²",
    population: "2.180.976 Hab. (Proyección DANE 2024)",
    density: "84 Hab/Km²",
    capital: "Cartagena de Indias – 1.028.736 Hab. (Proyección DANE 2024)",
    location: "Bolívar está ubicado en el norte de Colombia, en la región Caribe, con costas sobre el mar Caribe y atravesado por el río Magdalena.",
    zonas:[
    {
      name: "Región Montes de María",
      imageUrl: "/montes-de-maria-bolivar.jpg",
      surface: "2.677 km²",
      population: "195.000 habitantes",
      density: "72,84 hab/km²",
      capital: "El Carmen de Bolívar",
      location: "Norte del departamento de Bolívar, en la región Caribe colombiana",
      description: "La subregión Montes de María, hacia 2024, se ha transformado en un territorio de paz y desarrollo sostenible. Históricamente afectada por el conflicto armado, la región ha experimentado una notable recuperación económica y social. Se destaca por su producción agrícola diversificada, el turismo rural comunitario y la preservación de su rica biodiversidad y patrimonio cultural. La implementación de programas de desarrollo rural integral, la consolidación de la paz y el fortalecimiento del tejido social han impulsado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "El Carmen de Bolívar", link: "/regiones/bolivar/montes-de-maria/el-carmen-de-bolivar" },
        { name: "San Juan Nepomuceno", link: "/regiones/bolivar/montes-de-maria/san-juan-nepomuceno" },
        { name: "San Jacinto", link: "/regiones/bolivar/montes-de-maria/san-jacinto" },
        { name: "María La Baja", link: "/regiones/bolivar/montes-de-maria/maria-la-baja" },
        { name: "Córdoba", link: "/regiones/bolivar/montes-de-maria/cordoba" },
        { name: "Zambrano", link: "/regiones/bolivar/montes-de-maria/zambrano" },
        { name: "El Guamo", link: "/regiones/bolivar/montes-de-maria/el-guamo" }
      ]
    },
    {
      name: "Región Mojana Bolivarense",
      imageUrl: "/mojana-bolivarense.jpg",
      surface: "3.890 km²",
      population: "150.000 habitantes",
      density: "38,56 hab/km²",
      capital: "Magangué",
      location: "Sur del departamento de Bolívar, en la depresión momposina",
      description: "La Mojana Bolivarense, hacia 2024, se ha convertido en un modelo de adaptación al cambio climático y gestión sostenible de ecosistemas inundables. Caracterizada por su complejo sistema de ciénagas y caños, la región ha desarrollado estrategias innovadoras para convivir con el agua, aprovechando su potencial productivo mientras se protege su rica biodiversidad. Se destaca por su producción agrícola y pesquera adaptada a los ciclos de inundación, el ecoturismo de humedales y la implementación de tecnologías verdes para la resiliencia comunitaria. La mejora en la infraestructura adaptativa y el fortalecimiento de las capacidades locales han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Magangué", link: "/regiones/bolivar/mojana-bolivarense/magangue" },
        { name: "Achí", link: "/regiones/bolivar/mojana-bolivarense/achi" },
        { name: "Montecristo", link: "/regiones/bolivar/mojana-bolivarense/montecristo" },
        { name: "San Jacinto del Cauca", link: "/regiones/bolivar/mojana-bolivarense/san-jacinto-del-cauca" },
        { name: "Tiquisio", link: "/regiones/bolivar/mojana-bolivarense/tiquisio" }
      ]
    },
    {
      name: "Región Magdalena Medio",
      imageUrl: "/magdalena-medio-bolivar.jpg",
      surface: "6.345 km²",
      population: "180.000 habitantes",
      density: "28,37 hab/km²",
      capital: "San Pablo",
      location: "Sur del departamento de Bolívar, en la cuenca media del río Magdalena",
      description: "La subregión Magdalena Medio de Bolívar, hacia 2024, se ha transformado en un territorio de paz y desarrollo sostenible. Históricamente afectada por el conflicto armado y la explotación de recursos naturales, la región ha logrado un notable equilibrio entre el desarrollo económico y la conservación ambiental. Se destaca por su producción agroindustrial sostenible, la implementación de energías renovables, y la preservación de sus ecosistemas ribereños. La mejora en la gobernanza territorial, el fortalecimiento de la economía local y la implementación de programas de reconciliación han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "San Pablo", link: "/regiones/bolivar/magdalena-medio/san-pablo" },
        { name: "Cantagallo", link: "/regiones/bolivar/magdalena-medio/cantagallo" },
        { name: "Santa Rosa del Sur", link: "/regiones/bolivar/magdalena-medio/santa-rosa-del-sur" },
        { name: "Simití", link: "/regiones/bolivar/magdalena-medio/simiti" },
        { name: "Morales", link: "/regiones/bolivar/magdalena-medio/morales" },
        { name: "Arenal", link: "/regiones/bolivar/magdalena-medio/arenal" }
      ]
    },
    {
      name: "Región Loba",
      imageUrl: "/loba-bolivar.jpg",
      surface: "3.610 km²",
      population: "95.000 habitantes",
      density: "26,32 hab/km²",
      capital: "Barranco de Loba",
      location: "Sur del departamento de Bolívar, en la margen izquierda del río Magdalena",
      description: "La Región Loba, hacia 2024, se ha consolidado como un territorio de innovación en la gestión sostenible de recursos hídricos y mineros. Caracterizada por su riqueza en oro y su complejo sistema de ciénagas y caños, la región ha logrado un notable equilibrio entre la actividad minera responsable, la agricultura resiliente al clima y la conservación de sus ecosistemas acuáticos. Se destaca por la implementación de tecnologías limpias en la minería artesanal, el desarrollo de sistemas agroproductivos adaptados a las dinámicas de inundación, y la promoción del ecoturismo comunitario. La mejora en la gobernanza local, el fortalecimiento de las cadenas de valor sostenibles y la implementación de programas de educación ambiental han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Barranco de Loba", link: "/regiones/bolivar/loba/barranco-de-loba" },
        { name: "San Martín de Loba", link: "/regiones/bolivar/loba/san-martin-de-loba" },
        { name: "Altos del Rosario", link: "/regiones/bolivar/loba/altos-del-rosario" },
        { name: "El Peñón", link: "/regiones/bolivar/loba/el-penon" },
        { name: "Hatillo de Loba", link: "/regiones/bolivar/loba/hatillo-de-loba" },
        { name: "Río Viejo", link: "/regiones/bolivar/loba/rio-viejo" }
      ]
    },
    {
      name: "Región Dique Bolivarense",
      imageUrl: "/dique-bolivarense.jpg",
      surface: "4.450 km²",
      population: "220.000 habitantes",
      density: "49,44 hab/km²",
      capital: "Cartagena de Indias",
      location: "Norte del departamento de Bolívar, en torno al Canal del Dique",
      description: "La Región Dique Bolivarense, hacia 2024, se ha transformado en un modelo de desarrollo sostenible y adaptación al cambio climático. Caracterizada por su complejo sistema hídrico que conecta el río Magdalena con el mar Caribe, la región ha logrado un equilibrio entre el desarrollo económico, la conservación ambiental y la resiliencia ante eventos climáticos extremos. Se destaca por su agricultura climáticamente inteligente, el ecoturismo fluvial, la implementación de soluciones basadas en la naturaleza para el control de inundaciones y la preservación de su rico patrimonio cultural. La mejora en la gobernanza del agua, el fortalecimiento de las cadenas de valor locales y la implementación de tecnologías verdes han elevado significativamente la calidad de vida de sus habitantes.",
      municipios: [
        { name: "Cartagena de Indias", link: "/regiones/bolivar/dique-bolivarense/cartagena" },
        { name: "Arjona", link: "/regiones/bolivar/dique-bolivarense/arjona" },
        { name: "Mahates", link: "/regiones/bolivar/dique-bolivarense/mahates" },
        { name: "San Estanislao", link: "/regiones/bolivar/dique-bolivarense/san-estanislao" },
        { name: "Santa Rosa de Lima", link: "/regiones/bolivar/dique-bolivarense/santa-rosa-de-lima" },
        { name: "Turbaco", link: "/regiones/bolivar/dique-bolivarense/turbaco" },
        { name: "Turbana", link: "/regiones/bolivar/dique-bolivarense/turbana" }
      ]
    },
    {
      name: "Región Momposina",
      imageUrl: "/momposina-bolivar.jpg",
      surface: "2.920 km²",
      population: "130.000 habitantes",
      density: "44,52 hab/km²",
      capital: "Mompox",
      location: "Centro del departamento de Bolívar, en la Depresión Momposina",
      description: "La Región Momposina, hacia 2024, se ha consolidado como un destino de turismo cultural y ecológico de clase mundial, manteniendo un delicado equilibrio entre la preservación de su patrimonio histórico y la adaptación a los desafíos ambientales. Caracterizada por su rica historia colonial, su artesanía en filigrana y su complejo sistema de ciénagas y caños, la región ha desarrollado estrategias innovadoras para convivir con los ciclos de inundación mientras potencia su economía local. Se destaca por la restauración de su arquitectura colonial, el desarrollo de una artesanía sostenible, la implementación de prácticas agrícolas adaptadas a humedales y la promoción del ecoturismo responsable.",
      municipios: [
        { name: "Mompox", link: "/regiones/bolivar/momposina/mompox" },
        { name: "Talaigua Nuevo", link: "/regiones/bolivar/momposina/talaigua-nuevo" },
        { name: "Cicuco", link: "/regiones/bolivar/momposina/cicuco" },
        { name: "San Fernando", link: "/regiones/bolivar/momposina/san-fernando" },
        { name: "Margarita", link: "/regiones/bolivar/momposina/margarita" },
        { name: "Pinillos", link: "/regiones/bolivar/momposina/pinillos" }
      ]
    }
  ]
};