import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow general crawlers but restrict access to internal folders
        userAgent: '*',
        allow: '/',
        disallow: [
          '/pdf/',      // Block direct PDF file indexing — docs must be accessed via the portal UI
          '/_next/',    // Block Next.js build artifacts
        ],
      },
      {
        // Block aggressive commercial SEO scrapers that ignore noindex
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://bpp-gkii.vercel.app/sitemap.xml',
  };
}
