import { SubRegion } from '@/types/regions';

export const guainia: SubRegion = {
  name: "Guainía",
  insigniaUrl: "/GUAINIA.png",
  description: "DEPARTAMENTO DE GUAINÍA: TESORO NATURAL EN EL ORIENTE COLOMBIANO",
  interestPlaces: [
    "Cerros de Mavecure",
    "Reserva Nacional Natural Puinawai",
    "Río Inírida",
    "Estrella Fluvial de Inírida",
    "Comunidad indígena de Remanso",
    "Laguna Brujas"
  ],
  communityProjects: "Guainía se destaca por sus iniciativas de etnoturismo, conservación de la biodiversidad y proyectos de desarrollo sostenible que respetan las tradiciones indígenas.",
  sustainableDevelopment: "El departamento impulsa proyectos de energías renovables, manejo sostenible de recursos naturales y programas de educación ambiental adaptados a su contexto multicultural.",
  imageUrl: "/guainia.jpg",
  surface: "72.238 km²",
  population: "50.636 Hab. (Proyección DANE 2024)",
  density: "0,70 Hab/Km²",
  capital: "Inírida – 24.917 Hab. (Proyección DANE 2024)",
  location: "Guainía está ubicado en el extremo oriental de Colombia, en la región de la Amazonía, limitando con Venezuela y Brasil. Se caracteriza por sus extensos ríos, selvas vírgenes y formaciones rocosas únicas.",
  zonas: [
    {
      name: "Región Guainía",
      imageUrl: "/region-guainia.jpg",
      surface: "72.238 km²",
      population: "50.636 habitantes",
      density: "0,70 hab/km²",
      capital: "Inírida",
      location: "Extremo oriental de Colombia, limitando con Venezuela y Brasil",
      description: "La Región Guainía abarca todo el departamento y se distingue por su rica biodiversidad, múltiples culturas indígenas y vastos recursos hídricos. Es un territorio de gran importancia ecológica y cultural, con potencial para el desarrollo de turismo sostenible y la investigación científica.",
      municipios: [
        { name: "Inírida", link: "/regiones/guainia/inirida" },
        { name: "Barranco Minas", link: "/regiones/guainia/barranco-minas" },
        { name: "Mapiripana", link: "/regiones/guainia/mapiripana" },
        { name: "San Felipe", link: "/regiones/guainia/san-felipe" },
        { name: "Puerto Colombia", link: "/regiones/guainia/puerto-colombia" },
        { name: "La Guadalupe", link: "/regiones/guainia/la-guadalupe" },
        { name: "Cacahual", link: "/regiones/guainia/cacahual" },
        { name: "Pana Pana", link: "/regiones/guainia/pana-pana" },
        { name: "Morichal", link: "/regiones/guainia/morichal" }
      ]
    }
  ]
};