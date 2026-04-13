import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: '01', icon: '⬡' },
  { id: 'about', label: '02', icon: '⬡' },
  { id: 'skills', label: '03', icon: '⬡' },
  { id: 'projects', label: '04', icon: '⬡' },
  { id: 'contact', label: '05', icon: '⬡' },
];

export default function FloatingNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex"
    >
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`}>
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="relative flex items-center gap-2 group"
          >
            {/* Label tooltip */}
            <motion.span
              className="absolute right-8 text-xs font-orbitron text-red-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {label}
            </motion.span>
            
            <div
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                active === id
                  ? 'bg-red-500 border-red-500 shadow-lg shadow-red-500/50 scale-125'
                  : 'border-gray-600 bg-transparent hover:border-red-500'
              }`}
            />
          </motion.div>
        </a>
      ))}
    </motion.div>
  );
}
