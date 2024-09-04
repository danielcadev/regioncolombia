import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!token || token.role !== 'admin') {
      const url = new URL('/admin/login', req.url)
      url.searchParams.set('from', req.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}