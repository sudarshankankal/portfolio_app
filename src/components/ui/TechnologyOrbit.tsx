import { motion } from 'motion/react';
import { memo } from 'react';

interface TechBadgeData {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const TECH_BADGES: TechBadgeData[] = [
  {
    name: 'Figma',
    color: '#F24E1E',
    icon: (
      <svg width="20" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0C8.5 0 0 8.5 0 19C0 24.3 2.2 29.1 5.7 32.5C2.2 35.9 0 40.7 0 46C0 56.5 8.5 65 19 65C24.3 65 29.1 62.8 32.5 59.3C35.9 62.8 40.7 65 46 65C56.5 65 65 56.5 65 46C65 35.5 56.5 27 46 27C40.7 27 35.9 29.2 32.5 32.7C32.5 29.1 32.5 27 32.5 27C35.9 23.6 38 18.8 38 13.5C38 3 29.5-5.5e-07 19 0Z" fill="none" />
        <path d="M9.5 28.5C4.25 28.5 0 24.25 0 19C0 13.75 4.25 9.5 9.5 9.5C14.75 9.5 19 13.75 19 19C19 24.25 14.75 28.5 9.5 28.5Z" fill="#F24E1E" />
        <path d="M9.5 47.5C4.25 47.5 0 43.25 0 38C0 32.75 4.25 28.5 9.5 28.5C14.75 28.5 19 32.75 19 38C19 43.25 14.75 47.5 9.5 47.5Z" fill="#A259FF" />
        <path d="M9.5 66.5C4.25 66.5 0 62.25 0 57C0 51.75 4.25 47.5 9.5 47.5C14.75 47.5 19 51.75 19 57C19 62.25 14.75 66.5 9.5 66.5Z" fill="#1ABCFE" />
        <path d="M28.5 47.5C23.25 47.5 19 43.25 19 38C19 32.75 23.25 28.5 28.5 28.5C33.75 28.5 38 32.75 38 38C38 43.25 33.75 47.5 28.5 47.5Z" fill="#0ACF83" />
        <path d="M28.5 28.5C23.25 28.5 19 24.25 19 19C19 13.75 23.25 9.5 28.5 9.5C33.75 9.5 38 13.75 38 19C38 24.25 33.75 28.5 28.5 28.5Z" fill="#FF7262" />
      </svg>
    ),
  },
  {
    name: 'Framer',
    color: '#0055FF',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 0L24 12H12L24 24L0 12H12L0 0H12Z" />
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#00e5ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 100 100" fill="none" stroke="#00e5ff" strokeWidth="6">
        <ellipse cx="50" cy="50" rx="15" ry="38" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="38" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="15" ry="38" transform="rotate(150 50 50)" />
        <circle cx="50" cy="50" r="6" fill="#00e5ff" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <span className="text-[13px] font-black font-mono text-[#3178C6] tracking-tighter">TS</span>
    ),
  },
  {
    name: 'NextJS',
    color: '#ffffff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 180 180" fill="none" className="text-white">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54v72h13.5v-52.261l71.493 92.179c3.673-4.996 6.947-10.395 9.773-16.141z" fill="url(#next-g1)" />
        <path d="M117 54h13.5v72H117V54z" fill="url(#next-g2)" />
        <defs>
          <linearGradient id="next-g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next-g2" x1="123.75" y1="54" x2="123.75" y2="126" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'NodeJS',
    color: '#339933',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 7 12 12 22 7" />
        <line x1="12" y1="12" x2="12" y2="22" />
      </svg>
    ),
  },
];

export const TechnologyOrbit = memo(function TechnologyOrbit() {
  return (
    <div className="relative w-full max-w-[700px] h-[380px] sm:h-[450px] flex flex-col items-center justify-between select-none mx-auto mt-12 overflow-hidden">
      
      {/* 1. Curved Floating Row of Tech Badges */}
      <div className="flex justify-between w-full max-w-[550px] px-6 z-20 mt-6 relative">
        {TECH_BADGES.map((badge, idx) => (
          <motion.div
            key={badge.name}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Glow ring */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0c061d]/80 border border-white/[0.05] group-hover:border-accent-purple/40 flex items-center justify-center shadow-lg transition-colors duration-300">
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"
                style={{ backgroundColor: badge.color }}
              />
              {badge.icon}
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-text-muted group-hover:text-white transition-colors duration-300">
              {badge.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 2. SVG Dotted Connecting Paths (S-Curves converging to Center) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* We define paths from top row columns down to center (350, 310) */}
          {/* Badge centers: 
              Col 0: (115, 50) 
              Col 1: (200, 50)
              Col 2: (290, 50)
              Col 3: (380, 50)
              Col 4: (470, 50)
              Col 5: (555, 50)
          */}
          <g opacity="0.25">
            {/* Figma path */}
            <path
              d="M 115 50 C 115 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
            />
            {/* Framer path */}
            <path
              d="M 205 50 C 205 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite_0.3s]"
            />
            {/* React path */}
            <path
              d="M 295 50 C 295 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite_0.6s]"
            />
            {/* TS path */}
            <path
              d="M 385 50 C 385 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite_0.9s]"
            />
            {/* NextJS path */}
            <path
              d="M 475 50 C 475 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite_1.2s]"
            />
            {/* NodeJS path */}
            <path
              d="M 565 50 C 565 170, 350 170, 350 310"
              stroke="#8257e5"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite_1.5s]"
            />
          </g>

          {/* Dotted signal pulses flowing along lines */}
          <g>
            {/* Pulse dots that travel along the curves */}
            <circle r="3" fill="#00e5ff">
              <animateMotion
                path="M 115 50 C 115 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
            <circle r="3" fill="#8257e5">
              <animateMotion
                path="M 205 50 C 205 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="1.3s"
              />
            </circle>
            <circle r="3" fill="#00e5ff">
              <animateMotion
                path="M 295 50 C 295 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="2.6s"
              />
            </circle>
            <circle r="3" fill="#8257e5">
              <animateMotion
                path="M 385 50 C 385 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>
            <circle r="3" fill="#00e5ff">
              <animateMotion
                path="M 475 50 C 475 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="2.1s"
              />
            </circle>
            <circle r="3" fill="#8257e5">
              <animateMotion
                path="M 565 50 C 565 170, 350 170, 350 310"
                dur="4s"
                repeatCount="indefinite"
                begin="3.2s"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* 3. Center Glowing Monogram Logo Card */}
      <div className="absolute left-1/2 top-[310px] -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative w-20 h-20 rounded-full bg-[#120a28] border border-accent-purple/30 flex items-center justify-center shadow-[0_0_35px_rgba(130,87,229,0.45)]">
          <svg
            width="26"
            height="26"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white drop-shadow-[0_0_8px_rgba(130,87,229,0.6)]"
          >
            {/* Monogram logo symbol */}
            <path d="M35 20v60" />
            <path d="M35 20h35" />
            <path d="M70 20L48 50l22 30" />
            <path d="M35 80h35" />
            <path d="M35 50h20" strokeWidth="8" />
          </svg>
          {/* Glowing pulse ring */}
          <div className="absolute -inset-2.5 rounded-full border border-accent-purple/20 animate-pulse-glow pointer-events-none" />
        </div>
      </div>

      {/* 4. 3D-Slanted Concentric Constellation Orbits */}
      <div
        className="absolute inset-x-0 bottom-[-20px] h-[220px] flex items-center justify-center pointer-events-none z-0"
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="relative w-[500px] h-[500px] flex items-center justify-center"
          style={{
            transform: 'rotateX(75deg) rotateY(-12deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Inner orbit ellipse */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-accent-purple/20 flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_#8257e5] top-0 left-1/2 -ml-1" />
          </motion.div>

          {/* Middle orbit ellipse */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-accent-purple/15 flex items-center justify-center"
          >
            <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_#00e5ff] bottom-0 left-1/3" />
            <div className="absolute w-2 h-2 rounded-full bg-accent-pink shadow-[0_0_8px_#ec4899] top-1/4 right-0" />
          </motion.div>

          {/* Outer orbit ellipse */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-accent-purple/10 flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 rounded-full bg-[#8257e5] shadow-[0_0_8px_#8257e5] top-1/2 left-0 -mt-1" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff] bottom-1/4 left-3/4" />
          </motion.div>
        </div>
      </div>

    </div>
  );
});
