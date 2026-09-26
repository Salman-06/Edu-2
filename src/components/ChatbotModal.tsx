import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { CHATBOT_QA, TRUST_CONFIG, buildWhatsAppUrl } from '../data/trustData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (service?: string) => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Hello! I am the Edu Care Assistant. I can share verified information about Edu Care Academy Trust, our founder Dr. Y. Benazir, services, initiatives like Pasiyatral & Kalam's Dream, and how to connect with us in Coimbatore. How can I help you today?`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'What is Edu Care Academy Trust?',
    'Who is the Founder & Chairman?',
    'What services do you provide?',
    'What is Pasiyatral & Puthaga Pasi?',
    "What is Kalam's Dream?",
    'Where is the Trust located?',
    'How can I request career counseling?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const findGroundedAnswer = (userQuery: string): string => {
    const q = userQuery.toLowerCase().trim();

    // Check against patterns in CHATBOT_QA
    for (const item of CHATBOT_QA) {
      for (const pattern of item.patterns) {
        if (q.includes(pattern)) {
          return item.answer;
        }
      }
    }

    // Additional specific keyword matches
    if (q.includes('mission')) {
      return `Our Mission is: “${TRUST_CONFIG.mission}”`;
    }
    if (q.includes('vision')) {
      return `Our Vision is: “${TRUST_CONFIG.vision}”`;
    }
    if (q.includes('tagline') || q.includes('motto')) {
      return `Edu Care Academy Trust's tagline is: “Together We Make Difference”.`;
    }
    if (q.includes('nlp') || q.includes('counsel')) {
      return `Dr. Y. Benazir is an Internationally Certified NLP Practitioner and Certified Career Counselor, offering structured personality training, communication workshops, and student pathway assistance.`;
    }
    if (q.includes('talent')) {
      return `Tamil Nadu's Got Talent is our youth empowerment platform recognizing talent across singing, dancing, drama and technical innovations with certificates and honors.`;
    }
    if (q.includes('book') || q.includes('library') || q.includes('puthaga')) {
      return `Puthaga Pasi (“Read, Donate, Lead”) is a book donation campaign focused on encouraging reading habits, establishing community libraries, and providing learning resources.`;
    }
    if (q.includes('hunger') || q.includes('food') || q.includes('pasiyatral')) {
      return `Pasiyatral (“Helping the Hunger”) is a social drive providing nutritious meals to roadside individuals, underprivileged citizens, and students in need of career support.`;
    }
    if (q.includes('science') || q.includes('kalam') || q.includes('research')) {
      return `Kalam's Dream is dedicated to scientific & technical mentorship for students aspiring toward scientific research and technical innovation.`;
    }
    if (q.includes('coimbatore') || q.includes('location') || q.includes('tamil nadu')) {
      return `Edu Care Academy Trust was established in 2018 and is located in Coimbatore, Tamil Nadu, India.`;
    }

    // Strictly strictly grounded fallback
    return `I'm sorry, I don't have that information yet. Please contact Edu Care Academy Trust directly through WhatsApp or the Contact page.`;
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findGroundedAnswer(query);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex flex-col items-center justify-end sm:justify-start pointer-events-auto">
      {/* Mobile Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm sm:hidden" 
        onClick={onClose}
      />

      {/* Chat Window */}
      <div className="relative w-full sm:w-[410px] h-[86vh] sm:h-[580px] bg-slate-900 border border-slate-700/80 rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-white tracking-tight">Edu Care Assistant</h3>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-800/40">
                  Verified Trust Bot
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Coimbatore · Est. 2018</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-3 py-2 bg-slate-950/60 border-b border-slate-800/60 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
          <span className="text-[11px] text-slate-400 shrink-0 font-medium mr-1">Quick:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1 rounded-md whitespace-nowrap transition-colors border border-slate-700/50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-950/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-xs shadow-sm shadow-cyan-900/30'
                    : 'bg-slate-850 border border-slate-700/70 text-slate-200 rounded-bl-xs'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-850 border border-slate-700/60 w-16">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-100" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-200" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Escalation to WhatsApp Banner */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400 text-[11px]">Need personalized career advice?</span>
          <button
            onClick={() => {
              const url = buildWhatsAppUrl('Hello Edu Care Academy Trust, I was chatting with Edu Care Assistant and would like personalized assistance.');
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300"
          >
            <span>WhatsApp Us</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-slate-900 border-t border-slate-800/80 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask about Edu Care Academy Trust..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 disabled:hover:bg-cyan-600 text-white rounded-lg transition-colors focus:outline-none"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
