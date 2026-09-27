export type Location = {
  slug: string
  name: string
  description: string
  context: string
}

export const locations: Location[] = [
  { slug: 'mumbai', name: 'Mumbai', description: 'AI automation systems for businesses across Mumbai, from lead handling and customer communication to CRM and appointment workflows.', context: 'CreationsXAI is based in Mumbai and helps local teams replace repetitive work with reliable AI systems.' },
  { slug: 'andheri', name: 'Andheri', description: "Automation systems for businesses operating across one of Mumbai's busiest commercial and residential corridors.", context: 'From fast-moving service teams to established companies, Andheri businesses can connect lead, sales, and customer workflows.' },
  { slug: 'borivali', name: 'Borivali', description: "AI-powered lead handling, follow-ups and customer communication for businesses serving Mumbai's western suburbs.", context: 'We help western suburb businesses respond faster and keep every enquiry moving.' },
  { slug: 'powai', name: 'Powai', description: 'Automation for growing businesses, professional services and customer-facing teams across Powai.', context: 'Powai teams can use connected AI workflows to scale service delivery without adding unnecessary manual work.' },
  { slug: 'bandra', name: 'Bandra', description: 'AI systems for service businesses, professional firms and customer-driven companies across Bandra.', context: 'We build polished, practical automation for teams where every customer interaction matters.' },
  { slug: 'thane', name: 'Thane', description: 'AI automation for growing businesses across Thane, from lead qualification to appointment booking.', context: 'Thane businesses can turn inbound demand into a clearer, more consistent customer journey.' },
  { slug: 'navi-mumbai', name: 'Navi Mumbai', description: 'Lead handling, customer communication and workflow automation for businesses across Navi Mumbai.', context: 'We connect the tools Navi Mumbai businesses already use into one calmer operating system.' },
  { slug: 'mira-road-bhayandar', name: 'Mira Road & Bhayandar', description: 'AI automation for local service businesses and growing companies across Mira Road and Bhayandar.', context: 'Practical automation helps teams manage more enquiries, calls, and follow-ups with less friction.' },
  { slug: 'vasai-virar', name: 'Vasai-Virar', description: 'Automation systems that help businesses manage leads, calls, follow-ups and appointments more efficiently.', context: 'We help businesses across Vasai-Virar build repeatable systems around their customer operations.' },
  { slug: 'kalyan-dombivli', name: 'Kalyan-Dombivli', description: 'AI-powered workflows for businesses serving the growing Kalyan-Dombivli region.', context: 'Growing teams can use AI to respond consistently while keeping their people focused on higher-value work.' },
  { slug: 'bhiwandi', name: 'Bhiwandi', description: 'Automation for businesses operating across Bhiwandi, including lead management, customer communication and internal workflows.', context: 'We design connected workflows that make operations easier to manage as demand grows.' },
  { slug: 'panvel', name: 'Panvel', description: 'AI automation for businesses serving Panvel and the surrounding growth corridor.', context: 'Panvel businesses can build a stronger operating rhythm with AI-assisted conversations and workflows.' },
]

export const maharashtraAreas = ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Chhatrapati Sambhajinagar', 'Kolhapur', 'Solapur', 'Satara', 'Vasai-Virar', 'Panvel', 'Kalyan-Dombivli', 'Bhiwandi']

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}

export const locationSlugs = locations.map((location) => location.slug)

export const locationServices = [
  ['AI Voice Agents', 'Answer calls, qualify leads and book appointments.', 'ai-voice-agents'],
  ['AI Chatbots', 'Turn conversations into qualified leads.', 'ai-chatbots'],
  ['WhatsApp Automation', 'Automate conversations, follow-ups and reminders.', 'ai-workflow-automation'],
  ['Lead Automation', 'Capture, qualify and route leads automatically.', 'ai-lead-generation'],
  ['Appointment Automation', 'Automate scheduling and reminders.', 'ai-workflow-automation'],
  ['CRM Automation', 'Connect customer data and workflows.', 'ai-workflow-automation'],
  ['AI Follow-Up', 'Automatically follow up with leads.', 'ai-lead-generation'],
  ['Custom AI Workflows', 'Connect AI, APIs and business tools.', 'ai-workflow-automation'],
] as const

export function getLocationUrl(slug: string) {
  return `/locations/${slug}`
}

export function getServiceUrl(slug: string) {
  return `/service/${slug}`
}
