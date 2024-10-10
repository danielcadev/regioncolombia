// app/admin/users/page.tsx
import { auth } from "@/lib/auth"
import { redirect } from 'next/navigation'
import UserManagement from "@/components/admin/users/UserManagement"
import { Session } from "next-auth"

export default async function UsersPage() {
  const session = await auth() as Session | null
  
  if (!session) {
    redirect('/admin/signin')
  }
 
  if (session.user.role !== 'ADMIN') {
    console.log("User role:", session.user.role)
    redirect('/admin/dashboard')
  }
 
  return <UserManagement initialSession={session} />
}