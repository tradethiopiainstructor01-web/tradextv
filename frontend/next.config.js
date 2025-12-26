/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Add trailing slashes to all routes
  // Since this is in a subdirectory, we might need to set the base path
  // basePath: process.env.NODE_ENV === 'production' ? '/frontend' : '',
  // or potentially remove base path and let Vercel handle it via vercel.json
};

module.exports = nextConfig;