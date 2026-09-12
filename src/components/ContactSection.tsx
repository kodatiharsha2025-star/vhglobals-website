import { Phone, Mail, MapPin, Building, CheckCircle2, User, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export default function ContactSection({ onOpenConsultation }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[#2596be] text-xs font-mono uppercase tracking-wider font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2596be]" />
              <span>Direct Communication Channel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-4 font-['Space_Grotesk']">
              Contact <span className="text-[#2596be]">VHGlobals</span>
            </h2>
            <p className="text-base text-slate-700">
              Direct access to our founder and engineering leadership. No automated routing purgatory or delayed ticketing.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Direct Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border-2 border-[#2596be] flex items-center justify-center text-[#2596be] shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#2596be] font-bold">
                      Founder &amp; Managing Director
                    </div>
                    <div className="text-xl font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                      {CONTACT_INFO.fullName}
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm pt-2 font-mono">
                  <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <Building className="w-4 h-4 text-[#2596be] shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Company / Brand</span>
                      <span className="text-[#0a0a0a] font-bold">{CONTACT_INFO.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <Phone className="w-4 h-4 text-[#2596be] shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Direct Phone</span>
                      <a href={`tel:${CONTACT_INFO.phoneNumber}`} className="text-[#0a0a0a] hover:text-[#2596be] font-bold transition-colors">
                        {CONTACT_INFO.phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <Mail className="w-4 h-4 text-[#2596be] shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Direct Email</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2596be] hover:underline font-bold">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#2596be] shrink-0" />
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block">Headquarters</span>
                      <span className="text-slate-800 font-semibold">{CONTACT_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Service Selection & Consultation Action */}
              <div className="bg-slate-50 p-6 sm:p-7 rounded-xl border border-slate-200 space-y-5">
                <div className="text-xs font-mono uppercase text-[#2596be] font-bold">
                  Active Service Retainers
                </div>
                <div className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] leading-snug">
                  {CONTACT_INFO.services}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Engage our dedicated video editing pod or install conversational AI voice agents operating at sub-500ms latency. All infrastructure built sovereignly for your enterprise.
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                    <span>24–48h Video Turnaround Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                    <span>Instant 30-Second Lead Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2596be]" />
                    <span>Strict Confidentiality &amp; Zero Third-Party Sharing</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    id="contact-book-consultation-btn"
                    onClick={onOpenConsultation}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] active:scale-[0.98] transition-colors cursor-pointer shadow-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Book Growth Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
