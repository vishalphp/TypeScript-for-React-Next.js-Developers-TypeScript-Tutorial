/** @type {import('next').NextConfig} */
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
  

export default nextConfig;
