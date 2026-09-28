'use client'

import { FormEvent, useState } from 'react'

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!isValid) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex items-center gap-3 rounded-2xl border border-emerald-300/25 bg-emerald-400/10 px-4 py-3 text-left text-sm text-emerald-100">
        <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-emerald-950">✓</span>
        <span><strong className="block font-medium">You&apos;re on the list.</strong><span className="text-emerald-100/70">Watch your inbox for the next issue.</span></span>
      </div>
    )
  }

  const inputId = compact ? 'newsletter-email-compact' : 'newsletter-email'
  const helperId = compact ? 'newsletter-helper-compact' : 'newsletter-helper'
  const errorId = compact ? 'newsletter-error-compact' : 'newsletter-error'

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'flex flex-col gap-3 sm:flex-row' : 'space-y-3'}>
      <div className="min-w-0 flex-1">
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-purple-100/85">Your best email</label>
        <div className="group relative">
          <input
            id={inputId}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => { setEmail(event.target.value); setStatus('idle') }}
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? errorId : helperId}
            className="w-full rounded-2xl border border-purple-300/25 bg-black/30 px-5 py-4 text-base text-white outline-none transition placeholder:text-purple-200/40 hover:border-purple-300/45 focus:border-fuchsia-300 focus:bg-purple-950/50 focus:ring-4 focus:ring-fuchsia-400/10"
          />
          <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg opacity-50 transition group-focus-within:scale-110 group-focus-within:opacity-100">✦</span>
        </div>
        {status === 'error' ? <p id={errorId} role="alert" className="mt-2 px-1 text-sm text-fuchsia-200">Enter a valid email address.</p> : <p id={helperId} className="mt-2 px-1 text-xs text-purple-200/55">One useful email when we have something worth sharing.</p>}
      </div>
      <button type="submit" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-medium text-black shadow-[0_8px_30px_rgba(167,139,250,0.18)] transition hover:-translate-y-0.5 hover:bg-fuchsia-100 hover:shadow-[0_12px_35px_rgba(217,70,239,0.25)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300/40">
        Subscribe <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  )
}
