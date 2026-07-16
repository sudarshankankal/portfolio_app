import { EDUCATION } from '../../constants/data';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';

/**
 * Education section displaying academic qualification and scorecard metrics.
 */
export default function Education() {
  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, oklch(0.7 0.15 195 / 0.02) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading title="Education" subtitle="Academic Background" />

        <AnimatedSection direction="scale" delay={0.2}>
          <GlassCard className="max-w-[750px] mx-auto p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-accent-cyan/20">
            {/* Academic Cap Icon with pulse ring */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-accent-cyan/[0.08] border border-accent-cyan/15 flex items-center justify-center text-accent-cyan z-10 relative">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 0 3 3 6 3s6-3 6-3v-5" />
                </svg>
              </div>
              <div className="absolute -inset-3 rounded-3xl bg-[radial-gradient(circle,oklch(0.7_0.15_195/0.15)_0%,transparent_70%)] animate-pulse-glow z-0" />
            </div>

            {/* Academic details */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-wide mb-1.5 text-text-primary">
                {EDUCATION.degree}
              </h3>
              
              <p className="text-base md:text-lg font-medium gradient-text mb-5">
                {EDUCATION.institution}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <svg className="text-accent-cyan" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{EDUCATION.period}</span>
                </div>

                <div className="hidden sm:block w-px h-5 bg-white/10" />

                <div className="flex items-center gap-2">
                  <svg className="text-accent-cyan" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                  </svg>
                  <span>
                    Aggregate score: <strong className="gradient-text font-bold font-mono">{EDUCATION.score}</strong>
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
