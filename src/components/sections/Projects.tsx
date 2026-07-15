import { motion } from 'motion/react';
import { PROJECTS } from '../../constants/data';
import { TechBadge } from '../ui/TechBadge';

// A high-fidelity CSS-based Browser Mockup component representing application UIs
function BrowserMockup({ projectId }: { projectId: number }) {
  const renderBrowserContent = () => {
    switch (projectId) {
      case 1:
        return (
          <div className="w-full h-full bg-[#080211] p-4 font-mono text-[9px] text-[#cbd5e1] flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] font-bold text-accent-purple">UBS Outbound Expert Tool</span>
              <span className="bg-[#120a28] px-2 py-0.5 rounded text-[8px] text-accent-cyan">Key4 Platform</span>
            </div>
            <div className="grid grid-cols-3 gap-2 flex-grow">
              <div className="col-span-2 bg-[#120826]/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                <span className="text-[8px] text-text-muted">AFFORDABILITY ENGINE</span>
                <div className="flex flex-col gap-1.5 my-1">
                  <div className="flex justify-between text-[7px]">
                    <span>Monthly Income</span>
                    <span className="text-accent-cyan">$14,500</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[70%] h-full bg-accent-cyan" />
                  </div>
                  <div className="flex justify-between text-[7px] mt-1">
                    <span>Mortgage Cap</span>
                    <span className="text-accent-purple">$680,000</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[55%] h-full bg-accent-purple" />
                  </div>
                </div>
                <div className="bg-accent-green/5 border border-accent-green/10 p-1 rounded text-[7px] text-accent-green flex items-center gap-1 justify-center">
                  <span className="w-1 h-1 rounded-full bg-accent-green animate-ping" />
                  Affordability Verifications Passed
                </div>
              </div>
              <div className="bg-[#120826]/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between items-center text-center">
                <span className="text-[7px] text-text-muted uppercase">Advisor Lead status</span>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-white/5" strokeWidth="2" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-accent-purple" strokeDasharray="80, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="absolute text-[8px] font-bold text-white">80%</span>
                </div>
                <span className="text-[7px] text-accent-purple font-bold">Leads Synced</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full bg-[#080211] p-4 font-mono text-[9px] text-[#cbd5e1] flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] font-bold text-[#ff5f57]">TVM • Threat Watch</span>
              <span className="bg-[#1c0808]/40 border border-[#ff5f57]/20 px-2 py-0.5 rounded text-[8px] text-[#ff5f57] animate-pulse">Sync Active</span>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-grow">
              <div className="bg-[#1a080c]/30 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between">
                <span className="text-[7px] text-text-muted">SEVERITY COUNTS</span>
                <div className="space-y-1 my-1 text-[8px]">
                  <div className="flex justify-between"><span className="text-[#ff5f57]">Critical</span><strong>14</strong></div>
                  <div className="flex justify-between"><span className="text-accent-purple">High</span><strong>45</strong></div>
                  <div className="flex justify-between"><span className="text-accent-cyan">Medium</span><strong>112</strong></div>
                </div>
              </div>
              <div className="bg-[#120826]/60 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between text-[7px]">
                <span className="text-text-muted uppercase">Ingested Sources</span>
                <ul className="space-y-1">
                  <li className="flex items-center justify-between text-accent-green"><span>Qualys Ingest</span><span>OK</span></li>
                  <li className="flex items-center justify-between text-accent-green"><span>Tanium Sync</span><span>OK</span></li>
                  <li className="flex items-center justify-between text-accent-purple"><span>Wiz Cloud</span><span>94%</span></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full bg-[#080211] p-4 font-mono text-[9px] text-[#cbd5e1] flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] font-bold text-accent-cyan">Cyber Risk Dashboard</span>
              <span className="bg-[#051a1a]/40 border border-accent-cyan/20 px-2 py-0.5 rounded text-[8px] text-accent-cyan">SNOW API</span>
            </div>
            <div className="bg-[#120826]/60 border border-white/5 rounded-lg p-2.5 flex-grow flex flex-col justify-between">
              <span className="text-[7px] text-text-muted">RISK MATRIX SCORE</span>
              <div className="flex justify-between items-end gap-1.5 h-16 pt-2">
                {[45, 68, 30, 85, 52, 90, 72].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-gradient-to-t from-accent-cyan to-accent-purple rounded-sm" style={{ height: `${h}%` }} />
                    <span className="text-[5px] text-text-muted">D0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
      default:
        return (
          <div className="w-full h-full bg-[#080211] p-4 font-mono text-[9px] text-[#cbd5e1] flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] font-bold text-accent-purple">PARIS Inventory</span>
              <span className="text-text-muted text-[8px]">IT Privileged Auth</span>
            </div>
            <div className="bg-[#120826]/60 border border-white/5 rounded-lg p-2.5 flex-grow flex flex-col gap-1.5 justify-between">
              <span className="text-[7px] text-text-muted">DISCOVERED ENTITLEMENTS</span>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-1 rounded">
                  <span>admin-root-group</span>
                  <span className="bg-accent-purple/10 border border-accent-purple/20 px-1 py-0.5 rounded text-[6px] text-accent-purple font-semibold">ROOT PRI</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 p-1 rounded">
                  <span>db-read-write</span>
                  <span className="bg-accent-cyan/10 border border-accent-cyan/20 px-1 py-0.5 rounded text-[6px] text-accent-cyan font-semibold">DB AUTH</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[4/3] rounded-2xl border border-white/[0.06] bg-[#0c061d]/80 overflow-hidden shadow-2xl relative group-hover:border-accent-purple/20 transition-all duration-500">
      {/* Top Browser Bar */}
      <div className="h-8 bg-black/40 border-b border-white/[0.05] px-4 flex items-center gap-2 justify-between">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="bg-white/[0.03] border border-white/[0.05] rounded px-6 py-0.5 text-[8px] font-mono text-text-muted flex-grow max-w-[240px] text-center select-none truncate">
          {projectId === 1 ? 'oet.ubs.com' : projectId === 2 ? 'tvm.sec.globant.com' : projectId === 3 ? 'dashboard.risk.ey' : 'paris.privilege-auth.internal'}
        </div>
        <div className="w-10" />
      </div>
      <div className="h-[calc(100%-32px)] w-full">
        {renderBrowserContent()}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Synced ambient radial glows */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-purple/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-pink/[0.03] blur-[130px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Meaningful headline */}
        <motion.div
          className="text-center md:text-left mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase block mb-3">
            Real-World Applications
          </span>
          <h2 className="text-[32px] sm:text-[40px] font-black text-white font-heading tracking-tight leading-none">
            Featured Projects
          </h2>
          <p className="text-[14px] text-text-muted font-light mt-3 max-w-[550px]">
            Enterprise-grade platforms I've designed and engineered — serving thousands of users across banking, cybersecurity, and risk management.
          </p>
          <div className="section-divider mt-6 mx-0 md:mx-0" style={{ marginLeft: 0 }} />
        </motion.div>

        {/* Alternating Projects List */}
        <div className="space-y-28">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center`}
              >
                {/* Browser preview with parallax-like hover */}
                <motion.div
                  className={`relative group ${!isEven ? 'lg:order-2' : ''}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-purple to-accent-pink/30 opacity-0 group-hover:opacity-10 blur-[30px] transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute -inset-2 rounded-2xl bg-accent-purple/[0.06] blur-[20px] pointer-events-none" />
                  <BrowserMockup projectId={project.id} />
                </motion.div>

                {/* Text layout */}
                <div className={`flex flex-col gap-4 text-center lg:text-left ${!isEven ? 'lg:order-1' : ''}`}>
                  <motion.span
                    className="text-[11px] font-bold font-mono tracking-widest text-accent-purple uppercase"
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Featured Project
                  </motion.span>
                  
                  <h3 className="font-heading text-[24px] sm:text-[30px] font-extrabold text-white leading-none tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description card with glass effect */}
                  <div className="glass-refined p-6 md:p-7 shadow-xl">
                    <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed font-light">
                      {project.description.join(' ')}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-3">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 justify-center lg:justify-start mt-4">
                    <a
                      href="https://github.com/sudarshankankal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-white transition-colors duration-300 hover:scale-110 inline-block"
                      title="View GitHub Repository"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/sudarshankankal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-white transition-colors duration-300 hover:scale-110 inline-block"
                      title="View Live Site"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
