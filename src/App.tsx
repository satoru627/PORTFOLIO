import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';

function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      setTimeout(() => {
        if (cursor2Ref.current) {
          cursor2Ref.current.style.left = `${e.clientX}px`;
          cursor2Ref.current.style.top = `${e.clientY}px`;
        }
      }, 80);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={cursor2Ref}
        className="fixed w-8 h-8 border border-red-500/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ transition: 'left 0.12s ease-out, top 0.12s ease-out' }}
      />
    </>
  );
}

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-2 border-red-900 border-t-red-500 rounded-full mx-auto mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-orbitron text-2xl font-black tracking-widest"
        >
          <span className="text-white">DEV</span>
          <span className="text-red-500">.</span>
          <span className="text-gradient-red">FOLIO</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-xs font-orbitron tracking-widest mt-3"
        >
          INITIALISATION...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  // Portfolio HTML accessible at /portfolio.html

  return (
    <div className="relative bg-black min-h-screen" style={{ cursor: 'none' }}>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Custom Cursor */}
      <CursorFollower />

      {/* Navigation */}
      <NavBar />

      {/* Floating Side Nav */}
      <FloatingNav />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
