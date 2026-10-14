import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // three ships ESM addons (three/addons/...) that Next should bundle itself.
  transpilePackages: ["three"],
};

export default nextConfig;
