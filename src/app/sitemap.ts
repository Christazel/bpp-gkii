import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bpp-gkii.vercel.app';
  const currentDate = new Date();

  // XML Sitemaps Protocol (sitemaps.org / RFC 3986):
  // URL fragment identifiers (#) are client-side only and invalid in XML sitemaps.
  // We list only the canonical page route to avoid Google Search Console indexing warnings.
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
