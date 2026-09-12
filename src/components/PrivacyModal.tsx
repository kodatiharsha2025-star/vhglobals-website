import { X, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        id="privacy-policy-modal"
        className="relative bg-white border-2 border-slate-300 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[88vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#2596be] font-bold tracking-wider">
                Legal &amp; Compliance
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] font-['Space_Grotesk']">
                VHGlobals Privacy Policy
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-black hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Policy Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed font-sans bg-white">
          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">1.</span> Scope
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm">
              This Privacy Policy explains how <strong>Kodati Harsha Vardhan</strong> operating <strong>VHGlobals</strong> collects, uses, and protects information when you use <span className="text-[#0a0a0a] font-mono font-bold">vhglobals.com</span> and all associated subdomains:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {CONTACT_INFO.subdomains.map((sub) => (
                <span
                  key={sub}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-[#2596be] border border-slate-200 font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-2 border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">2.</span> Information We Collect
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-700">
              <li>
                <strong className="text-[#0a0a0a]">Direct Form Submissions:</strong> We collect contact details, names, emails, and project briefs that you voluntarily provide when booking a consultation or reaching out to us.
              </li>
              <li>
                <strong className="text-[#0a0a0a]">Client Operational Data:</strong> Media assets, brand guidelines, and communication notes provided strictly for fulfilling our video editing retainers or configuring your AI voice call agent workflows.
              </li>
              <li>
                <strong className="text-[#0a0a0a]">No Cookies or Tracking:</strong> We do not install tracking cookies, third-party analytics trackers, or hidden tracking pixels on our websites.
              </li>
              <li>
                <strong className="text-[#0a0a0a]">No Authentication Tracking:</strong> Since we do not use public user account sign-ins or registration portals on the public marketing hub, we do not log login session data from visitors.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2 border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">3.</span> How We Use Information
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm list-disc pl-5 text-slate-700">
              <li>To respond to your project inquiries, deliver video editing deliverables, and set up your automated AI voice call systems.</li>
              <li>To communicate regarding active agency retainers and consultations.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-2 border-t border-slate-200 pt-5 bg-slate-50 p-4 rounded-xl border">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">4.</span> Strict Data Confidentiality &amp; Zero Third-Party Sharing
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong className="text-[#0a0a0a]">Absolute Confidentiality:</strong> All client materials, video files, transcripts, and proprietary communications remain strictly confidential between you and VHGlobals.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong className="text-[#0a0a0a]">Zero Third-Party Sharing:</strong> We never sell, rent, trade, or share your data or client information with any third parties under any circumstances. Data is processed solely to deliver the specific services you have hired us to perform.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">5.</span> Data Security
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              We implement industry-standard administrative and encrypted cloud infrastructure security protocols to protect all communications and project data against unauthorized access or disclosure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2 border-t border-slate-200 pt-5">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">6.</span> Your Rights &amp; Data Retention
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              You retain full ownership of your data and assets. You may request immediate asset deletion or data export upon retainer completion or inquiry resolution.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 border-t border-slate-200 pt-5 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h4 className="text-base font-bold text-[#0a0a0a] font-['Space_Grotesk'] flex items-center gap-2">
              <span className="text-[#2596be] font-mono">7.</span> Governing Jurisdiction &amp; Contact
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              Because VHGlobals operates as a remote agency based out of Hyderabad, Telangana, India, any privacy-related inquiries or requests to exercise your data rights can be directed instantly to our founder:
            </p>
            <div className="text-xs font-mono space-y-1.5 pt-2 text-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Operator:</span>
                <span className="text-[#0a0a0a] font-bold">{CONTACT_INFO.fullName}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-500">Location:</span>
                <span className="text-[#0a0a0a] font-semibold">{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2596be]" />
                <span className="text-slate-500">Contact Email:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#2596be] hover:underline font-bold">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 px-6 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-600 font-mono flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#2596be]" />
            <span>privacy.vhglobals.com</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors cursor-pointer shadow-sm"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
