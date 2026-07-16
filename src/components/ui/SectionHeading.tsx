import { memo } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Reusable section heading with gradient accent on the last word,
 * decorative dot, subtitle label, and animated underline.
 */
export const SectionHeading = memo(function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const words = title.split(' ');
  const lastWord = words.pop();
  const rest = words.join(' ');

  return (
    <AnimatedSection className="mb-16 text-center">
      {subtitle && (
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_var(--color-accent-cyan)] animate-pulse-glow" />
          <span className="font-mono text-xs text-accent-cyan tracking-[3px] uppercase">
            {subtitle}
          </span>
        </div>
      )}

      <h2 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-wide leading-tight">
        {rest && <>{rest} </>}
        <span className="gradient-text">{lastWord}</span>
      </h2>

      <div className="relative w-20 h-[3px] mx-auto mt-5 rounded-sm bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
        <div className="absolute -top-0.5 left-0 w-full h-[7px] bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple blur-sm opacity-50" />
      </div>
    </AnimatedSection>
  );
});
