import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },

  //   images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "example.com",
  //     },
  //   ],
  // },

  // /api/proxy is handled by app/api/proxy/[...path]/route.ts
  // so Set-Cookie can be rewritten onto localhost. Next rewrites
  // cannot change cookie Domain, so they cannot persist the refresh cookie.
};

export default nextConfig;
