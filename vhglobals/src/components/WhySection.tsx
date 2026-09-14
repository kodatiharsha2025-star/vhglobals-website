import { CheckCircle2, Zap, PhoneCall } from 'lucide-react';
import { WHY_VHGLOBALS_LIST } from '../data';

export default function WhySection() {
  // Dual infrastructure pillars: Video Editing & AI Call Agents
  const videoPillars = [
    WHY_VHGLOBALS_LIST[0],
    WHY_VHGLOBALS_LIST[1],
    WHY_VHGLOBALS_LIST[6],
  ].filter(Boolean);
  const voicePillars = [
    WHY_VHGLOBALS_LIST[2],
    WHY_VHGLOBALS_LIST[3],
    WHY_VHGLOBALS_LIST[7],
  ].filter(Boolean);

  return (
    <section id="why" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-5 font-['Space_Grotesk']">
            Why <span className="text-[#2596be]">VHGLOBALS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We eliminate the fragmented agency model. Instead of juggling uncoordinated freelancers, slow turnaround times, and leaky sales funnels, enterprise founders and growth operators rely on our dual-pillar infrastructure to scale revenue.
          </p>
        </div>

        {/* Asymmetrical Layout: Left Architectural Summary + Right Structured Data Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Architectural Thesis & Verified Metrics (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Core Metrics Box */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#2596be] font-bold">
                Operational Telemetry
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white border border-slate-200">
                  <div className="text-3xl font-black text-[#0a0a0a] font-['Space_Grotesk'] tracking-tight">
                    &lt; 30<span className="text-[#2596be]">s</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-900 mt-1">
                    Instant Inbound Lead Response
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Sub-500ms voice conversational latency prevents prospect decay.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white border border-slate-200">
                  <div className="text-xl sm:text-2xl font-black text-[#0a0a0a] font-['Space_Grotesk'] tracking-tight">
                    under 24hours to 48hours
                  </div>
                  <div className="text-xs font-semibold text-slate-900 mt-1">
                    Short-Form Video Delivery SLA
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Sprint delivery under 24hours to 48hours with dedicated QC review.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Pillars Organised in Dual Infrastructure Blocks (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Block 1: Creative & Video Retainers */}
            <div className="rounded-xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#2596be]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                      High-Retention Visual Storytelling with elite Video Editing
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {videoPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                        {pillar.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-[#2596be] bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                      <span>Enterprise standard production protocol</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2: Conversational AI Telephony */}
            <div className="rounded-xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#2596be]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                      Automated Inbound and Outbound Call agents
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {voicePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                        {pillar.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-[#2596be] bg-white px-2.5 py-0.5 rounded border border-slate-200">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                      <span>Zero latency loss conversion system</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
