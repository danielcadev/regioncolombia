import { CollectionConfig } from 'payload';

const checkRole = (allRoles: string[], user?: any): boolean => {
  if (user && user.role) {
    return allRoles.some(role => user.role === role);
  }
  return false;
};

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: ({ req }) => {
      return checkRole(['admin'], req.user);
    },
    update: ({ req, id }) => {
      if (checkRole(['admin'], req.user)) return true;
      if (req.user?.id === id) return true;
      return false;
    },
    delete: ({ req, id }) => {
      if (checkRole(['admin'], req.user)) return true;
      if (req.user?.id === id) return true;
      return false;
    },
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Author', value: 'author' },
      ],
      required: true,
      defaultValue: 'author',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'proyectos-comunitarios',
      hasMany: true,
      access: {
        update: ({ req, data }) => {
          if (!req.user) return true;
          if (checkRole(['admin'], req.user)) return true;
          return req.user?.role === 'author' && req.user.id === data?.id;
        },
      },
    },  
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data, originalDoc }) => {
        console.log('Users beforeChange hook - Input:', { operation, data, user: req.user });

        if (operation === 'create') {
          if (!checkRole(['admin'], req.user)) {
            data.role = 'author';
          }
        } else if (operation === 'update') {
          if (!checkRole(['admin'], req.user)) {
            // Mantener el rol original
            data.role = originalDoc.role;
          }
          // Asegurarse de que content sea un array
          if (!Array.isArray(data.content)) {
            data.content = Array.isArray(originalDoc.content) ? [...originalDoc.content] : [];
          }
        }

        console.log('Users beforeChange hook - Output:', data);
        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation }) => {
        console.log(`Users ${operation} completed:`, doc);
      },
    ],
  },
  
};