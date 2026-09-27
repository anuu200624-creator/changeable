import type { Metadata } from 'next'
import { MaharashtraPage } from '@/components/locations-page'

export const metadata: Metadata = {
  title: 'AI Automation Services Across Maharashtra | CreationsXAI',
  description: 'CreationsXAI builds AI automation systems for businesses across Maharashtra from its Mumbai base.',
  alternates: { canonical: '/locations/maharashtra' },
  openGraph: { title: 'AI Automation Services Across Maharashtra | CreationsXAI', description: 'AI automation systems for businesses across Maharashtra.', url: '/locations/maharashtra' },
}

export default function MaharashtraLocationPage() { return <MaharashtraPage /> }
