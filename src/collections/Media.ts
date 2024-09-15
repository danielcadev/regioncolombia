import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user, // Solo usuarios autenticados pueden crear
    update: ({ req: { user } }) => !!user, // Solo usuarios autenticados pueden actualizar
    delete: ({ req: { user } }) => {
      if (!user) return false; // Si no hay usuario, no se permite eliminar
      
      // Los usuarios solo pueden eliminar sus propios archivos
      return {
        createdBy: {
          equals: user.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
};