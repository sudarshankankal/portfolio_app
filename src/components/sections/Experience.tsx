import { useState } from 'react';
import { EXPERIENCES } from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import { TechBadge } from '../ui/TechBadge';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  brief: string;
  highlights: string[];
  techStack: string[];
  iconType: 'ribbon' | 'bulb' | 'hat' | 'mic';
  iconColor: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 1,
    company: 'UBS India',
    role: 'Senior Software Engineer',
    period: 'Nov 2024 – Present',
    brief: 'Architected React migration, optimized bundle load times, and delivered high-quality, accessible lending features.',
    highlights: [...EXPERIENCES[0].highlights],
    techStack: [...EXPERIENCES[0].techStack],
    iconType: 'ribbon',
    iconColor: '#3b82f6',
  },
  {
    id: 2,
    company: 'Globant India',
    role: 'Senior Software Engineer',
    period: 'Jul 2021 – Oct 2024',
    brief: 'Architected multi-tenant applications for Ernst & Young, leading accessibility standards and mentoring engineers.',
    highlights: [...EXPERIENCES[1].highlights],
    techStack: [...EXPERIENCES[1].techStack],
    iconType: 'bulb',
    iconColor: '#ec4899',
  },
  {
    id: 3,
    company: 'Zcon Solutions',
    role: 'Software Engineer',
    period: 'Feb 2019 – Jun 2021',
    brief: 'Developed responsive React/Node apps and built a dynamic JSON-based form builder template engine.',
    highlights: [...EXPERIENCES[2].highlights],
    techStack: [...EXPERIENCES[2].techStack],
    iconType: 'hat',
    iconColor: '#8257e5',
  },
  {
    id: 4,
    company: 'Open Source & Lab',
    role: 'Independent Creator',
    period: '2019 – Present',
    brief: 'Building high-performance UI systems, interactive canvas experiments, and custom utility libraries.',
    highlights: [
      'Created advanced interactive layout wrappers, canvas overlays, and particle engines.',
      'Experimenting with Framer Motion, GSAP, and advanced 3D shaders in React.',
      'Passionate about design systems, WCAG accessibility compliance, and developer tooling.'
    ],
    techStack: ['React 19', 'Framer Motion', 'Tailwind v4', 'Vite'],
    iconType: 'mic',
    iconColor: '#00e5ff',
  }
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const getIcon = (type: string, color: string) => {
    switch (type) {
      case 'ribbon':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="9" r="2" />
          </svg>
        );
      case 'bulb':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .4 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
            <line x1="9" y1="18" x2="15" y2="18" />
            <line x1="10" y1="22" x2="14" y2="22" />
          </svg>
        );
      case 'hat':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 10s3-3 10-3 10 3 10 3-3 7-10 7-10-7-10-7z" />
            <path d="M12 3v4M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        );
      case 'mic':
        default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
          </svg>
        );
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Synced ambient glow — matches page gradient */}
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-purple/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent-pink/[0.03] blur-[130px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Meaningful title */}
        <motion.div
          className="text-center md:text-left mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase block mb-3">
            Where I've Made Impact
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-black text-white font-heading tracking-tight leading-none">
            Work Experience
          </h2>
          <p className="text-[14px] text-text-muted font-light mt-3 max-w-[500px]">
            From enterprise banking platforms to cybersecurity dashboards — here's my professional journey building products at scale.
          </p>
          <div className="section-divider mt-6 mx-0 md:mx-0" style={{ marginLeft: 0 }} />
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="magnetic-card group relative rounded-3xl border border-white/[0.04] bg-[#0c061c]/45 hover:bg-[#120928]/60 p-8 hover:border-accent-purple/20 transition-all duration-500 shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedExp(item)}
            >
              {/* Inner card glow border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/[0.03] to-transparent pointer-events-none" />
              
              <div className="flex gap-6 items-start relative z-10">
                {/* Icon Container with radial backdrop glow */}
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute inset-0 rounded-2xl blur-md opacity-25"
                    style={{ backgroundColor: item.iconColor }}
                  />
                  <motion.div
                    className="relative w-14 h-14 rounded-2xl bg-[#140b2a] border border-white/[0.06] flex items-center justify-center shadow-inner"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {getIcon(item.iconType, item.iconColor)}
                  </motion.div>
                </div>

                {/* Text content */}
                <div className="flex-grow flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-[18px] sm:text-[20px] font-bold text-white leading-none">
                      {item.company}
                    </h3>
                    <span className="text-[11px] font-mono text-text-muted whitespace-nowrap">
                      {item.period.split(' – ')[1] || item.period}
                    </span>
                  </div>

                  <span className="text-[12px] font-mono text-accent-purple font-semibold">
                    {item.role}
                  </span>

                  <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed font-light mt-1.5 line-clamp-2">
                    {item.brief}
                  </p>

                  <button
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white hover:text-accent-purple font-heading mt-4 transition-colors duration-300 self-start bg-transparent border-none cursor-pointer p-0 uppercase tracking-wider"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedExp(item);
                    }}
                  >
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Details Modal Popup */}
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExp(null)}
                className="absolute inset-0 bg-[#06020f]/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-[620px] rounded-3xl border border-white/[0.08] bg-[#0c061d] p-8 md:p-10 shadow-2xl z-10 overflow-hidden"
              >
                {/* Accent glow corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none rounded-full"
                  style={{ backgroundColor: selectedExp.iconColor }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/10 flex items-center justify-center text-text-muted hover:text-white cursor-pointer transition-colors"
                  aria-label="Close details"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Header */}
                <div className="flex gap-5 items-center mb-6">
                  <div
                    className="relative w-12 h-12 rounded-xl bg-[#140b2a] border border-white/[0.06] flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: `0 0 15px ${selectedExp.iconColor}20` }}
                  >
                    {getIcon(selectedExp.iconType, selectedExp.iconColor)}
                  </div>
                  <div>
                    <h3 className="font-heading text-[22px] font-extrabold text-white leading-none">
                      {selectedExp.company}
                    </h3>
                    <div className="flex gap-2 items-center mt-1.5">
                      <span className="text-[12px] font-mono text-accent-purple font-semibold">
                        {selectedExp.role}
                      </span>
                      <span className="text-[10px] text-text-muted font-mono">•</span>
                      <span className="text-[11px] text-text-muted font-mono">
                        {selectedExp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mb-8 stagger-children">
                  <span className="block text-[10px] text-text-muted font-mono uppercase tracking-widest mb-4">
                    Key Highlights & Responsibilities
                  </span>
                  <ul className="list-none space-y-3 text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">
                    {selectedExp.highlights.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent-purple select-none mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Stack */}
                <div className="border-t border-white/5 pt-6">
                  <span className="block text-[10px] text-text-muted font-mono uppercase tracking-widest mb-3.5">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.techStack.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
