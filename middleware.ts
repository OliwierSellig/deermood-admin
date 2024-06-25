import { auth } from '@/src/auth';

const unAuthPaths = ['/login', '/forgot-password'];

export default auth((req) => {
  if (!req.auth && !unAuthPaths.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (req.auth && unAuthPaths.includes(req.nextUrl.pathname)) {
    const newUrl = new URL('/dashboard', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
