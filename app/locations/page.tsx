import type { Metadata } from 'next'
import { LocationsHub } from '@/components/locations-page'

export const metadata: Metadata = {
  title: 'Where We Work | CreationsXAI',
  description: 'AI automation systems for businesses across Mumbai and Maharashtra.',
  alternates: { canonical: '/locations' },
  openGraph: { title: 'Where We Work | CreationsXAI', description: 'AI automation systems for businesses across Mumbai and Maharashtra.', url: '/locations' },
}

export default function LocationsPage() { return <LocationsHub /> }
