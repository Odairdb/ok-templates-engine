"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  title: string;
  subtitle: string;
  video?: string;
  image?: string;
}

const niches: Record<string, SlideData[]> = {
  default: [
    {
      title: "A Arte\nda Beleza",
      subtitle: "A combinação perfeita entre técnica de ponta e um ambiente desenhado para você. Descubra o estilo que reflete a sua verdadeira essência.",
      video: "/videos/modelo-01-look-red.mp4"
    },
    {
      title: "Cortes de Alta Precisão",
      subtitle: "Tradição e modernidade para um visual impecável. Nossos especialistas estão prontos para transformar o seu look.",
      video: "/videos/modelo-02-look-black.mp4"
    }
  ],
  barbearia: [
    {
      title: "O Visual\nPerfeito",
      subtitle: "Barbearia premium. Tradição, precisão e um ambiente feito exclusivamente para o homem moderno relaxar e cuidar do visual.",
      video: "/videos/corte-cabelo-01.mp4"
    },
    {
      title: "Tradição\ne Estilo",
      subtitle: "Domine a sua presença com um corte impecável e cuidados especiais para a barba e pele.",
      video: "/videos/corte-barba-01.mp4"
    }
  ],
  salao: [
    {
      title: "A Arte\nda Beleza",
      subtitle: "A combinação perfeita entre técnica de ponta e um ambiente desenhado para você. Descubra o estilo que reflete a sua verdadeira essência.",
      video: "/videos/modelo-01-look-red.mp4"
    },
    {
      title: "Cortes de Alta Precisão",
      subtitle: "Tradição e modernidade para um visual impecável. Nossos especialistas estão prontos para transformar o seu look.",
      video: "/videos/modelo-02-look-black.mp4"
    }
  ],
  manicure: [
    {
      title: "Detalhes\nFascinantes",
      subtitle: "Nail art, alongamentos em fibra e cuidado supremo para as suas unhas brilharem em qualquer ocasião.",
      video: "/videos/manicure-01.mp4"
    },
    {
      title: "Beleza\nem Foco",
      subtitle: "O acabamento perfeito que destaca a sua personalidade com muito brilho e sofisticação.",
      video: "/videos/manicure-02.mp4"
    }
  ]
};

export default function AuraHero({ initialNiche }: { initialNiche: string }) {
  const currentNicheData = niches[initialNiche as keyof typeof niches] || niches.default;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentNicheData.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % currentNicheData.length);
      }, 8000); // 8 segundos para dar tempo de ver o loop do vídeo
      return () => clearInterval(interval);
    }
  }, [currentNicheData]);

  const activeSlide = currentNicheData[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`media-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {activeSlide.video ? (
            <video 
              src={activeSlide.video} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={activeSlide.image} 
              alt="Highlight" 
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Overlay Escuro Gradiente para leitura do texto à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-16 lg:px-20 relative z-10 flex flex-col pt-10">
        
        {/* Textos e CTA no Canto Esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg whitespace-pre-line">
                {activeSlide.title}
              </h1>
              
              <p className="text-lg text-white/90 font-sans leading-relaxed mb-12 max-w-md drop-shadow-md">
                {activeSlide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6" style={{ marginTop: '70px' }}>
                <a href="#agendar" className="inline-flex items-center justify-center bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_30px_rgba(139,38,38,0.6)]" style={{ padding: '20px 48px' }}>
                  Agendar Horário
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
