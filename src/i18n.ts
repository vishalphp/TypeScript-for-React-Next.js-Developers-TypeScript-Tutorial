import {getRequestConfig} from 'next-intl/server';
import { notFound } from 'next/navigation';
 
export default getRequestConfig(async ({locale}) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locales = ['en','hi'];

  const baseURLLang = new Intl.Locale(locale).baseName;

  if(!locales.includes(baseURLLang)) { notFound(); }
 
  return {
   // locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});