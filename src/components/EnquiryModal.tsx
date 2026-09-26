import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquareText, CheckCircle2 } from 'lucide-react';
import { TRUST_CONFIG } from '../data/trustData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Enquiry',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (isOpen) {
      setSubmitted(false);
      setErrorMsg('');
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppDirect = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name before connecting.');
      return;
    }

    const compiledMessage = `Hello Edu Care Academy Trust,

I would like to know more about your services.

Name: ${name.trim()}
Phone: ${phone.trim() || 'Not specified'}
Email: ${email.trim() || 'Not specified'}
Service/Enquiry: ${service}
Message: ${message.trim() || 'Please provide more details about this service and how we can engage.'}

Please provide more information.`;

    const url = `https://wa.me/${TRUST_CONFIG.whatsappNumber}?text=${encodeURIComponent(compiledMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMsg('Please provide either a phone number or email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-slate-100 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Thank You, {name || 'Friend'}!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your enquiry regarding <span className="text-cyan-300 font-semibold">{service}</span> has been received. Our team at Edu Care Academy Trust will connect with you shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  const quickMsg = `Hello Edu Care Academy Trust, I am checking on my recent enquiry for ${service}.`;
                  window.open(`https://wa.me/${TRUST_CONFIG.whatsappNumber}?text=${encodeURIComponent(quickMsg)}`, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                Direct Connection
              </span>
              <h2 id="enquiry-modal-title" className="text-2xl font-bold text-white mt-1">
                Request Information / Quote
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Connect directly with Edu Care Academy Trust, Coimbatore. Submit online or open directly in WhatsApp with your details.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 rounded-lg text-xs text-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleOnlineSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arun Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Service / Focus Area
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option value="Personality Development & Skill Enhancement">Personality Development &amp; Skill Enhancement</option>
                  <option value="Career Counseling & Assistance">Career Counseling &amp; Assistance</option>
                  <option value="Academic & Research Support">Academic &amp; Research Support</option>
                  <option value="Youth Empowerment">Youth Empowerment</option>
                  <option value="Scientific & Technical Mentorship">Scientific &amp; Technical Mentorship (Kalam's Dream)</option>
                  <option value="Community Welfare (Pasiyatral / Puthaga Pasi)">Community Welfare (Pasiyatral / Puthaga Pasi)</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Message or Specific Question
                </label>
                <textarea
                  rows={3}
                  placeholder="How can Edu Care Academy Trust assist your career, learning, or community initiative?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-950/50 hover:shadow-emerald-500/20 active:scale-98 transition-all"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-950/50 hover:shadow-cyan-500/20 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Online</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
