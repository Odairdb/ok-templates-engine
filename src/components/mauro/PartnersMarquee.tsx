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
    <section 
      className="bg-white overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '150px' }} // Respiro exato de 150px no topo e na base
    >
      <div className="mb-20 text-center max-w-[1400px] mx-auto px-6">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-mauro-gold text-xs md:text-sm tracking-[0.4em] uppercase font-sans mb-4"
        >
          Confiança Global
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          // Texto alterado para escuro já que o fundo agora é branco
          className="text-3xl md:text-5xl font-serif text-[#050403]"
        >
          Marcas que assinam conosco.
        </motion.h2>
      </div>

      <div className="relative w-full flex items-center h-32 md:h-48 opacity-100">
        {/* Esmaecimento nas bordas agora em BRANCO para disfarçar a entrada dos logos no bg-white */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Animation */}
        <motion.div 
          className="flex gap-20 md:gap-40 items-center whitespace-nowrap absolute left-0"
          animate={{ x: [0, -4000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          }}
        >
          {/* Loop contínuo */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            // Aumentei o tamanho base em +50% (md:h-36 md:w-72) para dar mais destaque
            <div key={index} className="relative h-28 w-44 md:h-36 md:w-72 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out cursor-pointer">
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
