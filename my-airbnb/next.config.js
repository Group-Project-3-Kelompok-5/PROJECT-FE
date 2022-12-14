/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'virtserver.swaggerhub.com',
        port: '',
        pathname: '/Merapi.jpg',
      },
    ],
  },
}
