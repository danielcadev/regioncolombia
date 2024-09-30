import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const fileSchema = z.any()
  .refine((file) => file instanceof File, "File is required")
  .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
    ".jpg, .jpeg, .png and .webp files are accepted."
  );

export const proyectoComunitarioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  zone: z.string().min(1, "Zone is required"),
  authorName: z.string().min(1, "Author is required"),
  mainImage: fileSchema,
  content1: z.string().min(1, "Content 1 is required"),
  image1: fileSchema,
  content2: z.string().min(1, "Content 2 is required"),
  image2: fileSchema,
  content3: z.string().min(1, "Content 3 is required"),
});

export type ProyectoComunitarioFormValues = z.infer<typeof proyectoComunitarioSchema>;