import { Header, Footer } from "@/components/layout"
import { Hero, Features, Stats, DownloadCTA, About, Testimonials } from "@/components/sections"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "أُسطاوى - Ostawy",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EGP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.awady.ostawy",
    "featureList": "تعلم إشارات المرور، اختبارات تجريبية، شرح قواعد القيادة",
    "screenshot": "https://ostawy.com/images/screenshot-1.jpg"
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Stats />
        <Testimonials />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}

