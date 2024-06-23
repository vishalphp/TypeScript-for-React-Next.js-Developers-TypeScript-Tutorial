import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  
    const baseURL: string = process.env.BASE_URL as string ;

    return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: baseURL+'about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseURL+'blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}