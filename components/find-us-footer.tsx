import Link from 'next/link'

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.842507087077!2d72.85856781078904!3d19.272503381897884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e2a84cc40f%3A0x73b3c10b78e03766!2sCreationsXAI!5e1!3m2!1sen!2sin!4v1790535887147!5m2!1sen!2sin'

export function FindUsFooter() {
  return (
    <section className="border-t border-purple-500/15 bg-[#08020f] px-6 py-16 md:px-12 md:py-20" aria-labelledby="find-us-heading">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Find us</p>
          <h2 id="find-us-heading" className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">Let&apos;s build something useful.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-purple-100/65">CreationsXAI helps ambitious businesses automate the work that slows them down.</p>
          <div className="mt-8 grid gap-3 text-purple-100/75">
            <p><span className="text-purple-300">Company:</span> CreationsXAI</p>
            <p><span className="text-purple-300">Phone:</span> <a className="transition hover:text-white" href="tel:+919321012155">+91 9321012155</a></p>
            <p><span className="text-purple-300">Email:</span> <a className="transition hover:text-white" href="mailto:jayingle215@gmail.com">jayingle215@gmail.com</a></p>
            <p><span className="text-purple-300">Location:</span> Mumbai, Maharashtra</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-purple-400/20 bg-purple-950/20 shadow-[0_0_40px_rgba(124,58,237,.12)]">
          <iframe title="CreationsXAI location on Google Maps" src={mapUrl} className="h-72 w-full border-0 md:h-full md:min-h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="border-t border-purple-400/15 p-4 md:hidden"><Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-200 underline underline-offset-4">Open in Google Maps</Link></div>
        </div>
      </div>
    </section>
  )
}

export { mapUrl }
