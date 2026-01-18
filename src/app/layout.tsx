import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  keywords: ["تعليم قيادة", "إشارات المرور", "رخصة القيادة المصرية", "اختبار الإشارات", "مرور مصر", "تطبيق أسطاوى"],
  authors: [{ name: "Ahmed Alawady" }],
  openGraph: {
    title: "أُسطاوى - تعلم إشارات المرور واختبار القيادة المصري",
    description: "حمل تطبيق أُسطاوى مجاناً! رفيقك لاجتياز اختبار القيادة وفهم إشارات المرور.",
    url: "https://ostawy.com",
    siteName: "أُسطاوى",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أُسطاوى - تطبيق تعليم القيادة",
    description: "تعلم إشارات المرور وتدرب على الاختبار النظري مع أُسطاوى.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#05767C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${almarai.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
