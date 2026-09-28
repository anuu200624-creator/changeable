import type { MetadataRoute } from 'next'
import { serviceSlugs, getServiceUrl } from '@/lib/services'
import { locationSlugs, getLocationUrl } from '@/lib/locations'
import { industries } from '@/lib/industries'

const siteUrl = 'https://creationsxai.space'

function absoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '/' : path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/locations'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/locations/maharashtra'), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: absoluteUrl(getServiceUrl(slug)),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: absoluteUrl(getLocationUrl(slug)),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const industryPages: MetadataRoute.Sitemap = industries.map(({ slug }) => ({
    url: absoluteUrl(`/industries/${slug}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...locationPages, ...industryPages]
}
