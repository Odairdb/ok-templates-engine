'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative z-20 bg-mauro-black border-t border-white/5 overflow-hidden" style={{ padding: '120px 24px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Using one of the original site images as a placeholder for Mauro */}
          <Image 
            src="https://maurobenedetti.com.br/wp-content/uploads/2026/01/Cafeicultor-03-site-Mauro-Benedetti.jpg"
            alt="Mauro Benedetti"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mauro-black via-transparent to-transparent opacity-60"></div>
        </motion.div>

        {/* Right Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-mauro-cream leading-tight">
            Uma vida dedicada ao café
          </h2>
          
          <div className="w-16 h-1 bg-mauro-amber"></div>
          
          <p className="text-xl md:text-2xl text-white/80 font-serif italic">
            "Da análise genética à xícara, formando produtores, marcas e negócios mais preparados para o mercado global."
          </p>
          
          <p className="text-lg text-white/60 leading-relaxed font-sans">
            Com mais de 40 anos de experiência, o Benedetti Specialty Coffee conecta conhecimento técnico, mercado e parcerias para levar o café à sua melhor valorização.
          </p>
          
          <button className="px-8 py-4 bg-transparent border border-mauro-amber text-mauro-amber hover:bg-mauro-amber hover:text-mauro-black font-bold uppercase tracking-widest rounded-full transition-colors mt-8">
            Conheça o Especialista
          </button>
        </motion.div>

      </div>
    </section>
  );
}
