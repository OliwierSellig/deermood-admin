import { auth } from '@/src/auth';

const unAuthPaths = ['/login', '/forgot-password', /^\/reset-password\/.*$/];

export default auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isUnAuthPath = unAuthPaths.some((path) => {
    if (typeof path === 'string') {
      return path === pathname;
    } else if (path instanceof RegExp) {
      return path.test(pathname);
    }
    return false;
  });
  if (!req.auth && !isUnAuthPath) {
    const newUrl = new URL('/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (req.auth && isUnAuthPath) {
    const newUrl = new URL('/dashboard', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
