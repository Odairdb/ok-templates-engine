"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Star, Heart } from 'lucide-react';

const nicheServices = {
  default: [
    { title: "Cortes Premium", desc: "Design especializado para o seu formato de rosto.", icon: Scissors },
    { title: "Tratamentos de Elite", desc: "Produtos de alta tecnologia para máxima saúde capilar.", icon: Sparkles },
    { title: "Experiência VIP", desc: "Um ambiente relaxante desenhado para o seu conforto.", icon: Star },
  ],
  barbearia: [
    { title: "Corte e Visagismo", desc: "Alinhamento perfeito e estudo de visagismo masculino.", icon: Scissors },
    { title: "Barboterapia", desc: "Toalha quente, óleos essenciais e relaxamento total.", icon: Sparkles },
    { title: "Estilo Clássico", desc: "Do old school ao moderno, dominamos a técnica.", icon: Star },
  ],
  salao: [
    { title: "Colorimetria", desc: "Mechas, luzes e coloração com proteção estrutural profunda.", icon: Sparkles },
    { title: "Terapia Capilar", desc: "Tratamentos intensivos para recuperação da saúde dos fios.", icon: Heart },
    { title: "Penteados e Noivas", desc: "Produção completa para o seu grande dia.", icon: Star },
  ],
  manicure: [
    { title: "Nail Art e Alongamento", desc: "Técnicas em gel e fibra de vidro com durabilidade incrível.", icon: Sparkles },
    { title: "Spa dos Pés", desc: "Hidratação profunda e relaxamento para pés cansados.", icon: Heart },
    { title: "Esmaltação Premium", desc: "As melhores marcas e cores da estação com acabamento perfeito.", icon: Star },
  ]
};

export default function AuraServices({ niche }: { niche: string }) {
  const services = nicheServices[niche as keyof typeof nicheServices] || nicheServices.default;

  return (
    <section className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A880] font-bold tracking-widest uppercase text-sm mb-4 block">A Excelência em Cada Detalhe</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Nossos Serviços Especiais</h2>
          <div className="w-24 h-1 bg-[#C5A880] mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(197,168,128,0.1)] transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FDFBF7] border border-[#C5A880]/20 flex items-center justify-center mb-6 group-hover:bg-[#C5A880] transition-colors">
                  <Icon className="w-8 h-8 text-[#C5A880] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
