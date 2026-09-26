import React, { useState } from 'react';
import { MessageSquareText, Phone, Bot, MessageCircle } from 'lucide-react';
import { TRUST_CONFIG, buildWhatsAppUrl } from '../data/trustData';

interface FloatingActionsProps {
  onOpenChatbot: () => void;
  isChatbotOpen: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenChatbot,
  isChatbotOpen,
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${TRUST_CONFIG.displayPhone.replace(/\s+/g, '')}`;
  };

  return (
    <div 
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      aria-label="Quick contact and assistance options"
    >
      {/* 1. Chatbot Button (AI / Assistant) */}
      <div className="relative flex items-center justify-end">
        {hoveredButton === 'chatbot' && !isChatbotOpen && (
          <div className="hidden sm:block mr-2 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-md shadow-md backdrop-blur-sm whitespace-nowrap animate-in fade-in slide-in-from-right-2">
            Ask Edu Care Assistant
          </div>
        )}
        <button
          onClick={onOpenChatbot}
          onMouseEnter={() => setHoveredButton('chatbot')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
            isChatbotOpen
              ? 'bg-cyan-500 text-slate-950 scale-105 shadow-cyan-500/40 ring-2 ring-cyan-400'
              : 'bg-gradient-to-tr from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-900/40 hover:scale-105'
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
          aria-label="Open Edu Care Assistant Chat"
          title="Open Edu Care Assistant"
        >
          <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* 2. Phone Dialer Button */}
      <div className="relative flex items-center justify-end">
        {hoveredButton === 'phone' && (
          <div className="hidden sm:block mr-2 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-md shadow-md backdrop-blur-sm whitespace-nowrap animate-in fade-in slide-in-from-right-2">
            Call Trust Office ({TRUST_CONFIG.displayPhone})
          </div>
        )}
        <button
          onClick={handlePhoneClick}
          onMouseEnter={() => setHoveredButton('phone')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-700 text-cyan-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200 shadow-lg shadow-black/40 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Call Edu Care Academy Trust"
          title="Call Trust"
        >
          <Phone className="w-5 h-5 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* 3. WhatsApp Direct Button (Green) */}
      <div className="relative flex items-center justify-end">
        {hoveredButton === 'whatsapp' && (
          <div className="hidden sm:block mr-2 px-2.5 py-1 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-md shadow-md backdrop-blur-sm whitespace-nowrap animate-in fade-in slide-in-from-right-2">
            Chat on WhatsApp
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-200 shadow-lg shadow-emerald-900/50 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Chat on WhatsApp with Edu Care Academy Trust"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        </button>
      </div>
    </div>
  );
};
