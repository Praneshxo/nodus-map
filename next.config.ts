import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.194.2.250'],
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;
