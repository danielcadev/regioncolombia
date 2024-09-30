// Puedes colocar esto en un archivo separado, por ejemplo, types/user.ts

import { Account, ProyectoComunitario, Authenticator, Session } from '@prisma/client'

export interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  role: string;
  isActive: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  accounts: Account[];
  sessions: Session[];
  Authenticator: Authenticator[];
  projects: ProyectoComunitario[];
}