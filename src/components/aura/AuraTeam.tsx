"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheTeam = {
  default: [
    { name: "Olivia Smith", role: "Estilista Sênior", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600&auto=format&fit=crop" },
    { name: "Amelia Brown", role: "Colorista", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { name: "Emily Watson", role: "Maquiadora", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
  ],
  barbearia: [
    { name: "Marcão", role: "Mestre Barbeiro", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=600&auto=format&fit=crop" },
    { name: "Thiago", role: "Especialista em Fades", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
    { name: "Leo", role: "Visagista", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  ],
  salao: [
    { name: "Amanda Silva", role: "Colorimetria Global", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600&auto=format&fit=crop" },
    { name: "Juliana", role: "Especialista em Loiros", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { name: "Roberto", role: "Stylist e Cortes", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
  ]
};

export default function AuraTeam({ niche }: { niche: string }) {
  const team = nicheTeam[niche as keyof typeof nicheTeam] || nicheTeam.default;

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Nossa Equipe</h2>
            <p className="text-gray-600 leading-relaxed font-sans">
              Deixe seu visual nas mãos de artistas qualificados e criativos. Nossa equipe é treinada internacionalmente para entregar resultados perfeitos.
            </p>
          </div>
          <div>
            <a href="#equipe" className="px-8 py-3 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              Junte-se ao time →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-[#EBE7DF] relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-90 group-hover:opacity-100"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="w-12 h-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#8B2626] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 font-bold text-xs">
                    IG
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-1">{member.name}</h3>
                <p className="text-gray-500 font-sans">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
