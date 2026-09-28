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
    return <p role="status" className="text-sm text-purple-200">Thanks — your email is ready for the newsletter signup.</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? 'flex flex-col gap-3 sm:flex-row' : 'grid gap-3 sm:grid-cols-[1fr_auto]'}>
      <div className="min-w-0">
        <label htmlFor={compact ? 'newsletter-email-compact' : 'newsletter-email'} className="sr-only">Email address</label>
        <input
          id={compact ? 'newsletter-email-compact' : 'newsletter-email'}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => { setEmail(event.target.value); setStatus('idle') }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
          className="w-full rounded-full border border-purple-300/20 bg-black/20 px-5 py-3 text-white outline-none placeholder:text-purple-200/45 focus:border-purple-300"
        />
        {status === 'error' && <p id="newsletter-error" role="alert" className="mt-2 px-4 text-sm text-fuchsia-200">Enter a valid email address.</p>}
      </div>
      <button type="submit" className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-purple-100">Subscribe</button>
    </form>
  )
}
