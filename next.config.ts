import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.194.2.250'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
