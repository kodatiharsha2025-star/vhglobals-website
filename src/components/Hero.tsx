import { ShieldCheck, PhoneCall, ArrowDown, Activity, CheckCircle2 } from 'lucide-react';
import DivisionCards from './DivisionCards';

interface HeroProps {
  onOpenConsultation: () => void;
  onSelectDivision: (divisionId: string) => void;
}

export default function Hero({ onOpenConsultation, onSelectDivision }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0a0a0a] tracking-tight leading-[1.18] mb-6 font-['Space_Grotesk']">
            Turn content into cash and inbound-outbound calls into{' '}
            <span className="text-[#2596be]">closed deals.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Scale your enterprise effortlessly using elite video productions and sub-500ms AI voice calling infrastructure designed to convert inbound and outbound traffic.
          </p>

          {/* Quick Consultation CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              id="hero-book-consult-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>

            <a
              href="#why"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
            >
              <span>Why VHGlobals</span>
              <ArrowDown className="w-4 h-4 text-[#2596be]" />
            </a>
          </div>

          {/* Live Status Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono py-3 px-4 rounded-lg bg-slate-50 border border-slate-200 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2596be]" />
              <span className="text-slate-800 font-medium">100% Confidential</span>
            </div>
            <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#2596be]" />
              <span className="text-slate-800 font-medium">Sub-500ms Voice Latency</span>
            </div>
            <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
              <span className="text-slate-800 font-medium">24–48h Video Turnaround</span>
            </div>
          </div>
        </div>

        {/* Two Main Division Action Cards */}
        <DivisionCards onSelectDivision={onSelectDivision} />
      </div>
    </section>
  );
}
