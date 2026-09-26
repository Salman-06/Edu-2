import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';
import { usePageScrollAnimations } from '../hooks/usePageScrollAnimations';
import { TRUST_CONFIG, buildWhatsAppUrl } from '../data/trustData';

export const ContactView: React.FC = () => {
  const containerRef = usePageScrollAnimations();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Career Counseling & Guidance');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMsg('Please provide a valid phone number or email address so we can reply.');
      return;
    }

    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    if (!name.trim()) {
      setErrorMsg('Please enter your name first.');
      return;
    }

    const compiled = `Hello Edu Care Academy Trust,

I would like to know more about your services.

Name: ${name.trim()}
Phone: ${phone.trim() || 'Not specified'}
Email: ${email.trim() || 'Not specified'}
Service/Enquiry: ${serviceType}
Message: ${message.trim() || 'Please provide more information.'}

Thank you!`;

    window.open(buildWhatsAppUrl(compiled), '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div ref={containerRef} className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div data-gsap="heading" className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Connect With Edu Care Academy Trust
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Reach our secretariat in Coimbatore, Tamil Nadu for career guidance inquiries, academic research support, youth talent programs, or community welfare collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Organization & Contact Cards */}
        <div data-gsap="panel" className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-cyan-400 block mb-1">
                Official Trust Secretariat
              </span>
              <h2 className="text-2xl font-bold text-white">
                {TRUST_CONFIG.name}
              </h2>
              <p className="text-xs text-slate-400 mt-1 italic">
                {TRUST_CONFIG.tagline}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3.5 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-medium">Location</span>
                  <span className="text-white font-medium">{TRUST_CONFIG.location}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">{TRUST_CONFIG.displayAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-medium">Telephone / Helpline</span>
                  <a href={`tel:${TRUST_CONFIG.displayPhone.replace(/\s+/g, '')}`} className="text-white hover:text-cyan-300 transition-colors font-medium">
                    {TRUST_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-medium">Official WhatsApp</span>
                  <button
                    onClick={() => window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer')}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-left"
                  >
                    +{TRUST_CONFIG.whatsappNumber} (Direct Chat)
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-medium">Official Email</span>
                  <a href={`mailto:${TRUST_CONFIG.displayEmail}`} className="text-white hover:text-cyan-300 transition-colors font-medium">
                    {TRUST_CONFIG.displayEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Working / Consultation Hours</span>
              </div>
              <p className="text-xs text-slate-400">
                Monday – Saturday: 9:30 AM – 6:00 PM IST<br />
                Sunday: Community outreach drives &amp; volunteer schedules.
              </p>
            </div>
          </div>

          {/* Quick WhatsApp Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-800/40 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Instant Communication</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Prefer instant messaging? Connect immediately with Edu Care Academy Trust coordinators via WhatsApp with our pre-configured format.
            </p>
            <button
              onClick={() => window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div data-gsap="panel" className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enquiry Received Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your enquiry for <strong>{serviceType}</strong> has been logged. Our administrative team will review and respond promptly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      const msg = `Hello Edu Care Academy Trust, I recently submitted an enquiry for ${serviceType}.`;
                      window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1">
                  <h3 className="text-2xl font-bold text-white">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below. All messages are reviewed directly by the trust administration.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-5 p-3.5 bg-red-950/60 border border-red-500/40 rounded-xl text-xs text-red-200 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Vignesh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98422..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Service / Enquiry Type
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    >
                      <option value="Personality Development & Skill Enhancement">Personality Development &amp; Skill Enhancement</option>
                      <option value="Career Counseling & Assistance">Career Counseling &amp; Assistance</option>
                      <option value="Academic & Research Support">Academic &amp; Research Support</option>
                      <option value="Youth Empowerment & Talent">Youth Empowerment &amp; Talent</option>
                      <option value="Scientific & Technical Mentorship">Scientific &amp; Technical Mentorship (Kalam's Dream)</option>
                      <option value="Community Welfare (Pasiyatral & Puthaga Pasi)">Community Welfare (Pasiyatral &amp; Puthaga Pasi)</option>
                      <option value="General Trust Enquiry">General Trust Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your requirements, student group, or collaboration interest..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-950 transition-all active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
