'use client';

import { motion } from 'framer-motion';

export default function InstitutoSection() {
  return (
    <section 
      className="bg-mauro-dark relative overflow-hidden border-t border-mauro-gold/10 w-full"
      style={{ paddingTop: '150px', paddingBottom: '150px' }} // 150px de respiro (sem apertos)
    >
      
      {/* Container rigorosamente centralizado usando flex para garantir o meio exato da tela */}
      <div 
        className="w-full relative z-10 flex justify-center items-center" 
        style={{ paddingLeft: '8vw', paddingRight: '8vw' }}
      >
        <div className="w-full max-w-[800px] text-center flex flex-col items-center justify-center">
          
          {/* Título Centralizado */}
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-mauro-gold text-sm md:text-base tracking-[0.4em] uppercase font-sans mb-6"
          >
            O Legado
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-mauro-light mb-8 leading-tight"
          >
            Instituto BSC
          </motion.h2>
          
          {/* Texto Centralizado */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-mauro-light/70 font-sans font-light leading-relaxed max-w-2xl"
          >
            Muito além de uma marca, um centro de excelência. Conheça nossa fundação voltada para a educação, pesquisa e preservação do verdadeiro café de origem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16"
          >
            <button className="group relative px-12 py-5 overflow-hidden rounded-full border border-mauro-gold/50 bg-transparent text-mauro-gold font-sans font-medium uppercase tracking-[0.2em] transition-all hover:border-mauro-gold hover:text-mauro-dark">
              <span className="relative z-10">Descubra o Instituto</span>
              <div className="absolute inset-0 h-full w-full bg-mauro-gold transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

