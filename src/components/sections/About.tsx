import { PERSONAL_INFO } from '../../constants/data';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedSection } from '../ui/AnimatedSection';
import { GlassCard } from '../ui/GlassCard';
import { CodePlayground } from './CodePlayground';

/**
 * About section layout displaying profile metrics, quick metrics,
 * and the interactive CodePlayground developer dashboard.
 */
export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, oklch(0.7 0.15 195 / 0.03) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          {/* Left profile metrics & stats */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="flex flex-col items-center gap-8">
              {/* Profile image avatar placeholder with rotate glows */}
              <div className="relative w-48 h-48">
                <div className="w-full h-full rounded-full bg-bg-tertiary flex items-center justify-center relative z-10 border border-accent-cyan/20 overflow-hidden">
                  <span className="font-heading text-6xl font-black gradient-text tracking-widest select-none">
                    SK
                  </span>
                </div>
                <div className="absolute -inset-2 rounded-full border border-transparent bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] animate-rotate-glow z-0" />
                <div className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.15_195/0.15)_0%,transparent_70%)] animate-pulse-glow z-0" />
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                {[
                  { value: '7+', label: 'Years Exp.' },
                  { value: '3', label: 'Employers' },
                  { value: '4+', label: 'Systems' },
                ].map((stat, i) => (
                  <GlassCard key={i} className="!p-4 text-center group border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-accent-cyan/20">
                    <strong className="block font-heading text-xl gradient-text mb-0.5">
                      {stat.value}
                    </strong>
                    <span className="block text-[0.65rem] text-text-muted font-mono tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right code playground and professional summary */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="flex flex-col gap-6">
              {/* Dynamic console sandbox playground */}
              <CodePlayground />

              {/* Professional description */}
              <p className="text-base text-text-secondary leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              {/* Custom micro highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-cyan flex-shrink-0">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                      </svg>
                    ),
                    text: 'React 16 → 19 Migration Architect'
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue flex-shrink-0">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    ),
                    text: 'Web Accessibility (WCAG) Specialist'
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple flex-shrink-0">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    ),
                    text: '40% Initial Bundle Load Optimizations'
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-pink flex-shrink-0">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    text: 'Constructive Code Reviewer & Mentor'
                  },
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 glass rounded-xl border border-white/5 text-sm text-text-secondary transition-all duration-300 hover:bg-accent-cyan/[0.05] hover:border-accent-cyan/15 hover:text-text-primary"
                  >
                    {highlight.icon}
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
