'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CoffeeSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Strict scroll phases - Absolutely NO overlap
  // Beat A: 0% - 15% (Title)
  const beatAOpacity = useTransform(scrollYProgress, [0, 0.10, 0.12, 0.15], [1, 1, 0, 0]);
  const beatAY = useTransform(scrollYProgress, [0, 0.10, 0.12, 0.15], [0, -50, -100, -100]);

  // Beat B: 25% - 40% (Corporate)
  const beatBOpacity = useTransform(scrollYProgress, [0.20, 0.25, 0.35, 0.40], [0, 1, 1, 0]);
  const beatBY = useTransform(scrollYProgress, [0.20, 0.25, 0.35, 0.40], [50, 0, -50, -100]);

  // Beat C: 50% - 65% (40 Years)
  const beatCOpacity = useTransform(scrollYProgress, [0.45, 0.50, 0.60, 0.65], [0, 1, 1, 0]);
  const beatCY = useTransform(scrollYProgress, [0.45, 0.50, 0.60, 0.65], [50, 0, -50, -100]);

  // Beat D: 75% - 100% (CTA)
  const beatDOpacity = useTransform(scrollYProgress, [0.70, 0.75, 1, 1], [0, 1, 1, 1]);
  const beatDY = useTransform(scrollYProgress, [0.70, 0.75, 1, 1], [50, 0, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-mauro-dark">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-mauro-dark">
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/mauro/video-hero-01.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-mauro-dark mix-blend-multiply opacity-50 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-mauro-dark/80 via-transparent to-mauro-dark z-0 pointer-events-none"></div>

        {/* Global Centered Container to PREVENT lateral sticking */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <div className="w-full max-w-5xl relative h-[600px] flex items-center justify-center">
            
            {/* Beat A - Title */}
            <motion.div 
              style={{ opacity: beatAOpacity, y: beatAY }}
              className="absolute w-full flex flex-col items-center justify-center text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-mauro-light drop-shadow-2xl tracking-tight">
                Do Genoma à Xícara
              </h1>
              <p className="mt-6 text-lg md:text-2xl text-mauro-gold font-serif italic tracking-wider">
                Por Mauro Benedetti.
              </p>
            </motion.div>

            {/* Beat B */}
            <motion.div 
              style={{ opacity: beatBOpacity, y: beatBY }}
              className="absolute w-full flex flex-col items-center md:items-start justify-center"
            >
              <div className="max-w-xl border-l border-mauro-gold pl-8 md:pl-12">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-mauro-light drop-shadow-lg leading-tight">
                  Presentes Corporativos <br/> <span className="italic text-mauro-gold">Inesquecíveis</span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-mauro-light/80 leading-relaxed font-sans font-light">
                  Mais do que caféé, entregamos prestígio. Lotes exclusivos desenhados para Diretores e CEOs surpreenderem os parceiros mais vitais de seus negócios.
                </p>
              </div>
            </motion.div>

            {/* Beat C */}
            <motion.div 
              style={{ opacity: beatCOpacity, y: beatCY }}
              className="absolute w-full flex flex-col items-center md:items-end justify-center text-left md:text-right"
            >
              <div className="max-w-xl border-l md:border-l-0 md:border-r border-mauro-gold pl-8 md:pl-0 md:pr-12">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-mauro-light drop-shadow-lg leading-tight">
                  40 Anos de <br/> <span className="italic text-mauro-gold">Maestria</span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-mauro-light/80 leading-relaxed font-sans font-light">
                  O controle milimétrico de cada etapa para revelar as notas sensoriais mais complexas. Uma assinatura de qualidade que eleva o valor de cada embalagem.
                </p>
              </div>
            </motion.div>

            {/* Beat D */}
            <motion.div 
              style={{ opacity: beatDOpacity, y: beatDY }}
              className="absolute w-full flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-mauro-light drop-shadow-2xl">
                Pronto para degustar o luxo?
              </h2>
              <button className="mt-10 px-10 py-5 bg-transparent border border-mauro-gold text-mauro-gold hover:bg-mauro-gold hover:text-mauro-dark font-sans font-medium uppercase tracking-[0.2em] transition-all duration-500 pointer-events-auto cursor-pointer">
                Fale com Especialista
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

