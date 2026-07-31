"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PlinShowcase({ niche, templateType }: { niche: string, templateType: string }) {
  // Map niche to business name for a dynamic transition
  const getBusinessName = () => {
    switch(niche) {
      case 'barbearia': return 'Sua Barbearia';
      case 'salao': return 'Seu Salão';
      case 'manicure': return 'Seu Espaço';
      default: return 'Seu Negócio';
    }
  };

  const businessName = getBusinessName();

  return (
    <section className="bg-[#0A1128] text-white relative overflow-hidden flex flex-col items-center justify-start pt-32 pb-0">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF0054] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10 px-6 md:px-10">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#FF0054] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block"
        >
          {businessName} já tem agendamento online?
        </motion.span>
        
        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-[72px] font-black mb-8 leading-[1.1] tracking-tight drop-shadow-xl"
        >
          Mais do que um Site. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">O Controle Total.</span>
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Esqueça as planilhas manuais. Nossos sites vêm equipados com a inteligência do <strong>Sistema Plin</strong>. Gerencie agendamentos, clientes e fluxo de caixa em um painel magistralmente integrado.
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20 md:mb-32"
        >
          <a href="https://wa.me/5531973516770?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Sistema%20Plin%20e%20os%20templates%20de%20sites!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] px-10 py-5">
            Testar Sistema Plin <ArrowRight className="w-5 h-5 text-[#FF0054]" />
          </a>
        </motion.div>
      </div>

      {/* 3D Mockup */}
      <div className="w-full relative z-20 flex justify-center mt-auto" style={{ perspective: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 150, rotateX: 25 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1100px] px-4 md:px-10 translate-y-[2%]"
        >
          <div className="bg-black/40 border border-white/10 rounded-t-3xl md:rounded-t-[2.5rem] p-3 md:p-6 backdrop-blur-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
             {/* Inner Glow to make it pop */}
             <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 pointer-events-none"></div>
             
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Dashboard Mockup" 
              className="w-full h-auto object-cover rounded-t-xl md:rounded-t-3xl shadow-2xl opacity-90 border-t border-white/20" 
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
