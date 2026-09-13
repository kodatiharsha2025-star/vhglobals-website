import { useEffect, useRef } from 'react';
import { ExternalLink, Calendar, ShieldCheck, Clock } from 'lucide-react';
import { CALENDLY_URL } from '../data';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

interface CalendlyWidgetProps {
  url?: string;
  className?: string;
}

export default function CalendlyWidget({
  url = CALENDLY_URL,
  className = '',
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Calendly script is already present
    const existingScript = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
    
    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        // Clear any existing children to prevent duplicate iframes on re-renders
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.body.appendChild(script);
    } else {
      // If script is already in document
      if (window.Calendly) {
        initWidget();
      } else {
        existingScript.addEventListener('load', initWidget);
      }
    }
  }, [url]);

  return (
    <div className={`w-full bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm ${className}`}>
      {/* Widget Header */}
      <div className="bg-slate-50 p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be] shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-[#2596be]">Live Booking Engine</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Slots Open
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0a0a0a] font-['Space_Grotesk']">
              Schedule Your 30-Min Executive Consultation
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:text-[#0a0a0a] bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs"
          >
            <span>Open in Full Window</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#2596be]" />
          </a>
        </div>
      </div>

      {/* Meta trust row */}
      <div className="bg-white px-4 sm:px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-mono">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#2596be]" />
          <span>30 Minutes Duration</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2596be]" />
          <span>Strict NDA &amp; Direct Founder Session</span>
        </div>
      </div>

      {/* Calendly Inline Widget Container */}
      <div className="p-2 sm:p-4 bg-white">
        <div
          ref={containerRef}
          className="calendly-inline-widget w-full rounded-xl overflow-hidden"
          data-url={url}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>

      {/* Direct Fallback link */}
      <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 text-center text-xs text-slate-600">
        Prefer direct link?{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2596be] hover:underline font-mono font-bold"
        >
          {url}
        </a>
      </div>
    </div>
  );
}
