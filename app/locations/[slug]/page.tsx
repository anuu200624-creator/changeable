import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LocationPage } from '@/components/locations-page'
import { getLocation, locationSlugs } from '@/lib/locations'

export function generateStaticParams() { return locationSlugs.map((slug) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) return {}
  return { title: `AI Automation Agency in ${location.name} | CreationsXAI`, description: location.description, alternates: { canonical: `/locations/${location.slug}` }, openGraph: { title: `AI Automation Agency in ${location.name} | CreationsXAI`, description: location.description, url: `/locations/${location.slug}` } }
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) notFound()
  return <LocationPage location={location} />
}
