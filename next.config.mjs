/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // إجبار السيرفر على تجاهل أخطاء التدقيق
    eslint: {
        ignoreDuringBuilds: true,
    },
    // إجبار السيرفر على تجاهل أخطاء التايب سكريبت
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;