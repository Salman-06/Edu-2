import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquareText, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/trustData';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Organization' | 'Social Impact' | 'Programs';
}

export const ABOUT_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Organization',
    question: 'What is Edu Care Academy Trust and when was it established?',
    answer:
      'Edu Care Academy Trust is a youth-focused learning, career guidance, skill development, and community welfare organization established in 2018 in Coimbatore, Tamil Nadu. The Trust works towards educational excellence, youth empowerment, and community service with the tagline “Together We Make Difference”.',
  },
  {
    id: 'faq-2',
    category: 'Organization',
    question: 'Who leads Edu Care Academy Trust and what are their qualifications?',
    answer:
      'The Trust is founded and chaired by Dr. Y. Benazir. Her credentials include a Ph.D. in Management, Internationally Certified NLP (Neuro-Linguistic Programming) Practitioner certification, and Certified Career Counselor credentials. She brings structured behavioral insights and professional pathway awareness to student cohorts across Tamil Nadu.',
  },
  {
    id: 'faq-3',
    category: 'Social Impact',
    question: 'What is the Pasiyatral initiative and who does it serve?',
    answer:
      'Pasiyatral (“Helping the Hunger”) is a dedicated community welfare drive providing nutritious food to roadside individuals, underprivileged citizens, and students facing socio-economic hurdles. It embodies the Trust’s commitment to bridging academic mentorship with compassionate grassroots relief.',
  },
  {
    id: 'faq-4',
    category: 'Social Impact',
    question: 'How does the Puthaga Pasi campaign work?',
    answer:
      'Puthaga Pasi (“Read, Donate, Lead”) is a statewide book donation campaign that encourages reading habits, gathers academic textbooks and literature from donors, and sets up community library shelves to widen access to educational resources for aspiring students.',
  },
  {
    id: 'faq-5',
    category: 'Programs',
    question: 'What is Kalam’s Dream scientific mentorship initiative?',
    answer:
      'Inspired by the vision of Dr. A.P.J. Abdul Kalam, Kalam’s Dream is a dedicated scientific mentorship program providing specialized guidance, innovation workshops, and research-oriented development for students aspiring towards careers in science, technology, and engineering.',
  },
  {
    id: 'faq-6',
    category: 'Programs',
    question: 'What is Tamil Nadu’s Got Talent?',
    answer:
      'Tamil Nadu’s Got Talent is an inclusive youth empowerment platform organized by the Trust to recognize and honor emerging student talents across singing, dancing, theatrical drama, and innovative technical projects with certificates and formal commendations.',
  },
  {
    id: 'faq-7',
    category: 'Organization',
    question: 'Where is the Trust located and how can institutions or students participate?',
    answer:
      'Edu Care Academy Trust operates from Coimbatore, Tamil Nadu. Students, educators, and institutions seeking career counseling, personality development workshops, or community collaboration can contact the Trust secretariat via our online enquiry form, phone, or direct WhatsApp messaging.',
  },
];

interface AboutFAQAccordionProps {
  onOpenEnquiryModal: (service?: string) => void;
}

export const AboutFAQAccordion: React.FC<AboutFAQAccordionProps> = ({
  onOpenEnquiryModal,
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Organization', 'Social Impact', 'Programs'];

  const filteredFaqs =
    activeCategory === 'All'
      ? ABOUT_FAQS
      : ABOUT_FAQS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="space-y-10" aria-labelledby="faq-section-heading">
      <div data-gsap="heading" className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 id="faq-section-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Common Queries About Edu Care Academy Trust
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Everything you need to know about our history in Coimbatore, community drives like Pasiyatral &amp; Puthaga Pasi, and how we mentor youth.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion Item List */}
      <div data-gsap="card-group" className="max-w-4xl mx-auto space-y-3.5">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              data-gsap="card"
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                  : 'bg-slate-900/50 border-slate-800/90 hover:border-slate-700/80'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-btn-${faq.id}`}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 sm:mt-0 shrink-0" />
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/30' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inquiry Callout Below FAQs */}
      <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 text-center space-y-3">
        <p className="text-xs text-slate-300">
          Have a question not addressed above or interested in partnering on a student workshop or community drive?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <button
            onClick={() => onOpenEnquiryModal('General Trust Inquiry')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            <span>Ask a Specific Question</span>
          </button>
          <button
            onClick={() => {
              const url = buildWhatsAppUrl('Hello Edu Care Academy Trust, I have a query regarding your community initiatives.');
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            <MessageSquareText className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
