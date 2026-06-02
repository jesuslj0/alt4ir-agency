import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
