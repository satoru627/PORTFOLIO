import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', icon: '🐙', href: 'https://github.com' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
  { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
  { name: 'Dribbble', icon: '🏀', href: 'https://dribbble.com' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-900 py-12 bg-black">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-orbitron text-xl font-black tracking-widest"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">DEV</span>
            <span className="text-red-500">.</span>
            <span className="text-gradient-red">FOLIO</span>
          </motion.a>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center border border-gray-800 hover:border-red-500/50 text-gray-500 hover:text-red-400 transition-all duration-300 rounded-lg text-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-rajdhani text-center">
            <span className="text-red-500">©</span> 2024 Alex Martin. Tous droits réservés.
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-gray-900/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs font-rajdhani tracking-wider">
            Conçu & développé avec <span className="text-red-600">♥</span> en React, Three.js & Tailwind CSS
          </p>
          <div className="flex gap-6 text-gray-700 text-xs font-rajdhani tracking-wider">
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Confidentialité</a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
