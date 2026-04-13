import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React / Next.js', level: 95, icon: '⚛️' },
  { name: 'TypeScript', level: 90, icon: '🔷' },
  { name: 'Three.js / WebGL', level: 85, icon: '🎮' },
  { name: 'Node.js / Express', level: 88, icon: '🟢' },
  { name: 'CSS / Tailwind', level: 92, icon: '🎨' },
  { name: 'UI/UX Design', level: 80, icon: '✏️' },
  { name: 'PostgreSQL', level: 82, icon: '🐘' },
  { name: 'Docker / DevOps', level: 75, icon: '🐳' },
];

const tools = [
  'VS Code', 'Figma', 'Blender', 'Git', 'Linux', 'AWS', 'GraphQL', 'Redux',
  'Prisma', 'Framer Motion', 'GSAP', 'Webpack',
];

function SkillBar({ skill, index, isInView }: { skill: typeof skills[0], index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-white font-semibold font-rajdhani tracking-wide">{skill.name}</span>
        </div>
        <span className="text-red-500 font-orbitron text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full progress-bar-red rounded-full relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full shadow-lg shadow-red-500/50" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function HexSkill({ tool, index, isInView }: { tool: string, index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 + 0.5 }}
      whileHover={{ scale: 1.1, y: -4 }}
      className="px-4 py-2 border border-red-900/50 bg-red-950/20 hover:border-red-500 hover:bg-red-900/30 transition-all duration-300 text-gray-400 hover:text-red-300 text-sm font-rajdhani font-semibold tracking-wider cursor-default"
    >
      {tool}
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-orbitron text-sm tracking-widest uppercase">— Expertise —</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mt-4">
            MES <span className="text-gradient-red">COMPÉTENCES</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-orbitron text-lg text-gray-400 uppercase tracking-widest mb-8 border-l-2 border-red-500 pl-4"
            >
              Technologies
            </motion.h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} isInView={isInView} />
            ))}
          </div>

          {/* Right Side */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-orbitron text-lg text-gray-400 uppercase tracking-widest mb-8 border-l-2 border-red-500 pl-4"
            >
              Outils & Frameworks
            </motion.h3>

            <div className="flex flex-wrap gap-3 mb-12">
              {tools.map((tool, i) => (
                <HexSkill key={tool} tool={tool} index={i} isInView={isInView} />
              ))}
            </div>

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-dark border border-gray-800 rounded-lg p-6 font-mono text-sm overflow-hidden relative"
            >
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-1 text-xs">
                <p><span className="text-red-500">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-green-400">passion</span>: <span className="text-yellow-300">"Infinie"</span>,</p>
                <p className="pl-4"><span className="text-green-400">creativity</span>: <span className="text-yellow-300">"Maximale"</span>,</p>
                <p className="pl-4"><span className="text-green-400">coffee</span>: <span className="text-yellow-300">"☕ * Infinity"</span>,</p>
                <p className="pl-4"><span className="text-green-400">bugs</span>: <span className="text-red-400">0</span>,</p>
                <p className="pl-4"><span className="text-green-400">solutions</span>: <span className="text-red-400">Infinity</span>,</p>
                <p>{'}'}</p>
                <p className="mt-2"><span className="text-gray-500">// Always learning, always growing</span></p>
              </div>
              <div className="absolute bottom-2 right-4 text-gray-700 text-xs">alex.ts</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
