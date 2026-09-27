import { notFound } from 'next/navigation'
import { IndustryPage } from '@/components/industry-page'
import { getIndustry, industries } from '@/lib/industries'

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })) }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()
  return <IndustryPage industry={industry} />
}
