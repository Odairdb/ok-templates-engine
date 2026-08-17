'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-COOXUPE-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-DUPIER-MAURO-BENEDETTI-.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-ORFEU-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-OURO-DE-KAFFA-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-PAB-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-SANTO-GRAO-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-SYNGENTA-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-UCC-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-CLIENTES-UCOM-MAURO-BENEDETTI.png',
  'https://maurobenedetti.com.br/wp-content/uploads/2025/12/LOGO-LA-DO-DIVINO.png'
];

export default function PartnersMarquee() {
  return (
    <section className="bg-mauro-darkbrown overflow-hidden border-t border-white/5" style={{ padding: '120px 24px' }}>
      <div className="mb-16 text-center" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 className="text-3xl font-serif text-mauro-cream">Alguns Parceiros e Clientes:</h2>
      </div>

      <div className="relative w-full flex items-center h-32">
        {/* Left and Right Fade for smooth edge blending */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-mauro-darkbrown to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-mauro-darkbrown to-transparent z-10"></div>

        {/* Marquee Animation */}
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap absolute left-0"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Double array for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="relative h-20 w-32 md:w-48 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image 
                src={logo} 
                alt="Partner Logo" 
                fill 
                className="object-contain" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
