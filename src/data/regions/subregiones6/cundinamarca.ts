import { SubRegion } from '@/types/regions';

export const cundinamarca: SubRegion = {
  name: "Cundinamarca",
  insigniaUrl: "/CUNDINAMARCA.png",
  description: "15 SUBREGIONES DE CUNDINAMARCA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Catedral de Sal de Zipaquirá",
    "Parque Natural Chicaque",
    "Laguna de Guatavita",
    "Puente de Boyacá",
    "Parque Arqueológico Piedras del Tunjo",
    "Salto del Tequendama"
  ],
  communityProjects: "Cundinamarca se destaca por sus iniciativas en desarrollo urbano sostenible, conservación de ecosistemas andinos, agricultura de precisión e innovación tecnológica.",
  sustainableDevelopment: "La región impulsa proyectos de energías renovables, gestión inteligente del agua, economía circular y agricultura climáticamente inteligente.",
  imageUrl: "/cundinamarca.jpg",
  surface: "24.210 km²",
  population: "3'400.000 Hab. (Proyección DANE 2024)",
  density: "140,4 Hab/Km²",
  capital: "Bogotá D.C. (Distrito Capital independiente)",
  location: "Cundinamarca está ubicado en el centro de Colombia, en la Cordillera Oriental de los Andes, rodeando a Bogotá. Su geografía diversa incluye páramos, valles, llanuras y zonas de bosque andino, ofreciendo una gran variedad de climas y ecosistemas.",
  zonas: [
    {
      name: "Región de Soacha",
      imageUrl: "/soacha-cundinamarca.jpg",
      surface: "184.45 km²",
      population: "750.000 habitantes",
      density: "4,066.14 hab/km²",
      capital: "Soacha",
      location: "Centro de Cundinamarca, en la zona sur de la Sabana de Bogotá, limitando con Bogotá D.C.",
      description: "La Región de Soacha se caracteriza por su desarrollo urbano sostenible e inclusivo. Se enfoca en soluciones de movilidad sostenible, vivienda social con tecnologías verdes y economía circular.",
      municipios: [
        { name: "Soacha", link: "/regiones/cundinamarca/soacha/soacha" }
      ]
    },
    {
      name: "Región de Ubaté",
      imageUrl: "/ubate-cundinamarca.jpg",
      surface: "1.408 km²",
      population: "125.000 habitantes",
      density: "88,78 hab/km²",
      capital: "Villa de San Diego de Ubaté",
      location: "Norte de Cundinamarca, en el altiplano cundiboyacense",
      description: "La Región de Ubaté se destaca por su desarrollo agroindustrial sostenible, especialmente en la producción láctea. Se enfoca en prácticas agrícolas innovadoras y conservación de páramos.",
      municipios: [
        { name: "Villa de San Diego de Ubaté", link: "/regiones/cundinamarca/ubate/ubate" },
        { name: "Carmen de Carupa", link: "/regiones/cundinamarca/ubate/carmen-de-carupa" },
        { name: "Cucunubá", link: "/regiones/cundinamarca/ubate/cucunuba" },
        { name: "Fúquene", link: "/regiones/cundinamarca/ubate/fuquene" },
        { name: "Guachetá", link: "/regiones/cundinamarca/ubate/guacheta" }
      ]
    },
    {
      name: "Región del Tequendama",
      imageUrl: "/tequendama-cundinamarca.jpg",
      surface: "1.159 km²",
      population: "150.000 habitantes",
      density: "129,42 hab/km²",
      capital: "La Mesa",
      location: "Suroeste de Cundinamarca, en las estribaciones de la Cordillera Oriental hacia el valle del río Magdalena",
      description: "La Región del Tequendama se caracteriza por su producción frutícola sostenible y conservación de ecosistemas. Se enfoca en sistemas agroforestales innovadores y gestión integral de cuencas hídricas.",
      municipios: [
        { name: "La Mesa", link: "/regiones/cundinamarca/tequendama/la-mesa" },
        { name: "Anapoima", link: "/regiones/cundinamarca/tequendama/anapoima" },
        { name: "Anolaima", link: "/regiones/cundinamarca/tequendama/anolaima" },
        { name: "Apulo", link: "/regiones/cundinamarca/tequendama/apulo" },
        { name: "Cachipay", link: "/regiones/cundinamarca/tequendama/cachipay" }
      ]
    },
    {
      name: "Región de Sumapaz",
      imageUrl: "/sumapaz-cundinamarca.jpg",
      surface: "1.808 km²",
      population: "85.000 habitantes",
      density: "47,01 hab/km²",
      capital: "Fusagasugá",
      location: "Sur de Cundinamarca, en la Cordillera Oriental de los Andes colombianos",
      description: "La Región de Sumapaz se distingue por la conservación del páramo más grande del mundo y prácticas agrícolas sostenibles de alta montaña. Se enfoca en la gestión integral de ecosistemas de páramo y agroecología adaptada.",
      municipios: [
        { name: "Fusagasugá", link: "/regiones/cundinamarca/sumapaz/fusagasuga" },
        { name: "Arbeláez", link: "/regiones/cundinamarca/sumapaz/arbelaez" },
        { name: "Cabrera", link: "/regiones/cundinamarca/sumapaz/cabrera" },
        { name: "Granada", link: "/regiones/cundinamarca/sumapaz/granada" },
        { name: "Pandi", link: "/regiones/cundinamarca/sumapaz/pandi" }
      ]
    },
    {
      name: "Región Sabana Occidente",
      imageUrl: "/sabana-occidente-cundinamarca.jpg",
      surface: "1.027 km²",
      population: "550.000 habitantes",
      density: "535,54 hab/km²",
      capital: "Facatativá",
      location: "Centro-occidente de Cundinamarca, en la Sabana de Bogotá, limitando con Bogotá D.C. al oriente",
      description: "La Región Sabana Occidente se caracteriza por su desarrollo metropolitano sostenible e innovador. Se enfoca en ciudades inteligentes, agricultura de precisión y logística avanzada.",
      municipios: [
        { name: "Facatativá", link: "/regiones/cundinamarca/sabana-occidente/facatativa" },
        { name: "Bojacá", link: "/regiones/cundinamarca/sabana-occidente/bojaca" },
        { name: "El Rosal", link: "/regiones/cundinamarca/sabana-occidente/el-rosal" },
        { name: "Funza", link: "/regiones/cundinamarca/sabana-occidente/funza" },
        { name: "Madrid", link: "/regiones/cundinamarca/sabana-occidente/madrid" }
      ]
    },
    {
      name: "Región Sabana Centro",
      imageUrl: "/sabana-centro-cundinamarca.jpg",
      surface: "1.026 km²",
      population: "600.000 habitantes",
      density: "584,79 hab/km²",
      capital: "Zipaquirá",
      location: "Centro-norte de Cundinamarca, en la Sabana de Bogotá, al norte de Bogotá D.C.",
      description: "La Región Sabana Centro se destaca por su desarrollo suburbano sostenible y alta calidad de vida. Se enfoca en comunidades planificadas, innovación educativa y tecnológica.",
      municipios: [
        { name: "Zipaquirá", link: "/regiones/cundinamarca/sabana-centro/zipaquira" },
        { name: "Cajicá", link: "/regiones/cundinamarca/sabana-centro/cajica" },
        { name: "Chía", link: "/regiones/cundinamarca/sabana-centro/chia" },
        { name: "Cogua", link: "/regiones/cundinamarca/sabana-centro/cogua" },
        { name: "Gachancipá", link: "/regiones/cundinamarca/sabana-centro/gachancipa" }
      ]
    },
    {
      name: "Región Río Negro",
      imageUrl: "/rio-negro-cundinamarca.jpg",
      surface: "1.178 km²",
      population: "175.000 habitantes",
      density: "148,56 hab/km²",
      capital: "Pacho",
      location: "Norte de Cundinamarca, en la vertiente occidental de la Cordillera Oriental",
      description: "La Región Río Negro se caracteriza por su desarrollo rural sostenible y conservación de ecosistemas. Se enfoca en agricultura orgánica de alta tecnología y protección de bosques andinos.",
      municipios: [
        { name: "Pacho", link: "/regiones/cundinamarca/rio-negro/pacho" },
        { name: "La Palma", link: "/regiones/cundinamarca/rio-negro/la-palma" },
        { name: "San Cayetano", link: "/regiones/cundinamarca/rio-negro/san-cayetano" },
        { name: "Villagómez", link: "/regiones/cundinamarca/rio-negro/villagomez" },
        { name: "Yacopí", link: "/regiones/cundinamarca/rio-negro/yacopi" }
      ]
    },
    {
      name: "Región Oriente",
      imageUrl: "/oriente-cundinamarca.jpg",
      surface: "2.145 km²",
      population: "220.000 habitantes",
      density: "102,56 hab/km²",
      capital: "Cáqueza",
      location: "Oriente de Cundinamarca, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región Oriente integra riqueza natural con innovación tecnológica. Se enfoca en agricultura de precisión adaptada a la montaña y conservación de páramos y bosques de niebla.",
      municipios: [
        { name: "Cáqueza", link: "/regiones/cundinamarca/oriente/caqueza" },
        { name: "Chipaque", link: "/regiones/cundinamarca/oriente/chipaque" },
        { name: "Choachí", link: "/regiones/cundinamarca/oriente/choachi" },
        { name: "Fómeque", link: "/regiones/cundinamarca/oriente/fomeque" },
        { name: "Fosca", link: "/regiones/cundinamarca/oriente/fosca" }
      ]
    },
    {
      name: "Región Medina",
      imageUrl: "/medina-cundinamarca.jpg",
      surface: "1.915 km²",
      population: "12.000 habitantes",
      density: "6,27 hab/km²",
      capital: "Medina",
      location: "Extremo oriental de Cundinamarca, en la transición entre la Cordillera Oriental y los Llanos Orientales",
      description: "La Región Medina se destaca por la conservación de la biodiversidad y desarrollo sostenible. Se enfoca en sistemas agroforestales, ganadería sostenible y protección de bosques húmedos tropicales.",
      municipios: [
        { name: "Medina", link: "/regiones/cundinamarca/medina/medina" },
        { name: "Paratebueno", link: "/regiones/cundinamarca/medina/paratebueno" }
      ]
    },
    {
      name: "Región Magdalena Centro",
      imageUrl: "/magdalena-centro-cundinamarca.jpg",
      surface: "1.153 km²",
      population: "85.000 habitantes",
      density: "73,72 hab/km²",
      capital: "San Juan de Rioseco",
      location: "Occidente de Cundinamarca, en la cuenca media del río Magdalena",
      description: "La Región Magdalena Centro integra la revitalización del río Magdalena con innovación agroindustrial. Se enfoca en agricultura climáticamente inteligente y restauración de ecosistemas ribereños.",
      municipios: [
        { name: "San Juan de Rioseco", link: "/regiones/cundinamarca/magdalena-centro/san-juan-de-rioseco" },
        { name: "Beltrán", link: "/regiones/cundinamarca/magdalena-centro/beltran" },
        { name: "Bituima", link: "/regiones/cundinamarca/magdalena-centro/bituima" },
        { name: "Chaguaní", link: "/regiones/cundinamarca/magdalena-centro/chaguani" },
        { name: "Guayabal de Síquima", link: "/regiones/cundinamarca/magdalena-centro/guayabal-de-siquima" }
      ]
    },
    {
      name: "Región del Guavio",
      imageUrl: "/guavio-cundinamarca.jpg",
      surface: "2.628 km²",
      population: "95.000 habitantes",
      density: "36,15 hab/km²",
      capital: "Gachetá",
      location: "Nororiente de Cundinamarca, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región del Guavio se caracteriza por la gestión inteligente de recursos hídricos y conservación de biodiversidad. Se enfoca en generación de energía limpia y prácticas agrícolas sostenibles de montaña.",
      municipios: [
        { name: "Gachetá", link: "/regiones/cundinamarca/guavio/gacheta" },
        { name: "Gachalá", link: "/regiones/cundinamarca/guavio/gachala" },
        { name: "Gama", link: "/regiones/cundinamarca/guavio/gama" },
        { name: "Guasca", link: "/regiones/cundinamarca/guavio/guasca" },
        { name: "Guatavita", link: "/regiones/cundinamarca/guavio/guatavita" }
      ]
    },
    {
      name: "Región Gualivá",
      imageUrl: "/gualiva-cundinamarca.jpg",
      surface: "1.272 km²",
      population: "130.000 habitantes",
      density: "102,20 hab/km²",
      capital: "Villeta",
      location: "Noroccidente de Cundinamarca, en la vertiente occidental de la Cordillera Oriental",
      description: "La Región Gualivá integra producción agrícola de alta tecnología con conservación de bosques tropicales. Se enfoca en agroindustria sostenible de frutas exóticas y café, y en el desarrollo de energías renovables.",
      municipios: [
        { name: "Villeta", link: "/regiones/cundinamarca/gualiva/villeta" },
        { name: "Albán", link: "/regiones/cundinamarca/gualiva/alban" },
        { name: "La Peña", link: "/regiones/cundinamarca/gualiva/la-pena" },
        { name: "La Vega", link: "/regiones/cundinamarca/gualiva/la-vega" },
        { name: "Nimaima", link: "/regiones/cundinamarca/gualiva/nimaima" }
      ]
    },
    {
      name: "Región Bajo Magdalena",
      imageUrl: "/bajo-magdalena-cundinamarca.jpg",
      surface: "1.894 km²",
      population: "170.000 habitantes",
      density: "89,76 hab/km²",
      capital: "Guaduas",
      location: "Noroccidente de Cundinamarca, en la cuenca baja del río Magdalena",
      description: "La Región del Bajo Magdalena se enfoca en la revitalización del río Magdalena y la innovación agroindustrial. Destaca por la restauración de ecosistemas ribereños y el desarrollo de agricultura climáticamente inteligente.",
      municipios: [
        { name: "Guaduas", link: "/regiones/cundinamarca/bajo-magdalena/guaduas" },
        { name: "Caparrapí", link: "/regiones/cundinamarca/bajo-magdalena/caparrapi" },
        { name: "Puerto Salgar", link: "/regiones/cundinamarca/bajo-magdalena/puerto-salgar" }
      ]
    },
    {
      name: "Región Alto Magdalena",
      imageUrl: "/alto-magdalena-cundinamarca.jpg",
      surface: "1.184 km²",
      population: "180.000 habitantes",
      density: "152,03 hab/km²",
      capital: "Girardot",
      location: "Suroccidente de Cundinamarca, en la cuenca alta del río Magdalena",
      description: "La Región del Alto Magdalena integra innovación agroindustrial y gestión inteligente del agua. Se destaca por sistemas de riego inteligentes y el desarrollo de un corredor agroindustrial especializado en frutas tropicales y acuicultura sostenible.",
      municipios: [
        { name: "Girardot", link: "/regiones/cundinamarca/alto-magdalena/girardot" },
        { name: "Agua de Dios", link: "/regiones/cundinamarca/alto-magdalena/agua-de-dios" },
        { name: "Guataquí", link: "/regiones/cundinamarca/alto-magdalena/guataqui" },
        { name: "Jerusalén", link: "/regiones/cundinamarca/alto-magdalena/jerusalen" },
        { name: "Nariño", link: "/regiones/cundinamarca/alto-magdalena/narino" }
      ]
    },
    {
      name: "Región Almeidas",
      imageUrl: "/almeidas-cundinamarca.jpg",
      surface: "1.240 km²",
      population: "100.000 habitantes",
      density: "80,65 hab/km²",
      capital: "Chocontá",
      location: "Nororiente de Cundinamarca, en la vertiente occidental de la Cordillera Oriental",
      description: "La Región Almeidas se caracteriza por el desarrollo rural sostenible que integra producción agrícola de precisión con conservación de ecosistemas de páramo. Destaca por su clúster agroindustrial especializado en lácteos y hortalizas de alta calidad.",
      municipios: [
        { name: "Chocontá", link: "/regiones/cundinamarca/almeidas/choconta" },
        { name: "Machetá", link: "/regiones/cundinamarca/almeidas/macheta" },
        { name: "Manta", link: "/regiones/cundinamarca/almeidas/manta" },
        { name: "Sesquilé", link: "/regiones/cundinamarca/almeidas/sesquile" },
        { name: "Suesca", link: "/regiones/cundinamarca/almeidas/suesca" }
      ]
    }
  ]
};