import { AnimatedSection } from '../ui/AnimatedSection';
import { TechnologyOrbit } from '../ui/TechnologyOrbit';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden bg-bg-primary border-t border-white/[0.02]"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-purple/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Design Centered Heading */}
        <AnimatedSection direction="up" delay={0.2} className="text-center max-w-[800px]">
          <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold text-white leading-relaxed font-heading tracking-tight">
            I'm currently looking to join a <span className="text-accent-purple">cross-functional</span> team <br className="hidden sm:block" />
            that values{' '}
            <span className="text-accent-purple underline decoration-wavy decoration-accent-purple/50 underline-offset-[8px]">
              design
            </span>
            , technology, and good engineering.
          </h2>
          <p className="text-[12px] font-mono text-text-muted uppercase tracking-widest mt-6">
            Core Tools & Technologies I Build With
          </p>
        </AnimatedSection>

        {/* 3D Slanted Orbit System */}
        <AnimatedSection direction="scale" delay={0.4} className="w-full flex justify-center mt-4">
          <TechnologyOrbit />
        </AnimatedSection>

      </div>
    </section>
  );
}
