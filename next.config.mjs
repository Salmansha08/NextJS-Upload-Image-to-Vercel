/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n7knosnrk5l8evur.public.blob.vercel-storage.com',
      }
    ]
  }
};

export default nextConfig;
