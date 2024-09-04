import { SubRegion } from '@/types/regions';

export const bogota: SubRegion = {
  name: "Bogotá",
  insigniaUrl: "/BOGOTA.png",
  description: "BOGOTÁ D.C.: CAPITAL DE COLOMBIA Y CENTRO ECONÓMICO, POLÍTICO Y CULTURAL DEL PAÍS",
  interestPlaces: [
    "Monserrate",
    "Plaza de Bolívar",
    "Museo del Oro",
    "Jardín Botánico José Celestino Mutis",
    "Parque Simón Bolívar",
    "La Candelaria"
  ],
  communityProjects: "Bogotá se destaca por sus iniciativas de innovación social, proyectos de movilidad sostenible y programas de inclusión para poblaciones vulnerables.",
  sustainableDevelopment: "La ciudad impulsa proyectos de energía limpia, gestión integral de residuos y conservación de los cerros orientales, buscando un equilibrio entre el desarrollo urbano y la sostenibilidad ambiental.",
  imageUrl: "/bogota.jpg",
  surface: "1.775 km²",
  population: "7.901.653 Hab. (Proyección DANE 2024)",
  density: "4.451,63 Hab/Km²",
  capital: "Bogotá D.C. (Distrito Capital)",
  location: "Bogotá está ubicada en el centro de Colombia, en la cordillera oriental de los Andes, a una altitud promedio de 2.640 metros sobre el nivel del mar.",
  zonas: [
    {
      name: "Localidad de Usaquén",
      imageUrl: "/localidad-usaquen-bogota.jpg",
      surface: "65,31 km²",
      population: "501.999 habitantes (Proyección 2024)",
      density: "7.685,94 hab/km²",
      capital: "Usaquén",
      location: "Norte de la ciudad",
      description: "Conocida por sus zonas residenciales de alto estrato, centros comerciales y restaurantes. Incluye áreas de reserva en los cerros orientales.",
      municipios: [
        { name: "Usaquén", link: "/regiones/bogota/usaquen/usaquen" }
      ]
    },
    {
      name: "Localidad de Chapinero",
      imageUrl: "/localidad-chapinero-bogota.jpg",
      surface: "38,15 km²",
      population: "166.000 habitantes (Proyección 2024)",
      density: "4.351,24 hab/km²",
      capital: "Chapinero",
      location: "Nororiente de la ciudad",
      description: "Centro financiero y de entretenimiento. Combina zonas residenciales, comerciales y una activa vida nocturna.",
      municipios: [
        { name: "Chapinero", link: "/regiones/bogota/chapinero/chapinero" }
      ]
    },
    {
      name: "Localidad de Santa Fe",
      imageUrl: "/localidad-santa-fe-bogota.jpg",
      surface: "45,17 km²",
      population: "95.201 habitantes (Proyección 2024)",
      density: "2.107,61 hab/km²",
      capital: "Santa Fe",
      location: "Centro de la ciudad",
      description: "Corazón histórico y administrativo de Bogotá. Incluye La Candelaria, centro turístico y cultural de la ciudad.",
      municipios: [
        { name: "Santa Fe", link: "/regiones/bogota/santa-fe/santa-fe" }
      ]
    },
    {
      name: "Localidad de San Cristóbal",
      imageUrl: "/localidad-san-cristobal-bogota.jpg",
      surface: "49,09 km²",
      population: "392.220 habitantes (Proyección 2024)",
      density: "7.989,61 hab/km²",
      capital: "San Cristóbal",
      location: "Suroriente de la ciudad",
      description: "Localidad con importantes reservas naturales en los cerros orientales y diversos barrios populares.",
      municipios: [
        { name: "San Cristóbal", link: "/regiones/bogota/san-cristobal/san-cristobal" }
      ]
    },
    {
      name: "Localidad de Usme",
      imageUrl: "/localidad-usme-bogota.jpg",
      surface: "215,06 km²",
      population: "342.940 habitantes (Proyección 2024)",
      density: "1.594,16 hab/km²",
      capital: "Usme",
      location: "Sur de la ciudad",
      description: "Una de las localidades más extensas, con importantes áreas rurales y reservas naturales.",
      municipios: [
        { name: "Usme", link: "/regiones/bogota/usme/usme" }
      ]
    },
    {
      name: "Localidad de Tunjuelito",
      imageUrl: "/localidad-tunjuelito-bogota.jpg",
      surface: "9,91 km²",
      population: "184.743 habitantes (Proyección 2024)",
      density: "18.642,08 hab/km²",
      capital: "Tunjuelito",
      location: "Sur de la ciudad",
      description: "Localidad con importante actividad industrial y comercial, atravesada por el río Tunjuelo.",
      municipios: [
        { name: "Tunjuelito", link: "/regiones/bogota/tunjuelito/tunjuelito" }
      ]
    },
    {
      name: "Localidad de Bosa",
      imageUrl: "/localidad-bosa-bogota.jpg",
      surface: "23,93 km²",
      population: "776.363 habitantes (Proyección 2024)",
      density: "32.443,50 hab/km²",
      capital: "Bosa",
      location: "Suroccidente de la ciudad",
      description: "Una de las localidades más pobladas, con una mezcla de zonas residenciales e industriales.",
      municipios: [
        { name: "Bosa", link: "/regiones/bogota/bosa/bosa" }
      ]
    },
    {
      name: "Localidad de Kennedy",
      imageUrl: "/localidad-kennedy-bogota.jpg",
      surface: "38,59 km²",
      population: "1.273.390 habitantes (Proyección 2024)",
      density: "33.000,26 hab/km²",
      capital: "Kennedy",
      location: "Suroccidente de la ciudad",
      description: "Una de las localidades más pobladas. Importante centro comercial e industrial con diversos barrios residenciales.",
      municipios: [
        { name: "Kennedy", link: "/regiones/bogota/kennedy/kennedy" }
      ]
    },
    {
      name: "Localidad de Fontibón",
      imageUrl: "/localidad-fontibon-bogota.jpg",
      surface: "33,28 km²",
      population: "424.038 habitantes (Proyección 2024)",
      density: "12.741,83 hab/km²",
      capital: "Fontibón",
      location: "Occidente de la ciudad",
      description: "Importante centro industrial y logístico. Alberga el Aeropuerto Internacional El Dorado.",
      municipios: [
        { name: "Fontibón", link: "/regiones/bogota/fontibon/fontibon" }
      ]
    },
    {
      name: "Localidad de Engativá",
      imageUrl: "/localidad-engativa-bogota.jpg",
      surface: "35,88 km²",
      population: "887.886 habitantes (Proyección 2024)",
      density: "24.745,43 hab/km²",
      capital: "Engativá",
      location: "Noroccidente de la ciudad",
      description: "Localidad con una mezcla de zonas residenciales, comerciales e industriales. Incluye el Jardín Botánico de Bogotá.",
      municipios: [
        { name: "Engativá", link: "/regiones/bogota/engativa/engativa" }
      ]
    },
    {
      name: "Localidad de Suba",
      imageUrl: "/localidad-suba-bogota.jpg",
      surface: "100,56 km²",
      population: "1.348.372 habitantes (Proyección 2024)",
      density: "13.408,23 hab/km²",
      capital: "Suba",
      location: "Noroeste de la ciudad",
      description: "La localidad más extensa y segunda más poblada. Combina todos los estratos socioeconómicos y tiene importantes áreas verdes.",
      municipios: [
        { name: "Suba", link: "/regiones/bogota/suba/suba" }
      ]
    },
    {
      name: "Localidad de Barrios Unidos",
      imageUrl: "/localidad-barrios-unidos-bogota.jpg",
      surface: "11,90 km²",
      population: "273.396 habitantes (Proyección 2024)",
      density: "22.974,45 hab/km²",
      capital: "Barrios Unidos",
      location: "Norte de la ciudad",
      description: "Conocida por sus zonas comerciales especializadas y barrios tradicionales.",
      municipios: [
        { name: "Barrios Unidos", link: "/regiones/bogota/barrios-unidos/barrios-unidos" }
      ]
    },
    {
      name: "Localidad de Teusaquillo",
      imageUrl: "/localidad-teusaquillo-bogota.jpg",
      surface: "14,19 km²",
      population: "140.473 habitantes (Proyección 2024)",
      density: "9.899,44 hab/km²",
      capital: "Teusaquillo",
      location: "Centro-occidente de la ciudad",
      description: "Zona residencial de clase media-alta con importante presencia de universidades y espacios culturales.",
      municipios: [
        { name: "Teusaquillo", link: "/regiones/bogota/teusaquillo/teusaquillo" }
      ]
    },
    {
      name: "Localidad de Los Mártires",
      imageUrl: "/localidad-los-martires-bogota.jpg",
      surface: "6,51 km²",
      population: "93.716 habitantes (Proyección 2024)",
      density: "14.395,70 hab/km²",
      capital: "Los Mártires",
      location: "Centro de la ciudad",
      description: "Zona comercial e histórica, alberga importantes plazas de mercado y monumentos.",
      municipios: [
        { name: "Los Mártires", link: "/regiones/bogota/los-martires/los-martires" }
      ]
    },
    {
      name: "Localidad de Antonio Nariño",
      imageUrl: "/localidad-antonio-narino-bogota.jpg",
      surface: "4,88 km²",
      population: "109.254 habitantes (Proyección 2024)",
      density: "22.388,11 hab/km²",
      capital: "Antonio Nariño",
      location: "Sur de la ciudad",
      description: "Pequeña localidad conocida por su actividad comercial, especialmente en el sector del calzado.",
      municipios: [
        { name: "Antonio Nariño", link: "/regiones/bogota/antonio-narino/antonio-narino" }
      ]
    },
    {
      name: "Localidad de Puente Aranda",
      imageUrl: "/localidad-puente-aranda-bogota.jpg",
      surface: "17,31 km²",
      population: "221.906 habitantes (Proyección 2024)",
      density: "12.820,68 hab/km²",
      capital: "Puente Aranda",
      location: "Centro-occidente de la ciudad",
      description: "Principal zona industrial de Bogotá, con importantes complejos fabriles y empresariales.",
      municipios: [
        { name: "Puente Aranda", link: "/regiones/bogota/puente-aranda/puente-aranda" }
      ]
    },
    {
      name: "Localidad de La Candelaria",
      imageUrl: "/localidad-la-candelaria-bogota.jpg",
      surface: "2,06 km²",
      population: "22.041 habitantes (Proyección 2024)",
      density: "10.699,51 hab/km²",
      capital: "La Candelaria",
      location: "Centro histórico de la ciudad",
      description: "Corazón histórico y cultural de Bogotá, con arquitectura colonial y numerosos museos y universidades.",
      municipios: [
        { name: "La Candelaria", link: "/regiones/bogota/la-candelaria/la-candelaria" }
      ]
    },
    {
      name: "Localidad de Rafael Uribe Uribe",
      imageUrl: "/localidad-rafael-uribe-uribe-bogota.jpg",
      surface: "13,83 km²",
      population: "350.944 habitantes (Proyección 2024)",
      density: "25.375,56 hab/km²",
      capital: "Rafael Uribe Uribe",
      location: "Sur de la ciudad",
      description: "Localidad con una mezcla de áreas residenciales y comerciales, conocida por su diversidad cultural.",
      municipios: [
        { name: "Rafael Uribe Uribe", link: "/regiones/bogota/rafael-uribe-uribe/rafael-uribe-uribe" }
      ]
    },
    {
      name: "Localidad de Ciudad Bolívar",
      imageUrl: "/localidad-ciudad-bolivar-bogota.jpg",
      surface: "130 km²",
      population: "776.351 habitantes (Proyección 2024)",
      density: "5.971,93 hab/km²",
      capital: "Ciudad Bolívar",
      location: "Sur de la ciudad",
      description: "Una de las localidades más grandes y pobladas, con importantes desafíos sociales y económicos.",
      municipios: [
        { name: "Ciudad Bolívar", link: "/regiones/bogota/ciudad-bolivar/ciudad-bolivar" }
      ]
    },
    {
      name: "Localidad de Sumapaz",
      imageUrl: "/localidad-sumapaz-bogota.jpg",
      surface: "780,96 km²",
      population: "7.711 habitantes (Proyección 2024)",
      density: "9,87 hab/km²",
      capital: "Sumapaz",
      location: "Sur de la ciudad",
      description: "La localidad más extensa y menos poblada, completamente rural. Incluye gran parte del Páramo de Sumapaz.",
      municipios: [
        { name: "Sumapaz", link: "/regiones/bogota/sumapaz/sumapaz" }
      ]
    }
  ]
};