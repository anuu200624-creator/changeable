export type Industry = {
  slug: string
  name: string
  icon: string
  summary: string
  help: string[]
}

export const industries: Industry[] = [
  { slug: 'real-estate', name: 'Real Estate', icon: '⌂', summary: 'Turn more property enquiries into qualified site visits and bookings.', help: ['AI voice agents qualify buyers and sellers instantly', 'WhatsApp follow ups keep every lead warm', 'Automated site visit booking keeps calendars full'] },
  { slug: 'law-firms', name: 'Law Firms', icon: '⚖', summary: 'Make client intake faster while your team focuses on legal work.', help: ['Capture and qualify new case enquiries 24/7', 'Automate consultation scheduling and reminders', 'Organise intake details before a lawyer reviews them'] },
  { slug: 'healthcare', name: 'Healthcare', icon: '+', summary: 'Give patients a smoother path from first enquiry to appointment.', help: ['Automate appointment booking and reminders', 'Answer common questions across WhatsApp and web chat', 'Create reliable follow up sequences for patient care'] },
  { slug: 'e-commerce', name: 'E-Commerce', icon: '◈', summary: 'Recover more carts and deliver faster, more personal support.', help: ['Recover abandoned carts with timely conversations', 'Automate order and product support', 'Build post purchase follow ups that drive repeat sales'] },
  { slug: 'education', name: 'Education', icon: '◇', summary: 'Help prospective students move from enquiry to enrolment.', help: ['Respond to course enquiries instantly', 'Qualify applicants and route them to the right counsellor', 'Automate reminders for forms, fees and next steps'] },
  { slug: 'automotive', name: 'Automotive', icon: '▱', summary: 'Convert dealership interest into test drives and sales conversations.', help: ['Qualify vehicle enquiries automatically', 'Book test drives without back and forth', 'Follow up with prospects across their buying journey'] },
  { slug: 'home-services', name: 'Home Services', icon: '⌂', summary: 'Turn local service enquiries into booked jobs with less admin.', help: ['Capture job details and qualify service requests', 'Automate quotes, bookings and reminders', 'Keep seasonal outreach running consistently'] },
  { slug: 'b2b-saas', name: 'B2B / SaaS', icon: '▣', summary: 'Build a more consistent pipeline from prospecting to retention.', help: ['Automate outbound prospecting and qualification', 'Speed up onboarding with guided conversations', 'Trigger retention and expansion follow ups'] },
]

export function getIndustry(slug: string) { return industries.find((industry) => industry.slug === slug) }

export function industrySlug(name: string) { return industries.find((industry) => industry.name === name)?.slug ?? name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }
