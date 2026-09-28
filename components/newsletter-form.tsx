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
      <div role="status" className="border-l-2 border-emerald-300 px-4 py-3 text-left text-sm text-emerald-100">
        <strong className="block font-medium">You&apos;re on the list.</strong><span className="text-emerald-100/70">Watch your inbox for the next issue.</span>
      </div>
    )
  }

  const inputId = compact ? 'newsletter-email-compact' : 'newsletter-email'
  const helperId = compact ? 'newsletter-helper-compact' : 'newsletter-helper'
  const errorId = compact ? 'newsletter-error-compact' : 'newsletter-error'

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'flex flex-col gap-3 sm:flex-row' : 'space-y-4'}>
      <div className="min-w-0 flex-1">
        <label htmlFor={inputId} className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-purple-100/65">Email address</label>
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
            className="w-full border-b border-purple-200/30 bg-transparent px-0 py-4 text-lg text-white outline-none transition placeholder:text-purple-200/35 hover:border-purple-200/60 focus:border-fuchsia-300 focus:ring-0"
          />
        </div>
        {status === 'error' ? <p id={errorId} role="alert" className="mt-2 px-1 text-sm text-fuchsia-200">Enter a valid email address.</p> : <p id={helperId} className="mt-2 px-1 text-xs text-purple-200/55">One useful email when we have something worth sharing.</p>}
      </div>
      <button type="submit" className="group inline-flex min-h-14 items-center justify-center gap-3 border border-fuchsia-200/70 bg-fuchsia-200 px-7 py-4 font-medium text-purple-950 transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-300/40">
        Send me the next issue <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </form>
  )
}
