import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Checks if the user prefers reduced motion.
 */
export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Animate section headings with a refined fade-in and slide-up.
 */
export function animateSectionHeading(
  target: HTMLElement | string,
  trigger?: HTMLElement | string
) {
  if (isReducedMotion()) return;

  gsap.from(target, {
    opacity: 0,
    y: 35,
    duration: 0.85,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger || target,
      start: 'top 85%',
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

/**
 * Animate grid cards (e.g. Core Focus Areas, Services, Initiatives)
 * with fade-in, slide-up, and subtle scale-up stagger.
 */
export function animateStaggerCards(
  cards: HTMLElement[] | string,
  triggerContainer?: HTMLElement | string
) {
  if (isReducedMotion()) return;

  gsap.from(cards, {
    opacity: 0,
    y: 45,
    scale: 0.94,
    duration: 0.8,
    stagger: 0.16,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerContainer || cards,
      start: 'top 82%',
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

/**
 * Comprehensive page section animator.
 * Scans the provided container for data-gsap-heading and data-gsap-card attributes
 * and sets up ScrollTrigger animations automatically.
 * Returns a GSAP Context that can be reverted on cleanup.
 */
export function setupScrollTriggerAnimations(container: HTMLElement) {
  if (isReducedMotion()) return null;

  const ctx = gsap.context(() => {
    // 1. All Section Headings (marked with data-gsap="heading" or .gsap-heading)
    const headings = container.querySelectorAll<HTMLElement>('[data-gsap="heading"], .gsap-heading');
    headings.forEach((heading) => {
      gsap.from(heading, {
        opacity: 0,
        y: 36,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 86%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    });

    // 2. All Card Groups (marked with data-gsap="card-group" or .gsap-card-group)
    const cardGroups = container.querySelectorAll<HTMLElement>('[data-gsap="card-group"], .gsap-card-group');
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll<HTMLElement>('[data-gsap="card"], .gsap-card');
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 42,
          scale: 0.94,
          duration: 0.8,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      }
    });

    // 3. Standalone feature panels / split sections (marked with data-gsap="panel")
    const panels = container.querySelectorAll<HTMLElement>('[data-gsap="panel"], .gsap-panel');
    panels.forEach((panel) => {
      gsap.from(panel, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 84%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    });
  }, container);

  // Refresh ScrollTrigger positions after layout pass
  ScrollTrigger.refresh();

  return ctx;
}
