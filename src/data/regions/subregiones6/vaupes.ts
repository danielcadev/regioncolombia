import { SubRegion } from '@/types/regions';

export const vaupes: SubRegion = {
  name: "Vaupés",
  insigniaUrl: "/VAUPES.png",
  description: "DEPARTAMENTO DE VAUPÉS: CORAZÓN DE LA DIVERSIDAD ÉTNICA Y NATURAL DE LA AMAZONÍA COLOMBIANA",
  interestPlaces: [
    "Cachivera de Jirijirimo",
    "Cerro de Mitú Cachivera",
    "Reserva Natural Nukak",
    "Raudal de Jirijirimo",
    "Comunidades indígenas del río Pirá Paraná",
    "Laguna de Taraira"
  ],
  communityProjects: "Vaupés se destaca por sus iniciativas de preservación cultural, proyectos de etnoturismo y programas de conservación de conocimientos ancestrales indígenas.",
  sustainableDevelopment: "El departamento impulsa proyectos de manejo sostenible de la selva, investigación en biodiversidad y desarrollo de economías locales basadas en productos no maderables del bosque.",
  imageUrl: "/vaupes.jpg",
  surface: "54.135 km²",
  population: "45.822 Hab. (Proyección DANE 2024)",
  density: "0,85 Hab/Km²",
  capital: "Mitú – 33.997 Hab. (Proyección DANE 2024)",
  location: "Vaupés está ubicado en el sureste de Colombia, en la región de la Amazonía, limitando con Brasil. Se caracteriza por su densa selva tropical, numerosos ríos y una extraordinaria diversidad cultural indígena.",
  zonas: [
    {
      name: "Región Vaupés",
      imageUrl: "/region-vaupes.jpg",
      surface: "54.135 km²",
      population: "45.822 habitantes",
      density: "0,85 hab/km²",
      capital: "Mitú",
      location: "Sureste de Colombia, en el corazón de la Amazonía",
      description: "La Región Vaupés abarca todo el departamento y se distingue por su vasta selva amazónica, rica biodiversidad y la presencia de numerosas comunidades indígenas. Es un territorio clave para la conservación ecológica y cultural, con potencial para la investigación científica y el turismo sostenible.",
      municipios: [
        { name: "Mitú", link: "/regiones/vaupes/mitu" },
        { name: "Carurú", link: "/regiones/vaupes/caruru" },
        { name: "Taraira", link: "/regiones/vaupes/taraira" },
        { name: "Papunaua", link: "/regiones/vaupes/papunaua" },
        { name: "Yavaraté", link: "/regiones/vaupes/yavarate" },
        { name: "Pacoa", link: "/regiones/vaupes/pacoa" }
      ]
    }
  ]
};