import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  { year: '2019', title: 'Diplôme Informatique', desc: 'Master en Génie Logiciel - Paris' },
  { year: '2020', title: 'Premier Emploi', desc: 'Développeur Junior chez TechCorp' },
  { year: '2022', title: 'Freelance', desc: 'Lancement de mon activité indépendante' },
  { year: '2024', title: 'Lead Dev', desc: 'Direction technique sur 15+ projets' },
];

function Rotating3DBox() {
  return (
    <div className="flex items-center justify-center h-full" style={{ perspective: '800px' }}>
      <div
        className="relative"
        style={{
          width: '200px',
          height: '200px',
          transformStyle: 'preserve-3d',
          animation: 'spin3d 8s linear infinite',
        }}
      >
        {/* Faces of cube */}
        {[
          { transform: 'rotateY(0deg) translateZ(100px)', bg: 'rgba(230,57,70,0.15)', border: 'rgba(230,57,70,0.8)' },
          { transform: 'rotateY(90deg) translateZ(100px)', bg: 'rgba(155,28,28,0.1)', border: 'rgba(155,28,28,0.6)' },
          { transform: 'rotateY(180deg) translateZ(100px)', bg: 'rgba(230,57,70,0.1)', border: 'rgba(230,57,70,0.5)' },
          { transform: 'rotateY(-90deg) translateZ(100px)', bg: 'rgba(155,28,28,0.15)', border: 'rgba(155,28,28,0.4)' },
          { transform: 'rotateX(90deg) translateZ(100px)', bg: 'rgba(230,57,70,0.05)', border: 'rgba(230,57,70,0.3)' },
          { transform: 'rotateX(-90deg) translateZ(100px)', bg: 'rgba(155,28,28,0.05)', border: 'rgba(155,28,28,0.3)' },
        ].map((face, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              transform: face.transform,
              background: face.bg,
              border: `1px solid ${face.border}`,
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {i === 0 && (
              <span style={{ color: 'rgba(230,57,70,0.8)', fontSize: '40px', fontFamily: 'Orbitron, sans-serif', fontWeight: 900 }}>AM</span>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes spin3d {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-orbitron text-sm tracking-widest uppercase">— À propos —</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mt-4">
            QUI SUIS-<span className="text-gradient-red">JE</span> ?
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 3D CSS Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-80 md:h-96 relative"
          >
            <div className="absolute inset-0 red-border-glow rounded-2xl overflow-hidden bg-black/50">
              <Rotating3DBox />
            </div>
            {/* Corner Decorations */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-500" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-red-500" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-red-500" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-500" />
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-orbitron text-2xl font-bold text-white mb-6"
            >
              Développeur Passionné & <span className="text-red-500">Créateur Visuel</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 font-rajdhani text-lg leading-relaxed mb-6"
            >
              Passionné par la création d'interfaces numériques qui transcendent le simple fonctionnel
              pour devenir de véritables expériences visuelles. Mon approche combine rigueur technique
              et sensibilité artistique.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 font-rajdhani text-lg leading-relaxed mb-8"
            >
              Spécialisé dans les technologies{' '}
              <span className="text-red-400 font-semibold">React</span>,{' '}
              <span className="text-red-400 font-semibold">Three.js</span> et{' '}
              <span className="text-red-400 font-semibold">Node.js</span>, je transforme des idées
              complexes en solutions élégantes et performantes.
            </motion.p>

            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-red-500 font-orbitron text-sm font-bold">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-1 animate-pulse-red" />
                    <div className="w-px flex-1 bg-red-900/50 mt-1 min-h-[20px]" />
                  </div>
                  <div className="pb-4">
                    <div className="text-white font-semibold font-rajdhani">{item.title}</div>
                    <div className="text-gray-500 text-sm font-rajdhani">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
