
import type { Metadata } from "next"
import ContactClient from "@/components/pages/contact-client"

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع فريق دعم أُسطاوى للاستفسارات والاقتراحات. نحن هنا لمساعدتك في أي وقت.",
  keywords: ["تواصل معنا", "اتصال", "دعم فني", "استفسارات", "اقتراحات", "مساعدة"],
  openGraph: {
    title: "تواصل معنا - أُسطاوى",
    description: "تواصل مع فريق دعم أُسطاوى للاستفسارات والاقتراحات.",
    url: "https://ostawy.com/contact",
    siteName: "أُسطاوى",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - أُسطاوى",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - أُسطاوى",
    description: "تواصل مع فريق دعم أُسطاوى للاستفسارات والاقتراحات.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://ostawy.com/contact",
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "تواصل معنا - أُسطاوى",
    "description": "صفحة التواصل مع فريق دعم أُسطاوى",
    "url": "https://ostawy.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "أُسطاوى",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+20-155-003-5776",
        "contactType": "customer service",
        "email": "aawady01@gmail.com",
        "availableLanguage": "Arabic"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <ContactClient />
    </>
  )
}
