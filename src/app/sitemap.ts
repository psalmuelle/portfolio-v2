import type { MetadataRoute } from 'next';
import { projects } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://erinlesam.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: new URL(`/portfolio/${project.slug}`, siteUrl).toString(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
      images: [new URL(project.heroImage, siteUrl).toString()],
    })),
  ];
}
