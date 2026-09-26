import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Award, 
  Heart, 
  BookOpen, 
  Mic, 
  Atom, 
  MessageSquareText, 
  Phone, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Hero3DCanvas } from '../components/Hero3DCanvas';
import { Parallax3DTilt } from '../components/Parallax3DTilt';
import { SuccessStoriesCarousel } from '../components/SuccessStoriesCarousel';
import { usePageScrollAnimations } from '../hooks/usePageScrollAnimations';
import { 
  TRUST_CONFIG, 
  CORE_FOCUS_AREAS, 
  SOCIAL_INITIATIVES, 
  buildWhatsAppUrl 
} from '../data/trustData';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenEnquiryModal: (service?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenEnquiryModal,
}) => {
  const containerRef = usePageScrollAnimations();

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION WITH 3D CANVAS & AMBIENT GLOW */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        {/* Interactive 3D Canvas Background */}
        <Hero3DCanvas />

        {/* Ambient Radial Gradients */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Organization Kicker & Tagline */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold text-cyan-300">Coimbatore, Tamil Nadu</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Est. 2018</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="italic text-slate-300">“Together We Make Difference”</span>
          </div>

          {/* Headline Concept */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              Empowering Young Minds.{' '}
              <span className="block text-gradient-cyan mt-1">
                Building Future Leaders.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {TRUST_CONFIG.supportingText}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onSelectTab('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-400/50 rounded-xl transition-all duration-150 shadow-md group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenEnquiryModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 hover:brightness-110 rounded-xl shadow-lg shadow-cyan-500/25 active:scale-95 transition-all duration-150"
            >
              <span>Request a Quote / Enquire</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-xs text-slate-400 block">Founded In</span>
              <span className="text-xl font-bold text-white font-mono">2018</span>
              <span className="text-[11px] text-cyan-400 block mt-0.5">Coimbatore Roots</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-xs text-slate-400 block">Founder Credentials</span>
              <span className="text-sm font-bold text-white">Ph.D. &amp; NLP</span>
              <span className="text-[11px] text-cyan-400 block mt-0.5">Certified Counselor</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-xs text-slate-400 block">Impact Reach</span>
              <span className="text-sm font-bold text-white">Tamil Nadu</span>
              <span className="text-[11px] text-cyan-400 block mt-0.5">Statewide Programs</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <span className="text-xs text-slate-400 block">Core Social Drives</span>
              <span className="text-sm font-bold text-white">4 Flagship</span>
              <span className="text-[11px] text-cyan-400 block mt-0.5">Relief &amp; Mentorship</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div data-gsap="heading" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              About Edu Care Academy Trust
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Dedicated Framework for Higher Learning, Career Clarity &amp; Public Good.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Founded in <strong>2018 in Coimbatore, Tamil Nadu</strong>, Edu Care Academy Trust was established to bridge academic rigor with socially conscious leadership. Under the visionary direction of <strong>Dr. Y. Benazir</strong>, the Trust works closely with youth, schools, and university scholars to unlock purposeful career pathways and cultivate emotional intelligence.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Through structured personality training, psychometric career mapping, higher education research facilitation, and grassroots community welfare, we guide aspiring students to become compassionate leaders of change.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  onSelectTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          <div data-gsap="panel" className="lg:col-span-5">
            {/* Visual Accent Container */}
            <div className="relative rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-850 border border-slate-700/80 p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Institutional Pillar</span>
                <span className="text-xs font-mono text-cyan-400">Coimbatore · TN</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Youth Empowerment</h3>
                    <p className="text-xs text-slate-400">Fostering resilience, confidence, and public speaking in emerging student cohorts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Scientific Mentorship</h3>
                    <p className="text-xs text-slate-400">Instilling technical curiosity and research-oriented development inspired by Kalam's Dream.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">Direct Community Relief</h3>
                    <p className="text-xs text-slate-400">Pasiyatral hunger drives and Puthaga Pasi community book redistribution campaigns.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Official Tagline</span>
                  <span className="text-sm font-bold text-white italic">{TRUST_CONFIG.tagline}</span>
                </div>
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE FOCUS AREAS (REUSABLE 3D PARALLAX TILT CARDS + GSAP ENTRANCE ANIMATION) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div data-gsap="heading" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Primary Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Core Focus Areas
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Targeted domains crafted to transform academic potential into enduring personal and professional achievement.
          </p>
        </div>

        <div data-gsap="card-group" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_FOCUS_AREAS.map((item) => (
            <div data-gsap="card" key={item.number} className="h-full">
              <Parallax3DTilt 
                maxTilt={14}
                scaleOnHover={1.03}
                glowColor={item.number === '01' ? 'rgba(6, 182, 212, 0.25)' : item.number === '02' ? 'rgba(59, 130, 246, 0.25)' : 'rgba(20, 184, 166, 0.25)'}
                className="group h-full bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-8 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Parallax Layer 1: Floating Number & Icon */}
                    <div 
                      className="flex items-center justify-between"
                      style={{ transform: 'translateZ(32px)' }}
                    >
                      <span className="text-3xl font-extrabold font-mono text-cyan-400/90 drop-shadow-sm">
                        {item.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-cyan-950/70 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-900/30 group-hover:scale-110 transition-transform">
                        {item.number === '01' && <Sparkles className="w-5 h-5" />}
                        {item.number === '02' && <Compass className="w-5 h-5" />}
                        {item.number === '03' && <GraduationCap className="w-5 h-5" />}
                      </div>
                    </div>

                    {/* Parallax Layer 2: Heading */}
                    <div style={{ transform: 'translateZ(24px)' }}>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Parallax Layer 3: Description Body */}
                    <div style={{ transform: 'translateZ(14px)' }}>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Parallax Layer 4: Tags and Interactive Action */}
                  <div 
                    className="space-y-4 pt-4 border-t border-slate-800/90"
                    style={{ transform: 'translateZ(28px)' }}
                  >
                    <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-slate-950 px-2.5 py-1 rounded text-slate-300 border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenEnquiryModal(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Enquire for this domain</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Parallax3DTilt>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION & VISION SPLIT SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Box */}
          <div data-gsap="panel" className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-900/40 p-8 sm:p-10 shadow-lg overflow-hidden group hover:border-cyan-500/50 transition-colors">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-cyan-600/10 rounded-full blur-2xl group-hover:bg-cyan-600/20 transition-all pointer-events-none" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                OUR MISSION
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed italic">
                “{TRUST_CONFIG.mission}”
              </blockquote>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Institutional framework anchored in public ethics, pedagogical excellence, and long-term societal progress.
              </p>
            </div>
          </div>

          {/* Vision Box */}
          <div data-gsap="panel" className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-900/40 p-8 sm:p-10 shadow-lg overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all pointer-events-none" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                OUR VISION
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed italic">
                “{TRUST_CONFIG.vision}”
              </blockquote>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Enabling transformative social mobility and unlocking each learner's highest potential through collective unity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SOCIAL IMPACT SECTION ("Making Learning & Service Matter") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div data-gsap="heading" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Grassroots Action
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Making Learning &amp; Service Matter
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Concrete initiatives translating educational vision into immediate community nutrition, literacy access, and scientific mentorship.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('gallery')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors self-start md:self-auto"
          >
            <span>View All Initiatives &amp; Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div data-gsap="card-group" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_INITIATIVES.map((initiative) => (
            <div
              data-gsap="card"
              key={initiative.id}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-850 hover:border-slate-700 p-8 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                      {initiative.id === 'pasiyatral' && <Heart className="w-5 h-5 text-emerald-400" />}
                      {initiative.id === 'puthaga-pasi' && <BookOpen className="w-5 h-5 text-cyan-400" />}
                      {initiative.id === 'tamil-nadu-got-talent' && <Mic className="w-5 h-5 text-amber-400" />}
                      {initiative.id === 'kalams-dream' && <Atom className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {initiative.name}
                      </h3>
                      <p className="text-xs font-medium text-cyan-400">
                        {initiative.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {initiative.badgeText}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {initiative.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {initiative.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {initiative.metric}
                </span>

                <button
                  onClick={() => {
                    const message = `Hello Edu Care Academy Trust, I would like to know more about the ${initiative.name} initiative (${initiative.tagline}).`;
                    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Support / Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SUCCESS STORIES & PROJECT IMPACTS (SWIPER FADE CAROUSEL) */}
      <SuccessStoriesCarousel onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* 7. FOUNDER SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div data-gsap="panel" className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Founder Portrait Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-tr from-cyan-600/20 via-blue-600/10 to-indigo-600/20 p-1 border border-cyan-500/30 shadow-2xl">
                <div className="relative aspect-[3/4] rounded-xl bg-slate-950 overflow-hidden flex flex-col items-center justify-center text-center p-6 space-y-4">
                  
                  {/* Subtle academic background pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Elegant Stylized Portrait Container */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-1 shadow-lg shadow-cyan-500/20">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                      <GraduationCap className="w-14 h-14 text-cyan-300" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {TRUST_CONFIG.founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400">
                      {TRUST_CONFIG.founder.role}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Edu Care Academy Trust, Coimbatore
                    </p>
                  </div>

                  <div className="relative z-10 pt-2 w-full space-y-1.5 border-t border-slate-800/80">
                    {TRUST_CONFIG.founder.credentials.map((cred, idx) => (
                      <div key={idx} className="text-[11px] text-slate-300 bg-slate-900/90 py-1 px-2 rounded border border-slate-800">
                        {cred}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Founder Credentials & Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Leadership Profile
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Meet Our Founder &amp; Chairman
              </h2>

              <div className="text-2xl font-bold text-gradient-cyan">
                {TRUST_CONFIG.founder.name}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Under Dr. Y. Benazir’s leadership since 2018, Edu Care Academy Trust has focused on fostering leadership, higher learning, and public service among students across Tamil Nadu.
              </p>

              {/* Verified Credentials List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Verified Academic &amp; Professional Credentials:
                </h4>
                <ul className="space-y-2.5">
                  {TRUST_CONFIG.founder.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-3 text-sm text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                Bringing structured behavioral insights, certified NLP communication methodology, and rigorous career counsel to student cohorts across institutions.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenEnquiryModal('Leadership Guidance & Counseling')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                >
                  <span>Connect with Chairman's Office</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <span>Read Full About Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-t border-slate-900">
        <div data-gsap="panel" className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-800/40 p-10 sm:p-14 shadow-2xl space-y-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <MessageSquareText className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Question or Want to Know More?
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Connect with Edu Care Academy Trust and discover how we can support learning, career development, youth empowerment and community initiatives.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const url = buildWhatsAppUrl();
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/25 active:scale-95 transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                window.location.href = `tel:${TRUST_CONFIG.displayPhone.replace(/\s+/g, '')}`;
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Us ({TRUST_CONFIG.displayPhone})</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Located in Coimbatore, Tamil Nadu · Established 2018 · “Together We Make Difference”
          </p>
        </div>
      </section>

    </div>
  );
};
