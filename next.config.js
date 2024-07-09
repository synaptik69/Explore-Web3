/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/directory/:path*',
        destination: '/projects/:path*',
        permanent: true, // This indicates that the redirect is permanent (301)
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'exploresol.xyz' }],
        destination: 'https://exploresolana.com/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
