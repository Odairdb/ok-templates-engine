"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheServices = {
  default: [
    { title: "Cortes", tag: "Premium", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop" },
    { title: "Penteados", tag: "Eventos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Coloração", tag: "Transformação", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
  ],
  barbearia: [
    { title: "Corte Elite", tag: "Visagismo", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop" },
    { title: "Barboterapia", tag: "Relax", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop" },
    { title: "Química", tag: "Estilo", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop" },
  ],
  salao: [
    { title: "Cortes", tag: "Premium", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop" },
    { title: "Penteados", tag: "Eventos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Coloração", tag: "Transformação", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
  ],
  manicure: [
    { title: "Nail Art", tag: "Exclusivo", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
    { title: "Fibras", tag: "Resistência", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop" },
    { title: "Spa dos Pés", tag: "Relaxamento", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
  ]
};

export default function AuraServices({ niche }: { niche: string }) {
  const services = nicheServices[niche as keyof typeof nicheServices] || nicheServices.default;

  return (
    <section className="bg-[#FDFBF7] relative flex flex-col items-center w-full" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-16 lg:px-20">
        
        <div className="flex flex-col items-center text-center mb-32" style={{ marginBottom: '80px' }}>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-12">Nossos Serviços</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-sans px-4">
              Além de cortes perfeitos e cores radiantes, oferecemos uma gama de serviços completos para garantir que o seu visual esteja sempre impecável e alinhado com a sua essência.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8" id="servicos">
          {services.map((service, index) => {
            let spanClass = "";
            let aspectClass = "";
            
            if (index === 0) {
              spanClass = "md:col-span-7";
              aspectClass = "aspect-[4/5] md:aspect-auto md:min-h-[550px]";
            } else if (index === 1) {
              spanClass = "md:col-span-5";
              aspectClass = "aspect-[4/5] md:aspect-auto md:min-h-[550px]";
            } else if (index === 2) {
              spanClass = "md:col-span-12";
              aspectClass = "aspect-[4/3] md:aspect-[21/9]";
            }

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${spanClass} ${aspectClass}`}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-sm overflow-hidden" style={{ padding: '8px 20px' }}>
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] relative z-10">{service.tag}</span>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white">{service.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-x-4 group-hover:translate-x-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center" style={{ marginTop: '80px' }}>
            <a href="#agendar" className="inline-flex items-center justify-center bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-black text-xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_30px_rgba(139,38,38,0.6)]" style={{ padding: '20px 48px' }}>
              Ver Todos os Serviços
            </a>
        </div>
      </div>
    </section>
  );
}
