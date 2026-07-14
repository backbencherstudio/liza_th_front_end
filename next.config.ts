import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ['images.unsplash.com'],
  // },

  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
    },
  ],
},
};

export default nextConfig;
