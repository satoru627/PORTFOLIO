import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const roles = ['React Developer', 'UI/UX Designer', '3D Creative', 'Problem Solver'];

function AnimatedRoles() {
  return (
    <div className="h-10 overflow-hidden relative">
      <motion.div
        animate={{ y: roles.map((_, i) => `${-i * 100}%`) }}
        transition={{
          duration: roles.length * 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          times: roles.map((_, i) => i / roles.length),
        }}
      >
        {roles.map((role, i) => (
          <div key={i} className="h-10 flex items-center text-xl md:text-3xl font-bold text-red-500 font-orbitron">
            {role}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(100,0,0,0.25) 0%, transparent 70%)'
      }} />

      {/* Canvas 3D */}
      <div className="absolute inset-0 z-10">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 border border-red-500/50 text-red-400 text-xs font-orbitron tracking-widest uppercase">
              &lt; Développeur Full Stack /&gt;
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-orbitron text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          >
            ALEX
            <br />
            <span className="text-gradient-red red-glow">MARTIN</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <AnimatedRoles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-400 text-lg font-rajdhani leading-relaxed mb-10 max-w-lg"
          >
            Je crée des expériences numériques immersives qui fusionnent
            <span className="text-red-400"> design audacieux</span> et
            <span className="text-red-400"> technologie de pointe</span>.
            Chaque projet est une œuvre d'art fonctionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-orbitron text-sm tracking-widest uppercase transition-all duration-300 red-glow-box"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400 font-orbitron text-sm tracking-widest uppercase transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex gap-10 mt-14"
          >
            {[
              { value: '5+', label: 'Années exp.' },
              { value: '50+', label: 'Projets' },
              { value: '30+', label: 'Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black font-orbitron text-red-500">{stat.value}</div>
                <div className="text-gray-500 text-xs tracking-widest uppercase font-rajdhani">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase font-rajdhani">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-500 to-transparent" />
      </motion.div>
    </section>
  );
}
