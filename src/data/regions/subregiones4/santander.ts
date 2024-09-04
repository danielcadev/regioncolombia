import { SubRegion } from '@/types/regions';

export const santander: SubRegion = {
  name: "Santander",
  insigniaUrl: "/SANTANDER.png",
  description: "6 REGIONES DE SANTANDER DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Cañón del Chicamocha",
    "Parque Nacional del Chicamocha",
    "Barichara",
    "Parque Nacional Natural Serranía de los Yariguíes",
    "Mesa de Los Santos",
    "Cascadas de Juan Curí"
  ],
  communityProjects: "Santander se distingue por sus iniciativas en turismo de aventura, conservación de ecosistemas, desarrollo rural sostenible e innovación tecnológica.",
  sustainableDevelopment: "La región implementa proyectos de energías limpias, agricultura sostenible, turismo responsable y conservación de la biodiversidad.",
  imageUrl: "/santander.jpg",
  surface: "30.537 km²",
  population: "2'300.000 Hab. (Proyección DANE 2024)",
  density: "75,3 Hab/Km²",
  capital: "Bucaramanga – 600.000 Hab. (Proyección DANE 2024)",
  location: "Santander está ubicado en el noreste de Colombia, en la región Andina. Su geografía es diversa, incluyendo parte de la Cordillera Oriental de los Andes, cañones, mesetas y valles, ofreciendo una variedad de climas y ecosistemas que van desde bosques húmedos hasta zonas semiáridas.",
  zonas: [
    {
      name: "Región Vélez",
      imageUrl: "/velez-santander.jpg",
      surface: "6.900 km²",
      population: "170.000 habitantes",
      density: "24,64 hab/km²",
      capital: "Vélez",
      location: "Sur-occidente del departamento de Santander, limitando con los departamentos de Boyacá y Antioquia",
      description: "La Región de Vélez se ha consolidado como un modelo de desarrollo rural sostenible y preservación del patrimonio cultural en Colombia. Se destaca por sus sistemas agroecológicos, turismo cultural y gastronomía tradicional.",
      municipios: [
        { name: "Vélez", link: "/regiones/santander/velez/velez" },
        { name: "Barbosa", link: "/regiones/santander/velez/barbosa" },
        { name: "Puente Nacional", link: "/regiones/santander/velez/puente-nacional" },
        { name: "Guavatá", link: "/regiones/santander/velez/guavata" },
        { name: "Chipatá", link: "/regiones/santander/velez/chipata" },
        { name: "Güepsa", link: "/regiones/santander/velez/guepsa" }
      ]
    },
    {
      name: "Región Soto",
      imageUrl: "/soto-santander.jpg",
      surface: "7.100 km²",
      population: "1.350.000 habitantes",
      density: "190,14 hab/km²",
      capital: "Bucaramanga",
      location: "Norte del departamento de Santander, incluyendo el área metropolitana de Bucaramanga",
      description: "La Región Soto se ha consolidado como un polo de innovación tecnológica y desarrollo sostenible. Destaca por sus soluciones de ciudad inteligente, ecosistema de startups y proyectos de economía circular.",
      municipios: [
        { name: "Bucaramanga", link: "/regiones/santander/soto/bucaramanga" },
        { name: "Floridablanca", link: "/regiones/santander/soto/floridablanca" },
        { name: "Girón", link: "/regiones/santander/soto/giron" },
        { name: "Piedecuesta", link: "/regiones/santander/soto/piedecuesta" },
        { name: "Lebrija", link: "/regiones/santander/soto/lebrija" },
        { name: "Rionegro", link: "/regiones/santander/soto/rionegro" }
      ]
    },
    {
      name: "Región Mares",
      imageUrl: "/mares-santander.jpg",
      surface: "8.200 km²",
      population: "450.000 habitantes",
      density: "54,88 hab/km²",
      capital: "Barrancabermeja",
      location: "Occidente del departamento de Santander, incluyendo el valle del río Magdalena",
      description: "La Región Mares se ha transformado en un modelo de transición energética y desarrollo sostenible. Destaca por sus proyectos de hidrógeno verde, emprendimiento en tecnologías limpias y turismo sostenible.",
      municipios: [
        { name: "Barrancabermeja", link: "/regiones/santander/mares/barrancabermeja" },
        { name: "Sabana de Torres", link: "/regiones/santander/mares/sabana-de-torres" },
        { name: "Puerto Wilches", link: "/regiones/santander/mares/puerto-wilches" },
        { name: "San Vicente de Chucurí", link: "/regiones/santander/mares/san-vicente-de-chucuri" },
        { name: "El Carmen de Chucurí", link: "/regiones/santander/mares/el-carmen-de-chucuri" },
        { name: "Betulia", link: "/regiones/santander/mares/betulia" }
      ]
    },
    {
      name: "Región Guanentá",
      imageUrl: "/guanenta-santander.jpg",
      surface: "3.800 km²",
      population: "140.000 habitantes",
      density: "36,84 hab/km²",
      capital: "San Gil",
      location: "Sur del departamento de Santander, incluyendo parte del Cañón del Chicamocha",
      description: "La Región Guanentá se ha consolidado como un destino líder en turismo de aventura sostenible y desarrollo rural inteligente. Destaca por su gestión del turismo sostenible, agricultura de precisión y economía circular.",
      municipios: [
        { name: "San Gil", link: "/regiones/santander/guanenta/san-gil" },
        { name: "Barichara", link: "/regiones/santander/guanenta/barichara" },
        { name: "Charalá", link: "/regiones/santander/guanenta/charala" },
        { name: "Mogotes", link: "/regiones/santander/guanenta/mogotes" },
        { name: "Valle de San José", link: "/regiones/santander/guanenta/valle-de-san-jose" },
        { name: "Páramo", link: "/regiones/santander/guanenta/paramo" }
      ]
    },
    {
      name: "Región Rovira",
      imageUrl: "/rovira-santander.jpg",
      surface: "3.300 km²",
      population: "120.000 habitantes",
      density: "36,36 hab/km²",
      capital: "Mogotes",
      location: "Sureste del departamento de Santander, limitando con Boyacá",
      description: "La Región Rovira se ha transformado en un modelo de desarrollo rural sostenible y conservación de la biodiversidad. Destaca por sus sistemas agroecológicos de alta montaña, corredor de conservación y turismo científico.",
      municipios: [
        { name: "Mogotes", link: "/regiones/santander/rovira/mogotes" },
        { name: "San Joaquín", link: "/regiones/santander/rovira/san-joaquin" },
        { name: "Onzaga", link: "/regiones/santander/rovira/onzaga" },
        { name: "Coromoro", link: "/regiones/santander/rovira/coromoro" },
        { name: "Ocamonte", link: "/regiones/santander/rovira/ocamonte" },
        { name: "Encino", link: "/regiones/santander/rovira/encino" }
      ]
    },
    {
      name: "Región Comunera",
      imageUrl: "/comunera-santander.jpg",
      surface: "3.900 km²",
      population: "95.000 habitantes",
      density: "24,36 hab/km²",
      capital: "Socorro",
      location: "Sur del departamento de Santander, incluyendo parte del valle del río Suárez",
      description: "La Región Comunera se ha consolidado como un modelo de desarrollo territorial basado en la identidad histórica y la innovación social. Destaca por su gobernanza participativa, economía solidaria y turismo histórico-patrimonial.",
      municipios: [
        { name: "Socorro", link: "/regiones/santander/comunera/socorro" },
        { name: "Oiba", link: "/regiones/santander/comunera/oiba" },
        { name: "Confines", link: "/regiones/santander/comunera/confines" },
        { name: "Guapotá", link: "/regiones/santander/comunera/guapota" },
        { name: "Palmas del Socorro", link: "/regiones/santander/comunera/palmas-del-socorro" },
        { name: "Simacota", link: "/regiones/santander/comunera/simacota" }
      ]
    }
  ]
};