import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, Shield } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenPrivacy }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="https://vhglobals.com"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#2596be] rounded-md px-1"
          >
            <div className="w-9 h-9 rounded-lg bg-white border-2 border-[#2596be] flex items-center justify-center text-[#2596be] font-bold text-sm transition-colors">
              <span className="font-mono">VH</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0a0a0a] font-['Space_Grotesk']">
              VH<span className="text-[#2596be]">Globals</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              if (link.href === '#privacy') {
                return (
                  <button
                    key={link.label}
                    onClick={onOpenPrivacy}
                    className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{link.label}</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  title={`Visit ${link.subdomain}`}
                  className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0a0a0a] hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                  {link.isExternal && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2596be] transition-colors" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-book-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] active:scale-[0.98] transition-all cursor-pointer shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors"
            >
              Consult
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-[#0a0a0a] hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2596be]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#2596be] px-3 pt-1 font-semibold">
            Global Ecosystem Navigation
          </div>
          {NAV_LINKS.map((link) => {
            if (link.href === '#privacy') {
              return (
                <button
                  key={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrivacy();
                  }}
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors text-left"
                >
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#2596be]" />
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {link.subdomain}
                  </span>
                </button>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  {link.subdomain}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2596be]" />
                </span>
              </a>
            );
          })}
          <div className="pt-3">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white bg-[#2596be] hover:bg-[#1f82a6] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
