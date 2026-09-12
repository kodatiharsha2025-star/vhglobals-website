import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, PhoneCall } from 'lucide-react';
import { FAQ_LIST, CONTACT_INFO } from '../data';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export default function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  // Open the first 3 FAQs by default
  const [openIds, setOpenIds] = useState<number[]>([1, 2, 3]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Overview', 'Video Retainers', 'AI Voice', 'Privacy & Tech'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQ_LIST
      : FAQ_LIST.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((i) => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[#2596be] text-xs font-mono uppercase tracking-wider font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2596be]" />
            <span>Official Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4 font-['Space_Grotesk']">
            Frequently Asked <span className="text-[#2596be]">Questions</span>
          </h2>
          <p className="text-base text-slate-700">
            Clear answers about our video editing retainers, AI voice agents, fulfillment speeds, confidentiality, and onboarding.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2596be] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-[#0a0a0a] hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-xl border-2 border-slate-200 hover:border-[#2596be] transition-colors overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-[#2596be] border border-slate-200 shrink-0 mt-0.5 sm:mt-0">
                      #{faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0a0a0a] group-hover:text-[#2596be] transition-colors font-['Space_Grotesk']">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-black shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2596be]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200 bg-slate-50/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Direct Action */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <div className="text-[#0a0a0a] font-bold text-sm sm:text-base font-['Space_Grotesk']">
              Ready to start working with VHGlobals?
            </div>
            <div className="text-xs text-slate-600 flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#2596be]" />
                {CONTACT_INFO.email}
              </span>
              <span>&bull;</span>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
            >
              Email Us
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
