/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Memperingatkan bahaya, tapi mengizinkan Vercel untuk tetap mem-build meski ada error ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Mengizinkan Vercel mem-build meski ada peringatan tipe data
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig