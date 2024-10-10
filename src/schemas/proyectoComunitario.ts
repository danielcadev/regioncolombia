import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const fileSchema = z.union([
  z.custom<File>((file) => file instanceof File, "Expected a File object"),
  z.string().url("Invalid URL"),
  z.null(),
  z.undefined()
])
.refine((file) => {
  if (file instanceof File) {
    return file.size <= MAX_FILE_SIZE;
  }
  return true;
}, `Max file size is 5MB.`)
.refine((file) => {
  if (file instanceof File) {
    return ACCEPTED_IMAGE_TYPES.includes(file.type);
  }
  return true;
}, "Only .jpg, .jpeg, .png and .webp formats are supported.");

export const proyectoComunitarioSchema = z.object({
  title: z.string().min(1, "El título es requerido").max(100, "El título no puede tener más de 100 caracteres"),
  slug: z.string().min(1, "El slug es requerido").max(100, "El slug no puede tener más de 100 caracteres"),
  zone: z.string().min(1, "La zona es requerida").max(100, "La zona no puede tener más de 100 caracteres"),
  authorId: z.string().min(1, "El ID del autor es requerido"),
  content1: z.string().min(1, "El contenido 1 es requerido"),
  content2: z.string().min(1, "El contenido 2 es requerido"),
  content3: z.string().min(1, "El contenido 3 es requerido"),
  mainImage: fileSchema,
  image1: fileSchema,
  image2: fileSchema,
});

export type ProyectoComunitarioFormData = z.infer<typeof proyectoComunitarioSchema>;