"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheTeam = {
  default: [
    { name: "Carla Santos", role: "Estilista Sênior", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop", desc: "Com mais de 10 anos de experiência na indústria, Carla é apaixonada por ajudar as clientes a alcançarem o visual dos sonhos." },
    { name: "Fernanda Lima", role: "Colorista", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", desc: "Especialista em mechas e transformações radicais, garantindo a saúde dos fios com as melhores técnicas mundiais." },
    { name: "Beatriz Costa", role: "Maquiadora", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Certificada internacionalmente, foca em realçar a beleza natural com produtos de altíssima qualidade." },
    { name: "Anna Dayse", role: "Cabeleireira", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Perfeccionista e criativa, Anna domina desde cortes clássicos até as tendências mais ousadas da temporada." },
  ],
  barbearia: [
    { name: "Marcão", role: "Mestre Barbeiro", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=600&auto=format&fit=crop", desc: "Mais de 15 anos de tradição na navalha, garantindo cortes impecáveis." },
    { name: "Thiago", role: "Especialista em Fades", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", desc: "O rei do degradê. Precisão cirúrgica em cada máquina." },
    { name: "Leo", role: "Visagista", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", desc: "Molda o corte perfeito para o formato único do seu rosto." },
    { name: "Anna Dayse", role: "Especialista Capilar", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Trazendo excelência e novas texturas para o universo masculino." },
  ],
  salao: [
    { name: "Carla Santos", role: "Estilista Sênior", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop", desc: "Com mais de 10 anos de experiência na indústria, Carla é apaixonada por ajudar as clientes a alcançarem o visual dos sonhos." },
    { name: "Fernanda Lima", role: "Colorista", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", desc: "Especialista em mechas e transformações radicais, garantindo a saúde dos fios com as melhores técnicas mundiais." },
    { name: "Beatriz Costa", role: "Maquiadora", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Certificada internacionalmente, foca em realçar a beleza natural com produtos de altíssima qualidade." },
    { name: "Anna Dayse", role: "Cabeleireira", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Perfeccionista e criativa, Anna domina desde cortes clássicos até as tendências mais ousadas da temporada." },
  ],
  manicure: [
    { name: "Clara", role: "Nail Designer", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop", desc: "Especialista em formatos europeus e blindagem." },
    { name: "Juliana", role: "Alongamentos", img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", desc: "Unhas de fibra de vidro com naturalidade extrema." },
    { name: "Sofia", role: "Spa dos Pés", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Focada na saúde, relaxamento e beleza dos pés." },
    { name: "Anna Dayse", role: "Técnica Master", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Criadora das nail arts mais desejadas do momento." },
  ]
};

export default function AuraTeam({ niche }: { niche: string }) {
  const team = nicheTeam[niche as keyof typeof nicheTeam] || nicheTeam.default;

  return (
    <section className="bg-[#FDFBF7] relative flex flex-col items-center w-full" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="max-w-3xl">
            <span className="text-[#C5A880] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nossa Equipe</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-8">Artistas em Destaque</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-20">
          {team.map((member, index) => {
            // Alternate layout: Even indices (0, 2) have image left, text right
            // Odd indices (1, 3) have text left, image right
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
              >
                {/* Image Container with offset solid background */}
                <div className="w-full md:w-1/2 relative shrink-0">
                  {/* Background shape */}
                  <div className={`absolute top-4 ${isImageLeft ? 'left-[-16px]' : 'right-[-16px]'} w-full h-full bg-[#E5D5C0] rounded-[2.5rem] rounded-tl-xl rounded-br-xl -z-10 transition-transform duration-500 group-hover:scale-[1.02]`}></div>
                  
                  {/* Image */}
                  <div className="aspect-[4/5] rounded-[2.5rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg relative bg-white">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className={`w-full md:w-1/2 flex flex-col ${isImageLeft ? 'text-left' : 'text-left md:text-right'} pt-4 md:pt-0`}>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A68A65] mb-2 flex items-center gap-2 justify-start md:justify-start">
                    {!isImageLeft && <span className="hidden md:block w-4 h-[1px] bg-[#A68A65]"></span>}
                    <span className={!isImageLeft ? "md:ml-auto" : ""}>SOBRE O PROFISSIONAL</span>
                    {isImageLeft && <span className="w-4 h-[1px] bg-[#A68A65]"></span>}
                  </span>
                  
                  <h3 className="text-3xl font-serif text-[#1A1A1A] mb-1">
                    Conheça <span className="text-[#C5A880] italic">{member.name.split(' ')[0]}</span>,
                  </h3>
                  <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">{member.role}</h4>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {member.desc}
                  </p>
                  
                  <div className={`flex ${!isImageLeft ? 'md:justify-end' : 'justify-start'}`}>
                    <a href="#agendar" className="inline-block bg-[#C5A880] hover:bg-[#b0946f] text-white font-bold rounded-full text-xs uppercase tracking-[0.2em] transition-all shadow-md px-8 py-4">
                      Saber Mais
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
            <a href="#equipe" className="inline-flex items-center justify-center bg-[#8B2626] hover:bg-[#6e1e1e] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(139,38,38,0.4)]" style={{ padding: '20px 48px' }}>
              Ver Toda a Equipe
            </a>
        </div>
      </div>
    </section>
  );
}
