import { Shield, Globe, PhoneCall, Mail, Phone, Building, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, CALENDLY_URL } from '../data';
import { VHLogo } from './VHLogo';

interface FooterProps {
  onOpenConsultation?: () => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenConsultation, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Direct Contact Column (Company, Contact number, Email) */}
          <div className="md:col-span-5 space-y-5">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 group cursor-pointer bg-transparent border-0 p-0 text-left"
              aria-label="Scroll to top of VHGLOBALS"
            >
              <VHLogo className="w-8 h-8 transition-transform group-hover:scale-105 duration-200" />
              <span className="text-xl font-bold tracking-tight text-[#0a0a0a] font-['Space_Grotesk']">
                VH<span className="text-[#2596be]">GLOBALS</span>
              </span>
            </button>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              High-ticket agency deploying elite short &amp; long-form video editing retainers and custom 24/7 AI voice call agent automation systems.
            </p>

            {/* Official Contact Info: Company, Contact number, Email */}
            <div className="text-xs font-mono text-slate-800 space-y-2 pt-1">
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-500 uppercase tracking-wider text-[11px]">Company:</span>
                <span className="text-[#0a0a0a] font-bold">{CONTACT_INFO.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-500 uppercase tracking-wider text-[11px]">Contact number:</span>
                <a href={`tel:${CONTACT_INFO.phoneNumber}`} className="text-slate-900 hover:text-[#2596be] font-bold transition-colors">
                  {CONTACT_INFO.phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-500 uppercase tracking-wider text-[11px]">Email:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2596be] hover:underline font-bold">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-book-consultation-btn"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2596be] font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.href === '#privacy' ? (e) => { e.preventDefault(); onOpenPrivacy(); } : undefined}
                    className="hover:text-[#0a0a0a] hover:text-[#2596be] transition-colors block text-slate-700 hover:bg-slate-50 p-1 rounded font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Retainers Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2596be] font-bold">
              Service Offerings
            </div>
            <div className="space-y-3 text-xs">
              <a
                href="https://video.vhglobals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#2596be] transition-colors group"
              >
                <div className="font-semibold text-slate-900 group-hover:text-[#2596be] flex items-center justify-between">
                  <span>Video Editing Retainers</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#2596be]" />
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  High-retention shorts, documentaries, 3D GeoLayers, and SaaS explainers.
                </div>
              </a>

              <a
                href="https://ai.vhglobals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#2596be] transition-colors group"
              >
                <div className="font-semibold text-slate-900 group-hover:text-[#2596be] flex items-center justify-between">
                  <span>24/7 AI Voice Call Agents</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#2596be]" />
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  Sub-500ms conversational phone agents qualifying and booking leads around the clock.
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#2596be]" />
            <span>&copy; 2026 VHGLOBALS. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#0a0a0a] transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Shield className="w-3.5 h-3.5 text-[#2596be]" />
              <span>Privacy Policy</span>
            </button>
            <a href="#contact" className="hover:text-[#0a0a0a] transition-colors font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
