'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax para a luz de fundo também
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glassCardClass = `w-full max-w-[600px] flex flex-col space-y-6 rounded-3xl !p-12 liquid-glass-strong z-10`;

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#050403] border-t border-mauro-gold/10 overflow-hidden"
      style={{ marginTop: '100px', paddingTop: '100px', paddingBottom: '100px' }}
    >
      
      {/* BACKGROUND ANIMADO: Orbes Flutuantes de Luxo - VERSíO INTENSA */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <motion.div 
          animate={{ 
            x: [0, 250, -200, 0], 
            y: [0, -250, 150, 0],
            scale: [1, 1.4, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 300]) }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-mauro-amber/40 rounded-full blur-[100px]"
        />
        
        <motion.div 
          animate={{ 
            x: [0, -300, 250, 0], 
            y: [0, 300, -200, 0],
            scale: [1, 0.8, 1.5, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [300, -300]) }}
          className="absolute top-[30%] right-[0%] w-[500px] h-[500px] bg-white/20 rounded-full blur-[90px]"
        />

        <motion.div 
          animate={{ 
            x: [0, 200, -300, 0], 
            y: [0, -150, 250, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[30%] w-[800px] h-[400px] bg-mauro-gold/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Usando items-stretch para garantir que a coluna da esquerda tenha a mesma altura da coluna da direita */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-stretch gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: STICKY VIDEO & SELO */}
        <div className="w-full md:w-5/12 h-full relative z-10 flex flex-col justify-between">
          
          {/* O container que limita a viagem do vídeo sticky. O flex-1 empurra o selo para baixo. */}
          <div className="flex-1 w-full pb-[150px]">
            <div className="sticky top-32 flex items-start justify-center w-full">
              <div 
                className="relative w-full max-w-[420px] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-mauro-gold/30"
                style={{ aspectRatio: '9/16' }}
              >
                <video
                  src="/mauro/video-06.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* O Selo Dourado ancorado no meio do espaço vazio final */}
          <div className="hidden md:flex w-full h-[350px] items-center justify-center shrink-0">
            <motion.img 
              src="/mauro/SELO-MB-01.png" 
              alt="Selo Mauro Benedetti"
              className="w-64 h-64 object-contain opacity-100 drop-shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>

        </div>

        {/* RIGHT COLUMN: CARDS */}
        <div className="w-full md:w-7/12 flex flex-col items-start gap-16 z-20">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={glassCardClass}
          >
            <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
              O Mestre do Genoma
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-md">
              Uma vida <span className="italic text-mauro-gold">dedicada</span> ao café.
            </h2>
            <div className="w-full h-[1px] bg-white/20 my-2"></div>
            <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed">
              Com mais de 40 anos de experiência, o Benedetti Specialty Coffee conecta conhecimento técnico, mercado e parcerias estratégicas B2B para levar o café à sua máxima valorização.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={glassCardClass}
          >
            <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
              Visão Sistêmica
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-md">
              Da genética <br/> à <span className="italic text-mauro-gold">xícara perfeita</span>.
            </h2>
            <div className="w-full h-[1px] bg-white/20 my-2"></div>
            <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed">
              Formando produtores, desenhando marcas e preparando negócios para o mercado global. Elevamos presentes corporativos a um status de arte em forma de sabor.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={glassCardClass}
          >
            <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
              Networking
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight drop-shadow-md">
              Sua marca na <br/> <span className="italic text-mauro-gold">alta cúpula</span>.
            </h2>
            <div className="w-full h-[1px] bg-white/20 my-2"></div>
            <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed mb-6">
              Quando você presenteia um parceiro vital com um lote de Mauro Benedetti, você não está entregando café. Está entregando prestígio, exclusividade e uma experiência sensorial inesquecível.
            </p>
            <button className="self-start group flex items-center gap-6 pb-2 border-b border-white/40 hover:border-white transition-colors mt-2">
              <span className="text-white font-sans tracking-widest uppercase text-xs font-bold group-hover:text-mauro-gold transition-colors">
                Conheça o Especialista
              </span>
              <span className="w-10 h-[2px] bg-white group-hover:bg-mauro-gold group-hover:w-16 transition-all duration-300"></span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

