"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheServices = {
  default: [
    { title: "Design de Sobrancelha", tag: "Estética", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop" },
    { title: "Penteados", tag: "Eventos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Cortes", tag: "Premium", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" },
    { title: "Coloração", tag: "Transformação", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
    { title: "Maquiagem", tag: "Beleza", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" },
  ],
  barbearia: [
    { title: "Design de Barba", tag: "Clássico", img: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=600&auto=format&fit=crop" },
    { title: "Barboterapia", tag: "Relax", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop" },
    { title: "Corte Elite", tag: "Visagismo", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" },
    { title: "Química", tag: "Estilo", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop" },
    { title: "Acabamento", tag: "Detalhes", img: "https://images.unsplash.com/photo-1512684803934-2e213ab4d57c?q=80&w=600&auto=format&fit=crop" },
  ],
  salao: [
    { title: "Escova", tag: "Alinhamento", img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop" },
    { title: "Penteados", tag: "Eventos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Cortes", tag: "Premium", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" },
    { title: "Coloração", tag: "Transformação", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop" },
    { title: "Maquiagem", tag: "Beleza", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" },
  ],
  manicure: [
    { title: "Spa das Mãos", tag: "Cuidado", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=600&auto=format&fit=crop" },
    { title: "Fibras", tag: "Resistência", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600&auto=format&fit=crop" },
    { title: "Nail Art", tag: "Exclusivo", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" },
    { title: "Spa dos Pés", tag: "Relaxamento", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" },
    { title: "Esmaltação", tag: "Cores", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop" },
  ]
};

export default function AuraServices({ niche }: { niche: string }) {
  const services = nicheServices[niche as keyof typeof nicheServices] || nicheServices.default;

  return (
    <section className="bg-[#FDFBF7] relative flex flex-col items-center w-full" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-16 lg:px-20">
        
        <div className="flex flex-col items-center text-center mb-24" style={{ marginBottom: '60px' }}>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-8">Nossos Serviços</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-sans px-4">
              Além de cortes perfeitos e cores radiantes, oferecemos uma gama de serviços completos para garantir que o seu visual esteja sempre impecável e alinhado com a sua essência.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px] lg:h-[700px]" id="servicos">
          {services.map((service, index) => {
            let layoutClass = "";
            
            // Lógica do Grid:
            // index 0: Esquerda Topo
            // index 1: Esquerda Baixo
            // index 2: Centro (Grande, 2 linhas)
            // index 3: Direita Topo
            // index 4: Direita Baixo
            
            if (index === 0) layoutClass = "md:col-start-1 md:row-start-1";
            if (index === 1) layoutClass = "md:col-start-1 md:row-start-2";
            if (index === 2) layoutClass = "md:col-start-2 md:row-start-1 md:row-span-2";
            if (index === 3) layoutClass = "md:col-start-3 md:row-start-1";
            if (index === 4) layoutClass = "md:col-start-3 md:row-start-2";

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[250px] md:min-h-0 ${layoutClass}`}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Text overlay - smaller and more elegant */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-[0.15em] mb-1 drop-shadow-md">{service.tag}</span>
                  <h3 className={`font-serif text-white drop-shadow-md ${index === 2 ? 'text-3xl' : 'text-xl'}`}>{service.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center" style={{ marginTop: '80px' }}>
            <a href="#agendar" className="inline-flex items-center justify-center bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_30px_rgba(139,38,38,0.6)]" style={{ padding: '20px 48px' }}>
              Ver Todos os Serviços
            </a>
        </div>
      </div>
    </section>
  );
}
