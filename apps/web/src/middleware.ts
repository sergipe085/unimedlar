import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // cookie.set("Authorization", request.headers.get("Authorization") ?? "");
  
  //   const currentUser = request.cookies.get('currentUser')?.value
  
  //   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //     return Response.redirect(new URL('/dashboard', request.url))
  //   }
  
  //   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //     return Response.redirect(new URL('/login', request.url))
  //   }

  // if (!request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }
}
