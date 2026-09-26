import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, Heart } from 'lucide-react';
import { TRUST_CONFIG, buildWhatsAppUrl } from '../data/trustData';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenEnquiryModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenEnquiryModal,
}) => {
  const handleNav = (id: string) => {
    onSelectTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Col 1: Organization Identity & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 p-[1px] shadow-sm shadow-cyan-500/30">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                  EC
                </div>
              </div>
              <h2 className="text-base font-bold tracking-tight text-white">
                EDU CARE ACADEMY TRUST
              </h2>
            </div>
            
            <p className="text-sm font-medium text-cyan-300/90 italic">
              {TRUST_CONFIG.tagline}
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 2018 in Coimbatore, Tamil Nadu. Dedicated to fostering educational excellence, career guidance, skill enhancement, youth leadership, and community service.
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-400">Founder &amp; Chairman: </span>
              <span className="text-xs font-semibold text-slate-200">
                {TRUST_CONFIG.founder.name}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Our Services' },
                { id: 'gallery', label: 'Initiatives Gallery' },
                { id: 'contact', label: 'Contact & Enquiries' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:underline text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Focus Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'Career Counseling & Assistance',
                'Personality Development & NLP',
                'Academic & Research Support',
                'Youth Empowerment & Talent',
                'Community Welfare & Pasiyatral',
              ].map((area, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onSelectTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-cyan-400 transition-colors text-left"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Engagement */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-200 mb-4">
              Trust Secretariat
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{TRUST_CONFIG.location}, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`mailto:${TRUST_CONFIG.displayEmail}`} className="hover:text-white transition-colors">
                {TRUST_CONFIG.displayEmail}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`tel:${TRUST_CONFIG.displayPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {TRUST_CONFIG.displayPhone}
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenEnquiryModal()}
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-colors"
              >
                <span>Request a Quote / Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Edu Care Academy Trust. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Coimbatore, Tamil Nadu</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018</span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-400">Non-Profit Trust</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
