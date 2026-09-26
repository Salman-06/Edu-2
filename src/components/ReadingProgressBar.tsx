import React, { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  currentTab: string;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ currentTab }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reset progress when view/tab changes
    setScrollProgress(0);

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 100) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
        setIsVisible(true);
      } else {
        // Non-scrollable content or top of page
        setScrollProgress(0);
        setIsVisible(false);
      }
    };

    // Initial check
    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [currentTab]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none transition-opacity duration-300 ${
        isVisible && scrollProgress > 0.5 ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background track blur */}
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />

      {/* Dynamic progress bar fill */}
      <div
        className="relative h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{
          width: `${scrollProgress}%`,
          willChange: 'width',
        }}
      >
        {/* Glowing tip indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[5px] bg-white rounded-full shadow-[0_0_8px_#ffffff] opacity-90" />
      </div>
    </div>
  );
};
