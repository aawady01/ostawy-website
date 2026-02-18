
import type { Metadata } from "next"
import FAQClient from "@/components/pages/faq-client"
import { faqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات على الأسئلة الشائعة حول تطبيق أُسطاوى واختبارات المرور. تعرف على مميزات التطبيق وكيفية استخدامه.",
  keywords: ["الأسئلة الشائعة", "FAQ", "تطبيق أُسطاوى", "استعلامات حول التطبيق", "مساعدة"],
  openGraph: {
    title: "الأسئلة الشائعة - أُسطاوى",
    description: "إجابات على الأسئلة الشائعة حول تطبيق أُسطاوى واختبارات المرور.",
    url: "https://ostawy.com/faq",
    siteName: "أُسطاوى",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "الأسئلة الشائعة - أُسطاوى",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الأسئلة الشائعة - أُسطاوى",
    description: "إجابات على الأسئلة الشائعة حول تطبيق أُسطاوى واختبارات المرور.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://ostawy.com/faq",
  },
}

const faqs = [
  {
    question: "ما هو تطبيق أُسطاوى؟",
    answer: "تطبيق أُسطاوى هو تطبيق تعليمي مجاني يساعدك على تعلم جميع إشارات المرور المصرية."
  },
  {
    question: "هل التطبيق مجاني؟",
    answer: "نعم! تطبيق أُسطاوى مجاني بالكامل ولا يتطلب أي اشتراك أو دفع."
  },
  {
    question: "هل يحتاج التطبيق إلى اتصال بالإنترنت؟",
    answer: "لا! يعمل التطبيق بالكامل بدون إنترنت."
  },
  {
    question: "كم عدد الإشارات والأسئلة في التطبيق؟",
    answer: "يحتوي التطبيق على أكثر من 250 إشارة مرورية وأكثر من 500 سؤال تدريبي."
  }
]

export default function FAQPage() {
  const jsonLd = faqSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": "https://ostawy.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "الأسئلة الشائعة",
                "item": "https://ostawy.com/faq"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <FAQClient />
    </>
  )
}
