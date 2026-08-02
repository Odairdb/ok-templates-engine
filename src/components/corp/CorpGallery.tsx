"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const nicheImages = {
  default: [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  ],
  arquitetura: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop"
  ],
  construtora: [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop"
  ],
  engenharia: [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  ]
};

export default function CorpGallery({ niche }: { niche: string }) {
  const images = nicheImages[niche as keyof typeof nicheImages] || nicheImages.default;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const transforms = [y1, y2, y3, y4];

  return (
    <section id="portfolio" ref={containerRef} className="bg-[#FFFFFF] relative flex flex-col items-center w-full overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '160px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-16 lg:px-20 relative z-10">
        
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '120px', paddingTop: '40px' }}>
          <div className="max-w-3xl">
            <span className="text-[#8D99AE] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nosso Legado</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#0B132B] mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>Corps de Arte Reais</h2>
            <p className="text-[#1C2541] text-lg md:text-xl max-w-2xl mx-auto">
              Nossa assinatura está impressa na qualidade dos acabamentos e na solidez de cada fundação. Conheça nossos trabalhos recentes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" style={{ marginTop: '160px' }}>
          {images.map((src, index) => (
            <motion.div 
              key={index}
              style={{ y: transforms[index] }}
              className={`relative overflow-hidden rounded-sm group shadow-2xl ${
                index % 2 === 0 ? 'aspect-[3/4] mt-0' : 'aspect-[4/5] mt-12 md:mt-24'
              }`}
            >
              <img 
                src={src} 
                alt={`Corp ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-[#0B132B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]">
                 <span className="text-[#FFFFFF] font-serif italic text-2xl tracking-widest drop-shadow-lg" style={{ fontFamily: 'Times New Roman, serif' }}>Ver Detalhes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

