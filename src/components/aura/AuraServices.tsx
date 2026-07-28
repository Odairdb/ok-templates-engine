"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheServices = {
  default: [
    { title: "Haircuts", tag: "Premium", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600&auto=format&fit=crop" },
    { title: "Hairstyles", tag: "Eventos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Coloring", tag: "Transformação", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
  ],
  barbearia: [
    { title: "Corte Elite", tag: "Visagismo", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop" },
    { title: "Barboterapia", tag: "Relax", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop" },
    { title: "Química", tag: "Estilo", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop" },
  ],
  salao: [
    { title: "Mechas", tag: "Luminosidade", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop" },
    { title: "Cortes", tag: "Tendência", img: "https://images.unsplash.com/photo-1600948836101-f9ff5141014a?q=80&w=600&auto=format&fit=crop" },
    { title: "Noivas", tag: "Dia da Noiva", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop" },
  ],
  manicure: [
    { title: "Nail Art", tag: "Exclusivo", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=600&auto=format&fit=crop" },
    { title: "Fibras", tag: "Resistência", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop" },
    { title: "Spa dos Pés", tag: "Relaxamento", img: "https://images.unsplash.com/photo-1594910903332-9df7270b2a75?q=80&w=600&auto=format&fit=crop" },
  ]
};

export default function AuraServices({ niche }: { niche: string }) {
  const services = nicheServices[niche as keyof typeof nicheServices] || nicheServices.default;

  return (
    <section className="py-24 bg-[#FDFBF7] relative flex flex-col items-center w-full">
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-16 lg:px-20">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Nossos Serviços</h2>
            <p className="text-gray-600 leading-relaxed font-sans">
              Além de cortes perfeitos e cores radiantes, oferecemos uma gama de serviços completos para garantir que o seu visual esteja sempre impecável e alinhado com a sua essência.
            </p>
          </div>
          <div className="hidden lg:block">
            <a href="#agendar" className="inline-block border-b-2 border-[#1A1A1A] pb-1 text-[#1A1A1A] font-bold text-sm uppercase tracking-widest hover:text-[#8B2626] hover:border-[#8B2626] transition-colors">
              Ver Todos os Serviços
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Floating Tag */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">{service.title}</span>
              </div>
              
              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#C5A880] text-sm font-bold uppercase tracking-widest mb-1">{service.tag}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 lg:hidden text-center">
            <a href="#agendar" className="inline-block border-b-2 border-[#1A1A1A] pb-1 text-[#1A1A1A] font-bold text-sm uppercase tracking-widest">
              Ver Todos os Serviços
            </a>
        </div>
      </div>
    </section>
  );
}
