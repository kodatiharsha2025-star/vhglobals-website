import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Film, Bot, Layers, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Calendar, ExternalLink, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, CALENDLY_URL } from '../data';
import CalendlyWidget from './CalendlyWidget';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDivision?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  preselectedDivision,
}: ConsultationModalProps) {
  const [activeTab, setActiveTab] = useState<'calendly' | 'form'>('calendly');
  const [division, setDivision] = useState<string>(
    preselectedDivision || 'full-stack'
  );
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    monthlyVolume: '$50k - $200k/mo',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div
        id="consultation-modal"
        className="relative bg-white border-2 border-slate-300 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="bg-slate-50 p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div>
            <div className="text-[11px] font-mono uppercase text-[#2596be] font-bold tracking-wider mb-1">
              VHGLOBALS Consultation Booking
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] font-['Space_Grotesk']">
              Book Executive Consultation
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 hover:text-black bg-white border border-slate-300 transition-colors shadow-xs"
            >
              <span>Open in Calendly</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2596be]" />
            </a>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-lg text-slate-500 hover:text-[#0a0a0a] hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-slate-200 px-5 sm:px-6 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('calendly')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'calendly'
                ? 'border-[#2596be] text-[#2596be]'
                : 'border-transparent text-slate-600 hover:text-[#0a0a0a]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule via Calendly</span>
            <span className="text-[10px] font-mono bg-[#2596be]/10 text-[#2596be] px-1.5 py-0.5 rounded font-bold">LIVE</span>
          </button>

          <button
            onClick={() => setActiveTab('form')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'form'
                ? 'border-[#2596be] text-[#2596be]'
                : 'border-transparent text-slate-600 hover:text-[#0a0a0a]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Written Project Brief</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 bg-white overflow-y-auto flex-1">
          {activeTab === 'calendly' ? (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#2596be] shrink-0" />
                  <span>Direct 30-min strategy session with our executive leadership team.</span>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#2596be] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>calendly.com/vhstudios-global/30min</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Calendly Inline Widget */}
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <CalendlyWidget url={CALENDLY_URL} />
              </div>
            </div>
          ) : isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-[#2596be] text-[#2596be] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                Consultation Request Received
              </h4>
              <p className="text-sm sm:text-base text-slate-700 max-w-md mx-auto leading-relaxed">
                Thank you. Our engineering and creative pod will review your brief and contact you promptly to confirm your consultation.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs font-mono space-y-2 text-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">Company:</span>
                  <span className="text-[#0a0a0a] font-bold">{CONTACT_INFO.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Track:</span>
                  <span className="text-[#2596be] font-bold uppercase">{division}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Confidentiality:</span>
                  <span className="text-[#0a0a0a] font-bold">Strict NDA Guaranteed</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors cursor-pointer"
                >
                  Return to VHGLOBALS Hub
                </button>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:text-black bg-white border border-slate-300 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Direct Email: {CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Direct Contact Banner */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-800">
                  <Phone className="w-3.5 h-3.5 text-[#2596be]" />
                  <span>Contact Number: <strong className="text-[#0a0a0a]">{CONTACT_INFO.phoneNumber}</strong></span>
                </div>
                <span className="text-[#2596be] font-semibold">{CONTACT_INFO.company}</span>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold">
                  Service Selection *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDivision('video')}
                    className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${
                      division === 'video'
                        ? 'bg-white border-[#2596be] text-[#0a0a0a] shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Film className="w-4 h-4 text-[#2596be]" />
                      <span className="text-xs font-bold font-['Space_Grotesk'] text-[#0a0a0a]">Video Retainers</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">High-Retention Content</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDivision('ai-voice')}
                    className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${
                      division === 'ai-voice'
                        ? 'bg-white border-[#2596be] text-[#0a0a0a] shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4 text-[#2596be]" />
                      <span className="text-xs font-bold font-['Space_Grotesk'] text-[#0a0a0a]">AI Voice Agent</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">24/7 Automated Calling</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDivision('full-stack')}
                    className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${
                      division === 'full-stack'
                        ? 'bg-white border-[#2596be] text-[#0a0a0a] shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-[#2596be]" />
                      <span className="text-xs font-bold font-['Space_Grotesk'] text-[#0a0a0a]">Dual System</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">Video + Voice</div>
                  </button>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border-2 border-slate-200 focus:border-[#2596be] rounded-lg px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder:text-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border-2 border-slate-200 focus:border-[#2596be] rounded-lg px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder:text-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 or +91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border-2 border-slate-200 focus:border-[#2596be] rounded-lg px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder:text-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                    Company / Channel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company name or URL"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border-2 border-slate-200 focus:border-[#2596be] rounded-lg px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder:text-slate-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-semibold">
                  Project Brief or Growth Objective
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your content or voice automation requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border-2 border-slate-200 focus:border-[#2596be] rounded-lg px-3.5 py-2.5 text-sm text-[#0a0a0a] placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Confidentiality Pill */}
              <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#2596be] shrink-0" />
                <span>Zero third-party sharing. All communications and project assets are strictly confidential.</span>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded-lg text-sm text-slate-600 hover:text-black transition-colors cursor-pointer font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] disabled:opacity-50 transition-colors shadow-sm cursor-pointer flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Dispatching Request...</span>
                  ) : (
                    <>
                      <span>Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
