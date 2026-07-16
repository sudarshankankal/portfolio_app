import { useRef, useState, useCallback, type MouseEvent, memo, type ReactNode } from 'react';
import { motion, useSpring } from 'motion/react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
}

/**
 * Premium Spotlight and 3D Tilt Card.
 * Combines radial spotlight tracking with 3D coordinate tilt on mouse move.
 */
export const SpotlightCard = memo(function SpotlightCard({
  children,
  className = '',
  hoverLift = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion spring values for smooth 3D tilt transitions
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Tilt calculations (-10 to 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / centerY * -8; // Rotates around X axis based on Y offset
    const tiltY = (x - centerX) / centerX * 8;   // Rotates around Y axis based on X offset

    rotateX.set(tiltX);
    rotateY.set(tiltY);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative overflow-hidden rounded-2xl bg-bg-card border border-white/5 transition-colors duration-300 hover:border-accent-cyan/20 ${className}`}
      whileHover={
        hoverLift
          ? {
              z: 15,
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Spotlight overlay glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 80%)`,
          }}
        />
      )}

      {/* Grid overlay mesh on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] pointer-events-none z-0 transition-opacity duration-300"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content wrapper with perspective translation */}
      <div
        className="relative z-10 h-full"
        style={{ transform: 'translateZ(30px)' }}
      >
        {children}
      </div>
    </motion.div>
  );
});
