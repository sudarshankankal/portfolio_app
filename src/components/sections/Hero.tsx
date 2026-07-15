import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import memojiAvatar from '../../assets/memoji.png';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a Software Engineer.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 select-none"
    >
      {/* Glowing background auroras */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent-purple/[0.12] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-accent-purple/[0.08] blur-[100px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10 flex flex-col gap-12">
        {/* Top Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-16 items-center">
          
          {/* Left Column: Memoji Avatar & Speech Bubble */}
          <div className="flex flex-col items-center relative">
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-auto md:right-[-20px] md:translate-x-0 z-20 whitespace-nowrap"
            >
              <div className="border border-dashed border-accent-purple/40 bg-[#0e081c]/90 text-[11px] font-mono rounded-full py-1.5 px-4 text-white flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
                Hello! I'm Sudarshan Kankal
              </div>
              {/* Pointer */}
              <div className="w-2.5 h-2.5 border-r border-b border-dashed border-accent-purple/40 bg-[#0e081c] absolute left-1/2 md:left-[30px] bottom-[-6px] -translate-x-1/2 rotate-45" />
            </motion.div>

            {/* Avatar Glow Container */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 mt-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple to-accent-pink/40 blur-[20px] opacity-40 animate-pulse-glow" />
              <div className="w-full h-full rounded-full bg-[#120a28] border border-accent-purple/20 overflow-hidden flex items-center justify-center p-2 relative z-10">
                <img
                  src={memojiAvatar}
                  alt="Sudarshan Memoji Avatar"
                  className="w-full h-full object-contain transform translate-y-1 scale-110"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Hero Heading */}
          <div className="flex flex-col text-center md:text-left gap-4">
            <span className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase">
              A Software Engineer
            </span>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-black leading-[1.1] text-white font-heading">
              Judges a book <br />
              by its <span className="text-accent-purple font-extrabold underline decoration-wavy decoration-accent-purple/80 underline-offset-[10px]">cover...</span>
            </h1>
            <p className="text-[13px] font-mono text-text-muted mt-2">
              Because everybody does, right?
            </p>
          </div>
        </div>

        {/* Bottom Full-width Sub-hero Section */}
        <div className="flex flex-col gap-6 border-t border-white/[0.04] pt-12 mt-4 text-center md:text-left">
          {/* Typing Title with Blinking Cursor */}
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
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-purple/[0.08] hover:bg-accent-purple/15 border border-accent-purple/20 text-accent-purple font-semibold rounded-lg text-[13px] sm:text-[14px] transition-all duration-300 no-underline shadow-[0_0_15px_rgba(130,87,229,0.1)] hover:shadow-[0_0_20px_rgba(130,87,229,0.25)] hover:scale-[1.02]"
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
          <p className="max-w-[750px] text-[15px] sm:text-[16px] text-text-secondary leading-relaxed font-light mx-auto md:mx-0">
            A self-taught software engineer and UX enthusiast, functioning in the industry for 7+ years now. 
            I make meaningful and delightful digital products that create an equilibrium between user needs 
            and technical excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
