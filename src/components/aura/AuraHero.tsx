"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const niches = {
  default: [
    {
      title: "Elevando\no Padrão da Beleza",
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
      title: "O Visual Que Você Merece",
      subtitle: "Barbearia premium. Tradição, precisão e um ambiente feito exclusivamente para o homem moderno relaxar e cuidar do visual.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Tradição e Estilo Único",
      subtitle: "Domine a sua presença com um corte impecável e cuidados especiais para a barba e pele.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  salao: [
    {
      title: "Descubra o Seu Melhor Estilo",
      subtitle: "Especialistas em mechas, cortes modernos e tratamentos de alto padrão. Um momento de luxo dedicado à sua autoestima.",
      video: "/videos/modelo-01-look-red.mp4"
    },
    {
      title: "Renovação e Brilho Intenso",
      subtitle: "Técnicas avançadas de colorimetria para destacar os seus traços e iluminar a sua beleza natural.",
      video: "/videos/modelo-02-look-black.mp4"
    }
  ],
  manicure: [
    {
      title: "Detalhes que Fascinam",
      subtitle: "Nail art, alongamentos em fibra e cuidado supremo para as suas unhas brilharem em qualquer ocasião.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2000&auto=format&fit=crop"
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

              <div className="flex flex-wrap items-center gap-6" style={{ marginTop: '80px' }}>
                <a href="#agendar" className="inline-flex items-center justify-center bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-black text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_30px_rgba(139,38,38,0.6)]" style={{ padding: '24px 64px' }}>
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
