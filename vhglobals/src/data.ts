export interface NavLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Why VHGLOBALS', href: '#why' },
  { label: 'Compare', href: '#compare' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Contact Us', href: '#contact' },
];

export interface DivisionItem {
  id: string;
  title: string;
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
    tag: 'under 24hours to 48hours',
    description:
      'Our video editing pipeline guarantees short-form turnarounds under 24hours to 48hours, keeping your publishing cadence aggressive and consistent.',
  },
  {
    title: 'Instant 30-Second Lead Response',
    tag: 'Zero Decay',
    description:
      'Our custom AI voice agents engage inbound prospects in under 30 seconds, eliminating lead decay and booking calendar slots around the clock.',
  },
  {
    title: 'Advanced English Voice AI',
    tag: 'English Native',
    description:
      'Designed exclusively for English-speaking markets, our AI agents deliver fluid, human-like conversations without rigid menu prompts.',
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
      'Hiring full-time in-house editors and AI engineers is costly and complex; VHGLOBALS gives you an elite plug-and-play workforce on demand.',
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
    metric: 'Lightning-Fast Turnaround (under 24hours to 48hours)',
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
    metric: 'Advanced English Voice AI (Fluid, Human-Like Dialogues)',
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
    metric: 'Dual Infrastructure (Editing + Voice Agents)',
    vhglobals: true,
    otherVideoAgency: false,
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
    question: 'What is VHGLOBALS and what do you do?',
    answer:
      'VHGLOBALS is a high-ticket agency specializing in elite short and long-form video editing retainers and custom 24/7 AI voice call agent automation systems.',
    category: 'Overview',
  },
  {
    id: 2,
    question: 'How do your video editing retainers work?',
    answer:
      'We provide dedicated creative direction, high-retention talking heads, documentaries, and advanced motion graphics, GeoLayers 3 mapping, custom build saas videos, real estate videos on a predictable monthly retainer model.',
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
    question: 'How can I start working with VHGLOBALS?',
    answer:
      'You can click the Book Consultation button to schedule a call directly on our calendar or email us at contact@vhglobals.com or contact us on whatsapp.',
    category: 'Overview',
  },
  {
    id: 7,
    question: 'What specific video editing styles and formats do you support?',
    answer:
      'We focus exclusively on premium video formats including SaaS product explainers, real estate showcases, GeoLayers 3 map animations, documentaries, motion graphics, and high-retention talking heads.',
    category: 'Video Retainers',
  },
  {
    id: 8,
    question: 'What kind of turnaround time can I expect for video editing retainers?',
    answer:
      'We pride ourselves on lightning-fast, elite fulfillment speeds designed to keep your publishing pipeline consistently active without sacrificing creative quality. Shortform videos are usually delivered under 24hours to 48hours.',
    category: 'Video Retainers',
  },
  {
    id: 9,
    question: 'How fast do your AI voice call agents respond to new leads?',
    answer:
      'Our AI voice agents are built for instantaneous lead engagement, capable of placing or handling calls in under 30 seconds to ensure prospective clients never slip through the cracks.',
    category: 'AI Voice',
  },
  {
    id: 10,
    question: 'What language capabilities do your AI voice agents have?',
    answer:
      'Designed exclusively for English-speaking markets, our AI voice agents deliver fluid, human-like conversations without rigid menu prompts, ensuring natural tonality and high engagement.',
    category: 'AI Voice',
  },
  {
    id: 11,
    question: 'What is the onboarding process after booking a consultation?',
    answer:
      'We conduct a brief technical and creative audit to map out your specific funnel requirements, configure your video assets or AI voice workflows, and deploy your scaling infrastructure immediately.',
    category: 'Overview',
  },
  {
    id: 12,
    question: 'Do I need technical skills or coding knowledge to use your AI voice agents?',
    answer:
      'No. We handle the entire custom backend setup, script integration, and telephony pipeline so your team can manage leads directly from a clean dashboard.',
    category: 'AI Voice',
  },
  {
    id: 13,
    question: 'Can your AI voice agents integrate with my existing CRM and calendar?',
    answer:
      'Yes. We configure seamless integrations with standard booking calendars and CRM tools to ensure leads are automatically booked and updated in real-time.',
    category: 'AI Voice',
  },
  {
    id: 14,
    question: 'What happens after I submit a project brief for video editing?',
    answer:
      'Our dedicated editing team reviews your brand guidelines and raw assets, initiates production, and delivers drafts directly through your designated portal or review link.',
    category: 'Video Retainers',
  },
  {
    id: 15,
    question: 'How do you ensure the AI voice agents sound natural and human-like?',
    answer:
      'We utilize advanced speech AI models and fine-tuned latency reduction parameters to eliminate awkward pauses and deliver smooth, conversational pacing.',
    category: 'AI Voice',
  },
];

export const CALENDLY_URL = 'https://calendly.com/vhstudios-global/30min';

export const CONTACT_INFO = {
  company: 'VHGLOBALS',
  phoneNumber: '+91 8125692258',
  email: 'contact@vhglobals.com',
  services: 'Video Editing & AI Voice Call Agent System',
  calendlyUrl: CALENDLY_URL,
};
