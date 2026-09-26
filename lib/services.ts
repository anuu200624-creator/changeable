export type Service = {
  slug: string
  title: string
  eyebrow: string
  description: string
  promise: string
  benefits: string[]
  capabilities: string[]
  useCases: string[]
  process: { step: string; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const services: Record<string, Service> = {
  'ai-voice-agents': {
    slug: 'ai-voice-agents',
    title: 'AI Voice Agents',
    eyebrow: 'Conversational voice systems',
    description: 'Give every caller an intelligent, natural conversation that qualifies intent, books appointments, and keeps your business moving around the clock.',
    promise: 'Every call answered. Every opportunity understood.',
    benefits: ['Answer inbound calls 24/7', 'Qualify leads before they reach your team', 'Book appointments directly into your calendar', 'Reduce response time without adding headcount'],
    capabilities: ['Natural language conversations', 'Inbound and outbound calling', 'CRM and calendar integrations', 'Call summaries and lead scoring'],
    useCases: ['Lead qualification', 'Appointment booking', 'Customer support', 'Follow-up campaigns'],
    process: [{ step: '01', title: 'Map the conversation', description: 'We learn your offers, audience, objections, and the outcomes each call should create.' }, { step: '02', title: 'Train the agent', description: 'Your voice agent is configured with your knowledge, tone, guardrails, and business integrations.' }, { step: '03', title: 'Launch and improve', description: 'We monitor real conversations, refine prompts, and continuously improve conversion quality.' }],
    faqs: [{ question: 'Can the agent transfer calls to my team?', answer: 'Yes. It can recognize high-intent or sensitive conversations and hand them to the right person with context.' }, { question: 'Does it work with my existing CRM?', answer: 'We connect the agent to your existing CRM, calendar, and lead workflow wherever an integration is available.' }],
  },
  'ai-chatbots': {
    slug: 'ai-chatbots', title: 'AI Chatbots', eyebrow: 'Always-on customer conversations',
    description: 'Turn your website and messaging channels into helpful, context-aware experiences that answer questions and move visitors toward action.', promise: 'Useful answers at the exact moment your customer needs them.',
    benefits: ['Resolve common questions instantly', 'Capture and qualify website visitors', 'Stay consistent across every channel', 'Turn knowledge into a 24/7 sales assistant'],
    capabilities: ['Business knowledge training', 'Website and WhatsApp deployment', 'Human handoff with context', 'Conversation analytics'], useCases: ['Website support', 'Product recommendations', 'Lead capture', 'Internal knowledge access'],
    process: [{ step: '01', title: 'Gather your knowledge', description: 'We structure your website, documents, FAQs, and sales knowledge into a clear source of truth.' }, { step: '02', title: 'Design the experience', description: 'We define conversation paths, escalation rules, and the moments that should create a lead.' }, { step: '03', title: 'Deploy everywhere', description: 'Your chatbot launches where customers already are and gets smarter from real usage.' }], faqs: [{ question: 'Can customers reach a human?', answer: 'Yes. Clear escalation rules pass the conversation to your team with the full context attached.' }, { question: 'Can it use our existing content?', answer: 'Yes. We train it on approved content so answers stay aligned with your brand and business.' }],
  },
  'ai-workflow-automation': {
    slug: 'ai-workflow-automation', title: 'AI Workflow Automation', eyebrow: 'Operations without the busywork',
    description: 'Connect the tools your team already uses and automate repetitive handoffs, updates, approvals, and reporting with intelligent workflows.', promise: 'Replace repetitive work with reliable momentum.',
    benefits: ['Give your team hours back every week', 'Reduce manual errors and missed handoffs', 'Keep data consistent across systems', 'Scale operations without adding complexity'], capabilities: ['CRM automation', 'Lead routing and follow-up', 'Data enrichment and syncing', 'Automated reporting'], useCases: ['Sales operations', 'Client onboarding', 'Marketing workflows', 'Back-office administration'],
    process: [{ step: '01', title: 'Find the friction', description: 'We audit the handoffs and repetitive tasks that slow down your team or create leakage.' }, { step: '02', title: 'Build the system', description: 'We design resilient workflows with the right triggers, logic, approvals, and fallbacks.' }, { step: '03', title: 'Measure the gain', description: 'We monitor reliability and time saved, then improve the workflows as your business evolves.' }], faqs: [{ question: 'Will this replace our existing tools?', answer: 'Usually not. We connect your current tools so they work together more intelligently.' }, { question: 'Can workflows include human approvals?', answer: 'Yes. Automation can pause for review, request approval, and continue once your team responds.' }],
  },
  'ai-lead-generation': {
    slug: 'ai-lead-generation', title: 'AI Lead Generation', eyebrow: 'Pipeline built with precision', description: 'Build a repeatable outbound engine with personalized research, messaging, sequencing, and follow-up that keeps qualified opportunities flowing.', promise: 'More relevant conversations. Less manual prospecting.', benefits: ['Research prospects at scale', 'Personalize outreach without losing your voice', 'Automate thoughtful follow-up', 'Create a clearer, more predictable pipeline'], capabilities: ['Audience and ICP research', 'Personalized email sequences', 'LinkedIn workflow support', 'Lead scoring and routing'], useCases: ['B2B prospecting', 'Founder-led sales', 'Partner outreach', 'Reactivation campaigns'], process: [{ step: '01', title: 'Define the signal', description: 'We identify the industries, roles, triggers, and buying signals that make a prospect valuable.' }, { step: '02', title: 'Create the message', description: 'We build a messaging system that feels personal, relevant, and consistent with your positioning.' }, { step: '03', title: 'Optimize the pipeline', description: 'We review engagement and quality signals to improve targeting, timing, and conversion.' }], faqs: [{ question: 'Does this send generic spam?', answer: 'No. The system is built around relevance, clear targeting, and thoughtful messaging rather than volume alone.' }, { question: 'Can leads go straight into our CRM?', answer: 'Yes. Qualified responses can be routed into your CRM with the source and conversation context.' }],
  },
  'website-design-development': {
    slug: 'website-design-development', title: 'Website Design & Development', eyebrow: 'Digital experiences that convert', description: 'Launch a fast, distinctive website that makes your value clear, builds trust quickly, and turns the right visitors into conversations.', promise: 'Your best first impression, engineered for action.', benefits: ['Clarify your offer in seconds', 'Build trust with a premium visual system', 'Create faster, more accessible experiences', 'Turn attention into measurable enquiries'], capabilities: ['Conversion-focused strategy', 'Responsive visual design', 'Custom front-end development', 'Analytics and SEO foundations'], useCases: ['Agency websites', 'Service business sites', 'Campaign landing pages', 'Product launches'], process: [{ step: '01', title: 'Shape the story', description: 'We clarify your positioning, audience, proof, and the action your site should drive.' }, { step: '02', title: 'Design the system', description: 'We create a visual language and responsive page structure that feels unmistakably yours.' }, { step: '03', title: 'Build for growth', description: 'We ship a fast, maintainable site with the foundations needed for iteration and discovery.' }], faqs: [{ question: 'Can you work with our existing brand?', answer: 'Yes. We can extend an established identity or create a sharper system around what already works.' }, { question: 'Will the site be mobile-friendly?', answer: 'Yes. Every page is designed and tested for responsive layouts across modern screen sizes.' }],
  },
  'seo-growth': {
    slug: 'seo-growth', title: 'SEO & Growth', eyebrow: 'Visibility with a compounding effect', description: 'Build durable organic growth with a focused SEO system that connects technical foundations, useful content, and measurable commercial intent.', promise: 'Earn attention from the people already searching for you.', benefits: ['Build qualified organic traffic', 'Improve discoverability and authority', 'Turn search intent into enquiries', 'Create a growth channel that compounds'], capabilities: ['Technical SEO foundations', 'Topic and search intent research', 'Content briefs and optimization', 'Performance reporting'], useCases: ['Local visibility', 'B2B organic growth', 'Service page strategy', 'Content-led acquisition'], process: [{ step: '01', title: 'Diagnose the opportunity', description: 'We assess your technical foundation, competitors, existing visibility, and highest-value search intent.' }, { step: '02', title: 'Prioritize the work', description: 'We turn findings into a focused roadmap across pages, content, authority, and technical improvements.' }, { step: '03', title: 'Compound the results', description: 'We measure meaningful movement and keep improving the pages that create commercial value.' }], faqs: [{ question: 'How do you measure SEO success?', answer: 'We focus on qualified visibility, relevant traffic, conversions, and the pages that support business goals.' }, { question: 'Can you optimize an existing website?', answer: 'Yes. We can improve an existing site without forcing a full rebuild.' }],
  },
}

export const serviceSlugs = Object.keys(services)

export function getService(slug: string) {
  return services[slug]
}

export function getServiceUrl(slug: string) {
  return `/service/${slug}`
}
