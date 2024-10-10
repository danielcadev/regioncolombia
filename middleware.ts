import { NextResponse } from 'next/server'
import { auth } from "@/lib/auth"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  const isSignInPage = req.nextUrl.pathname === '/admin/signin'

  console.log(`Middleware - Path: ${req.nextUrl.pathname}, Logged in: ${isLoggedIn}`)

  if (isAdminRoute) {
    if (!isLoggedIn && !isSignInPage) {
      // Si no está autenticado y no está en la página de inicio de sesión, redirigir a /admin/signin
      return NextResponse.redirect(new URL('/admin/signin', req.url))
    }
    if (isLoggedIn && isSignInPage) {
      // Si está autenticado y está en la página de inicio de sesión, redirigir al panel de administración
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
  }

  // Para todas las demás rutas, continuar normalmente
  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}