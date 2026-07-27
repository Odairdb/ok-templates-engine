"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheTeam = {
  default: [
    { name: "Especialista 1", role: "Estilista Sênior", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop" },
    { name: "Especialista 2", role: "Colorista", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop" },
    { name: "Especialista 3", role: "Maquiadora", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  ],
  barbearia: [
    { name: "Marcão", role: "Mestre Barbeiro", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=400&auto=format&fit=crop" },
    { name: "Thiago", role: "Especialista em Fades", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
    { name: "Leo", role: "Visagista", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
  ],
  salao: [
    { name: "Amanda Silva", role: "Colorimetria Global", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop" },
    { name: "Juliana", role: "Especialista em Loiros", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&auto=format&fit=crop" },
    { name: "Roberto", role: "Stylist e Cortes", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
  ]
};

export default function AuraTeam({ niche }: { niche: string }) {
  const team = nicheTeam[niche as keyof typeof nicheTeam] || nicheTeam.default;

  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A880] font-bold tracking-widest uppercase text-sm mb-4 block">Quem faz a mágica</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Nossos Especialistas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#C5A880] uppercase tracking-wider text-xs font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
