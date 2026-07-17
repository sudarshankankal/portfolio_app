import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view using scroll position detection.
 * Returns the ID of the active section for navbar highlighting.
 */
export function useScrollSpy(): string {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'experience', 'skills', 'projects', 'lab', 'contact'];
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      // Trigger line is 160px from the top of the viewport (leaves space for header)
      const triggerOffset = 160;

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerOffset) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
