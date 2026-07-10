import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apu.edu.my",
      },
    ],
  },
};

export default nextConfig;
