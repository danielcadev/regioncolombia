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
          role: "User", // Asigna un rol por defecto para usuarios de GitHub
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
        try {
          if (!credentials || typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
            throw new Error("Invalid credentials")
          }
    
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })
    
          if (!user || !user.password) {
            throw new Error("User not found")
          }
    
          const isPasswordValid = await bcryptjs.compare(credentials.password, user.password)
    
          if (!isPasswordValid) {
            throw new Error("Invalid password")
          }
    
          console.log("Authorize - User found:", user)
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          }
        } catch (error) {
          console.error("Authorization error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session Callback - Token:", token);
      console.log("Session Callback - Session before:", session);
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      console.log("Session Callback - Session after:", session);
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Evita redirecciones infinitas a la página de inicio de sesión
      if (url.startsWith(baseUrl)) return url
      // De lo contrario, redirige a la página de inicio
      else return baseUrl
    },
  },
  session: {
    strategy: "jwt"  // Cambiado de "database" a "jwt"
  },
  pages: {
    signIn: "/admin/signin",
  },
  debug: process.env.NODE_ENV === 'development',
})

export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, 10)
}