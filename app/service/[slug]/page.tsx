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
  if (service.slug === 'ai-chatbots') {
    return {
      title: 'AI Chatbot Development Mumbai | CreationsXAI',
      description: 'Build AI chatbots for websites and WhatsApp that answer customer questions, capture leads, qualify prospects, and support appointment booking with CreationsXAI.',
      alternates: { canonical: `https://creationsxai.space/service/${service.slug}` },
    }
  }
  if (service.slug === 'ai-voice-agents') {
    return {
      title: 'AI Voice Agents Mumbai | CreationsXAI',
      description: 'Build AI voice agents for inbound calls, lead qualification, appointment booking, follow-up, and customer service automation with CreationsXAI in Mumbai.',
      alternates: { canonical: `https://creationsxai.space/service/${service.slug}` },
    }
  }
  return { title: `${service.title} | CreationsXAI`, description: service.description, alternates: { canonical: `https://creationsxai.space/service/${service.slug}` } }
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return <ServicePage service={service} />
}
