import { auth } from "@/lib/auth"
import { redirect } from 'next/navigation'
import UsersClient from "./UsersClient"
import { Session } from "next-auth"

export default async function UsersPage() {
  const session = await auth() as Session | null
  
  console.log("Server-side session:", session) // Log adicional

  if (!session) {
    redirect('/admin/signin')
  }
 
  if (session.user.role !== 'ADMIN') {
    console.log("User role:", session.user.role)
    redirect('/admin/dashboard')
  }
 
  return <UsersClient initialSession={session} />
}