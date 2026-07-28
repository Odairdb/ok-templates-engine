"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const niches = {
  default: [
    {
      title: "Elevando o Padrão da Beleza",
      subtitle: "A combinação perfeita entre técnica de ponta e um ambiente desenhado para você. Descubra o estilo que reflete a sua verdadeira essência.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "New Arrivals",
      badgeSubtitle: "Produtos Premium"
    },
    {
      title: "Cortes de Alta Precisão",
      subtitle: "Tradição e modernidade para um visual impecável. Nossos especialistas estão prontos para transformar o seu look.",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Especialistas",
      badgeSubtitle: "Equipe Renomada"
    }
  ],
  barbearia: [
    {
      title: "O Visual Que Você Merece",
      subtitle: "Barbearia premium. Tradição, precisão e um ambiente feito exclusivamente para o homem moderno relaxar e cuidar do visual.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Cortes Fades",
      badgeSubtitle: "Alta Precisão"
    },
    {
      title: "Tradição e Estilo Único",
      subtitle: "Domine a sua presença com um corte impecável e cuidados especiais para a barba e pele.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Barboterapia",
      badgeSubtitle: "Toalha Quente"
    }
  ],
  salao: [
    {
      title: "Descubra o Seu Melhor Estilo",
      subtitle: "Especialistas em mechas, cortes modernos e tratamentos de alto padrão. Um momento de luxo dedicado à sua autoestima.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Novas Cores",
      badgeSubtitle: "Tendência 2024"
    },
    {
      title: "Renovação e Brilho Intenso",
      subtitle: "Técnicas avançadas de colorimetria para destacar os seus traços e iluminar a sua beleza natural.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Cronograma",
      badgeSubtitle: "Saúde Capilar"
    }
  ],
  manicure: [
    {
      title: "Detalhes que Fascinam",
      subtitle: "Nail art, alongamentos em fibra e cuidado supremo para as suas unhas brilharem em qualquer ocasião.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Nail Art",
      badgeSubtitle: "Design Exclusivo"
    },
    {
      title: "Elegância em Suas Mãos",
      subtitle: "Unhas perfeitamente esculpidas com materiais de alta durabilidade e acabamento impecável.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1200&auto=format&fit=crop",
      badgeTitle: "Fibra de Vidro",
      badgeSubtitle: "Resistência Máxima"
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
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentNicheData]);

  const activeSlide = currentNicheData[currentIndex];

  return (
    <section className="relative w-full min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-0 flex items-center bg-[#FDFBF7] overflow-hidden">
      
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A880]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Lado Esquerdo: Textos e CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A1A1A] mb-6 leading-[1.1] tracking-tight">
                {activeSlide.title}
              </h1>
              
              <p className="text-lg text-gray-600 font-sans leading-relaxed mb-10 max-w-md">
                {activeSlide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#agendar" className="px-8 py-4 bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-bold text-sm transition-all shadow-xl shadow-[#8B2626]/20 uppercase tracking-widest">
                  Agendar Horário
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lado Direito: Imagem Grande e Elementos Flutuantes */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[750px] flex items-end lg:items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl"
            >
              <img 
                src={activeSlide.image} 
                alt="Highlight" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Glassmorphism Badge 1 */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`badge-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-10 left-[-20px] lg:left-[-60px] bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
            >
              <div className="w-12 h-12 rounded-full bg-[#C5A880] flex items-center justify-center text-white font-serif italic text-xl">
                A
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{activeSlide.badgeTitle}</p>
                <p className="text-[#1A1A1A] font-serif font-bold">{activeSlide.badgeSubtitle}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Join our team / Client count pseudo-element */}
          <div className="absolute top-10 right-[-10px] lg:right-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Client" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop" alt="Client" />
              <img className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop" alt="Client" />
            </div>
            <span className="text-xs font-bold text-gray-700">+10k Clientes</span>
          </div>

        </div>
      </div>
    </section>
  );
}
