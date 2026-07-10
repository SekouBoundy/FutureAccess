import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apu.edu.my",
      },
      {
        protocol: "https",
        hostname: "cdn.gelisim.edu.tr",
      },
      {
        protocol: "https",
        hostname: "antalya.edu.tr",
      },
      {
        protocol: "https",
        hostname: "en.hunau.edu.cn",
      },
      {
        protocol: "https",
        hostname: "keystoneacademic-res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "english.kmust.edu.cn",
      },
    ],
  },
};

export default nextConfig;
