import createMiddleware from 'next-intl/middleware';
//import {localePrefix, defaultLocale, locales, pathnames} from '@/config';
import {NextRequest} from 'next/server';
import {locales} from '@/config';
 
export default async function middleware(request: NextRequest) {
  //const [, locale, ...segments] = request.nextUrl.pathname.split('/');
   //console.log(request.nextUrl);
   //console.log("hi");
  /*
  if (locale != null && segments.join('/') === 'profile') {
    const usesNewProfile =
      (request.cookies.get('NEW_PROFILE')?.value || 'false') === 'true';
 
    if (usesNewProfile) {
      request.nextUrl.pathname = `/${locale}/profile/new`;
    }
  }*/
 
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: 'en'
  });
  const response = handleI18nRouting(request);
  return response;
}
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(hi|en)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    //'/((?!_next|_vercel|.*\\..*).*)'
  ]
};