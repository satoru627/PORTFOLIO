import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'alex.martin@portfolio.dev', link: 'mailto:alex.martin@portfolio.dev' },
  { icon: '📱', label: 'Téléphone', value: '+33 6 12 34 56 78', link: 'tel:+33612345678' },
  { icon: '📍', label: 'Localisation', value: 'Paris, France', link: '#' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexmartin', link: 'https://linkedin.com' },
];

function GlobeAnimation() {
  return (
    <div className="relative flex items-center justify-center h-full" style={{ perspective: '600px' }}>
      {/* Outer ring */}
      <div
        style={{
          position: 'absolute',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          border: '1px solid rgba(230,57,70,0.6)',
          animation: 'globeRing1 6s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      />
      {/* Middle ring */}
      <div
        style={{
          position: 'absolute',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: '1px solid rgba(155,28,28,0.5)',
          animation: 'globeRing2 4s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      />
      {/* Inner sphere glow */}
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(230,57,70,0.5), rgba(155,28,28,0.3), rgba(0,0,0,0.8))',
          border: '1px solid rgba(230,57,70,0.8)',
          boxShadow: '0 0 20px rgba(230,57,70,0.4), inset 0 0 20px rgba(230,57,70,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
        }}
      >
        🌐
      </div>
      {/* Orbiting dot */}
      <div
        style={{
          position: 'absolute',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#e63946',
          boxShadow: '0 0 8px #e63946',
          animation: 'orbitDot 3s linear infinite',
          transformOrigin: '0 0',
        }}
      />
      <style>{`
        @keyframes globeRing1 {
          0% { transform: rotateY(0deg) rotateX(20deg); }
          100% { transform: rotateY(360deg) rotateX(20deg); }
        }
        @keyframes globeRing2 {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(-360deg); }
        }
        @keyframes orbitDot {
          0% { transform: rotate(0deg) translateX(110px); }
          100% { transform: rotate(360deg) translateX(110px); }
        }
      `}</style>
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-900/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-orbitron text-sm tracking-widest uppercase">— Contact —</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mt-4">
            TRAVAILLONS <span className="text-gradient-red">ENSEMBLE</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6" />
          <p className="text-gray-400 font-rajdhani text-lg mt-6 max-w-2xl mx-auto">
            Vous avez un projet ambitieux ? Je suis disponible pour de nouvelles collaborations.
            Contactez-moi et donnons vie à vos idées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Info + Animation */}
          <div>
            {/* Globe Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-64 mb-10"
            >
              <GlobeAnimation />
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8, borderColor: '#e63946' }}
                  className="flex items-center gap-4 p-4 glass-dark border border-gray-800 rounded-lg group transition-all duration-300"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs font-orbitron tracking-widest uppercase">{info.label}</div>
                    <div className="text-white font-rajdhani font-semibold group-hover:text-red-400 transition-colors duration-300">{info.value}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-700 group-hover:text-red-500 ml-auto transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-500 text-xs font-orbitron tracking-widest uppercase mb-2">Nom</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 focus:border-red-500 text-white px-4 py-3 rounded-lg outline-none transition-colors duration-300 font-rajdhani placeholder-gray-600"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-orbitron tracking-widest uppercase mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 focus:border-red-500 text-white px-4 py-3 rounded-lg outline-none transition-colors duration-300 font-rajdhani placeholder-gray-600"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-orbitron tracking-widest uppercase mb-2">Sujet</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 focus:border-red-500 text-white px-4 py-3 rounded-lg outline-none transition-colors duration-300 font-rajdhani placeholder-gray-600"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-orbitron tracking-widest uppercase mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-gray-900/50 border border-gray-700 focus:border-red-500 text-white px-4 py-3 rounded-lg outline-none transition-colors duration-300 font-rajdhani placeholder-gray-600 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-orbitron text-sm tracking-widest uppercase transition-all duration-500 ${
                  sent ? 'bg-green-700 text-white' : 'bg-red-600 hover:bg-red-500 text-white red-glow-box'
                }`}
              >
                {sent ? '✅ Message envoyé !' : '🚀 Envoyer le message'}
              </motion.button>

              <p className="text-gray-600 text-xs text-center font-rajdhani">
                Je réponds généralement dans les <span className="text-red-500">24 heures</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
