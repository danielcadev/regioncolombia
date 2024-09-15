import { Access, CollectionConfig } from 'payload';

export const checkRole = (roles: string[], user?: any): boolean => {
    console.log('Checking role. User:', user, 'Required roles:', roles);
    if (user && user.role) {
      const hasRole = roles.includes(user.role);
      console.log('User has required role:', hasRole);
      return hasRole;
    }
    console.log('No user or user role');
    return false;
  };