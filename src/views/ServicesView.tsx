import React, { useState } from 'react';
import { 
  UserCheck, 
  Compass, 
  BookOpen, 
  Sparkles, 
  Atom, 
  HeartHandshake, 
  Check, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { usePageScrollAnimations } from '../hooks/usePageScrollAnimations';
import { ALL_SERVICES, buildWhatsAppUrl } from '../data/trustData';

interface ServicesViewProps {
  onOpenEnquiryModal: (serviceTitle?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenEnquiryModal,
}) => {
  const containerRef = usePageScrollAnimations();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-emerald-400" />;
    }
  };

  const toggleLearnMore = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleEnquireWhatsApp = (serviceTitle: string, customMessage: string) => {
    const url = buildWhatsAppUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={containerRef} className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div data-gsap="heading" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
          Our Programs &amp; Initiatives
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive Services for Youth, Academia &amp; Society
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          From personalized career guidance and NLP personality workshops to academic research mentorship and community social drives.
        </p>
      </div>

      {/* Services Grid */}
      <div data-gsap="card-group" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_SERVICES.map((service) => {
          const isExpanded = expandedId === service.id;
          return (
            <div
              data-gsap="card"
              key={service.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 p-7 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {service.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Points / Curriculum */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Key Focus Areas:
                  </span>
                  <ul className="space-y-2">
                    {service.points.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable "Learn More" Detail */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300 animate-in fade-in duration-200">
                    {service.points.slice(3).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                    <div className="p-3 bg-slate-950 rounded-lg text-slate-400 text-[11px] leading-relaxed mt-2 border border-slate-850">
                      Offered by Edu Care Academy Trust, Coimbatore. Led with certified frameworks and student-centric mentoring methodologies.
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleLearnMore(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onOpenEnquiryModal(service.title)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Online Form
                  </button>
                </div>

                {/* Enquire Now Button (Strictly opens WhatsApp with pre-filled service message) */}
                <button
                  onClick={() => handleEnquireWhatsApp(service.title, service.whatsappMessage)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-sm shadow-emerald-950 hover:shadow-emerald-500/20 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire Now (WhatsApp)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-200" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Trust Guarantee / Engagement Note */}
      <div data-gsap="panel" className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 text-center max-w-4xl mx-auto space-y-3">
        <div className="w-10 h-10 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-white">Need Customized Academic or Institutional Guidance?</h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto">
          We also conduct structured institutional workshops for colleges, schools, and youth organizations across Tamil Nadu. Reach out directly to discuss collaborative programs.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenEnquiryModal('Institutional Workshop')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            <span>Request Institutional Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
