import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://appiahcounselling.com',
      lastModified: new Date(),
    },

    {
      url: 'https://appiahcounselling.com/about',
      lastModified: new Date(),
    },

    {
      url: 'https://appiahcounselling.com/blog',
      lastModified: new Date(),
    },
  ]
}
