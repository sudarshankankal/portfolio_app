import { useRef, useState, useCallback, type MouseEvent, memo, type ReactNode } from 'react';
import { motion } from 'motion/react';

interface MagneticProps {
  children: ReactNode;
  range?: number; // Distance in px to start pulling
  actionSpeed?: number; // Attraction velocity multiplier
}

/**
 * Magnetic button wrapper using spring physics.
 * Pulls elements gently towards the cursor when hovered.
 */
export const Magnetic = memo(function Magnetic({
  children,
  range = 35,
  actionSpeed = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull element toward cursor
      setPosition({
        x: distanceX * actionSpeed,
        y: distanceY * actionSpeed,
      });
    } else {
      // Reset position
      setPosition({ x: 0, y: 0 });
    }
  }, [range, actionSpeed]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
});
