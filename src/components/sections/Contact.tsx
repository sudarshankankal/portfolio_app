import { useState, useCallback, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2500);
    setFormData({ name: '', email: '', message: '' });
  }, []);

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Synced ambient glow */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-purple/[0.06] blur-[180px] pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent-pink/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
        
        {/* Meaningful subtitle */}
        <motion.span
          className="text-[12px] font-bold font-mono tracking-widest text-accent-purple uppercase"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Let's Build Something Together
        </motion.span>

        {/* Meaningful title */}
        <motion.h2
          className="text-[32px] sm:text-[44px] font-black text-white font-heading tracking-tight leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In Touch
        </motion.h2>

        {/* Short Text */}
        <motion.p
          className="max-w-[580px] text-[15px] sm:text-[16px] text-text-secondary leading-relaxed font-light mt-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, creative projects, or simply connecting over technology.
          Whether you have a question or just want to say hi — my inbox is always open!
        </motion.p>

        <div className="section-divider mt-2" />

        {/* Social & Email Icons with stagger */}
        <motion.div
          className="flex items-center gap-6 justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Email */}
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-12 h-12 rounded-full bg-[#0c061d] border border-white/[0.05] hover:border-accent-purple/40 flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(130,87,229,0.25)]"
            title="Email Me Directly"
            whileHover={{ scale: 1.15, y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0c061d] border border-white/[0.05] hover:border-accent-purple/40 flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(130,87,229,0.25)]"
            title="LinkedIn Profile"
            whileHover={{ scale: 1.15, y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/sudarshankankal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0c061d] border border-white/[0.05] hover:border-accent-purple/40 flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(130,87,229,0.25)]"
            title="GitHub Projects"
            whileHover={{ scale: 1.15, y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </motion.a>

          {/* Twitter / X */}
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0c061d] border border-white/[0.05] hover:border-accent-purple/40 flex items-center justify-center text-text-muted hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(130,87,229,0.25)]"
            title="Twitter / X"
            whileHover={{ scale: 1.15, y: -3 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Toggle Direct Message form */}
        <div className="mt-12 w-full max-w-[450px]">
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-purple/[0.08] hover:bg-accent-purple/15 border border-accent-purple/20 text-accent-purple font-semibold rounded-full text-xs font-heading tracking-widest uppercase transition-all duration-300 shadow-md cursor-pointer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {showForm ? 'Hide Form' : 'Send Direct Message'}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transform transition-transform duration-300 ${showForm ? 'rotate-180' : ''}`}>
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </motion.button>

          {/* Animated Expandable Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden w-full text-left"
              >
                <div className="glass-refined p-6 shadow-xl">
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] text-text-muted font-mono tracking-widest uppercase pl-1">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 text-xs text-text-primary bg-accent-purple/[0.03] border border-white/[0.08] rounded-xl outline-none transition-all placeholder-text-muted focus:border-accent-purple/50 focus:bg-accent-purple/[0.06]"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] text-text-muted font-mono tracking-widest uppercase pl-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 text-xs text-text-primary bg-accent-purple/[0.03] border border-white/[0.08] rounded-xl outline-none transition-all placeholder-text-muted focus:border-accent-purple/50 focus:bg-accent-purple/[0.06]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] text-text-muted font-mono tracking-widest uppercase pl-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 text-xs text-text-primary bg-accent-purple/[0.03] border border-white/[0.08] rounded-xl outline-none resize-none transition-all placeholder-text-muted focus:border-accent-purple/50 focus:bg-accent-purple/[0.06]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitted}
                      className={`w-full justify-center text-xs font-semibold py-3 mt-2 rounded-xl transition-all duration-300 ${
                        submitted ? 'bg-accent-green hover:bg-accent-green' : 'bg-accent-purple hover:bg-accent-purple'
                      }`}
                    >
                      {submitted ? (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mr-1">
                            <polyline points="20,6 9,17 4,12" />
                          </svg>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mr-1">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22,2 15,22 11,13 2,9" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
