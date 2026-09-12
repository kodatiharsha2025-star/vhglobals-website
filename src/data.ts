export interface NavLinkItem {
  label: string;
  href: string;
  subdomain: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Why VHGlobals', href: '#why', subdomain: 'why.vhglobals.com' },
  { label: 'How It Works', href: '#how-it-works', subdomain: 'how.vhglobals.com' },
  { label: 'Compare', href: '#compare', subdomain: 'compare.vhglobals.com' },
  { label: 'FAQs', href: '#faqs', subdomain: 'faqs.vhglobals.com' },
  { label: 'Privacy Policy', href: '#privacy', subdomain: 'privacy.vhglobals.com' },
  { label: 'Contact Us', href: '#contact', subdomain: 'contact.vhglobals.com' },
];

export interface DivisionItem {
  id: string;
  title: string;
  subdomain: string;
  url: string;
  tag: string;
  description: string;
  specs: string[];
  ctaText: string;
}

export const DIVISIONS: DivisionItem[] = [
  {
    id: 'video',
    title: 'High-Retention Video Editing',
    subdomain: 'video.vhglobals.com',
    url: 'https://video.vhglobals.com',
    tag: 'CONVERT CONTENT INTO CASH',
    description:
      'Dedicated elite video pods crafting high-converting long-form and short-form assets for founders, venture-backed leaders, enterprise brands, and YouTubers.',
    specs: [
      'Dedicated Senior Video editor and quality checker',
      'Algorithm-tested hooks & retention pacing',
      'Dedicated Slack / WhatsApp sync',
    ],
    ctaText: 'Explore Video Division',
  },
  {
    id: 'ai-voice',
    title: 'Inbound & Outbound - AI Voice Agent',
    subdomain: 'ai.vhglobals.com',
    url: 'https://ai.vhglobals.com',
    tag: 'CONVERT CONTENT INTO CASH',
    description:
      'Human-grade 24/7 inbound & outbound voice agents operating at sub-500ms conversational latency. Instantly qualify inbound callers, answer intricate product questions, and book calendar appointments in real-time.',
    specs: [
      'Indistinguishable human intonation & dynamic interruption handling',
      'Direct synchronization with HubSpot, Salesforce & GoHighLevel',
      'Autonomous calendar booking & SMS confirmation trigger',
      'Full call recordings, transcriptions & sentiment telemetry',
    ],
    ctaText: 'Explore AI Voice Division',
  },
];

export interface WhyPillar {
  title: string;
  description: string;
  tag: string;
}

export const WHY_VHGLOBALS_LIST: WhyPillar[] = [
  {
    title: 'Uncompromising Quality in High-Barrier Niches',
    tag: 'Elite Specialization',
    description:
      'We focus exclusively on complex, high-ticket domains like SaaS explainers, real estate showcases, GeoLayers 3 3D map animations, and documentaries that standard low-cost agencies cannot execute.',
  },
  {
    title: 'Lightning-Fast Elite Fulfillment',
    tag: '24-48h Delivery',
    description:
      'Our video editing pipeline guarantees short-form turnarounds under 24 to 48 hours, keeping your publishing cadence aggressive and consistent.',
  },
  {
    title: 'Instant 30-Second Lead Response',
    tag: 'Zero Decay',
    description:
      'Our custom AI voice agents engage inbound prospects in under 30 seconds, eliminating lead decay and booking calendar slots around the clock.',
  },
  {
    title: 'Multilingual Native Capabilities',
    tag: 'Global Reach',
    description:
      'Unlike rigid automated callers, our AI agents support fluid conversations in English as well as regional Indian languages like Telugu, Hindi, and Tamil.',
  },
  {
    title: 'Strict Confidentiality & Zero Third-Party Sharing',
    tag: '100% Confidential',
    description:
      'All client project assets, transcripts, and operational data remain entirely secure with zero data-selling or third-party exposure.',
  },
  {
    title: 'Zero Technical Overhead',
    tag: 'Plug & Play',
    description:
      'We handle the entire custom backend setup, telephony integration, and editing pipeline so your team can focus purely on closing deals.',
  },
  {
    title: 'Proven High-Ticket Expertise',
    tag: 'Engineered for ROI',
    description:
      'We do not waste time on generic templates; every video asset and AI system is engineered specifically for high-conversion B2B growth and maximum ROI.',
  },
  {
    title: 'Zero Lead Leakage',
    tag: '24/7 Inbound Capture',
    description:
      'Traditional agencies miss inquiries overnight or during peak hours, whereas our AI voice agents operate 24/7 to capture, qualify, and book leads instantly.',
  },
  {
    title: 'Scalable Infrastructure Without Overhead',
    tag: 'On-Demand Team',
    description:
      'Hiring full-time in-house editors and AI engineers is costly and complex; VHGlobals gives you an elite plug-and-play remote workforce on demand.',
  },
  {
    title: 'Transparent & Predictable Operations',
    tag: 'Zero Hidden Fees',
    description:
      'No hidden fees, no missed deadlines, and complete clarity through structured retainers and dedicated client review channels.',
  },
];

export interface ComparisonItem {
  metric: string;
  vhglobals: boolean;
  otherVideoAgency: boolean;
  otherVoiceAgency: boolean;
}

export const COMPARISON_ROWS: ComparisonItem[] = [
  {
    metric: 'High-Barrier Specialization (SaaS, GeoLayers 3, Real Estate)',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Lightning-Fast Turnaround (24–48 Hours)',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Instant 30-Second Lead Response & 24/7 Booking',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: true,
  },
  {
    metric: 'Multilingual Support (English, Telugu, Hindi, Tamil)',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Strict Data Confidentiality & Zero Third-Party Sharing',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Zero Technical Setup Overhead for Clients',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Combined Dual Infrastructure (Editing + Voice Agents)',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
  {
    metric: 'Predictable Fixed Monthly Retainer Pricing',
    vhglobals: true,
    otherVideoAgency: true,
    otherVoiceAgency: false,
  },
  {
    metric: 'Dedicated Creative Direction & Strategy',
    vhglobals: true,
    otherVideoAgency: true,
    otherVoiceAgency: false,
  },
  {
    metric: 'Real-Time Call Analytics & Transcription Dashboard',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: true,
  },
  {
    metric: 'Zero Tracking Cookies & Zero Third-Party Pixels',
    vhglobals: true,
    otherVideoAgency: false,
    otherVoiceAgency: false,
  },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'Overview' | 'Video Retainers' | 'AI Voice' | 'Privacy & Tech';
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: 1,
    question: 'What is VHGlobals and what do you do?',
    answer:
      'VHGlobals is a high-ticket remote agency specializing in elite short and long-form video editing retainers and custom 24/7 AI voice call agent automation systems.',
    category: 'Overview',
  },
  {
    id: 2,
    question: 'How do your video editing retainers work?',
    answer:
      'We provide dedicated creative direction, high-retention talking heads, documentarians, and advanced motion graphics, GeoLayers 3 mapping, custom build saas videos, real estate videos on a predictable monthly retainer model.',
    category: 'Video Retainers',
  },
  {
    id: 3,
    question: 'What are AI voice call agents used for?',
    answer:
      'Our custom conversational voice agents handle inbound and outbound calls, instantly screening, qualifying, and booking prospects directly into your calendar around the clock.',
    category: 'AI Voice',
  },
  {
    id: 4,
    question: 'Do you share my client or business data with third parties?',
    answer:
      'No. All client project assets, transcripts, and operational data remain strictly confidential with zero third-party sharing.',
    category: 'Privacy & Tech',
  },
  {
    id: 5,
    question: 'Are there tracking cookies or login accounts on the main site?',
    answer:
      'No. Our public marketing hub features no cookies, trackers, or public account sign-up requirements.',
    category: 'Privacy & Tech',
  },
  {
    id: 6,
    question: 'Where is VHGlobals located?',
    answer:
      'VHGlobals operates as a fully remote agency managed by founder Kodati Harsha Vardhan out of Hyderabad, Telangana, India.',
    category: 'Overview',
  },
  {
    id: 7,
    question: 'How can I start working with VHGlobals?',
    answer:
      'You can click the Book Consultation button on any of our subdomain pages or email us directly at contact@vhglobals.com.',
    category: 'Overview',
  },
  {
    id: 8,
    question: 'What specific video editing styles and formats do you support?',
    answer:
      'We focus exclusively on premium video formats including SaaS product explainers, real estate showcases, GeoLayers 3 3D map animations, documentaries, motion graphics, and high-retention talking heads.',
    category: 'Video Retainers',
  },
  {
    id: 9,
    question: 'What kind of turnaround time can I expect for video editing retainers?',
    answer:
      'We pride ourselves on lightning-fast, elite fulfillment speeds designed to keep your publishing pipeline consistently active without sacrificing creative quality. Shortform videos are usually delivered under 24hours to max 48hours.',
    category: 'Video Retainers',
  },
  {
    id: 10,
    question: 'How fast do your AI voice call agents respond to new leads?',
    answer:
      'Our AI voice agents are built for instantaneous lead engagement, capable of placing or handling calls in under 30 seconds to ensure prospective clients never slip through the cracks.',
    category: 'AI Voice',
  },
  {
    id: 11,
    question: 'Do your AI voice agents support regional languages?',
    answer:
      'Yes, our custom voice agents can be configured to support multi-lingual conversations, including English and regional Indian languages like Telugu, Hindi, and Tamil, depending on your target audience.',
    category: 'AI Voice',
  },
  {
    id: 12,
    question: 'What is the onboarding process after booking a consultation?',
    answer:
      'We conduct a brief technical and creative audit to map out your specific funnel requirements, configure your video assets or AI voice workflows, and deploy your scaling infrastructure immediately.',
    category: 'Overview',
  },
  {
    id: 13,
    question: 'Do I need technical skills or coding knowledge to use your AI voice agents?',
    answer:
      'No. We handle the entire custom backend setup, script integration, and telephony pipeline so your team can manage leads directly from a clean dashboard.',
    category: 'AI Voice',
  },
  {
    id: 14,
    question: 'Can your AI voice agents integrate with my existing CRM and calendar?',
    answer:
      'Yes. We configure seamless integrations with standard booking calendars and CRM tools to ensure leads are automatically booked and updated in real-time.',
    category: 'AI Voice',
  },
  {
    id: 15,
    question: 'Are your video editing retainers locked into fixed monthly limits?',
    answer:
      'Yes. Each tier is structured around a predictable volume of short-form or long-form assets per month to maintain elite quality and reliable publishing schedules.',
    category: 'Video Retainers',
  },
  {
    id: 16,
    question: 'What happens after I submit a project brief for video editing?',
    answer:
      'Our dedicated editing team reviews your brand guidelines and raw assets, initiates production, and delivers drafts directly through your designated portal or review link.',
    category: 'Video Retainers',
  },
  {
    id: 17,
    question: 'How do you ensure the AI voice agents sound natural and human-like?',
    answer:
      'We utilize advanced speech AI models and fine-tuned latency reduction parameters to eliminate awkward pauses and deliver smooth, conversational pacing.',
    category: 'AI Voice',
  },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Technical & Creative Audit',
    subtitle: 'Diagnostic Phase',
    description:
      'We conduct a brief technical and creative audit to map out your specific funnel requirements, identify lead decay points, and audit your content publishing workflow.',
    deliverables: [
      'Comprehensive funnel & retention audit',
      'Knowledge-base & voice script mapping',
      'CRM & calendar integration planning',
    ],
  },
  {
    number: '02',
    title: 'Asset & Workflow Configuration',
    subtitle: 'Installation Phase',
    description:
      'We configure your dedicated video editing pod and calibrate your custom sub-500ms AI voice workflows with customized regional language parameters and brand tone.',
    deliverables: [
      'Dedicated video editor and QC pod assigned',
      'Conversational AI voice telephony pipeline setup',
      'Direct Slack / WhatsApp review sync established',
    ],
  },
  {
    number: '03',
    title: 'Immediate Infrastructure Deployment',
    subtitle: 'Scaling Phase',
    description:
      'We deploy your high-velocity scaling infrastructure. Short-form videos deliver within 24-48 hours while your AI voice agents engage leads in under 30 seconds 24/7.',
    deliverables: [
      'Rapid 24-48h video delivery pipeline active',
      'Sub-30s instantaneous lead engagement running',
      'Full call telemetry & attribution dashboard live',
    ],
  },
];

export const CONTACT_INFO = {
  fullName: 'KODATI HARSHA VARDHAN',
  role: 'Founder & Managing Director',
  phoneNumber: '+91 8125692258',
  email: 'contact@vhglobals.com',
  company: 'VHGLOBALS',
  location: 'Hyderabad, Telangana, India',
  services: 'Video Editing & AI Voice Call Agent System',
  subdomains: [
    'video.vhglobals.com',
    'ai.vhglobals.com',
    'product.vhglobals.com',
    'about.vhglobals.com',
    'overview.vhglobals.com',
    'portal.vhglobals.com',
    'solutions.vhglobals.com',
    'pricing.vhglobals.com',
    'privacy.vhglobals.com',
  ],
};
