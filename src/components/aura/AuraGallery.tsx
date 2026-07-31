"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const nicheImages = {
  default: [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
  ],
  barbearia: [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=800&auto=format&fit=crop"
  ],
  salao: [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
  ],
  manicure: [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
  ]
};

export default function AuraGallery({ niche }: { niche: string }) {
  const images = nicheImages[niche as keyof typeof nicheImages] || nicheImages.default;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Gerar velocidades de scroll diferentes para criar o efeito parallax (Awwwards style)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const transforms = [y1, y2, y3, y4];

  return (
    <section id="portfolio" ref={containerRef} className="bg-white relative flex flex-col items-center w-full overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '160px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 lg:px-20 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-32 md:mb-48 pt-10">
          <div className="max-w-3xl">
            <span className="text-[#C5A880] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nosso Legado</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] mb-8">Obras de Arte Reais</h2>
            <p className="text-gray-500 text-lg md:text-xl font-sans max-w-2xl mx-auto">
              Cada cliente é uma tela em branco. Confira o resultado do nosso compromisso inegociável com a excelência estética.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              style={{ y: transforms[index] }}
              className={`relative overflow-hidden rounded-[2rem] group shadow-2xl ${
                index % 2 === 0 ? 'aspect-[3/4] mt-0' : 'aspect-[4/5] mt-12 md:mt-24'
              }`}
            >
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]">
                 <span className="text-white font-serif italic text-2xl tracking-widest drop-shadow-lg">Ver Detalhes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
