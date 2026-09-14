import { ExternalLink, Film, Bot, CheckCircle2 } from 'lucide-react';
import { DIVISIONS } from '../data';

interface DivisionCardsProps {
  onSelectDivision?: (divisionId: string) => void;
}

export default function DivisionCards({ onSelectDivision }: DivisionCardsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 sm:mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {DIVISIONS.map((division) => {
          const isVideo = division.id === 'video';
          return (
            <div
              key={division.id}
              id={`division-card-${division.id}`}
              className="bg-white rounded-xl border-2 border-slate-200 hover:border-[#2596be] transition-colors p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-start mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#2596be] font-bold bg-white px-3 py-1 rounded-md border border-[#2596be]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2596be]" />
                    {division.tag}
                  </span>
                </div>

                {/* Title with Icon */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be] shrink-0">
                    {isVideo ? <Film className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] tracking-tight font-['Space_Grotesk']">
                    {division.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {division.description}
                </p>

                {/* Infrastructure Specifications */}
                <div className="space-y-3 mb-8 bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <div className="text-xs uppercase tracking-wider font-mono text-slate-800 font-bold">
                    Infrastructure Specifications:
                  </div>
                  {division.specs.map((spec) => (
                    <div key={spec} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#2596be] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-200">
                <a
                  href={division.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`btn-route-${division.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors shadow-sm group/btn cursor-pointer"
                >
                  <span>{division.ctaText}</span>
                  <ExternalLink className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
