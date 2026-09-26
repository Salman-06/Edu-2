import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ChatbotModal } from './components/ChatbotModal';
import { FloatingActions } from './components/FloatingActions';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { useViewSEO } from './hooks/useViewSEO';
import { ReadingProgressBar } from './components/ReadingProgressBar';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState<string>('General Enquiry');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Synchronize Open Graph meta tags, title, and Schema.org JSON-LD for each specific view
  useViewSEO(currentTab);

  // Sync with window.location.hash for direct links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'gallery', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
  };

  const handleOpenEnquiryModal = (serviceTitle?: string) => {
    setEnquiryService(serviceTitle || 'General Enquiry');
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Slim Animated Reading Progress Bar (Top of Viewport) */}
      <ReadingProgressBar currentTab={currentTab} />

      {/* Sticky Global Top Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiryModal={handleOpenEnquiryModal}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenEnquiryModal={handleOpenEnquiryModal}
          />
        )}
        {currentTab === 'about' && (
          <AboutView
            onSelectTab={handleSelectTab}
            onOpenEnquiryModal={handleOpenEnquiryModal}
          />
        )}
        {currentTab === 'services' && (
          <ServicesView
            onOpenEnquiryModal={handleOpenEnquiryModal}
          />
        )}
        {currentTab === 'gallery' && (
          <GalleryView
            onOpenEnquiryModal={handleOpenEnquiryModal}
          />
        )}
        {currentTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenEnquiryModal={handleOpenEnquiryModal}
      />

      {/* Floating Contact & Assistant Triggers */}
      <FloatingActions
        onOpenChatbot={() => setIsChatbotOpen(!isChatbotOpen)}
        isChatbotOpen={isChatbotOpen}
      />

      {/* Interactive Grounded Chatbot ("Edu Care Assistant") */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        onOpenEnquiry={handleOpenEnquiryModal}
      />

      {/* Request a Quote / Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialService={enquiryService}
      />

    </div>
  );
}
