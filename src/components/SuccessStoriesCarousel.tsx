import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Atom, 
  Sparkles, 
  BookOpen, 
  Award,
  ArrowUpRight
} from 'lucide-react';
import { buildWhatsAppUrl } from '../data/trustData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImpactStory {
  id: string;
  focusArea: string;
  initiative: string;
  highlight: string;
  narrative: string;
  participantRole: string;
  location: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  metricLabel: string;
}

export const SUCCESS_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    focusArea: 'Career Counseling & Assistance',
    initiative: 'Student Pathway Mapping',
    highlight: 'Clear Professional Trajectory from Higher Secondary to University',
    narrative:
      'Participating in Edu Care Academy Trust’s psychometric career guidance allowed me to analyze my strengths and align them with emerging industry opportunities. The structured counseling cleared all ambiguities regarding college admissions and competitive pathways.',
    participantRole: 'Higher Secondary Mentee',
    location: 'Coimbatore, Tamil Nadu',
    icon: GraduationCap,
    accentColor: 'from-blue-500/20 to-cyan-500/20',
    metricLabel: 'Career Pathway Clarity',
  },
  {
    id: 'story-2',
    focusArea: 'Scientific & Technical Mentorship',
    initiative: "Kalam's Dream Initiative",
    highlight: 'Cultivating Scientific Temperament & Prototyping Skills',
    narrative:
      'Kalam’s Dream provided hands-on research mentorship and technical problem-solving frameworks. Learning how to structure scientific inquiry and build practical models fostered my deep passion for STEM innovation.',
    participantRole: 'Young Science Cohort',
    location: 'Tamil Nadu Drive',
    icon: Atom,
    accentColor: 'from-cyan-500/20 to-teal-500/20',
    metricLabel: 'STEM Mentorship',
  },
  {
    id: 'story-3',
    focusArea: 'Personality Development & NLP',
    initiative: 'Youth Communication & Self-Monitoring',
    highlight: 'Overcoming Stage Apprehension Through NLP Frameworks',
    narrative:
      'Under Dr. Y. Benazir’s certified NLP practitioner modules, I learned self-monitoring techniques and vocal projection. The transformative workshops gave me the confidence to lead student discussions and address large audiences with poise.',
    participantRole: 'Youth Leadership Participant',
    location: 'Coimbatore Workshop',
    icon: Sparkles,
    accentColor: 'from-indigo-500/20 to-purple-500/20',
    metricLabel: 'NLP Communication Growth',
  },
  {
    id: 'story-4',
    focusArea: 'Community Welfare & Literacy',
    initiative: 'Puthaga Pasi Book Drive',
    highlight: 'Empowering First-Generation Learners with Community Libraries',
    narrative:
      'Access to advanced reference textbooks and competitive study materials was made possible through the Puthaga Pasi book drive. The community library shelves created a thriving reading environment for our entire study circle.',
    participantRole: 'Student Library Beneficiary',
    location: 'Tamil Nadu Drive',
    icon: BookOpen,
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    metricLabel: 'Educational Resource Access',
  },
  {
    id: 'story-5',
    focusArea: 'Youth Empowerment & Talent',
    initiative: "Tamil Nadu's Got Talent",
    highlight: 'Statewide Recognition for Creative Expression & Innovation',
    narrative:
      'Presenting our technical innovation and performing arts project on the Tamil Nadu’s Got Talent platform earned our team verified certificates of honor and continued encouragement from the Trust’s leadership.',
    participantRole: 'Student Talent Honoree',
    location: 'Statewide Platform',
    icon: Award,
    accentColor: 'from-amber-500/20 to-orange-500/20',
    metricLabel: 'Statewide Youth Honors',
  },
];

interface SuccessStoriesCarouselProps {
  onOpenEnquiryModal: (service?: string) => void;
}

export const SuccessStoriesCarousel: React.FC<SuccessStoriesCarouselProps> = ({
  onOpenEnquiryModal,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900" aria-labelledby="success-stories-heading">
      
      {/* Section Header */}
      <div data-gsap="heading" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Verified Learning &amp; Social Outcomes
          </div>
          <h2 id="success-stories-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Success Stories &amp; Project Impacts
          </h2>
          <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
            Real participant journeys reflecting the Trust's commitment to career counseling, NLP personality cultivation, scientific curiosity, and community service.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            ref={prevRef}
            aria-label="Previous Success Story"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Success Story"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div data-gsap="card-group" className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div 
          className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true" 
        />
        <div 
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true" 
        />

        <Swiper
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={600}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full relative pb-10"
        >
          {SUCCESS_STORIES.map((story) => {
            const IconComponent = story.icon;
            return (
              <SwiperSlide key={story.id}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Story Details & Quote */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-950/80 border border-cyan-800/40 px-3 py-1 rounded-md">
                        {story.focusArea}
                      </span>
                      <span className="text-xs text-slate-400">
                        {story.initiative}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                      “{story.highlight}”
                    </h3>

                    <div className="relative pl-6 border-l-2 border-cyan-500/50">
                      <Quote className="w-8 h-8 text-cyan-400/20 absolute -top-3 -left-4 pointer-events-none" />
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                        {story.narrative}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800/80">
                      <div>
                        <span className="text-sm font-bold text-white block">
                          {story.participantRole}
                        </span>
                        <span className="text-xs text-slate-400">
                          {story.location}
                        </span>
                      </div>

                      <button
                        onClick={() => onOpenEnquiryModal(story.focusArea)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto"
                      >
                        <span>Enquire for similar guidance</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Milestone Card */}
                  <div className="lg:col-span-4 flex justify-center">
                    <div className={`w-full max-w-sm rounded-2xl bg-gradient-to-br ${story.accentColor} border border-slate-700/80 p-6 space-y-5 shadow-lg`}>
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                          Verified Impact
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                          Impact Metric
                        </span>
                        <span className="text-lg font-bold text-white block">
                          {story.metricLabel}
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed pt-1">
                          Anchored by Edu Care Academy Trust's pedagogical &amp; social welfare framework in Coimbatore.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                        <span className="text-[11px] text-cyan-400 font-medium">Est. 2018</span>
                        <button
                          onClick={() => {
                            const msg = `Hello Edu Care Academy Trust, I saw the success impact regarding ${story.highlight} and would like to know how our students can participate.`;
                            window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
                          }}
                          className="text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
                        >
                          WhatsApp Query →
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};
