import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header, Footer } from "@/components/layout"

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "أُسطاوى - تعلم إشارات المرور واختبار القيادة المصري",
    template: "%s | أُسطاوى",
  },
  description: "التطبيق الأول في مصر لتعلم إشارات المرور واجتياز اختبار القيادة النظري. اختبارات تفاعلية، موسوعة شاملة للإشارات، وشرح لقواعد المرور.",
  applicationName: "أُسطاوى",
  keywords: [
    "تعليم قيادة", "إشارات المرور", "رخصة القيادة المصرية", "اختبار الإشارات",
    "مرور مصر", "تطبيق أسطاوى", "اختبار القيادة النظري", "بوكلت المرور",
    "استخراج رخصة قيادة", "مدرسة تعليم القيادة", "Awady Ostawy", "Traffic Signs Egypt"
  ],
  authors: [{ name: "تطبيق أُسطاوى", url: "https://ostawy.com" }],
  creator: "تطبيق أُسطاوى",
  publisher: "Ostawy",
  metadataBase: new URL("https://ostawy.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "أُسطاوى - رفيقك لاجتياز اختبار القيادة",
    description: "حمل تطبيق أُسطاوى مجاناً! أفضل طريقة لتعلم إشارات المرور والتدرب على الاختبار النظري في مصر.",
    url: "https://ostawy.com",
    siteName: "أُسطاوى",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // Corrected extension
        width: 1200,
        height: 630,
        alt: "تطبيق أُسطاوى لتعليم القيادة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أُسطاوى - تطبيق تعليم القيادة",
    description: "تعلم إشارات المرور وتدرب على الاختبار النظري مع أُسطاوى بكل سهولة.",
    creator: "@aawady01",
    images: ["/images/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "أُسطاوى",
  },
  manifest: "/manifest.json",
};

// Structured Data for Organization (Logo, Social Links)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "أُسطاوى",
  "url": "https://ostawy.com",
  "logo": "https://ostawy.com/images/icon.png",
  "sameAs": [
    "https://www.facebook.com/ahmed.mohamed.alsayed.554426/",
    "https://www.linkedin.com/in/aawady01/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+20-155-003-5776",
    "contactType": "customer service",
    "areaServed": "EG",
    "availableLanguage": "Arabic"
  }
};

export const viewport = {
  themeColor: "#05767C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${almarai.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
