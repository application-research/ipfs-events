import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fildev.io/',
      lastModified: new Date(),
    },
  ];
}
