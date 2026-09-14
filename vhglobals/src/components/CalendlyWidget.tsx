import { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
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

  // Append Calendly parameters to hide event details (duration '30 min', host avatar, etc.)
  const getEmbedUrl = (rawUrl: string) => {
    try {
      const parsed = new URL(rawUrl);
      parsed.searchParams.set('hide_event_type_details', '1');
      parsed.searchParams.set('hide_landing_page_details', '1');
      parsed.searchParams.set('primary_color', '2596be');
      return parsed.toString();
    } catch {
      const sep = rawUrl.includes('?') ? '&' : '?';
      return `${rawUrl}${sep}hide_event_type_details=1&hide_landing_page_details=1&primary_color=2596be`;
    }
  };

  const embedUrl = getEmbedUrl(url);

  useEffect(() => {
    // Check if Calendly script is already present
    const existingScript = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]');
    
    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        // Clear any existing children to prevent duplicate iframes on re-renders
        containerRef.current.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: embedUrl,
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
  }, [embedUrl]);

  return (
    <div className={`w-full bg-white rounded-2xl border-2 border-slate-200 overflow-hidden shadow-sm ${className}`}>
      {/* Widget Header */}
      <div className="bg-slate-50 p-5 sm:p-6 border-b border-slate-200">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be] shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0a0a0a] font-['Space_Grotesk']">
              Book a Strategy Session
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Choose a date and time directly on our live calendar. Synchronized across global time zones.
            </p>
          </div>
        </div>
      </div>

      {/* Calendly Inline Widget Container */}
      <div className="p-2 sm:p-4 bg-white">
        <div
          ref={containerRef}
          className="calendly-inline-widget w-full rounded-xl overflow-hidden"
          data-url={embedUrl}
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
          calendly.com/vhstudios-global
        </a>
      </div>
    </div>
  );
}
