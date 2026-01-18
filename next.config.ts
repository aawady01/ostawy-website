import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <--- ده السطر السحري عشان جيت هب
  images: {
    unoptimized: true, // عشان الصور تظهر
  },
};

export default nextConfig;
