'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InstitutoSection() {
  return (
    <section className="bg-mauro-black relative overflow-hidden" style={{ padding: '120px 24px' }}>
      
      {/* Decorative Background Logo/Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-4xl">
        <Image 
          src="https://maurobenedetti.com.br/wp-content/uploads/2025/12/icone-ok-comunica-marca-dagua-1.png"
          alt="Watermark"
          width={800}
          height={800}
          className="w-full h-auto"
        />
      </div>

      <div className="text-center relative z-10" style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-block"
        >
          <Image 
            src="https://maurobenedetti.com.br/wp-content/uploads/2026/01/MAURO-BENEDETTI-SPECIALTY-COFFEE.png"
            alt="Instituto BSC"
            width={300}
            height={300}
            className="w-48 md:w-64 h-auto rounded-full mx-auto"
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-mauro-amber mb-8"
        >
          O Instituto BSC
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-mauro-cream font-sans max-w-3xl mx-auto leading-relaxed"
        >
          Conheça o Instituto Benedetti Specialty Coffee. Sua importância, objetivos e benefícios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button className="px-10 py-5 bg-mauro-amber text-mauro-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300">
            Descubra o Instituto
          </button>
        </motion.div>

      </div>
    </section>
  );
}
