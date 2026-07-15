import { motion } from 'motion/react';
import { memo, type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
  padding?: boolean;
}

/**
 * Reusable glassmorphism card with Motion hover animation.
 * Uses GPU-accelerated transforms (translateY, scale) for smooth 60fps hover.
 */
export const GlassCard = memo(function GlassCard({
  children,
  className = '',
  hoverLift = true,
  padding = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:border-accent-cyan/25 ${padding ? 'p-7' : ''} ${className}`}
      whileHover={
        hoverLift
          ? { y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px oklch(0.7 0.15 195 / 0.3)' }
          : undefined
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
});
