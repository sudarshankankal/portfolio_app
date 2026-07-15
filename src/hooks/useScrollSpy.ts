import { useState, useEffect, useCallback, useRef } from 'react';
import { NAV_LINKS } from '../constants/data';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the ID of the active section for navbar highlighting.
 */
export function useScrollSpy(): string {
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    // Find the entry with the highest intersection ratio
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      setActiveSection(visible[0].target.id);
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '-80px 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersect]);

  return activeSection;
}
