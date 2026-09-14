import { Settings, Layers, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export default function HowItWorks({ onOpenConsultation }: HowItWorksProps) {
  const stepIcons = [Settings, Layers, Workflow];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[#2596be] text-xs font-mono uppercase tracking-wider font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2596be]" />
            <span>Execution Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-5 font-['Space_Grotesk']">
            How It <span className="text-[#2596be]">Works</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Our 72-hour enterprise deployment process transitions your business from manual content struggle and leaky phone lines to an automated high-velocity growth engine.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Workflow;
            return (
              <div
                key={step.number}
                id={`how-it-works-step-${step.number}`}
                className="bg-white rounded-xl border-2 border-slate-200 hover:border-[#2596be] p-6 sm:p-8 flex flex-col justify-between transition-colors group shadow-sm"
              >
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-mono text-slate-300 group-hover:text-[#2596be] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2596be]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase text-[#2596be] mb-1.5 font-bold tracking-wider">
                    {step.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 font-['Space_Grotesk']">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2.5">
                  <div className="text-xs font-mono uppercase text-slate-800 font-bold tracking-wider">
                    Phase Milestones:
                  </div>
                  {step.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2596be] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors cursor-pointer shadow-sm"
          >
            <span>Initiate 72-Hour Deployment Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
