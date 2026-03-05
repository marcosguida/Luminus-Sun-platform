import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
