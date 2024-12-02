/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
