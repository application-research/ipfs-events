import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://ipfsevents.io',
      lastModified: new Date(),
    },
    {
      url: 'http://ipfsevents.io/ipfs-friends-cafe',
      lastModified: new Date(),
    },
    {
      url: 'https://2024.ipfs.camp/',
      lastModified: new Date(),
    },
  ];
}
