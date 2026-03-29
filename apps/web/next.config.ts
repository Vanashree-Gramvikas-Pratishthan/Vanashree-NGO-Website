import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 85],  // Add this line
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
