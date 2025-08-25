import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = false; // aqui você faria a lógica real

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/posts")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/posts/:path*']  //aplica em todas as rotas do posts
}