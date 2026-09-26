import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Tag, 
  MapPin, 
  MessageSquareText, 
  ArrowUpRight,
  Sparkles,
  Camera
} from 'lucide-react';
import { usePageScrollAnimations } from '../hooks/usePageScrollAnimations';
import { GALLERY_ITEMS, GalleryItem, buildWhatsAppUrl } from '../data/trustData';

interface GalleryViewProps {
  onOpenEnquiryModal: (service?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onOpenEnquiryModal,
}) => {
  const containerRef = usePageScrollAnimations();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Events',
    'Education',
    'Career Guidance',
    'Youth Empowerment',
    'Community Welfare',
    'Talent Programs',
    'Scientific Mentorship',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const featuredItem = GALLERY_ITEMS[0];

  return (
    <div ref={containerRef} className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div data-gsap="heading" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
          Visual Archive &amp; Community Drives
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Trust Initiatives in Action
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Glimpses of career counseling workshops, Puthaga Pasi book drives, Kalam’s Dream science sessions, and community welfare programs across Coimbatore and Tamil Nadu.
        </p>
      </div>

      {/* Category Filter Tabs (Interactive Segmented Control) */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800 max-w-4xl mx-auto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured Spotlight Card */}
      {selectedCategory === 'All' && (
        <div data-gsap="panel" className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Featured Initiative Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {featuredItem.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredItem.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {featuredItem.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-cyan-400" />
                  {featuredItem.category}
                </span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveLightboxItem(featuredItem)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Program Details</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full h-56 rounded-xl bg-gradient-to-tr from-cyan-950 via-slate-900 to-blue-950 border border-cyan-800/40 p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Edu Care Trust
                  </span>
                  <Camera className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <span className="text-lg font-bold text-white block">
                    {featuredItem.highlight}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    Archived Community Documentation
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 italic">
                  * Official Trust Initiative Profile
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Masonry / Grid Gallery */}
      <div data-gsap="card-group" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            data-gsap="card"
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="group relative rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between h-80"
          >
            {/* Visual Canvas Container */}
            <div className={`w-full h-44 bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/90 bg-slate-950/60 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/10">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-950/50 backdrop-blur-sm flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-0.5">
                <span className="text-base font-bold text-white drop-shadow-sm block">
                  {item.highlight}
                </span>
                <span className="text-[11px] text-slate-300 drop-shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-300" />
                  {item.date}
                </span>
              </div>
            </div>

            {/* Info Body */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-slate-900">
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-medium">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Banner */}
            <div className={`p-8 bg-gradient-to-br ${activeLightboxItem.gradient} border-b border-slate-800 relative`}>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950/60 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider bg-slate-950/70 px-2.5 py-1 rounded inline-block">
                  {activeLightboxItem.category}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {activeLightboxItem.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                    {activeLightboxItem.date}
                  </span>
                  <span>·</span>
                  <span>Edu Care Academy Trust Archive</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Program Summary
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeLightboxItem.description}
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                Edu Care Academy Trust conducts verified learning and social impact sessions across Coimbatore and Tamil Nadu, ensuring every initiative directly supports youth self-reliance, academic excellence, or basic humanitarian relief.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    const message = `Hello Edu Care Academy Trust, I am interested in learning more about the ${activeLightboxItem.title} initiative.`;
                    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setActiveLightboxItem(null);
                    onOpenEnquiryModal(activeLightboxItem.title);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Submit Online Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
