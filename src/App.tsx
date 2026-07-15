import { lazy, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useSpring } from 'motion/react';
import ParticleBackground from './components/layout/ParticleBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import { Footer } from './components/layout/Footer';
import { NoiseOverlay } from './components/ui/NoiseOverlay';

import 'lenis/dist/lenis.css';

// Lazy load below-fold sections
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Lab = lazy(() => import('./components/sections/Lab'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center min-h-[300px]">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border border-accent-purple/20" />
        <div className="absolute inset-0 rounded-full border border-transparent border-t-accent-purple animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent-purple/30 selection:text-white">
        {/* Grain texture noise overlay */}
        <NoiseOverlay />

        {/* Global Scroll Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan origin-left z-[9999]"
          style={{ scaleX }}
        />

        {/* Star Particle Background */}
        <ParticleBackground />

        {/* Floating Glass Navbar */}
        <Navbar />

        {/* Structured Sections */}
        <main className="relative z-10">
          <Hero />

          <Suspense fallback={<SectionLoader />}>
            <Experience />
            <Skills />
            <Projects />
            <Lab />
            <Contact />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
