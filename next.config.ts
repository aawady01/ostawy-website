import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  eslint: {
    // هذا السطر يمنع توقف البناء بسبب أخطاء التدقيق
    ignoreDuringBuilds: true,
  },
  // @ts-ignore
  typescript: {
    // هذا السطر يمنع توقف البناء بسبب أخطاء التايب سكريبت
    ignoreBuildErrors: true,
  },
};

export default nextConfig;