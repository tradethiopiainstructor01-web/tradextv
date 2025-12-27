/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Add trailing slashes to all routes
  // For Vercel deployment in monorepo, we don't need basePath
  // Vercel handles routing automatically when rootDirectory is set
};

module.exports = nextConfig;