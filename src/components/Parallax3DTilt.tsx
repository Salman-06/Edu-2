import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Parallax3DTiltProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 12)
  scaleOnHover?: number; // Scale factor on hover (default: 1.02)
  perspective?: number; // CSS perspective distance (default: 1000)
  onClick?: () => void;
}

export const Parallax3DTilt: React.FC<Parallax3DTiltProps> = ({
  children,
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.22)',
  maxTilt = 12,
  scaleOnHover = 1.02,
  perspective = 1000,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Sheen spotlight coordinates (0% to 100%)
  const sheenX = useMotionValue(50);
  const sheenY = useMotionValue(50);

  // Spring physics configuration for responsive yet damped motion
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scale = useSpring(isHovered && !prefersReducedMotion ? scaleOnHover : 1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = (clientX / rect.width) - 0.5;
    const normalizedY = (clientY / rect.height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    sheenX.set((clientX / rect.width) * 100);
    sheenY.set((clientY / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  if (prefersReducedMotion) {
    return (
      <div 
        ref={cardRef} 
        onClick={onClick} 
        className={`relative rounded-2xl overflow-hidden ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl shadow-cyan-950/60' : 'shadow-md'
      } ${className}`}
    >
      {/* Interactive Cursor Spotlight Sheen */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl z-20 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [sheenX, sheenY],
            ([currX, currY]) =>
              `radial-gradient(450px circle at ${currX}% ${currY}%, ${glowColor}, transparent 65%)`
          ),
        }}
      />

      {/* Card Content with 3D Depth Layer */}
      <div 
        className="relative z-10 w-full h-full"
        style={{
          transform: isHovered ? 'translateZ(24px)' : 'translateZ(0px)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
