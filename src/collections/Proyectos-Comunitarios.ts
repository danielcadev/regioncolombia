import { CollectionConfig } from 'payload';
import slugify from 'slugify';

const formatSlug = (title: string | { [key: string]: string }): string => {
  if (typeof title === 'object') {
    const titleString = title.es || title.en || '';
    return slugify(titleString, { lower: true, strict: true });
  }
  return slugify(title, { lower: true, strict: true });
};

const checkRole = (allRoles: string[], user?: any): boolean => {
  if (user && user.role) {
    return allRoles.some(role => user.role === role);
  }
  return false;
};

export const CommunityProjects: CollectionConfig = {
  slug: 'proyectos-comunitarios',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'Zone', 'author'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => {
      return !!req.user;
    },
    update: ({ req }) => {
      if (req.user?.role === 'admin') return true;
      return {
        author: {
          equals: req.user?.id,
        },
      };
    },
    delete: ({ req }) => {
      if (req.user?.role === 'admin') return true;
      return {
        author: {
          equals: req.user?.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
      label: {
        en: 'Title',
        es: 'Título',
      },
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (data && data.title) {
              return formatSlug(data.title);
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'Zone',
      type: 'text',
      required: true,
      index: true,
      label: {
        en: 'Zone',
        es: 'Zona',
      },
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      label: {
        en: 'Main Image',
        es: 'Imagen Principal',
      },
    },
    {
      name: 'content1',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Content 1',
        es: 'Contenido 1',
      },
    },
    {
      name: 'image1',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Image 1',
        es: 'Imagen 1',
      },
    },
    {
      name: 'content2',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Content 2',
        es: 'Contenido 2',
      },
    },
    {
      name: 'image2',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Image 2',
        es: 'Imagen 2',
      },
    },
    {
      name: 'content3',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Content 3',
        es: 'Contenido 3',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      label: {
        en: 'Author',
        es: 'Autor',
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create' && doc.author) {
          try {
            console.log('Attempting to update user content');
            const authorId = typeof doc.author === 'object' ? doc.author.id : doc.author;
            
            const user = await req.payload.findByID({
              collection: 'users',
              id: authorId,
            });

            if (user) {
              const updatedContent = Array.isArray(user.content)
                ? [...user.content, doc.id]
                : [doc.id];

              console.log('Updating user content', { authorId, updatedContent });
              await req.payload.update({
                collection: 'users',
                id: authorId,
                data: {
                  content: updatedContent,
                },
                depth: 0,
                user: req.user,
              });

              console.log('User content updated successfully', { authorId, projectId: doc.id });
            } else {
              console.error('User not found:', authorId);
            }
          } catch (error) {
            console.error('Error updating user content:', error);
          }
        }
      },
    ],
  },
};


export default CommunityProjects;
