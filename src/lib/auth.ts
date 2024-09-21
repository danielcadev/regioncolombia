import NextAuth, { DefaultSession, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    } & DefaultSession["user"]
  }

  interface User {
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string | null;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: "ADMIN", // Asigna un rol por defecto para usuarios de GitHub
        }
      },
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || 
            typeof credentials.email !== 'string' || 
            typeof credentials.password !== 'string') {
          return null
        }
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        
        if (!user || !user.password) {
          return null
        }
        
        const isPasswordValid = await bcryptjs.compare(credentials.password, user.password)
        
        if (!isPasswordValid) {
          return null
        }
        
        console.log("Authorize - User found:", user)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }: { session: any, token: JWT, user: User }) {
      console.log("Session Callback - Token:", token);
      console.log("Session Callback - User:", user);
      console.log("Session Callback - Session before:", session);

      if (session.user) {
        session.user.id = token?.id ?? user?.id ?? 'unknown';
        session.user.role = token?.role ?? user?.role ?? null;
      }

      console.log("Session Callback - Session after:", session);
      return session;
    },
  },
  session: {
    strategy: "database"
  },
  pages: {
    signIn: "/admin/signin",
  },
})

export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, 10)
}