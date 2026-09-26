import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenEnquiryModal: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenEnquiryModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single Brand Element Wordmark (Strict Top Bar Contract) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
            aria-label="Edu Care Academy Trust Home"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 p-[1px] shadow-sm shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                  EC
                </div>
              </div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                EDU CARE ACADEMY TRUST
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text links with active indicator) */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-900/30 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md whitespace-nowrap"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-xl px-4 pt-4 pb-6 transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-slate-900 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-sm"
              >
                <span>Request a Quote / Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-200" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
