import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'NeoCommerce',
    category: 'E-Commerce',
    description: 'Plateforme e-commerce ultra-moderne avec animations 3D, AR try-on, et système de paiement avancé. Performance 98/100 sur Lighthouse.',
    tags: ['Next.js', 'Three.js', 'Stripe', 'PostgreSQL'],
    color: '#e63946',
    emoji: '🛒',
    metrics: ['$2M+ GMV', '98% Perf', '50k Users'],
    featured: true,
  },
  {
    id: 2,
    title: 'CyberDash',
    category: 'SaaS Dashboard',
    description: 'Tableau de bord analytics temps réel avec visualisations 3D des données, WebSocket, et interface dark futuriste.',
    tags: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    color: '#9b1c1c',
    emoji: '📊',
    metrics: ['10k+ Users', 'Real-time', '99.9% Uptime'],
    featured: true,
  },
  {
    id: 3,
    title: 'VortexAI',
    category: 'IA / ML',
    description: 'Interface conversationnelle IA avec visualisation 3D des embeddings, traitement NLP temps réel et design immersif.',
    tags: ['Python', 'React', 'TensorFlow', 'WebGL'],
    color: '#e63946',
    emoji: '🤖',
    metrics: ['GPT-4', '< 100ms', '95% Accuracy'],
    featured: false,
  },
  {
    id: 4,
    title: 'MetaVerse Hub',
    category: 'Web3 / 3D',
    description: 'Galerie NFT immersive en 3D avec wallets crypto, minting en temps réel et environnement WebXR.',
    tags: ['Three.js', 'Ethers.js', 'WebXR', 'IPFS'],
    color: '#9b1c1c',
    emoji: '🌐',
    metrics: ['500+ NFTs', 'ETH/MATIC', 'VR Ready'],
    featured: false,
  },
  {
    id: 5,
    title: 'FlowMotion',
    category: 'Motion Design',
    description: 'Outil de création d\'animations web avec éditeur visuel, export code, et bibliothèque de 200+ animations.',
    tags: ['React', 'Framer Motion', 'Canvas API', 'TypeScript'],
    color: '#e63946',
    emoji: '🎬',
    metrics: ['200+ Animations', 'No-Code', 'Export Ready'],
    featured: false,
  },
  {
    id: 6,
    title: 'SecureVault',
    category: 'Cybersécurité',
    description: 'Application de gestion de mots de passe avec chiffrement end-to-end, audit de sécurité et interface minimaliste.',
    tags: ['React', 'Rust', 'AES-256', 'PWA'],
    color: '#9b1c1c',
    emoji: '🔐',
    metrics: ['AES-256', 'Zero-Knowledge', 'Offline First'],
    featured: false,
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0], index: number, isInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: hovered ? 5 : 0,
          rotateX: hovered ? -3 : 0,
          scale: hovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="glass-dark border border-gray-800 group-hover:border-red-700/50 rounded-xl overflow-hidden transition-colors duration-300 h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Header */}
        <div
          className="p-6 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.color}22 0%, transparent 100%)` }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs font-orbitron tracking-widest text-red-500/70 uppercase">{project.category}</span>
              <h3 className="font-orbitron text-xl font-bold text-white mt-1">{project.title}</h3>
            </div>
            <span className="text-4xl">{project.emoji}</span>
          </div>

          {/* Metrics */}
          <div className="flex gap-3 flex-wrap">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="px-2 py-1 text-xs font-orbitron border border-red-900/50 text-red-400 rounded"
              >
                {metric}
              </span>
            ))}
          </div>

          {/* Animated corner line */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16"
            animate={{ opacity: hovered ? 1 : 0.3 }}
          >
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <path d="M64 0 L64 64 L0 64" fill="none" stroke={project.color} strokeWidth="1" />
            </svg>
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="px-6 pb-6">
          <p className="text-gray-400 font-rajdhani text-base leading-relaxed mb-5">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-gray-900 border border-gray-700 text-gray-400 font-rajdhani rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="flex items-center gap-2 text-red-500 hover:text-red-400 font-orbitron text-xs tracking-widest uppercase transition-colors duration-300"
            animate={{ x: hovered ? 5 : 0 }}
          >
            Voir le projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>

        {/* Bottom glow on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          animate={{
            background: hovered
              ? `linear-gradient(to right, transparent, ${project.color}, transparent)`
              : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'E-Commerce', 'SaaS Dashboard', 'IA / ML', 'Web3 / 3D'];

  const filtered = filter === 'Tous'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />
      
      {/* Background orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-red-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-red-500 font-orbitron text-sm tracking-widest uppercase">— Portfolio —</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mt-4">
            MES <span className="text-gradient-red">PROJETS</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 font-orbitron text-xs tracking-widest uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-red-600 text-white red-glow-box'
                  : 'border border-gray-700 text-gray-400 hover:border-red-700 hover:text-red-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-red-500/50 text-red-400 font-orbitron text-sm tracking-widest uppercase hover:border-red-500 hover:bg-red-950/30 transition-all duration-300"
          >
            Voir tous les projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
