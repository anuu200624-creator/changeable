'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Service } from '@/lib/services'
import { FindUsFooter } from '@/components/find-us-footer'

export function ServicePage({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

      <section className="relative px-6 pb-24 pt-40 md:px-12 md:pt-52">
        <div className="absolute left-1/2 top-16 -z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Link href="/#services" className="mb-8 inline-flex text-sm uppercase tracking-[0.2em] text-purple-300/70 transition hover:text-purple-200">← All services</Link>
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-fuchsia-300">{service.eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight md:text-8xl">{service.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-purple-100/65 md:text-2xl">{service.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/#contact" className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-purple-100">Start a conversation</Link>
            <a href="tel:+919321012155" className="rounded-full border border-purple-400/30 px-7 py-3 text-purple-100 transition hover:border-purple-300 hover:bg-purple-500/10">Call +91 9321012155</a>
          </div>
        </div>
      </section>

      <section className="border-y border-purple-500/15 bg-purple-950/20 px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">{service.promise}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => <div key={benefit} className="rounded-2xl border border-purple-400/15 bg-black/20 p-5 text-lg text-purple-100/75">{benefit}</div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-300">What we build</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-6xl">A system designed around your next stage of growth.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((capability, index) => <article key={capability} className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-400/50"><span className="text-sm text-fuchsia-300">0{index + 1}</span><h3 className="mt-12 font-serif text-2xl">{capability}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#090212] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Our process</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">From first insight to measurable momentum.</h2></div>
          <div className="grid gap-4">{service.process.map((item) => <div key={item.step} className="grid gap-5 border-b border-purple-500/20 py-6 sm:grid-cols-[4rem_1fr]"><span className="text-fuchsia-300">{item.step}</span><div><h3 className="font-serif text-2xl">{item.title}</h3><p className="mt-2 text-purple-100/60">{item.description}</p></div></div>)}</div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12"><div className="mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Built for</p><div className="mt-8 flex flex-wrap gap-3">{service.useCases.map((useCase) => <span key={useCase} className="rounded-full border border-purple-400/25 px-5 py-3 text-purple-100/75">{useCase}</span>)}</div></div></section>

      <section className="border-t border-purple-500/15 px-6 py-24 md:px-12"><div className="mx-auto max-w-3xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Questions</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">A clearer next step.</h2><div className="mt-10 divide-y divide-purple-500/20">{service.faqs.map((faq, index) => <div key={faq.question}><button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{faq.question}<span className="text-2xl text-purple-300">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p className="pb-6 text-purple-100/60">{faq.answer}</p>}</div>)}</div></div></section>

      <section className="px-6 pb-24 md:px-12"><div className="mx-auto max-w-7xl rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-900/50 to-fuchsia-900/20 p-8 md:p-16"><p className="text-sm uppercase tracking-[0.25em] text-fuchsia-200">Ready when you are</p><h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-7xl">Let&apos;s build the system your business has been missing.</h2><Link href="/#contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-purple-100">Book a free strategy call</Link></div></section>

      <FindUsFooter />

      <footer className="border-t border-purple-500/15 px-6 py-10 text-sm text-purple-200/50 md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row"><span>© 2025 CreationsXAI</span><span>AI systems for ambitious businesses in Mumbai and beyond.</span></div></footer>
    </main>
  )
}
