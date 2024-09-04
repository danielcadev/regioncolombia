import { SubRegion } from '@/types/regions';

export const boyaca: SubRegion = {
  name: "Boyacá",
  insigniaUrl: "/BOYACA.png",
  description: "13 SUBREGIONES DE BOYACÁ DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Lago de Tota",
    "Villa de Leyva",
    "Puente de Boyacá",
    "Parque Nacional Natural El Cocuy",
    "Catedral de Sal de Zipaquirá",
    "Páramo de Ocetá"
  ],
  communityProjects: "Boyacá se destaca por sus iniciativas en conservación de ecosistemas de alta montaña, agricultura sostenible, e innovación en desarrollo urbano y rural.",
  sustainableDevelopment: "La región impulsa proyectos de energías renovables, gestión del agua, y preservación del patrimonio cultural e histórico.",
  imageUrl: "/boyaca.jpg",
  surface: "23.189 km²",
  population: "1'300.000 Hab. (Proyección DANE 2024)",
  density: "56,1 Hab/Km²",
  capital: "Tunja – 210.000 Hab. (Proyección DANE 2024)",
  location: "Boyacá está ubicado en el centro-este de Colombia, en la Cordillera Oriental de los Andes, caracterizado por una geografía diversa que incluye páramos, valles, llanuras y parte de la Sierra Nevada del Cocuy.",
  zonas: [
    {
      name: "Región Valderrama",
      imageUrl: "/valderrama-boyaca.jpg",
      surface: "2.185 km²",
      population: "35.000 habitantes",
      density: "16,02 hab/km²",
      capital: "Socha",
      location: "Nororiente del departamento de Boyacá, limitando con Santander y Casanare",
      description: "La Región Valderrama se caracteriza por su transición post-minería hacia un desarrollo sostenible en zonas de alta montaña. Se enfoca en la restauración ecológica, agricultura climáticamente inteligente y energías renovables.",
      municipios: [
        { name: "Socha", link: "/regiones/boyaca/valderrama/socha" },
        { name: "Socotá", link: "/regiones/boyaca/valderrama/socota" },
        { name: "Tasco", link: "/regiones/boyaca/valderrama/tasco" },
        { name: "Paz de Río", link: "/regiones/boyaca/valderrama/paz-de-rio" },
        { name: "Betéitiva", link: "/regiones/boyaca/valderrama/beteitiva" },
        { name: "Jericó", link: "/regiones/boyaca/valderrama/jerico" }
      ]
    },
    {
      name: "Región Tundama",
      imageUrl: "/tundama-boyaca.jpg",
      surface: "1.859 km²",
      population: "220.000 habitantes",
      density: "118,34 hab/km²",
      capital: "Duitama",
      location: "Centro-norte del departamento de Boyacá, en el altiplano cundiboyacense",
      description: "La Región Tundama se destaca como un polo de innovación industrial sostenible. Se enfoca en la industria 4.0, especialmente en movilidad sostenible, y en el desarrollo de un corredor de innovación agrícola.",
      municipios: [
        { name: "Duitama", link: "/regiones/boyaca/tundama/duitama" },
        { name: "Paipa", link: "/regiones/boyaca/tundama/paipa" },
        { name: "Santa Rosa de Viterbo", link: "/regiones/boyaca/tundama/santa-rosa-de-viterbo" },
        { name: "Belén", link: "/regiones/boyaca/tundama/belen" },
        { name: "Busbanzá", link: "/regiones/boyaca/tundama/busbanza" },
        { name: "Cerinza", link: "/regiones/boyaca/tundama/cerinza" }
      ]
    },
    {
      name: "Región de Ricaurte",
      imageUrl: "/ricaurte-boyaca.jpg",
      surface: "1.285 km²",
      population: "78.000 habitantes",
      density: "60,7 hab/km²",
      capital: "Moniquirá",
      location: "Sur-occidente del departamento de Boyacá, en la cordillera Oriental de los Andes colombianos",
      description: "La Región de Ricaurte se distingue por su desarrollo sostenible y bienestar. Se enfoca en la conservación ambiental, el desarrollo de cadenas de valor agrícola orgánica y la preservación cultural.",
      municipios: [
        { name: "Moniquirá", link: "/regiones/boyaca/ricaurte/moniquira" },
        { name: "Santana", link: "/regiones/boyaca/ricaurte/santana" },
        { name: "San José de Pare", link: "/regiones/boyaca/ricaurte/san-jose-de-pare" },
        { name: "Togüí", link: "/regiones/boyaca/ricaurte/togui" },
        { name: "Chitaraque", link: "/regiones/boyaca/ricaurte/chitaraque" },
        { name: "Gachantivá", link: "/regiones/boyaca/ricaurte/gachantiva" }
      ]
    },
    {
      name: "Región de Oriente",
      imageUrl: "/oriente-boyaca.jpg",
      surface: "5.093 km²",
      population: "85.000 habitantes",
      density: "16,69 hab/km²",
      capital: "Garagoa",
      location: "Oriente del departamento de Boyacá, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región de Oriente se caracteriza por su biodiversidad y desarrollo sostenible. Se enfoca en la conservación de ecosistemas, sistemas agroforestales innovadores y la resiliencia ante el cambio climático.",
      municipios: [
        { name: "Garagoa", link: "/regiones/boyaca/oriente/garagoa" },
        { name: "Guateque", link: "/regiones/boyaca/oriente/guateque" },
        { name: "Tenza", link: "/regiones/boyaca/oriente/tenza" },
        { name: "Almeida", link: "/regiones/boyaca/oriente/almeida" },
        { name: "Chivor", link: "/regiones/boyaca/oriente/chivor" },
        { name: "Guayatá", link: "/regiones/boyaca/oriente/guayata" }
      ]
    },
    {
      name: "Región de Occidente",
      imageUrl: "/occidente-boyaca.jpg",
      surface: "3.507 km²",
      population: "135.000 habitantes",
      density: "38,49 hab/km²",
      capital: "Chiquinquirá",
      location: "Occidente del departamento de Boyacá, en la vertiente occidental de la Cordillera Oriental",
      description: "La Región de Occidente se destaca por fusionar tradición e innovación. Se enfoca en la minería verde, agricultura regenerativa y el desarrollo rural inteligente.",
      municipios: [
        { name: "Chiquinquirá", link: "/regiones/boyaca/occidente/chiquinquira" },
        { name: "Saboyá", link: "/regiones/boyaca/occidente/saboya" },
        { name: "San Miguel de Sema", link: "/regiones/boyaca/occidente/san-miguel-de-sema" },
        { name: "Caldas", link: "/regiones/boyaca/occidente/caldas" },
        { name: "Buenavista", link: "/regiones/boyaca/occidente/buenavista" },
        { name: "Coper", link: "/regiones/boyaca/occidente/coper" }
      ]
    },
    {
      name: "Región Norte",
      imageUrl: "/norte-boyaca.jpg",
      surface: "2.988 km²",
      population: "95.000 habitantes",
      density: "31,79 hab/km²",
      capital: "Soatá",
      location: "Norte del departamento de Boyacá, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región Norte se caracteriza por su desarrollo sostenible de alta montaña. Se enfoca en la gestión integral del agua, turismo científico y energías renovables adaptadas a ecosistemas de páramo.",
      municipios: [
        { name: "Soatá", link: "/regiones/boyaca/norte/soata" },
        { name: "Boavita", link: "/regiones/boyaca/norte/boavita" },
        { name: "La Uvita", link: "/regiones/boyaca/norte/la-uvita" },
        { name: "San Mateo", link: "/regiones/boyaca/norte/san-mateo" },
        { name: "Sativanorte", link: "/regiones/boyaca/norte/sativanorte" },
        { name: "Sativasur", link: "/regiones/boyaca/norte/sativasur" }
      ]
    },
    {
      name: "Región de Neira",
      imageUrl: "/neira-boyaca.jpg",
      surface: "1.810 km²",
      population: "42.000 habitantes",
      density: "23,20 hab/km²",
      capital: "Garagoa",
      location: "Sur-oriente del departamento de Boyacá, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región de Neira se destaca por su desarrollo rural sostenible y resiliencia climática. Se enfoca en sistemas agroecológicos inteligentes, conservación de cuencas hídricas y energías limpias adaptadas al contexto andino.",
      municipios: [
        { name: "Garagoa", link: "/regiones/boyaca/neira/garagoa" },
        { name: "Chinavita", link: "/regiones/boyaca/neira/chinavita" },
        { name: "Macanal", link: "/regiones/boyaca/neira/macanal" },
        { name: "Pachavita", link: "/regiones/boyaca/neira/pachavita" },
        { name: "San Luis de Gaceno", link: "/regiones/boyaca/neira/san-luis-de-gaceno" },
        { name: "Santa María", link: "/regiones/boyaca/neira/santa-maria" }
      ]
    },
    {
      name: "Región de Márquez",
      imageUrl: "/marquez-boyaca.jpg",
      surface: "1.930 km²",
      population: "76.000 habitantes",
      density: "39,38 hab/km²",
      capital: "Ramiriquí",
      location: "Centro-oriente del departamento de Boyacá, en el altiplano cundiboyacense",
      description: "La Región de Márquez se caracteriza por su innovación agrícola y preservación del patrimonio cultural. Se enfoca en agricultura de precisión, industrias creativas y gastronomía andina innovadora.",
      municipios: [
        { name: "Ramiriquí", link: "/regiones/boyaca/marquez/ramiriqui" },
        { name: "Boyacá", link: "/regiones/boyaca/marquez/boyaca" },
        { name: "Ciénega", link: "/regiones/boyaca/marquez/cienega" },
        { name: "Jenesano", link: "/regiones/boyaca/marquez/jenesano" },
        { name: "Nuevo Colón", link: "/regiones/boyaca/marquez/nuevo-colon" },
        { name: "Rondón", link: "/regiones/boyaca/marquez/rondon" }
      ]
    },
    {
      name: "Región de Lengupá",
      imageUrl: "/lengupa-boyaca.jpg",
      surface: "1.397 km²",
      population: "32.000 habitantes",
      density: "22,91 hab/km²",
      capital: "Miraflores",
      location: "Sur-oriente del departamento de Boyacá, en la vertiente oriental de la Cordillera Oriental",
      description: "La Región de Lengupá se distingue por su conservación de la biodiversidad e innovación agrícola. Se enfoca en corredores biológicos, sistemas agroforestales inteligentes y bioprospección sostenible.",
      municipios: [
        { name: "Miraflores", link: "/regiones/boyaca/lengupa/miraflores" },
        { name: "Berbeo", link: "/regiones/boyaca/lengupa/berbeo" },
        { name: "Campohermoso", link: "/regiones/boyaca/lengupa/campohermoso" },
        { name: "Páez", link: "/regiones/boyaca/lengupa/paez" },
        { name: "San Eduardo", link: "/regiones/boyaca/lengupa/san-eduardo" },
        { name: "Zetaquira", link: "/regiones/boyaca/lengupa/zetaquira" }
      ]
    },
    {
      name: "Región de La Libertad",
      imageUrl: "/la-libertad-boyaca.jpg",
      surface: "1.042 km²",
      population: "28.000 habitantes",
      density: "26,87 hab/km²",
      capital: "Labranzagrande",
      location: "Oriente del departamento de Boyacá, en la vertiente oriental de la Cordillera Oriental, limitando con Casanare",
      description: "La Región de La Libertad se caracteriza por integrar la conservación de ecosistemas de páramo con prácticas agropecuarias sostenibles. Se enfoca en ganadería regenerativa, conservación de fuentes hídricas y agrobiodiversidad andina.",
      municipios: [
        { name: "Labranzagrande", link: "/regiones/boyaca/la-libertad/labranzagrande" },
        { name: "Paya", link: "/regiones/boyaca/la-libertad/paya" },
        { name: "Pisba", link: "/regiones/boyaca/la-libertad/pisba" },
        { name: "Pajarito", link: "/regiones/boyaca/la-libertad/pajarito" }
      ]
    },
    {
      name: "Región de Gutiérrez",
      imageUrl: "/gutierrez-boyaca.jpg",
      surface: "2.081 km²",
      population: "33.000 habitantes",
      density: "15,86 hab/km²",
      capital: "El Cocuy",
      location: "Nororiente del departamento de Boyacá, en la Cordillera Oriental de los Andes colombianos",
      description: "La Región de Gutiérrez se destaca por la conservación de ecosistemas de alta montaña y desarrollo sostenible. Se enfoca en la preservación de glaciares y páramos, turismo científico de alta montaña, y sistemas agropecuarios adaptados al cambio climático.",
      municipios: [
              { name: "El Cocuy", link: "/regiones/boyaca/gutierrez/el-cocuy" },
              { name: "Chiscas", link: "/regiones/boyaca/gutierrez/chiscas" },
              { name: "El Espino", link: "/regiones/boyaca/gutierrez/el-espino" },
              { name: "Guacamayas", link: "/regiones/boyaca/gutierrez/guacamayas" },
              { name: "Güicán de la Sierra", link: "/regiones/boyaca/gutierrez/guican-de-la-sierra" },
              { name: "Panqueba", link: "/regiones/boyaca/gutierrez/panqueba" }
            ]
          },
          {
            name: "Región Centro",
            imageUrl: "/centro-boyaca.jpg",
            surface: "1.725 km²",
            population: "260.000 habitantes",
            density: "150,72 hab/km²",
            capital: "Tunja",
            location: "Centro del departamento de Boyacá, en el altiplano cundiboyacense de la Cordillera Oriental",
            description: "La Región Centro de Boyacá se caracteriza por ser un polo de innovación, cultura y desarrollo sostenible. Se enfoca en soluciones urbanas inteligentes, preservación del patrimonio histórico-cultural, y el impulso al emprendimiento tecnológico.",
            municipios: [
              { name: "Tunja", link: "/regiones/boyaca/centro/tunja" },
              { name: "Cómbita", link: "/regiones/boyaca/centro/combita" },
              { name: "Cucaita", link: "/regiones/boyaca/centro/cucaita" },
              { name: "Chíquiza", link: "/regiones/boyaca/centro/chiquiza" },
              { name: "Chivatá", link: "/regiones/boyaca/centro/chivata" },
              { name: "Motavita", link: "/regiones/boyaca/centro/motavita" },
              { name: "Oicatá", link: "/regiones/boyaca/centro/oicata" },
              { name: "Samacá", link: "/regiones/boyaca/centro/samaca" },
              { name: "Siachoque", link: "/regiones/boyaca/centro/siachoque" },
              { name: "Sora", link: "/regiones/boyaca/centro/sora" },
              { name: "Soracá", link: "/regiones/boyaca/centro/soraca" },
              { name: "Sotaquirá", link: "/regiones/boyaca/centro/sotaquira" },
              { name: "Toca", link: "/regiones/boyaca/centro/toca" },
              { name: "Tuta", link: "/regiones/boyaca/centro/tuta" },
        { name: "Ventaquemada", link: "/regiones/boyaca/centro/ventaquemada" }
      ]
    }
  ]
};