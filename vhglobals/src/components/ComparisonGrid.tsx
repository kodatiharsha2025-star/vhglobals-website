import { Check, X } from 'lucide-react';
import { COMPARISON_ROWS } from '../data';

export default function ComparisonGrid() {
  return (
    <section id="compare" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-5 font-['Space_Grotesk']">
            Compare The <span className="text-[#2596be]">Difference</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            See how VHGLOBALS combines dual-pillar scaling infrastructure to eliminate fragmented vendors, slow delivery, and lost leads.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-mono uppercase tracking-wider">
                <th className="p-4 sm:p-5 text-slate-800 font-bold w-2/5">
                  Evaluation Metrics
                </th>
                <th className="p-4 sm:p-5 text-[#2596be] font-bold bg-blue-50/50 text-center w-1/5 border-x border-slate-200">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2596be]" />
                    <span>VHGLOBALS</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-slate-700 font-semibold text-center w-1/5 border-r border-slate-200">
                  Other Video Editing Agency
                </th>
                <th className="p-4 sm:p-5 text-slate-700 font-semibold text-center w-1/5">
                  Other AI Voice Call Agency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={row.metric}
                  id={`compare-row-${idx + 1}`}
                  className="hover:bg-slate-50/60 transition-colors"
                >
                  {/* Metric Name */}
                  <td className="p-4 sm:p-5 font-medium text-slate-800 text-xs sm:text-sm">
                    {row.metric}
                  </td>

                  {/* VHGlobals Column */}
                  <td className="p-4 sm:p-5 text-center bg-blue-50/30 border-x border-slate-200">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2596be] text-white">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  </td>

                  {/* Other Video Agency Column */}
                  <td className="p-4 sm:p-5 text-center border-r border-slate-200">
                    {row.otherVideoAgency ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 border border-rose-200 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    )}
                  </td>

                  {/* Other AI Voice Agency Column */}
                  <td className="p-4 sm:p-5 text-center">
                    {row.otherVoiceAgency ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-slate-700">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 border border-rose-200 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sub-label */}
        <div className="mt-6 text-center text-xs text-slate-600 font-mono">
          Single unified partner for high-ticket video retention retainers and sub-500ms AI voice automation.
        </div>
      </div>
    </section>
  );
}
