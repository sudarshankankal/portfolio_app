import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import memojiAvatar from '../../assets/memoji.png';

const ROLES = [
  "Senior Software Engineer",
  "Enterprise Frontend Architect",
  "Performance Optimization Expert",
  "Web Accessibility Specialist",
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && typedText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(
        isDeleting
          ? current.slice(0, typedText.length - 1)
          : current.slice(0, typedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, roleIdx, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 select-none"
    >
      {/* Ambient aurora glows — synced with page bg */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent-purple/[0.07] blur-[150px] pointer-events-none animate-hero-gradient" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent-pink/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-purple/[0.03] blur-[200px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10 flex flex-col gap-12">
        {/* Top Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-16 items-center">
          
          {/* Left Column: Memoji Avatar & Speech Bubble */}
          <motion.div
            className="flex flex-col items-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-auto md:right-[-20px] md:translate-x-0 z-20 whitespace-nowrap"
            >
              <div className="border border-dashed border-accent-purple/40 bg-[#0e081c]/90 text-[11px] font-mono rounded-full py-1.5 px-4 text-white flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
                Hello! I'm Sudarshan Kankal
              </div>
              <div className="w-2.5 h-2.5 border-r border-b border-dashed border-accent-purple/40 bg-[#0e081c] absolute left-1/2 md:left-[30px] bottom-[-6px] -translate-x-1/2 rotate-45" />
            </motion.div>

            {/* Avatar Glow Container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mt-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple to-accent-pink/40 blur-[25px] opacity-40 animate-pulse-glow" />
              <motion.div
                className="w-full h-full rounded-full bg-[#120a28] border border-accent-purple/20 overflow-hidden flex items-center justify-center p-2 relative z-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={memojiAvatar}
                  alt="Sudarshan Memoji Avatar"
                  className="w-full h-full object-contain transform translate-y-1 scale-110"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Hero Heading */}
          <motion.div
            className="flex flex-col text-center md:text-left gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Senior Software Engineer
            </motion.span>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-black leading-[1.1] text-white font-heading">
              Engineering <br />
              enterprise{' '}
              <span className="text-accent-purple font-extrabold underline decoration-wavy decoration-accent-purple/80 underline-offset-[10px]">
                systems.
              </span>
            </h1>
            <motion.p
              className="text-[13px] font-mono text-text-muted mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Scaling high-performance, accessible web architectures.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Full-width Sub-hero Section */}
        <motion.div
          className="flex flex-col gap-6 border-t border-white/[0.04] pt-12 mt-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Typing Title with Blinking Cursor — now cycles through roles */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2">
            <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-extrabold text-white tracking-tight font-heading leading-none">
              {typedText}
              <span className="text-accent-purple font-normal ml-0.5 animate-pulse">|</span>
            </h2>
          </div>

          {/* Company Info */}
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-2 text-[15px] sm:text-[18px] text-white">
            <span className="text-text-muted">Currently, I'm a Senior Software Engineer at</span>
            <a
              href="https://www.ubs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-purple/[0.08] hover:bg-accent-purple/15 border border-accent-purple/20 text-accent-purple font-semibold rounded-lg text-[13px] sm:text-[14px] transition-all duration-300 no-underline shadow-[0_0_15px_rgba(130,87,229,0.1)] hover:shadow-[0_0_20px_rgba(130,87,229,0.25)] hover:scale-[1.02] animate-floating-badge"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              UBS India
            </a>
          </div>

          {/* Bio Description */}
          <motion.p
            className="max-w-[750px] text-[15px] sm:text-[16px] text-text-secondary leading-relaxed font-light mx-auto md:mx-0"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Senior Software Engineer with 7+ years of experience designing and scaling high-performance, 
            accessible web systems. I specialize in bridging complex system architectures with premium user 
            interfaces, ensuring technical excellence and compliance at every layer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
