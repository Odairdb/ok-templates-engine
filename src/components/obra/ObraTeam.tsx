"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheTeam = {
  default: [
    { name: "Roberto Silva", role: "Engenheiro Chefe", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", desc: "Com mais de 20 anos de experiência em grandes estruturas, lidera a execução técnica com rigor e precisão." },
    { name: "Ana Beatriz", role: "Arquiteta Sênior", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Especialista em unir estética contemporânea e sustentabilidade, criando espaços premiados internacionalmente." },
    { name: "Carlos Mendes", role: "Gestor de Obras", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", desc: "O homem de campo. Assegura que cronogramas e custos sejam respeitados rigorosamente em todas as fases da construção." },
    { name: "Mariana Luz", role: "Engenheira de Instalações", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Mestre no design inteligente de sistemas elétricos e hidráulicos, garantindo a invisibilidade e eficiência da infraestrutura." },
  ],
  arquitetura: [
    { name: "Ana Beatriz", role: "Sócia Fundadora", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Visionária e criativa, Ana traduz os sonhos dos clientes em projetos icônicos." },
    { name: "Roberto Silva", role: "Diretor de Projetos", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", desc: "Responsável pela viabilidade técnica e integração estrutural da arquitetura." },
    { name: "Mariana Luz", role: "Design de Interiores", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "O toque final de sofisticação, escolha de materiais e mobiliário assinado." },
    { name: "Carlos Mendes", role: "Acompanhamento", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", desc: "Garante a fidelidade da execução em relação ao projeto original." },
  ],
  construtora: [
    { name: "Carlos Mendes", role: "CEO", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", desc: "Lidera a construtora com foco absoluto em qualidade de entrega e inovação construtiva." },
    { name: "Roberto Silva", role: "Diretor Técnico", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", desc: "Supervisiona as grandes empreitadas garantindo segurança e conformidade técnica." },
    { name: "Ana Beatriz", role: "Planejamento", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Orçamentista e analista de viabilidade, garantindo que a obra se pague." },
    { name: "Mariana Luz", role: "Engenheira de Segurança", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Segurança do trabalho em primeiro lugar. Acidente zero é nossa meta." },
  ],
  engenharia: [
    { name: "Roberto Silva", role: "Engenheiro Calculista", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", desc: "O cérebro por trás das estruturas. Mais de 500 edifícios calculados sem nenhuma patologia." },
    { name: "Carlos Mendes", role: "Engenheiro Residente", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop", desc: "Liderança de canteiro, focado na produtividade das equipes e logística." },
    { name: "Mariana Luz", role: "Engenheira Elétrica", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop", desc: "Projetos de alta e baixa tensão voltados para a máxima eficiência energética." },
    { name: "Ana Beatriz", role: "Perita Técnica", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop", desc: "Especialista em diagnósticos prediais e elaboração de laudos periciais." },
  ]
};

export default function ObraTeam({ niche }: { niche: string }) {
  const team = nicheTeam[niche as keyof typeof nicheTeam] || nicheTeam.default;

  return (
    <section className="bg-[#E7DFDB] relative flex flex-col items-center w-full" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="max-w-3xl">
            <span className="text-[#967764] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nossa Equipe</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#041E30] mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>Líderes de Execução</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-20">
          {team.map((member, index) => {
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
                <div className="w-full md:w-1/2 relative shrink-0">
                  <div className={`absolute top-4 ${isImageLeft ? 'left-[-16px]' : 'right-[-16px]'} w-full h-full bg-[#3B4146] rounded-sm -z-10 transition-transform duration-500 group-hover:scale-[1.02]`}></div>
                  
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg relative bg-white">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col ${isImageLeft ? 'text-left' : 'text-left md:text-right'} pt-4 md:pt-0`}>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#967764] mb-2 flex items-center gap-2 justify-start md:justify-start">
                    {!isImageLeft && <span className="hidden md:block w-4 h-[1px] bg-[#967764]"></span>}
                    <span className={!isImageLeft ? "md:ml-auto" : ""}>SOBRE O PROFISSIONAL</span>
                    {isImageLeft && <span className="w-4 h-[1px] bg-[#967764]"></span>}
                  </span>
                  
                  <h3 className="text-3xl text-[#041E30] mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Conheça <span className="text-[#967764] italic">{member.name.split(' ')[0]}</span>,
                  </h3>
                  <h4 className="text-2xl text-[#041E30] mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>{member.role}</h4>
                  
                  <p className="text-[#3B4146] text-sm leading-relaxed mb-6">
                    {member.desc}
                  </p>
                  
                  <div className={`flex ${!isImageLeft ? 'md:justify-end' : 'justify-start'}`}>
                    <a href="#orcamento" className="inline-block bg-[#041E30] hover:bg-[#3B4146] text-[#E7DFDB] font-bold rounded-sm text-xs uppercase tracking-[0.2em] transition-all shadow-md px-8 py-4">
                      Saber Mais
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
            <a href="#equipe" className="inline-flex items-center justify-center bg-[#967764] hover:bg-[#7a5f4f] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(150,119,100,0.4)]" style={{ padding: '20px 48px' }}>
              Ver Toda a Equipe
            </a>
        </div>
      </div>
    </section>
  );
}
