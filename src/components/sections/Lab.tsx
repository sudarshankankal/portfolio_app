import { motion } from 'motion/react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { CodePlayground } from './CodePlayground';

export default function Lab() {
  return (
    <section id="lab" className="py-24 relative overflow-hidden border-t border-white/[0.02]">
      {/* Synced ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-accent-purple/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-accent-cyan/[0.03] blur-[130px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Meaningful title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase block mb-3">
            Explore My Workspace
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-black text-white font-heading tracking-tight leading-none">
            Interactive Lab
          </h2>
          <p className="text-[13px] text-text-secondary font-light mt-4 max-w-[500px] mx-auto">
            A live developer sandbox — run commands, browse my config files, and explore my toolchain in real time.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Code Console */}
        <AnimatedSection direction="up" className="w-full max-w-[780px]">
          <CodePlayground />
        </AnimatedSection>

      </div>
    </section>
  );
}
