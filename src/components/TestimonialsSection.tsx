


import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'CTO @ StartupX',
    avatar: '👩‍💼',
    text: 'SATORU a livré une interface 3D exceptionnelle qui a dépassé toutes nos attentes. Son sens du détail et sa créativité sont incomparables.',
    rating: 5,
  },
  {
    name: 'Marc Dupont',
    role: 'CEO @ TechVision',
    avatar: '👨‍💻',
    text: 'Travail impeccable ! Le portfolio 3D qu\'il a créé pour nous a multiplié nos conversions par 3. Professionnel et réactif.',
    rating: 5,
  },
  {
    name: 'Julie Martin',
    role: 'Product Manager @ InnovateCo',
    avatar: '👩‍🎨',
    text: 'Une collaboration exceptionnelle. SATORU comprend parfaitement les enjeux business et livre des solutions techniques brillantes.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-red-500 font-orbitron text-sm tracking-widest uppercase">— Témoignages —</span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mt-4">
            CE QU'ILS <span className="text-gradient-red">DISENT</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-dark border border-gray-800 rounded-2xl p-10 relative mb-8"
        >
          {/* Quote decoration */}
          <div className="absolute top-6 left-8 text-6xl text-red-900/30 font-orbitron leading-none">"</div>
          
          <div className="relative z-10">
            <p className="text-gray-300 font-rajdhani text-xl leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-2xl border-2 border-red-500/50">
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <div className="text-white font-bold font-rajdhani">{testimonials[current].name}</div>
                <div className="text-red-400 text-sm font-orbitron text-xs">{testimonials[current].role}</div>
              </div>
              <div className="ml-4 flex gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-red-500">★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-3 bg-red-500' : 'w-3 h-3 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
