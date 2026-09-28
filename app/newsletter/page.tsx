import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterForm } from '@/components/newsletter-form'
import { FindUsFooter } from '@/components/find-us-footer'

export const metadata: Metadata = {
  title: 'AI Automation Newsletter | CreationsXAI',
  description: 'Get practical AI automation insights, tools, strategies, and ideas to help your business save time, generate more leads, and operate more efficiently.',
  alternates: { canonical: 'https://creationsxai.space/newsletter' },
  openGraph: {
    title: 'AI Automation Newsletter | CreationsXAI',
    description: 'Practical AI automation insights, tools, and ideas for more efficient businesses.',
    url: 'https://creationsxai.space/newsletter',
    type: 'website',
  },
}

const topics = ['AI automation', 'AI tools', 'Business automation', 'Lead generation', 'AI voice agents', 'Workflow automation']

export default function NewsletterPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05010a] text-[#f5f0ff] selection:bg-purple-500/30">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-500/20 bg-[#05010a]/85 px-6 py-4 backdrop-blur-xl md:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="font-serif text-2xl tracking-tight text-white">Creations<span className="text-purple-400">XAI</span></Link>
          <div className="hidden items-center gap-8 text-sm text-purple-200/70 md:flex">
            <Link href="/#services" className="transition hover:text-white">Services</Link>
            <Link href="/#about" className="transition hover:text-white">About</Link>
            <Link href="/#process" className="transition hover:text-white">How it works</Link>
            <Link href="/#contact" className="rounded-full bg-purple-600 px-5 py-2 text-white transition hover:bg-purple-500">Book a free call</Link>
          </div>
          <Link href="/#contact" className="rounded-full bg-purple-600 px-4 py-2 text-sm text-white md:hidden">Let&apos;s talk</Link>
        </nav>
      </header>

      <section className="relative border-b border-purple-300/15 px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-48">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300">Issue 01 / CreationsXAI dispatch</p>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] md:text-8xl">The useful side of AI automation.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-purple-100/65 md:text-xl">A considered note on the tools, workflows, and decisions that make a business run better.</p>
          </div>
          <div className="border-t border-purple-300/25 pt-5 md:mb-2">
            <p className="text-sm leading-relaxed text-purple-100/60">Written for operators, founders, and teams who want practical progress instead of more noise.</p>
            <div className="mt-8 border-l border-fuchsia-300/60 pl-5"><p className="font-serif text-2xl leading-tight text-purple-50">One thoughtful email. When there&apos;s something worth sharing.</p></div>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-10 border-t border-purple-300/15 pt-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200/55">Subscribe free</p><p className="mt-3 text-sm text-purple-200/50">No spam. Unsubscribe anytime.</p></div>
          <div className="max-w-xl"><NewsletterForm /></div>
        </div>
      </section>

      <section className="border-y border-purple-300/15 bg-[#10091b] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">What you&apos;ll receive</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Useful ideas, without the noise.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2"><p className="rounded-2xl border border-purple-400/15 bg-black/20 p-5 text-lg text-purple-100/75">Clear explanations of where AI can remove repetitive work.</p><p className="rounded-2xl border border-purple-400/15 bg-black/20 p-5 text-lg text-purple-100/75">Practical tools and workflows you can evaluate for your business.</p><p className="rounded-2xl border border-purple-400/15 bg-black/20 p-5 text-lg text-purple-100/75">Ideas for capturing more leads and improving customer response.</p><p className="rounded-2xl border border-purple-400/15 bg-black/20 p-5 text-lg text-purple-100/75">Thoughtful guidance for making automation decisions.</p></div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12"><div className="mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Topics covered</p><h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-6xl">Ideas for the systems you want to build next.</h2><div className="mt-10 flex flex-wrap gap-3">{topics.map((topic) => <span key={topic} className="rounded-full border border-purple-400/25 px-5 py-3 text-purple-100/75">{topic}</span>)}</div></div></section>

      <section className="px-6 pb-24 md:px-12"><div className="mx-auto max-w-7xl rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-900/50 to-fuchsia-900/20 p-8 md:p-16"><p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Stay in the loop</p><h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-7xl">Make your next automation decision with more clarity.</h2><div className="mt-8 max-w-xl"><NewsletterForm compact /></div></div></section>
      <FindUsFooter />
      <footer className="border-t border-purple-500/15 px-6 py-10 text-sm text-purple-200/50 md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row"><span>© 2025 CreationsXAI</span><span>AI systems for ambitious businesses in Mumbai and beyond.</span></div></footer>
    </main>
  )
}
