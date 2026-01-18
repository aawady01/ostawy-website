import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <--- هذا أهم سطر
  images: {
    unoptimized: true, // ضروري جداً للصور
  },
  // تأكد من عدم وجود أي إعدادات أخرى متعارضة
};

export default nextConfig;