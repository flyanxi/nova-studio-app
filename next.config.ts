import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading optimized images from external domain
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;