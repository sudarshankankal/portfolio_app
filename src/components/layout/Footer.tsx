import { memo } from 'react';
import { PERSONAL_INFO } from '../../constants/data';

/**
 * Minimal footer with logo and copyright.
 */
export const Footer = memo(function Footer() {
  return (
    <footer className="mt-20 py-6 border-t border-accent-cyan/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        <span className="font-heading text-sm tracking-wider">
          <span className="text-accent-cyan font-normal">&lt;</span>
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
          <span className="text-accent-cyan font-normal">/&gt;</span>
        </span>
        <span className="text-xs text-text-muted font-mono">
          © {new Date().getFullYear()} — Built with React + TypeScript
        </span>
      </div>
    </footer>
  );
});
