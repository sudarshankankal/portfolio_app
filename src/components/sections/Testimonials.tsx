import { InfiniteMarquee } from '../ui/InfiniteMarquee';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Sudarshan is an outstanding developer who brings immense technical knowledge and performance focus to React applications. His work on code splitting and bundle reductions was key to our platform speedups.",
    author: "Client Advisor Director",
    role: "OET Stakeholder",
    company: "UBS India",
  },
  {
    text: "He writes highly maintainable, clean code and champions web accessibility guidelines (WCAG) across multi-tenant dashboards. A true professional and mentor for junior team members.",
    author: "Senior Architect",
    role: "Global Studio Lead",
    company: "Globant",
  },
  {
    text: "Sudarshan delivered complex features on tight timelines without compromising unit test coverage. Highly recommended for any advanced React architecture work.",
    author: "Engineering Manager",
    role: "Delivery Head",
    company: "Zcon Solutions",
  },
  {
    text: "His deep knowledge of TypeScript and state management systems helped resolve blocking production bottlenecks quickly. Extremely collaborative and focused.",
    author: "Product Owner",
    role: "Risk Management",
    company: "EY Project",
  }
];

/**
 * Testimonials Section.
 * Implements client quotes in an infinite horizontal loop layout.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, oklch(0.55 0.25 300 / 0.01) 0%, transparent 50%)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading title="Testimonials" subtitle="Client Recommendations" />

        <div className="mt-12 w-full">
          <InfiniteMarquee speed={30} direction="left">
            {TESTIMONIALS.map((t, idx) => (
              <GlassCard
                key={idx}
                className="w-[300px] sm:w-[380px] flex-shrink-0 border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-accent-cyan/15 flex flex-col justify-between"
                hoverLift={false}
              >
                <p className="text-sm text-text-secondary italic leading-relaxed mb-6 font-light">
                  "{t.text}"
                </p>
                <div className="flex flex-col border-t border-white/5 pt-4">
                  <strong className="text-sm text-text-primary font-heading font-semibold tracking-wide">
                    {t.author}
                  </strong>
                  <span className="text-xs text-text-muted mt-0.5">
                    {t.role} — <span className="gradient-text font-bold">{t.company}</span>
                  </span>
                </div>
              </GlassCard>
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
