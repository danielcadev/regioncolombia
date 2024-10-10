"use client";
import { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';

interface AdminLayoutClientProps {
  children: ReactNode;
  session: Session | null;
}

export default function AdminLayoutClient({ children, session }: AdminLayoutClientProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!session && pathname !== '/admin/signin') {
      router.push('/admin/signin');
    }
  }, [session, pathname, router]);

  if (!session && pathname !== '/admin/signin') {
    return null; // No renderizar nada mientras redirige
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/admin/dashboard" className="text-xl font-bold text-gray-800">
                Admin
              </Link>
            </div>
            <div>
              {session ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">{session.user?.name}</span>
                  <button
                    onClick={() => signOut({ callbackUrl: '/admin/signin' })}
                    className="text-sm text-gray-700 hover:text-gray-900"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <Link href="/admin/signin" className="text-sm text-gray-700 hover:text-gray-900">
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}