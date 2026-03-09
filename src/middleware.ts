import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Ambil token dari cookies (Firebase biasanya menyimpannya di sini)
  const session = request.cookies.get('firebase-auth-token'); 

  // Jika user mencoba masuk ke /dashboard tapi tidak ada session
  if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

// Konfigurasi agar middleware hanya berjalan di halaman dashboard
export const config = {
  matcher: ['/dashboard/:path*'],
};