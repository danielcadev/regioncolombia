import { SubRegion } from '@/types/regions';

export const antioquia: SubRegion = {
  name: "Antioquia",
  insigniaUrl: "/ANTIOQUIA.png",
  description: "9 REGIONES DE ANTIOQUIA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Piedra del Peñol",
    "Parque Arví",
    "Jardín",
    "Santa Fe de Antioquia",
    "Reserva Natural Cañón del Río Claro",
    "Parque Nacional Natural Las Orquídeas",
  ],
  communityProjects: "Antioquia se distingue por sus iniciativas comunitarias en ecoturismo, agricultura sostenible y preservación cultural.",
  sustainableDevelopment: "La región implementa proyectos de energía limpia, conservación de biodiversidad y desarrollo rural integral.",
  imageUrl: "/antioquia.jpg",
  surface: "63.612 km²",
  population: "6'677.930 Hab. (Proyección DANE 2024)",
  density: "105 Hab/Km²",
  capital: "Medellín – 2'533.424 Hab. (Proyección DANE 2024)",
  location: "Antioquia está ubicada en el noroeste de Colombia, con una diversidad geográfica que incluye costa caribeña, cordilleras andinas, valles y llanuras.",
  zonas:[
    {
        name: "Región de Urabá Antioqueño",
        imageUrl: "/antioquia.jpg",
        surface: "11.664 km²",
        population: "530.000 habitantes",
        density: "45,44 hab/km²",
        capital: "Apartadó",
        location: "Noroeste de Antioquia, sobre el Mar Caribe",
        description:
          "La Región del Urabá Antioqueño, una de las nueve subregiones de Antioquia, se destaca por su ubicación estratégica entre el Mar Caribe y la Cordillera Occidental. En 2024, esta zona se ha consolidado como un importante polo de desarrollo, impulsado por proyectos de infraestructura como las Autopistas de la Prosperidad y el Puerto de Urabá. La región mantiene su diversidad económica, destacando en la agroindustria bananera, la pesca, la ganadería, el turismo sostenible y el comercio internacional.",
        municipios: [
          { name: "Apartadó", link: "/regiones/antioquia/uraba/apartado" },
          { name: "Arboletes", link: "/regiones/antioquia/uraba/arboletes" },
          { name: "Carepa", link: "/regiones/antioquia/uraba/carepa" },
          { name: "Chigorodó", link: "/regiones/antioquia/uraba/chigorodo" },
          { name: "Murindó", link: "/regiones/antioquia/uraba/murindo" },
          { name: "Mutatá", link: "/regiones/antioquia/uraba/mutata" },
          { name: "Necoclí", link: "/regiones/antioquia/uraba/necocli" },
          {
            name: "San Juan de Urabá",
            link: "/regiones/antioquia/uraba/san-juan-de-uraba",
          },
          {
            name: "San Pedro de Urabá",
            link: "/regiones/antioquia/uraba/san-pedro-de-uraba",
          },
          { name: "Turbo", link: "/regiones/antioquia/uraba/turbo" },
          {
            name: "Vigía del Fuerte",
            link: "/regiones/antioquia/uraba/vigia-del-fuerte",
          },
        ],
      },
      // Región de Occidente Antioqueño
      {
        name: "Región de Occidente Antioqueño",
        imageUrl: "/occidente-antioqueno.jpg",
        surface: "7.291 km²",
        population: "230.000 habitantes",
        density: "31,54 hab/km²",
        capital: "Santa Fe de Antioquia",
        location: "Oeste de Antioquia, en la cordillera occidental",
        description:
          "La Región de Occidente antioqueño, una de las nueve subregiones de Antioquia, se distingue por su rico patrimonio histórico y cultural. En 2024, esta zona ha experimentado un notable desarrollo turístico y agrícola sostenible. La mejora en la infraestructura vial, incluyendo el Túnel del Toyo, ha aumentado significativamente su conectividad con Medellín y el Urabá. La región se destaca por su producción de café de alta calidad, frutas tropicales y el crecimiento del ecoturismo, aprovechando sus paisajes montañosos y su herencia colonial.",
        municipios: [
          {
            name: "Santa Fe de Antioquia",
            link: "/regiones/antioquia/occidente/santa-fe-de-antioquia",
          },
          { name: "Anzá", link: "/regiones/antioquia/occidente/anza" },
          {
            name: "Buriticá",
            link: "/regiones/antioquia/occidente/buritica",
          },
          { name: "Caicedo", link: "/regiones/antioquia/occidente/caicedo" },
          {
            name: "Cañasgordas",
            link: "/regiones/antioquia/occidente/canasgordas",
          },
          { name: "Dabeiba", link: "/regiones/antioquia/occidente/dabeiba" },
          { name: "Ebéjico", link: "/regiones/antioquia/occidente/ebejico" },
          {
            name: "Frontino",
            link: "/regiones/antioquia/occidente/frontino",
          },
          { name: "Giraldo", link: "/regiones/antioquia/occidente/giraldo" },
          {
            name: "Liborina",
            link: "/regiones/antioquia/occidente/liborina",
          },
          { name: "Olaya", link: "/regiones/antioquia/occidente/olaya" },
          { name: "Peque", link: "/regiones/antioquia/occidente/peque" },
          {
            name: "Sabanalarga",
            link: "/regiones/antioquia/occidente/sabanalarga",
          },
          {
            name: "San Jerónimo",
            link: "/regiones/antioquia/occidente/san-jeronimo",
          },
          {
            name: "Sopetrán",
            link: "/regiones/antioquia/occidente/sopetran",
          },
          { name: "Uramita", link: "/regiones/antioquia/occidente/uramita" },
          {
            name: "Abriaquí",
            link: "/regiones/antioquia/occidente/abriaqui",
          },
          {
            name: "Heliconia",
            link: "/regiones/antioquia/occidente/heliconia",
          },
        ],
      },

      //Región Oriente Antioqueño

      {
        name: "Región Oriente Antioqueño",
        imageUrl: "/oriente-antioqueno.jpg",
        surface: "7.021 km²",
        population: "620.000 habitantes",
        density: "88,31 hab/km²",
        capital: "Rionegro",
        location: "Este de Antioquia, en la cordillera central",
        description:
          "La Región Oriente antioqueño, una de las nueve subregiones de Antioquia, se ha consolidado en 2024 como un importante polo de desarrollo tecnológico, industrial y turístico. Su cercanía con Medellín y la presencia del Aeropuerto Internacional José María Córdova han impulsado su crecimiento económico. La región se destaca por su producción agrícola diversificada, incluyendo flores, hortalizas y frutas, así como por su desarrollo en tecnología, servicios y turismo sostenible. El Oriente antioqueño también es reconocido por sus embalses, que generan gran parte de la energía hidroeléctrica del país.",
        municipios: [
          { name: "Rionegro", link: "/regiones/antioquia/oriente/rionegro" },
          { name: "La Ceja", link: "/regiones/antioquia/oriente/la-ceja" },
          {
            name: "Marinilla",
            link: "/regiones/antioquia/oriente/marinilla",
          },
          {
            name: "El Carmen de Viboral",
            link: "/regiones/antioquia/oriente/el-carmen-de-viboral",
          },
          { name: "Guarne", link: "/regiones/antioquia/oriente/guarne" },
          {
            name: "El Santuario",
            link: "/regiones/antioquia/oriente/el-santuario",
          },
          {
            name: "San Vicente Ferrer",
            link: "/regiones/antioquia/oriente/san-vicente-ferrer",
          },
          {
            name: "Concepción",
            link: "/regiones/antioquia/oriente/concepcion",
          },
          {
            name: "Alejandría",
            link: "/regiones/antioquia/oriente/alejandria",
          },
          { name: "El Peñol", link: "/regiones/antioquia/oriente/el-penol" },
          { name: "Guatapé", link: "/regiones/antioquia/oriente/guatape" },
          { name: "Granada", link: "/regiones/antioquia/oriente/granada" },
          {
            name: "San Carlos",
            link: "/regiones/antioquia/oriente/san-carlos",
          },
          {
            name: "San Rafael",
            link: "/regiones/antioquia/oriente/san-rafael",
          },
          { name: "San Luis", link: "/regiones/antioquia/oriente/san-luis" },
          { name: "Cocorná", link: "/regiones/antioquia/oriente/cocorna" },
          {
            name: "San Francisco",
            link: "/regiones/antioquia/oriente/san-francisco",
          },
          { name: "Sonsón", link: "/regiones/antioquia/oriente/sonson" },
          { name: "Nariño", link: "/regiones/antioquia/oriente/narino" },
          { name: "Argelia", link: "/regiones/antioquia/oriente/argelia" },
          {
            name: "Abejorral",
            link: "/regiones/antioquia/oriente/abejorral",
          },
          { name: "La Unión", link: "/regiones/antioquia/oriente/la-union" },
          {
            name: "El Retiro",
            link: "/regiones/antioquia/oriente/el-retiro",
          },
        ],
      },

      //Región Suroeste Antioqueño

      {
        name: "Región Suroeste Antioqueño",
        imageUrl: "/suroeste-antioqueno.jpg",
        surface: "6.733 km²",
        population: "380.000 habitantes",
        density: "56,44 hab/km²",
        capital: "Andes",
        location:
          "Suroeste de Antioquia, en la cordillera occidental y central",
        description:
          "La Región Suroeste antioqueño, una de las nueve subregiones de Antioquia, se ha consolidado en 2024 como un referente nacional en la producción de café de alta calidad y turismo rural sostenible. Caracterizada por sus paisajes montañosos, rica biodiversidad y patrimonio cultural, la región ha diversificado su economía, manteniendo su tradición cafetera mientras desarrolla nuevas industrias como el ecoturismo y la agroindustria. La mejora en la infraestructura vial, incluyendo la conexión con las Autopistas de la Prosperidad, ha impulsado su integración con el resto del departamento y el país.",
        municipios: [
          { name: "Andes", link: "/regiones/antioquia/suroeste/andes" },
          { name: "Amagá", link: "/regiones/antioquia/suroeste/amaga" },
          {
            name: "Angelópolis",
            link: "/regiones/antioquia/suroeste/angelopolis",
          },
          { name: "Betania", link: "/regiones/antioquia/suroeste/betania" },
          { name: "Betulia", link: "/regiones/antioquia/suroeste/betulia" },
          {
            name: "Caramanta",
            link: "/regiones/antioquia/suroeste/caramanta",
          },
          {
            name: "Ciudad Bolívar",
            link: "/regiones/antioquia/suroeste/ciudad-bolivar",
          },
          {
            name: "Concordia",
            link: "/regiones/antioquia/suroeste/concordia",
          },
          { name: "Fredonia", link: "/regiones/antioquia/suroeste/fredonia" },
          { name: "Hispania", link: "/regiones/antioquia/suroeste/hispania" },
          { name: "Jardín", link: "/regiones/antioquia/suroeste/jardin" },
          { name: "Jericó", link: "/regiones/antioquia/suroeste/jerico" },
          {
            name: "La Pintada",
            link: "/regiones/antioquia/suroeste/la-pintada",
          },
          {
            name: "Montebello",
            link: "/regiones/antioquia/suroeste/montebello",
          },
          {
            name: "Pueblorrico",
            link: "/regiones/antioquia/suroeste/pueblorrico",
          },
          { name: "Salgar", link: "/regiones/antioquia/suroeste/salgar" },
          {
            name: "Santa Bárbara",
            link: "/regiones/antioquia/suroeste/santa-barbara",
          },
          { name: "Támesis", link: "/regiones/antioquia/suroeste/tamesis" },
          { name: "Tarso", link: "/regiones/antioquia/suroeste/tarso" },
          { name: "Titiribí", link: "/regiones/antioquia/suroeste/titiribi" },
          { name: "Urrao", link: "/regiones/antioquia/suroeste/urrao" },
          {
            name: "Valparaíso",
            link: "/regiones/antioquia/suroeste/valparaiso",
          },
          { name: "Venecia", link: "/regiones/antioquia/suroeste/venecia" },
        ],
        
      },

      //Región Nordeste Antioqueño
      {
        name: "Región Nordeste Antioqueño",
        imageUrl: "/nordeste-antioqueno.jpg",
        surface: "8.544 km²",
        population: "200.000 habitantes",
        density: "23,41 hab/km²",
        capital: "Yolombó",
        location: "Nordeste de Antioquia, en la cordillera central",
        description:
          "La Región Nordeste antioqueño, una de las nueve subregiones de Antioquia, se ha transformado significativamente hacia 2024. Históricamente conocida por su riqueza mineral, especialmente en oro, la región ha diversificado su economía hacia un modelo más sostenible. Se ha fortalecido la minería responsable, el ecoturismo, la agricultura sostenible y la conservación de sus vastos bosques. La mejora en la infraestructura vial y la implementación de programas de desarrollo rural integral han impulsado la conectividad y el progreso socioeconómico de la región.",
        municipios: [
          { name: "Yolombó", link: "/regiones/antioquia/nordeste/yolombo" },
          { name: "Remedios", link: "/regiones/antioquia/nordeste/remedios" },
          { name: "Segovia", link: "/regiones/antioquia/nordeste/segovia" },
          { name: "Amalfi", link: "/regiones/antioquia/nordeste/amalfi" },
          { name: "Anorí", link: "/regiones/antioquia/nordeste/anori" },
          { name: "Cisneros", link: "/regiones/antioquia/nordeste/cisneros" },
          {
            name: "San Roque",
            link: "/regiones/antioquia/nordeste/san-roque",
          },
          {
            name: "Santo Domingo",
            link: "/regiones/antioquia/nordeste/santo-domingo",
          },
          { name: "Vegachí", link: "/regiones/antioquia/nordeste/vegachi" },
          { name: "Yalí", link: "/regiones/antioquia/nordeste/yali" },
        ],
      },

      //Región Magdalena Medio antioqueño

      {
        name: "Región Magdalena Medio Antioqueño",
        imageUrl: "/magdalena-medio-antioqueno.jpg",
        surface: "4.777 km²",
        population: "120.000 habitantes",
        density: "25,12 hab/km²",
        capital: "Puerto Berrío",
        location: "Este de Antioquia, en el valle del río Magdalena",
        description:
          "La Región Magdalena Medio antioqueño, una de las nueve subregiones de Antioquia, ha experimentado una significativa transformación hacia 2024. Estratégicamente ubicada en el valle del río Magdalena, la región se ha consolidado como un importante corredor logístico y energético. El desarrollo sostenible, la agricultura tecnificada, la pesca responsable y el ecoturismo se han convertido en pilares de su economía. La implementación de programas de desarrollo rural integral y la mejora en la infraestructura han impulsado la conectividad y el progreso socioeconómico, mientras se mantiene un enfoque en la conservación de sus ecosistemas únicos.",
        municipios: [
          {
            name: "Puerto Berrío",
            link: "/regiones/antioquia/magdalena-medio/puerto-berrio",
          },
          {
            name: "Puerto Nare",
            link: "/regiones/antioquia/magdalena-medio/puerto-nare",
          },
          {
            name: "Puerto Triunfo",
            link: "/regiones/antioquia/magdalena-medio/puerto-triunfo",
          },
          {
            name: "Yondó",
            link: "/regiones/antioquia/magdalena-medio/yondo",
          },
          {
            name: "Caracolí",
            link: "/regiones/antioquia/magdalena-medio/caracoli",
          },
          {
            name: "Maceo",
            link: "/regiones/antioquia/magdalena-medio/maceo",
          },
        ],
      },

      //Región Bajo Cauca antioqueño

      {
        name: "Región Bajo Cauca Antioqueño",
        imageUrl: "/bajo-cauca-antioqueno.jpg",
        surface: "8.485 km²",
        population: "320.000 habitantes",
        density: "37,71 hab/km²",
        capital: "Caucasia",
        location:
          "Norte de Antioquia, en la confluencia de los ríos Cauca y Nechí",
        description:
          "La Región Bajo Cauca antioqueño, una de las nueve subregiones de Antioquia, ha experimentado una notable transformación hacia 2024. Históricamente conocida por su riqueza aurífera y ganadera, la región ha diversificado su economía hacia un modelo más sostenible y equitativo. Se ha fortalecido la minería responsable, la agricultura sostenible, la ganadería silvopastoril y el ecoturismo. La implementación de programas de desarrollo rural integral, la mejora en la infraestructura y los esfuerzos en la conservación de sus ecosistemas han impulsado el progreso socioeconómico de la región, mientras se abordan desafíos ambientales y sociales.",
        municipios: [
          {
            name: "Caucasia",
            link: "/regiones/antioquia/bajo-cauca/caucasia",
          },
          {
            name: "El Bagre",
            link: "/regiones/antioquia/bajo-cauca/el-bagre",
          },
          { name: "Nechí", link: "/regiones/antioquia/bajo-cauca/nechi" },
          { name: "Tarazá", link: "/regiones/antioquia/bajo-cauca/taraza" },
          { name: "Cáceres", link: "/regiones/antioquia/bajo-cauca/caceres" },
          {
            name: "Zaragoza",
            link: "/regiones/antioquia/bajo-cauca/zaragoza",
          },
        ],
      },

      //Región Norte de Antioquia

      {
        name: "Región Norte de Antioquia",
        imageUrl: "/norte-antioquia.jpg",
        surface: "7.390 km²",
        population: "270.000 habitantes",
        density: "36,53 hab/km²",
        capital: "Santa Rosa de Osos",
        location: "Norte de Antioquia, en la cordillera central",
        description:
          "La Región Norte de Antioquia, una de las nueve subregiones del departamento, ha experimentado un notable desarrollo hacia 2024. Caracterizada por su diversidad geográfica que abarca desde altiplanos fríos hasta valles cálidos, la región ha fortalecido su vocación agropecuaria con un enfoque en la sostenibilidad y la innovación. Se destaca por su producción lechera de alta calidad, el cultivo de frutas y hortalizas, y el creciente sector del turismo rural y de naturaleza. La implementación de tecnologías agrícolas avanzadas, la mejora en la infraestructura vial y el desarrollo de energías renovables han impulsado el progreso socioeconómico de la región.",
        municipios: [
          {
            name: "Santa Rosa de Osos",
            link: "/regiones/antioquia/norte/santa-rosa-de-osos",
          },
          { name: "Yarumal", link: "/regiones/antioquia/norte/yarumal" },
          { name: "Donmatías", link: "/regiones/antioquia/norte/donmatias" },
          {
            name: "Entrerríos",
            link: "/regiones/antioquia/norte/entrerrios",
          },
          {
            name: "San Pedro de los Milagros",
            link: "/regiones/antioquia/norte/san-pedro-de-los-milagros",
          },
          { name: "Belmira", link: "/regiones/antioquia/norte/belmira" },
          {
            name: "San José de la Montaña",
            link: "/regiones/antioquia/norte/san-jose-de-la-montana",
          },
          {
            name: "Carolina del Príncipe",
            link: "/regiones/antioquia/norte/carolina-del-principe",
          },
          {
            name: "Gómez Plata",
            link: "/regiones/antioquia/norte/gomez-plata",
          },
          { name: "Guadalupe", link: "/regiones/antioquia/norte/guadalupe" },
          { name: "Angostura", link: "/regiones/antioquia/norte/angostura" },
          {
            name: "Campamento",
            link: "/regiones/antioquia/norte/campamento",
          },
          { name: "Ituango", link: "/regiones/antioquia/norte/ituango" },
          {
            name: "San Andrés de Cuerquia",
            link: "/regiones/antioquia/norte/san-andres-de-cuerquia",
          },
          { name: "Toledo", link: "/regiones/antioquia/norte/toledo" },
          { name: "Briceño", link: "/regiones/antioquia/norte/briceno" },
          { name: "Valdivia", link: "/regiones/antioquia/norte/valdivia" },
        ],
      },

      //Región Valle de Aburrá Antioqueño

      {
        name: "Región Valle de Aburrá Antioqueño",
        imageUrl: "/valle-de-aburra-antioqueno.jpg",
        surface: "1.152 km²",
        population: "3.900.000 habitantes",
        density: "3.385,42 hab/km²",
        capital: "Medellín",
        location: "Centro de Antioquia, en un valle de la cordillera central",
        description:
          "La Región Valle de Aburrá antioqueño, una de las nueve subregiones de Antioquia, se ha consolidado en 2024 como un área metropolitana de vanguardia a nivel latinoamericano. Centrada alrededor de Medellín, la región ha fortalecido su posición como hub de innovación, tecnología y servicios. Se destaca por su enfoque en la sostenibilidad urbana, la movilidad inteligente, la economía del conocimiento y la inclusión social. La implementación de soluciones de ciudad inteligente, la expansión de su sistema de transporte integrado y el desarrollo de espacios verdes urbanos han mejorado significativamente la calidad de vida de sus habitantes.",
        municipios: [
          {
            name: "Medellín",
            link: "/regiones/antioquia/valle-de-aburra/medellin",
          },
          {
            name: "Bello",
            link: "/regiones/antioquia/valle-de-aburra/bello",
          },
          {
            name: "Itagüí",
            link: "/regiones/antioquia/valle-de-aburra/itagui",
          },
          {
            name: "Envigado",
            link: "/regiones/antioquia/valle-de-aburra/envigado",
          },
          {
            name: "Caldas",
            link: "/regiones/antioquia/valle-de-aburra/caldas",
          },
          {
            name: "La Estrella",
            link: "/regiones/antioquia/valle-de-aburra/la-estrella",
          },
          {
            name: "Sabaneta",
            link: "/regiones/antioquia/valle-de-aburra/sabaneta",
          },
          {
            name: "Copacabana",
            link: "/regiones/antioquia/valle-de-aburra/copacabana",
          },
          {
            name: "Girardota",
            link: "/regiones/antioquia/valle-de-aburra/girardota",
          },
          {
            name: "Barbosa",
            link: "/regiones/antioquia/valle-de-aburra/barbosa",
          },
        ],
      },
  ],
};