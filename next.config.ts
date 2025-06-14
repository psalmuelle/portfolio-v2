import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jzejbfklabcstgfiwixz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/project-storage/**',
      },
    ],
  },
};

export default nextConfig;
