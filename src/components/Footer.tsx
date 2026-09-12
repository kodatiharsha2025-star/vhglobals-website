import { ArrowUpRight, Shield, Globe, PhoneCall, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../data';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenConsultation, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Founder Column */}
          <div className="md:col-span-4 space-y-4">
            <a href="https://vhglobals.com" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be] font-bold text-sm">
                <span className="font-mono">VH</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0a0a0a] font-['Space_Grotesk']">
                VH<span className="text-[#2596be]">Globals</span>
              </span>
            </a>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              High-ticket remote agency deploying elite short &amp; long-form video editing retainers and custom 24/7 AI voice call agent automation systems.
            </p>

            <div className="text-xs font-mono text-slate-800 space-y-1.5 pt-1">
              <div>Founder: <span className="text-[#0a0a0a] font-bold">{CONTACT_INFO.fullName}</span></div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-700">{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#2596be]" />
                <a href={`tel:${CONTACT_INFO.phoneNumber}`} className="text-slate-900 hover:text-[#2596be] font-semibold transition-colors">
                  {CONTACT_INFO.phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#2596be]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2596be] hover:underline font-bold">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

          {/* Subdomain Ecosystem Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2596be] font-bold">
              Subdomain Ecosystem
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CONTACT_INFO.subdomains.map((sub) => (
                <a
                  key={sub}
                  href={`https://${sub}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0a0a0a] hover:border-[#2596be] transition-colors flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 group text-slate-800"
                >
                  <span className="font-mono text-[11px] truncate font-medium">{sub}</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#2596be] transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Hub Directory Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2596be] font-bold">
              Infrastructure Hub
            </div>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.href === '#privacy' ? (e) => { e.preventDefault(); onOpenPrivacy(); } : undefined}
                    className="hover:text-[#0a0a0a] transition-colors flex items-center justify-between group text-slate-700 hover:bg-slate-50 p-1 rounded"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="text-[11px] font-mono text-slate-500 group-hover:text-[#2596be]">
                      {link.subdomain}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-[11px]">
                <Shield className="w-3.5 h-3.5 text-[#2596be]" />
                <span>Zero Tracking Cookies &amp; No Pixels</span>
              </div>
              <div className="text-[11px] text-slate-600">
                100% Confidential Data Processing &amp; Strict NDAs
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#2596be]" />
            <span>&copy; 2026 VHGlobals (vhglobals.com). Founder: Kodati Harsha Vardhan. All rights reserved.</span>
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
            <a href="https://docs.vhglobals.com" target="_blank" rel="noreferrer" className="hover:text-[#0a0a0a] transition-colors font-medium">
              Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
