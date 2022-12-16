/**  @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

};

module.exports = {
  nextConfig,
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