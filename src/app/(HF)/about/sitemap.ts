import { MetadataRoute } from 'next'


export async function generateSitemaps() {
    
    // Fetch the total number of products and calculate the number of sitemaps needed
    return [{ id: 'about' }]
    //return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
  }

  export default async function sitemap({id}: {id: string}): Promise<MetadataRoute.Sitemap> {
    const baseURL: string = process.env.BASE_URL as string ;

    // Google's limit is 50,000 URLs per sitemap
    /*return products.map((product) => ({
      url: `${BASE_URL}/product/${product.id}`,
      lastModified: product.date,
    }))
      */
    return [ {
        url: baseURL+id,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      }]

  }
