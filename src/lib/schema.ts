export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "أُسطاوى - Ostawy",
  "url": "https://ostawy.com",
  "description": "التطبيق الأول في مصر لتعلم إشارات المرور واجتياز اختبار القيادة النظري.",
  "publisher": {
    "@type": "Organization",
    "name": "أُسطاوى",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ostawy.com/images/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ostawy.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "ar-EG",
  "dateModified": new Date().toISOString().split('T')[0]
}

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "أُسطاوى",
  "applicationCategory": "EducationApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EGP"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.ostawy.app",
  "softwareVersion": "2026.1",
  "datePublished": "2025-11-01",
  "contentRating": "Everyone",
  "image": "https://ostawy.com/images/screenshots/app-home.jpg",
  "screenshot": [
    "https://ostawy.com/images/screenshots/home-screen.jpg"
  ],
  "author": {
    "@type": "Person",
    "name": "أحمد العوضي",
    "url": "https://linkedin.com/in/aawady01"
  },
  "featureList": [
    "تعلم إشارات المرور",
    "اختبارات تجريبية",
    "بنك أسئلة شامل",
    "نظام المراجعة الذكية"
  ]
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "أُسطاوى",
  "url": "https://ostawy.com",
  "logo": "https://ostawy.com/images/logo.png",
  "description": "التطبيق الأول في مصر لتعلم إشارات المرور واجتياز اختبار القيادة.",
  "foundingDate": "2025-11",
  "founders": [
    {
      "@type": "Person",
      "name": "أحمد العوضي"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+20-155-003-5776",
    "contactType": "customer service",
    "areaServed": "EG",
    "availableLanguage": "Arabic",
    "email": "aawady01@gmail.com"
  },
  "sameAs": [
    "https://www.facebook.com/ahmed.mohamed.alsayed.554426/",
    "https://www.linkedin.com/in/aawady01/",
    "https://wa.me/201550035776"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "القاهرة",
    "addressCountry": "EG"
  }
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "أُسطاوى",
  "description": "تطبيق تعليمي لتعلم إشارات المرور في مصر",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "القاهرة",
    "addressCountry": "EG"
  },
  "telephone": "+20-155-003-5776",
  "email": "aawady01@gmail.com",
  "url": "https://ostawy.com",
  "priceRange": "مجاناً"
}

export function generateCompleteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema,
      mobileAppSchema,
      organizationSchema
    ]
  }
}
