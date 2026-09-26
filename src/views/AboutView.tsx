import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  GraduationCap, 
  Heart, 
  Atom, 
  ArrowUpRight, 
  Target, 
  Building2 
} from 'lucide-react';
import { usePageScrollAnimations } from '../hooks/usePageScrollAnimations';
import { TRUST_CONFIG, TIMELINE_MILESTONES } from '../data/trustData';
import { AboutFAQAccordion } from '../components/AboutFAQAccordion';

interface AboutViewProps {
  onOpenEnquiryModal: (service?: string) => void;
  onSelectTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenEnquiryModal,
  onSelectTab,
}) => {
  const containerRef = usePageScrollAnimations();

  return (
    <div ref={containerRef} className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* 1. HERO / ORGANIZATION INTRODUCTION */}
      <section data-gsap="heading" className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
          <Building2 className="w-3.5 h-3.5" />
          <span>About Edu Care Academy Trust</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Nurturing Leaders.{' '}
          <span className="text-gradient-cyan block sm:inline">Advancing Society.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Established in <strong>2018 in Coimbatore, Tamil Nadu</strong>, Edu Care Academy Trust is dedicated to youth empowerment, higher learning, career guidance, skill enhancement, and community welfare.
        </p>
        <div className="pt-2 text-sm text-cyan-300 font-medium italic">
          {TRUST_CONFIG.tagline}
        </div>
      </section>

      {/* 2. LEADERSHIP & ORIGIN */}
      <section data-gsap="panel" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/60 border border-slate-850 rounded-2xl p-8 sm:p-12">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
            Origin &amp; Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Rooted in Coimbatore, Serving Tamil Nadu Since 2018
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Edu Care Academy Trust was born out of an urgent need to empower youth from diverse backgrounds with scientific career orientation, modern educational frameworks, and self-confidence. 
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Under the guidance of <strong>Dr. Y. Benazir</strong>, the Trust brings together educators, academic researchers, and social volunteers to foster leadership, higher learning, and public service among students across Tamil Nadu.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block">Established</span>
              <span className="text-xl font-bold font-mono text-cyan-400">2018</span>
              <span className="text-[11px] text-slate-400">Coimbatore</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs text-slate-400 block">Focus State</span>
              <span className="text-xl font-bold text-white">Tamil Nadu</span>
              <span className="text-[11px] text-slate-400">Youth &amp; Public Good</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-800/40 w-full space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Our Foundational Mandate</h3>
                <p className="text-xs text-slate-400">Integrity, Empathy &amp; Excellence</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We operate on the conviction that every student, regardless of their socio-economic origin, can emerge as an inspiring future leader when guided with academic rigor and collective unity.
            </p>
            <div className="pt-2 border-t border-slate-800 text-xs text-cyan-400 font-mono">
              Dr. Y. Benazir, Founder &amp; Chairman
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. OUR MISSION & VISION */}
      <section className="space-y-8">
        <div data-gsap="heading" className="text-center space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl font-bold text-white">
            Our Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div data-gsap="panel" className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              OUR MISSION
            </div>
            <blockquote className="text-lg font-medium text-white italic leading-relaxed">
              “{TRUST_CONFIG.mission}”
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
              Promoting educational excellence, personality development, and community service while nurturing socially responsible leaders.
            </p>
          </div>

          {/* Vision */}
          <div data-gsap="panel" className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              OUR VISION
            </div>
            <blockquote className="text-lg font-medium text-white italic leading-relaxed">
              “{TRUST_CONFIG.vision}”
            </blockquote>
            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
              Nurturing young minds to identify dream careers and become inspiring future leaders through social mobility, academic rigor, and collective unity.
            </p>
          </div>
        </div>
      </section>

      {/* 5 & 6. STRATEGIC FOCUS & CORE DOMAINS */}
      <section className="space-y-10">
        <div data-gsap="heading" className="text-center space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
            Institutional Matrix
          </span>
          <h2 className="text-3xl font-bold text-white">
            Strategic Focus &amp; Core Domains
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            The Trust operates across integrated pedagogical and social action domains.
          </p>
        </div>

        <div data-gsap="card-group" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Personality Development & Skill Enhancement',
              desc: 'Structured training modules, personal counseling, self-monitoring strategies, and communication workshops for youth.',
              icon: Sparkles,
            },
            {
              title: 'Career Counseling & Assistance',
              desc: 'Guidance programs designed to help students identify professional opportunities and improve industry alignment.',
              icon: Compass,
            },
            {
              title: 'Academic & Research Support',
              desc: 'Modern learning approaches, research guidance, and specialized mentorship for higher education pathways.',
              icon: GraduationCap,
            },
            {
              title: 'Youth Empowerment',
              desc: 'Statewide talent platforms like Tamil Nadu’s Got Talent recognizing singing, dancing, drama, and innovations.',
              icon: Award,
            },
            {
              title: 'Scientific & Technical Mentorship',
              desc: 'Kalam’s Dream initiative dedicated to mentoring and training students aspiring towards scientific research.',
              icon: Atom,
            },
            {
              title: 'Community Welfare & Relief',
              desc: 'Grassroots hunger relief via Pasiyatral and statewide book redistribution campaigns through Puthaga Pasi.',
              icon: Heart,
            },
          ].map((domain, idx) => {
            const IconComponent = domain.icon;
            return (
              <div data-gsap="card" key={idx} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. FOUNDER & CHAIRMAN SPOTLIGHT */}
      <section data-gsap="panel" className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-2xl bg-slate-950 border border-cyan-800/60 p-4 flex flex-col items-center justify-center text-center shadow-lg">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-3">
                <GraduationCap className="w-10 h-10 text-cyan-200" />
              </div>
              <h3 className="text-base font-bold text-white">{TRUST_CONFIG.founder.name}</h3>
              <p className="text-xs text-cyan-400 font-medium">{TRUST_CONFIG.founder.role}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
              Founding Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Dr. Y. Benazir — Founder &amp; Chairman
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dr. Y. Benazir leads Edu Care Academy Trust with a strong commitment to youth empowerment and educational accessibility. Her guidance brings academic discipline, cognitive development frameworks, and career counseling to students across Tamil Nadu.
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Founder Credentials:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {TRUST_CONFIG.founder.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiryModal('Consultation with Founder & Team')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
              >
                <span>Request Leadership Engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR APPROACH */}
      <section className="space-y-8">
        <div data-gsap="heading" className="text-center space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
            Methodology
          </span>
          <h2 className="text-3xl font-bold text-white">
            Our Approach
          </h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            How Edu Care Academy Trust transforms youth potential into leadership and community value.
          </p>
        </div>

        <div data-gsap="card-group" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div data-gsap="card" className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-2xl font-bold font-mono text-cyan-400">1</span>
            <h3 className="text-base font-bold text-white">Identify &amp; Assess</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Assisting students in uncovering natural inclinations, career interests, and behavioral strengths through personalized counseling and NLP-informed self-reflection.
            </p>
          </div>

          <div data-gsap="card" className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-2xl font-bold font-mono text-cyan-400">2</span>
            <h3 className="text-base font-bold text-white">Nurture &amp; Equip</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Conducting structured personality workshops, academic research orientation, and scientific mentorship to build industry readiness and academic rigor.
            </p>
          </div>

          <div data-gsap="card" className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-2xl font-bold font-mono text-cyan-400">3</span>
            <h3 className="text-base font-bold text-white">Serve &amp; Inspire</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engaging students in community initiatives (Pasiyatral food drives and Puthaga Pasi libraries) to instill social responsibility and compassionate leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 9. TIMELINE / JOURNEY: 2018 -> PRESENT */}
      <section className="space-y-10">
        <div data-gsap="heading" className="text-center space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
            Journey &amp; Milestones
          </span>
          <h2 className="text-3xl font-bold text-white">
            Organizational Journey: 2018 → Present
          </h2>
          <p className="text-xs text-slate-400">
            Chronology of trust formation, programs, and ongoing community service.
          </p>
        </div>

        <div data-gsap="card-group" className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10">
          {TIMELINE_MILESTONES.map((milestone, idx) => (
            <div data-gsap="card" key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

              {/* Year indicator */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-sm font-bold font-mono text-cyan-400 sm:text-right sm:w-24">
                {milestone.year}
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl group-hover:border-slate-700 transition-colors space-y-2">
                <h3 className="text-base font-bold text-white">
                  {milestone.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <AboutFAQAccordion onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};
