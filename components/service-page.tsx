'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Service } from '@/lib/services'
import { FindUsFooter } from '@/components/find-us-footer'

const voiceAgentSections = {
  inbound: 'An AI voice agent can answer inbound calls, understand what the caller needs, and provide a useful first response without forcing customers through a long menu. It can greet callers in your preferred tone, collect key details, answer approved questions, and recognize when a conversation needs a person. This is especially valuable for businesses where a missed call can mean a missed job, consultation, or service opportunity.',
  what: 'An AI voice agent is software that holds natural phone conversations using speech recognition, language understanding, and voice synthesis. Unlike a recorded script, it can respond to what a caller actually says and follow the conversation toward a defined business outcome. CreationsXAI configures each AI phone agent around your services, locations, hours, qualification criteria, calendar rules, and escalation preferences.',
  work: [
    ['Answering Inbound Calls', 'The agent answers common calls when your team is busy, after hours, or already helping another customer. It gathers context before deciding whether to resolve the request, capture a lead, or route the call.'],
    ['Qualifying Leads', 'It asks the questions that matter to your sales process, such as service type, location, urgency, budget, and preferred timing. Your team receives a clearer lead instead of an unexplained missed call.'],
    ['Booking Appointments', 'The agent can check approved availability, offer suitable times, confirm caller details, and create a booking through your connected calendar or scheduling workflow.'],
    ['Handling FAQs', 'Opening hours, service areas, pricing ranges, preparation instructions, and common policies can be answered consistently from approved business information.'],
    ['Following Up With Leads', 'Outbound AI calling can follow up with people who requested information, abandoned a booking, or need a reminder, while respecting the conversation rules you define.'],
    ['Routing Calls to Your Team', 'High-intent, sensitive, or complex conversations can be transferred to the right person with the relevant context, so the customer does not have to repeat everything.'],
  ],
  homeServices: 'HVAC, plumbing, electrical, roofing, pest control, solar, and landscaping companies often lose opportunities when calls arrive during a job, outside office hours, or during seasonal demand. An AI receptionist for HVAC and other home-service businesses can capture the address, service request, urgency, and availability needed to move the next step forward. It can also separate emergency requests from routine enquiries and route them according to your operating rules.',
  automate: 'The right AI voice automation does more than answer a phone. It can support intake, lead qualification, appointment booking, reminders, follow-up, customer updates, call summaries, CRM notes, and team handoffs. The aim is not to make every conversation fully automated. The aim is to make sure routine conversations are handled reliably and your people spend more time on the calls that genuinely need their judgement.',
  build: 'We start by mapping your call types, customer questions, qualification requirements, booking rules, and escalation points. Then we write the conversation paths, connect the approved systems, test edge cases, and review the first live interactions. Your AI voice agent is refined around real calls and business feedback rather than launched as a generic script.',
  why: 'Businesses use AI calling automation to respond faster, protect more opportunities, and reduce repetitive phone work. It gives a growing team a consistent first line of response without requiring a receptionist to be available for every call. With clear guardrails, human handoff, and ongoing review, it becomes a practical part of your customer service and sales process.',
}

const voiceFaqs = [
  ['Can an AI voice agent transfer calls to a person?', 'Yes. We define the situations that require a human and route the call with useful context so your team can continue the conversation.'],
  ['Can it book appointments?', 'Yes. It can be connected to an approved calendar or booking workflow and follow your availability and confirmation rules.'],
  ['Is this suitable for HVAC and home-service companies?', 'Yes. The agent can collect service details, location, urgency, and preferred timing for HVAC, plumbing, electrical, roofing, pest control, solar, and landscaping businesses.'],
  ['Can it make outbound calls?', 'Yes, where the use case and calling policies support it. Common examples include lead follow-up, reminders, confirmations, and reactivation.'],
  ['Will it replace our receptionist?', 'It is designed to handle defined, repetitive conversations and support your team. Sensitive, complex, or high-value calls can still go to a person.'],
  ['Can it connect to our CRM?', 'We can connect the agent to your CRM, calendar, forms, and workflow tools where suitable integrations are available.'],
  ['How does the agent know what to say?', 'We configure it with your approved business information, tone, policies, service areas, and conversation rules, then test it against realistic scenarios.'],
  ['How do we get started?', 'We begin with a call-handling review to identify missed-call patterns, repetitive questions, booking opportunities, and the conversations best suited for automation.'],
]

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
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight md:text-8xl">{service.slug === 'ai-voice-agents' ? 'AI Voice Agents for Businesses' : service.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-purple-100/65 md:text-2xl">{service.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/#contact" className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-purple-100">Start a conversation</Link>
            <a href="tel:+919321012155" className="rounded-full border border-purple-400/30 px-7 py-3 text-purple-100 transition hover:border-purple-300 hover:bg-purple-500/10">Call +91 9321012155</a>
          </div>
        </div>
      </section>

      {service.slug === 'ai-voice-agents' && <>
        <section className="border-y border-purple-500/15 bg-purple-950/20 px-6 py-20 md:px-12">
          <div className="mx-auto max-w-4xl"><p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">AI voice agents that answer calls 24/7</p><h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Every caller gets a useful next step.</h2><p className="mt-7 text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.inbound}</p></div>
        </section>
        <section className="px-6 py-20 md:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">The fundamentals</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">What Is an AI Voice Agent?</h2></div><p className="text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.what}</p></div></section>
        <section className="bg-[#090212] px-6 py-20 md:px-12"><div className="mx-auto max-w-7xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Behind every conversation</p><h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">How AI Voice Agents Work</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{voiceAgentSections.work.map(([title, description], index) => <article key={title} className="border border-purple-500/20 bg-white/[0.03] p-6"><span className="text-sm text-fuchsia-300">0{index + 1}</span><h3 className="mt-10 font-serif text-2xl">{title}</h3><p className="mt-4 leading-relaxed text-purple-100/60">{description}</p></article>)}</div></div></section>
        <section className="px-6 py-20 md:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr]"><div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Built for service businesses</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">AI Voice Agents for HVAC &amp; Home-Service Businesses</h2><p className="mt-7 text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.homeServices}</p></div><div className="border-l border-purple-400/30 pl-6 text-purple-100/65"><p>Related systems</p><div className="mt-5 grid gap-4"><Link className="text-fuchsia-200 underline-offset-4 hover:underline" href="/service/ai-chatbots">AI chatbots for customer questions</Link><Link className="text-fuchsia-200 underline-offset-4 hover:underline" href="/service/ai-workflow-automation">AI workflow automation for follow-up</Link><Link className="text-fuchsia-200 underline-offset-4 hover:underline" href="/service/ai-lead-generation">AI lead generation for qualified enquiries</Link></div></div></div></section>
        <section className="border-y border-purple-500/15 bg-purple-950/20 px-6 py-20 md:px-12"><div className="mx-auto max-w-4xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Where it helps</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">What Can Our AI Voice Agents Automate?</h2><p className="mt-7 text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.automate}</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><span className="border border-purple-400/20 p-4">Lead intake and qualification</span><span className="border border-purple-400/20 p-4">Appointment booking and reminders</span><span className="border border-purple-400/20 p-4">Customer updates and FAQs</span><span className="border border-purple-400/20 p-4">CRM notes and team handoffs</span></div></div></section>
        <section className="px-6 py-20 md:px-12"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl md:text-6xl">AI Voice Agent vs Traditional Receptionist</h2><div className="mt-10 overflow-x-auto"><table className="w-full min-w-[620px] border-collapse text-left"><thead><tr className="border-b border-purple-400/30 text-purple-200"><th className="p-4">Traditional phone handling</th><th className="p-4">AI voice agent</th></tr></thead><tbody>{[['Limited by working hours','Available for defined conversations around the clock'],['Manual notes and follow-up','Structured capture, summaries, and workflow handoff'],['One conversation at a time','Can handle routine call volume without a busy signal'],['Answers depend on staff availability','Consistent approved answers and escalation rules']].map(([left, right]) => <tr key={left} className="border-b border-purple-500/15 text-purple-100/65"><td className="p-4">{left}</td><td className="p-4">{right}</td></tr>)}</tbody></table></div></div></section>
        <section className="bg-[#090212] px-6 py-20 md:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">A practical test</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">Is an AI Voice Agent Right for Your Business?</h2><p className="mt-7 text-lg leading-relaxed text-purple-100/65">It may be a strong fit if several of these statements describe your current call handling.</p></div><ol className="grid gap-4">{['You regularly miss calls while your team is busy or after hours.','Customers ask the same questions before they book.','Your team spends time qualifying calls that follow a repeatable pattern.','Appointments or follow-ups are lost between phone conversations and your systems.','You have clear rules for when a call should go to a human.'].map((item, index) => <li key={item} className="flex gap-4 border-b border-purple-500/20 pb-4 text-lg text-purple-100/70"><span className="text-fuchsia-300">0{index + 1}</span>{item}</li>)}</ol></div></section>
        <section className="px-6 py-20 md:px-12"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Our approach</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">How We Build Your AI Voice Agent</h2></div><p className="text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.build}<br /><br />See how we connect this with <Link className="text-fuchsia-200 underline-offset-4 hover:underline" href="/service/ai-workflow-automation">workflow automation</Link> and plan your <Link className="text-fuchsia-200 underline-offset-4 hover:underline" href="/#contact">strategy call</Link>.</p></div></section>
        <section className="border-y border-purple-500/15 bg-purple-950/20 px-6 py-20 md:px-12"><div className="mx-auto max-w-4xl"><h2 className="font-serif text-4xl md:text-6xl">Why Businesses Use AI Voice Automation</h2><p className="mt-7 text-lg leading-relaxed text-purple-100/65">{voiceAgentSections.why}</p></div></section>
        <section className="px-6 py-20 md:px-12"><div className="mx-auto max-w-4xl"><p className="text-sm uppercase tracking-[0.25em] text-purple-300">Questions</p><h2 className="mt-4 font-serif text-4xl md:text-6xl">Frequently Asked Questions</h2><div className="mt-10 divide-y divide-purple-500/20">{voiceFaqs.map(([question, answer], index) => <div key={question}><button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<span className="text-2xl text-purple-300">{openFaq === index ? '−' : '+'}</span></button>{openFaq === index && <p className="pb-6 text-purple-100/60">{answer}</p>}</div>)}</div></div></section>
      </>}

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
