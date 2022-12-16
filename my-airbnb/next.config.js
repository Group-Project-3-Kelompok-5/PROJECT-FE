/**  @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

};

module.exports = {
  nextConfig,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/project-3/**",
      },
    ],
  },
};