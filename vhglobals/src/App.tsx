import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ComparisonGrid from './components/ComparisonGrid';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [preselectedDivision, setPreselectedDivision] = useState<string>('full-stack');

  const handleOpenConsultation = (divisionId?: string) => {
    if (divisionId) {
      setPreselectedDivision(divisionId);
    } else {
      setPreselectedDivision('full-stack');
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] flex flex-col font-sans selection:bg-[#2596be]/20 selection:text-[#0a0a0a]">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Headline, Supporting Headline and Division Cards */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectDivision={(id) => handleOpenConsultation(id)}
        />

        {/* Why VHGlobals: 10 Pillars */}
        <WhySection />

        {/* Comparison Grid: Metrics Across Agency Categories */}
        <ComparisonGrid />

        {/* FAQs: 18 Official Inquiries */}
        <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Contact Us: Direct Founder & Agency Details */}
        <ContactSection onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Interactive Consultation Briefing Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedDivision={preselectedDivision}
      />

      {/* Full 7-Clause Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
