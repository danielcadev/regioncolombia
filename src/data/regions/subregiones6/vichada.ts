import { SubRegion } from '@/types/regions';

export const vichada: SubRegion = {
  name: "Vichada",
  insigniaUrl: "/VICHADA.png",
  description: "DEPARTAMENTO DE VICHADA: FRONTERA ENTRE LOS LLANOS Y LA AMAZONÍA",
  interestPlaces: [
    "Parque Nacional Natural El Tuparro",
    "Río Orinoco",
    "Reserva Natural Bojonawi",
    "Cerro Bandera",
    "Laguna del Pañuelo",
    "Raudales de Maipures"
  ],
  communityProjects: "Vichada se destaca por sus iniciativas de desarrollo rural sostenible, proyectos de conservación de ecosistemas de sabana y programas de turismo de naturaleza.",
  sustainableDevelopment: "El departamento impulsa proyectos de ganadería sostenible, agricultura de precisión adaptada a la Orinoquía y desarrollo de energías renovables.",
  imageUrl: "/vichada.jpg",
  surface: "100.242 km²",
  population: "112.958 Hab. (Proyección DANE 2024)",
  density: "1,13 Hab/Km²",
  capital: "Puerto Carreño – 16.668 Hab. (Proyección DANE 2024)",
  location: "Vichada está ubicado en el oriente de Colombia, en la región de los Llanos Orientales, limitando con Venezuela. Se caracteriza por sus extensas sabanas, ríos caudalosos y la transición hacia la selva amazónica.",
  zonas: [
    {
      name: "Región Vichada",
      imageUrl: "/region-vichada.jpg",
      surface: "100.242 km²",
      population: "112.958 habitantes",
      density: "1,13 hab/km²",
      capital: "Puerto Carreño",
      location: "Oriente de Colombia, en la confluencia de los ríos Meta y Orinoco",
      description: "La Región Vichada abarca todo el departamento y se distingue por ser una zona de transición entre los llanos y la selva amazónica. Es un territorio de gran importancia para la conservación de ecosistemas de sabana y el desarrollo de modelos sostenibles de producción adaptados a la Orinoquía.",
      municipios: [
        { name: "Puerto Carreño", link: "/regiones/vichada/puerto-carreno" },
        { name: "La Primavera", link: "/regiones/vichada/la-primavera" },
        { name: "Santa Rosalía", link: "/regiones/vichada/santa-rosalia" },
        { name: "Cumaribo", link: "/regiones/vichada/cumaribo" }
      ]
    }
  ]
};