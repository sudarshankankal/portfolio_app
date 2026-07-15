import { motion } from 'motion/react';
import { memo, type ReactNode } from 'react';

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number; // Duration in seconds
  direction?: 'left' | 'right';
}

/**
 * Infinite Marquee wrapper component.
 * Horizontally scrolls elements infinitely. Pauses movement on cursor hover.
 */
export const InfiniteMarquee = memo(function InfiniteMarquee({
  children,
  speed = 25,
  direction = 'left',
}: InfiniteMarqueeProps) {
  const xTranslation = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="relative overflow-hidden w-full flex py-4 mask-horizontal">
      <motion.div
        className="flex gap-6 whitespace-nowrap min-w-full flex-shrink-0"
        animate={{ x: xTranslation }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {/* Render child elements twice to enable loop flow */}
        <div className="flex gap-6 items-center flex-shrink-0">{children}</div>
        <div className="flex gap-6 items-center flex-shrink-0">{children}</div>
      </motion.div>

      {/* Tailwind inline horizontal transparency mask overlay */}
      <style>{`
        .mask-horizontal {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
    </div>
  );
});
