import { MetadataRoute } from 'next';
import { seoPages } from './[slug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.akarsutesisat.com';

  const dynamicRoutes = Object.keys(seoPages).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
