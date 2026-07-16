import { motion } from 'motion/react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TechnologyOrbit } from '../ui/TechnologyOrbit';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden border-t border-white/[0.02]"
    >
      {/* Synced ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-purple/[0.04] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-pink/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Meaningful centered headline */}
        <AnimatedSection direction="up" delay={0.2} className="text-center max-w-[800px]">
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold text-white leading-relaxed font-heading tracking-tight">
            I'm currently looking to join a{' '}
            <motion.span
              className="text-accent-purple"
              whileHover={{ scale: 1.05 }}
              style={{ display: 'inline-block' }}
            >
              cross-functional
            </motion.span>{' '}
            team <br className="hidden sm:block" />
            that values{' '}
            <span className="text-accent-purple underline decoration-wavy decoration-accent-purple/50 underline-offset-[8px]">
              design
            </span>
            , technology, and good engineering.
          </h2>
          <p className="text-[12px] font-mono text-text-muted uppercase tracking-widest mt-6">
            Technologies & Tools in My Arsenal
          </p>
          <div className="section-divider mt-5" />
        </AnimatedSection>

        {/* 3D Slanted Orbit System */}
        <AnimatedSection direction="scale" delay={0.4} className="w-full flex justify-center mt-4">
          <TechnologyOrbit />
        </AnimatedSection>

      </div>
    </section>
  );
}
