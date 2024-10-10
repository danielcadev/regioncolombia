// types/blog.ts

import { User as PrismaUser } from './user';

// Renombramos la interfaz User local a BlogUser para evitar conflictos
export interface BlogUser {
  id: string;
  name: string;
  email: string;
}

// Tipo base para un proyecto
export interface Proyecto {
  id: string;
  title: string;
  slug: string;
  zone: string;
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
  author: BlogUser;
  authorId: string;
}

export interface ProyectoZona {
  id: string;
  title: string;
  slug: string;
  mainImage?: string;
  zone: string;
}

// Tipo para la vista previa de un proyecto comunitario
export interface ProyectoComunitarioPreview {
  title: string;
  slug: string;
  zone: string;
  mainImage?: string;
  regionName: string;
  subRegionName: string;
}

// Tipo para los datos del formulario de creación/edición de proyecto
export interface ProyectoComunitarioFormData {
  title: string;
  slug: string;
  zone: string;
  authorId: string;
  mainImage?: File;
  content1: string;
  image1?: File;
  content2?: string;
  image2?: File;
  content3?: string;
}

// ExtendedUser ahora usa PrismaUser como base
export interface ExtendedUser extends PrismaUser {
  project: ProyectoComunitario | null;
}