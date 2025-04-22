import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9001",
        pathname: "/api/v1/buckets/**",
      },
      {
        protocol: "https",
        hostname: "sitem.ssgcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "image.istarbucks.co.kr",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cp-image.starbucks.co.kr",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "starvive-assets.s3.ap-northeast-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
