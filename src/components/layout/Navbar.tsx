import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { label: 'Work', href: '#experience' },
  { label: 'About', href: '#hero' },
  { label: 'Lab', href: '#lab' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy();

  useState(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.04] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Custom Stylized Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex items-center gap-2 cursor-pointer no-underline"
          aria-label="Sudarshan Kankal Home"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:text-accent-purple transition-colors duration-300 drop-shadow-[0_0_8px_rgba(130,87,229,0.5)]"
          >
            {/* Left spine */}
            <path d="M35 20v60" />
            {/* Top bar */}
            <path d="M35 20h35" />
            {/* Slants */}
            <path d="M70 20L48 50l22 30" />
            {/* Bottom bar */}
            <path d="M35 80h35" />
            {/* Middle horizontal bar */}
            <path d="M35 50h20" strokeWidth="8" />
          </svg>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex list-none gap-8">
          {NAV_ITEMS.map((link) => {
            const isWorkActive = link.label === 'Work' && (activeSection === 'experience' || activeSection === 'projects');
            const isAboutActive = link.label === 'About' && (activeSection === 'hero' || activeSection === 'about');
            const isLabActive = link.label === 'Lab' && activeSection === 'lab';
            const isActive = isWorkActive || isAboutActive || isLabActive;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-[14px] font-medium tracking-widest uppercase no-underline transition-all duration-300 font-heading ${
                    isActive
                      ? 'text-white'
                      : 'text-text-secondary/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-purple rounded-full shadow-[0_0_8px_rgba(130,87,229,0.8)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[6px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm origin-center"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm origin-center"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* Mobile Menu Slide-in */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-full h-screen bg-[#070112]/98 backdrop-blur-2xl pt-32 px-10 z-[999] md:hidden flex flex-col items-center gap-8"
            >
              <ul className="list-none flex flex-col items-center gap-8">
                {NAV_ITEMS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="block text-2xl font-heading font-semibold uppercase tracking-wider text-text-secondary hover:text-white no-underline transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
