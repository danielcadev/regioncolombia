import { SubRegion } from '@/types/regions';

export const sanAndres: SubRegion = {
  name: "San Andrés, Providencia y Santa Catalina",
  insigniaUrl: "/SANANDRES.png",
  description: "3 SUBREGIONES DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA DESTACADAS POR SUS PROYECTOS COMUNITARIOS Y DESARROLLO SOSTENIBLE",
  interestPlaces: [
    "Playa de Siete Colores (San Andrés)",
    "Parque Nacional Natural Old Providence McBean Lagoon",
    "Hoyo Soplador (San Andrés)",
    "Cayo Cangrejo (Providencia)",
    "Cueva de Morgan (Providencia)",
    "The Peak (Punto más alto de Providencia)"
  ],
  communityProjects: "El archipiélago se destaca por sus iniciativas comunitarias en conservación marina, desarrollo sostenible insular y preservación de la cultura raizal.",
  sustainableDevelopment: "La región impulsa proyectos de energías renovables, gestión integral de recursos hídricos y protección de ecosistemas marinos y costeros.",
  imageUrl: "/sanandres.jpg",
  surface: "52,5 km²",
  population: "80.000 Hab. (Proyección DANE 2024)",
  density: "1.523,8 Hab/Km²",
  capital: "San Andrés – 65.000 Hab. (Proyección DANE 2024)",
  location: "El Archipiélago de San Andrés, Providencia y Santa Catalina está ubicado en el Mar Caribe, a unos 775 km al noroeste de la Colombia continental. Comprende tres islas principales y varios cayos, formando parte de la Reserva de Biosfera Seaflower declarada por la UNESCO.",
  zonas: [
    {
      name: "Región San Andrés",
      imageUrl: "/san-andres-archipelago.jpg",
      surface: "26 km²",
      population: "65.000 habitantes",
      density: "2.500 hab/km²",
      capital: "San Andrés",
      location: "Mar Caribe occidental, a 720 km de la costa continental de Colombia",
      description: "La Región de San Andrés se caracteriza por su biodiversidad marina, arrecifes de coral y cultura raizal. Se destaca por la implementación de soluciones para la resiliencia climática, la economía azul sostenible y la conservación de la Reserva de Biosfera Seaflower.",
      municipios: [
        { name: "San Andrés", link: "/regiones/san-andres/san-andres" }
      ]
    },
    {
      name: "Región Providencia",
      imageUrl: "/providencia-island.jpg",
      surface: "17 km²",
      population: "5.000 habitantes",
      density: "294,12 hab/km²",
      capital: "Santa Isabel",
      location: "80 km al norte de la isla de San Andrés",
      description: "La Región de Providencia se distingue por su paisaje montañoso, ecosistemas marinos prístinos y fuerte identidad cultural raizal. Se enfoca en la conservación ambiental, el desarrollo comunitario sostenible y la preservación de tradiciones locales.",
      municipios: [
        { name: "Providencia", link: "/regiones/san-andres/providencia" }
      ]
    },
    {
      name: "Región Santa Catalina",
      imageUrl: "/santa-catalina-island.jpg",
      surface: "1 km²",
      population: "300 habitantes",
      density: "300 hab/km²",
      capital: "Santa Catalina",
      location: "Separada de Providencia por un canal estrecho",
      description: "La Región de Santa Catalina, la más pequeña del archipiélago, se caracteriza por su naturaleza preservada y baja densidad poblacional. Se enfoca en la conservación de ecosistemas y el desarrollo de prácticas sostenibles a pequeña escala.",
      municipios: [
        { name: "Santa Catalina", link: "/regiones/san-andres/santa-catalina" }
      ]
    }
  ]
};