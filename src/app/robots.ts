import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://ostawy.com/sitemap.xml',
    host: 'https://ostawy.com',
  }
}
