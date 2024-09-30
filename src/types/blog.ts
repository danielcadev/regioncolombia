// types/blog.ts

// Tipo base para un usuario
export interface User {
  id: string;
  name: string;
  email: string;
}

// Tipo base para un proyecto
export interface Proyecto {
  id: string;
  title: string;
  slug: string;
  zona: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}



// Tipo completo para un proyecto comunitario
export interface ProyectoComunitario extends Proyecto {
  mainImage?: string;
  content1: string;
  image1?: string;
  content2?: string;
  image2?: string;
  content3?: string;
  author: User;
  authorId: string;
}


export interface ProyectoZona {
  id: string;
  title: string;
  slug: string;
  mainImage?: string;
  zona: string;
}

// Tipo para la vista previa de un proyecto comunitario
export interface ProyectoComunitarioPreview {
  title: string;
  slug: string;
  zona: string;
  mainImage?: string;
  regionName: string;
  subRegionName: string;
}

// Tipo para los datos del formulario de creación/edición de proyecto
export interface ProyectoComunitarioFormData {
  title: string;
  slug: string;
  zona: string;
  authorId: string;
  mainImage?: File;
  content1: string;
  image1?: File;
  content2?: string;
  image2?: File;
  content3?: string;
}
