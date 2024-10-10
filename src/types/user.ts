// types/user.ts

import { Account, ProyectoComunitario, Authenticator, Session } from '@prisma/client'

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password?: string | null;
  role?: "USER" | "ADMIN";
  isActive?: boolean;
  deletedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  accounts?: Account[];
  sessions?: Session[];
  Authenticator?: Authenticator[];
  projects?: ProyectoComunitario[];
}

export type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'accounts' | 'sessions' | 'Authenticator' | 'projects'> & {
  password: string;
};

export type UserUpdateInput = Partial<Omit<User, 'id'>> & { id: string };