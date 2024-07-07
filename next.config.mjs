/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https", // or http
          hostname: "i.pinimg.com", // if your website has no www, drop it
        },
       ],
      },
};
// next.config.mjs
  

//export default nextConfig;
export default withNextIntl(nextConfig);