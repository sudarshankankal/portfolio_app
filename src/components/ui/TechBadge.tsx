import { memo } from 'react';

interface TechBadgeProps {
  label: string;
}

/**
 * Small pill badge for displaying tech stack items with hover glow.
 */
export const TechBadge = memo(function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/[0.08] border border-accent-cyan/20 rounded-full tracking-wide transition-all duration-200 hover:bg-accent-cyan/15 hover:border-accent-cyan/40 hover:shadow-[0_0_12px_oklch(0.7_0.15_195/0.2)]">
      {label}
    </span>
  );
});
