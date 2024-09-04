import { SubRegion } from '@/types/regions';

export const amazonas: SubRegion = {
  name: "Amazonas",
  insigniaUrl: "/AMAZONAS.png",
  description: "DEPARTAMENTO DE AMAZONAS: PULMÓN DEL MUNDO Y RESERVA DE BIODIVERSIDAD",
  interestPlaces: [
    "Parque Nacional Natural Amacayacu",
    "Isla de los Micos",
    "Reserva Natural Tanimboca",
    "Lagos de Tarapoto",
    "Parque Ecológico Mundo Amazónico",
    "Comunidades indígenas del río Amazonas"
  ],
  communityProjects: "Amazonas se destaca por sus iniciativas de conservación de la selva tropical, proyectos de ecoturismo comunitario y programas de investigación en biodiversidad.",
  sustainableDevelopment: "El departamento impulsa proyectos de economía circular, manejo sostenible de recursos naturales y desarrollo de productos amazónicos con valor agregado.",
  imageUrl: "/amazonas.jpg",
  surface: "109.665 km²",
  population: "80.487 Hab. (Proyección DANE 2024)",
  density: "0,73 Hab/Km²",
  capital: "Leticia – 43.760 Hab. (Proyección DANE 2024)",
  location: "Amazonas está ubicado en el extremo sur de Colombia, en la región amazónica, compartiendo fronteras con Perú y Brasil. Se caracteriza por su vasta selva tropical, la cuenca del río Amazonas y una extraordinaria biodiversidad.",
  zonas: [
    {
      name: "Región Amazonas",
      imageUrl: "/region-amazonas.jpg",
      surface: "109.665 km²",
      population: "80.487 habitantes",
      density: "0,73 hab/km²",
      capital: "Leticia",
      location: "Extremo sur de Colombia, en la triple frontera con Perú y Brasil",
      description: "La Región Amazonas abarca todo el departamento y se distingue por albergar la mayor extensión de selva amazónica en Colombia. Es un territorio crucial para la conservación global, la investigación científica y el desarrollo de modelos sostenibles de aprovechamiento de la biodiversidad.",
      municipios: [
        { name: "Leticia", link: "/regiones/amazonas/leticia" },
        { name: "Puerto Nariño", link: "/regiones/amazonas/puerto-narino" },
        { name: "La Chorrera", link: "/regiones/amazonas/la-chorrera" },
        { name: "La Pedrera", link: "/regiones/amazonas/la-pedrera" },
        { name: "Tarapacá", link: "/regiones/amazonas/tarapaca" },
        { name: "Puerto Alegría", link: "/regiones/amazonas/puerto-alegria" },
        { name: "El Encanto", link: "/regiones/amazonas/el-encanto" },
        { name: "Puerto Arica", link: "/regiones/amazonas/puerto-arica" },
        { name: "Mirití-Paraná", link: "/regiones/amazonas/miriti-parana" },
        { name: "La Victoria", link: "/regiones/amazonas/la-victoria" },
        { name: "Puerto Santander", link: "/regiones/amazonas/puerto-santander" }
      ]
    }
  ]
};