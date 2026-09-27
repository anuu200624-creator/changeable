import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePage } from '@/components/service-page'
import { getService, serviceSlugs } from '@/lib/services'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return { title: `${service.title} | CreationsXAI`, description: service.description, alternates: { canonical: `https://creationsxai.space/service/${service.slug}` } }
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return <ServicePage service={service} />
}
