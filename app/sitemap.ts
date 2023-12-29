import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://chronicbot.xyz',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://chronicbot.xyz/callback',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.1,
    }
  ]
}
