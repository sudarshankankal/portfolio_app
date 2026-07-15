import { AnimatedSection } from '../ui/AnimatedSection';
import { CodePlayground } from './CodePlayground';

export default function Lab() {
  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-bg-primary border-t border-white/[0.02]">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent-purple/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-purple/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase block mb-3">
            Developer Sandbox
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-black text-white font-heading tracking-tight leading-none">
            Interactive Lab
          </h2>
          <p className="text-[13px] text-text-secondary font-light mt-4 max-w-[500px] mx-auto">
            Interact directly with my background environment through mock terminal commands and live configuration files.
          </p>
        </div>

        {/* Code Console */}
        <AnimatedSection direction="up" className="w-full max-w-[780px]">
          <CodePlayground />
        </AnimatedSection>

      </div>
    </section>
  );
}
