import { auth } from "@/lib/auth"
import AdminLayoutClient from "@/components/admin/layout/ClientAuthChecker"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <AdminLayoutClient session={session}>
      {children}
    </AdminLayoutClient>
  )
}
