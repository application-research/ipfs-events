import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
<<<<<<< HEAD
    sitemap: 'http://ipfsevents.io/sitemap.xml',
=======
    sitemap: 'https://fildev.io/sitemap.xml',
>>>>>>> c8f94a9 (added sitemap and robots)
  };
}
