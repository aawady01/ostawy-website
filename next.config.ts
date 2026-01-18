import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // هذا السطر يخبر Next.js أن يخرج ملفات HTML ثابتة (Static) تناسب GitHub Pages
  output: "export",

  // هذا السطر ضروري جداً لأن GitHub لا يمتلك سيرفر لمعالجة الصور، فنعطل التحسين التلقائي
  images: {
    unoptimized: true,
  },
};

export default nextConfig;