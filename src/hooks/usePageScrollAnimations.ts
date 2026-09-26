import { useEffect, useRef } from 'react';
import { setupScrollTriggerAnimations, ScrollTrigger } from '../utils/gsapAnimations';

/**
 * Custom hook to initialize GSAP ScrollTrigger entrance animations
 * across headings, cards, and panels within a view.
 * Automatically cleans up GSAP context on unmount or view transition.
 */
export function usePageScrollAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Small delay to ensure DOM and any fonts/styles are settled
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        setupScrollTriggerAnimations(containerRef.current);
      }
    }, 60);

    return () => {
      clearTimeout(timeoutId);
      // Clean up triggers inside this container
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          containerRef.current &&
          trigger.trigger &&
          containerRef.current.contains(trigger.trigger as Node)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
}
