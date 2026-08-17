import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maurobenedetti.com.br',
      },
    ],
  },
};

export default nextConfig;
