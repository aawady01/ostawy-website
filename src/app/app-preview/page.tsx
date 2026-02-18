
import type { Metadata } from "next"
import AppPreviewClient from "@/components/pages/app-preview-client"

export const metadata: Metadata = {
  title: "معاينة التطبيق",
  description: "استعرض شاشات تطبيق أُسطاوى وتعرف على الميزات قبل التحميل. شاهد واجهات الإشارات والاختبارات والأسئلة.",
  keywords: ["معاينة تطبيق أُسطاوى", "شاشات التطبيق", "واجهات البرنامج", "صور التطبيق", "screenshots"],
  openGraph: {
    title: "معاينة تطبيق أُسطاوى - Ostawy",
    description: "استعرض شاشات تطبيق أُسطاوى وتعرف على الميزات قبل التحميل.",
    url: "https://ostawy.com/app-preview",
    siteName: "أُسطاوى",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "معاينة تطبيق أُسطاوى",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "معاينة تطبيق أُسطاوى",
    description: "استعرض شاشات تطبيق أُسطاوى وتعرف على الميزات قبل التحميل.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://ostawy.com/app-preview",
  },
}

export default function AppPreviewPage() {
  return <AppPreviewClient />
}
