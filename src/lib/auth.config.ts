// auth.config.ts
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // La lógica de autorización real estará en auth.ts
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT Callback - User:", user)
      console.log("JWT Callback - Token before:", token)
      if (user) {
        token.role = user.role
      }
      console.log("JWT Callback - Token after:", token)
      return token
    },
    async session({ session, token }) {
      console.log("Session Callback - Token:", token)
      console.log("Session Callback - Session before:", session)
      if (session.user) {
        session.user.role = token.role as string
      }
      console.log("Session Callback - Session after:", session)
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthConfig