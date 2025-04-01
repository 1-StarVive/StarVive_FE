import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9001",
        pathname: "/api/v1/buckets/**",
      },
    ],
  },
};

export default nextConfig;
