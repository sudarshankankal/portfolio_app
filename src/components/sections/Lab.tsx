import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { CodePlayground } from './CodePlayground';
import SpiderClock from './SpiderClock';

export default function Lab() {
  const [activeTab, setActiveTab] = useState<'console' | 'clock'>('console');

  return (
    <section id="lab" className="py-24 relative overflow-hidden border-t border-white/[0.02]">
      {/* Synced ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-accent-purple/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-accent-cyan/[0.03] blur-[130px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Meaningful title */}
        <motion.div
          className="text-center mb-8"
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
          <p className="text-[13px] text-text-secondary font-light mt-4 max-w-[500px] mx-auto min-h-[40px]">
            {activeTab === 'console' 
              ? 'A live developer sandbox — run commands, browse my config files, and explore my toolchain in real time.'
              : 'A creative analog clock using GSAP path morphing to animate crawling spider limbs and facial parts in real time.'
            }
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Sleek Tab Capsule Selector */}
        <div className="flex bg-bg-secondary/80 backdrop-blur-md p-1 rounded-full border border-white/[0.05] mb-10 w-fit">
          <button
            onClick={() => setActiveTab('console')}
            className={`px-6 py-2 rounded-full font-heading text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'console'
                ? 'bg-accent-purple text-white shadow-[0_0_15px_rgba(130,87,229,0.4)]'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Console Sandbox
          </button>
          <button
            onClick={() => setActiveTab('clock')}
            className={`px-6 py-2 rounded-full font-heading text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'clock'
                ? 'bg-accent-purple text-white shadow-[0_0_15px_rgba(130,87,229,0.4)]'
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Spider Clock
          </button>
        </div>

        {/* Console / Clock Window */}
        <AnimatedSection direction="up" className="w-full max-w-[780px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab === 'console' ? <CodePlayground /> : <SpiderClock />}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

      </div>
    </section>
  );
}
