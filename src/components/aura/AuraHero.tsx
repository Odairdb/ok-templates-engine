"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const niches = {
  default: [
    {
      title: "Elevando o Padrão da Beleza",
      subtitle: "A combinação perfeita entre técnica de ponta e um ambiente desenhado para você.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Cortes de Alta Precisão",
      subtitle: "Tradição e modernidade para um visual impecável.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  barbearia: [
    {
      title: "Excelência Masculina",
      subtitle: "Barbearia premium. Tradição, precisão e um ambiente feito para você relaxar.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  salao: [
    {
      title: "Transformação Completa",
      subtitle: "Especialistas em mechas, cortes modernos e tratamentos de alto padrão.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  manicure: [
    {
      title: "Detalhes que Fascinam",
      subtitle: "Nail art, alongamentos e cuidado supremo para suas unhas.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2000&auto=format&fit=crop"
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
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentNicheData]);

  const activeSlide = currentNicheData[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={activeSlide.image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-12">
        <motion.h1
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg"
        >
          {activeSlide.title}
        </motion.h1>

        <motion.p
          key={`subtitle-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed mb-10 drop-shadow-md"
        >
          {activeSlide.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#agendar" className="px-10 py-5 bg-[#C5A880] hover:bg-[#B39366] text-white rounded-full font-bold text-lg transition-all shadow-lg uppercase tracking-widest inline-flex items-center gap-3">
            Agendar Horário
          </a>
        </motion.div>
      </div>
    </section>
  );
}
