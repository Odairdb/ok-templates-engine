"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheTeam = {
  default: [
    { name: "Roberto Silva", role: "Sócio Diretor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", desc: "Com mais de 20 anos de experiência em gestão estratégica, lidera as grandes operações com rigor e precisão financeira." },
    { name: "Ana Beatriz", role: "Head de Consultoria", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", desc: "Especialista em unir inovação aos resultados práticos, criando soluções empresariais premiadas." },
    { name: "Carlos Mendes", role: "Gerente de Controladoria", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop", desc: "O homem dos números. Assegura que cronogramas e orçamentos corporativos sejam respeitados." },
    { name: "Mariana Luz", role: "Diretora de Operações", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", desc: "Garante a fluidez de todos os processos internos, otimizando a entrega para o cliente final." },
  ],
  advogados: [
    { name: "Ana Beatriz", role: "Sócia Fundadora", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", desc: "Visionária e estrategista, Ana conduz as negociações mais complexas do escritório." },
    { name: "Roberto Silva", role: "Diretor Jurídico", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", desc: "Especialista em direito societário, garantindo segurança e blindagem patrimonial." },
    { name: "Carlos Mendes", role: "Head Trabalhista", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop", desc: "Focado na prevenção de passivos trabalhistas com alta taxa de êxito." },
    { name: "Mariana Luz", role: "Especialista Tributária", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", desc: "Atua em grandes teses tributárias, recuperando milhões em créditos para nossos clientes." },
  ],
  contadores: [
    { name: "Carlos Mendes", role: "Sócio e Contador Chefe", img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop", desc: "Lidera as auditorias com foco absoluto em compliance e redução tributária." },
    { name: "Roberto Silva", role: "Consultor Tributário", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", desc: "Mestre em planejamento e elisão fiscal, trazendo economia real aos clientes." },
    { name: "Ana Beatriz", role: "Head de BPO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", desc: "Responsável pela terceirização financeira de alto nível para grandes contas." },
    { name: "Mariana Luz", role: "Auditora Sênior", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", desc: "Garante o rigor técnico nos balanços e a completa conformidade contábil das operações." },
  ]
};

export default function CorpTeam({ niche }: { niche: string }) {
  const team = nicheTeam[niche as keyof typeof nicheTeam] || nicheTeam.default;

  return (
    <section className="bg-[#FFFFFF] relative flex flex-col items-center w-full" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="max-w-3xl">
            <span className="text-[#8D99AE] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Nossa Liderança</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0B132B] mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>Especialistas Estratégicos</h2>
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
                  <div className={`absolute top-4 ${isImageLeft ? 'left-[-16px]' : 'right-[-16px]'} w-full h-full bg-[#1C2541] rounded-sm -z-10 transition-transform duration-500 group-hover:scale-[1.02]`}></div>
                  
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg relative bg-white">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className={`w-full md:w-1/2 flex flex-col ${isImageLeft ? 'text-left' : 'text-left md:text-right'} pt-4 md:pt-0`}>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8D99AE] mb-2 flex items-center gap-2 justify-start md:justify-start">
                    {!isImageLeft && <span className="hidden md:block w-4 h-[1px] bg-[#8D99AE]"></span>}
                    <span className={!isImageLeft ? "md:ml-auto" : ""}>SOBRE O PROFISSIONAL</span>
                    {isImageLeft && <span className="w-4 h-[1px] bg-[#8D99AE]"></span>}
                  </span>
                  
                  <h3 className="text-3xl text-[#0B132B] mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Conheça <span className="text-[#8D99AE] italic">{member.name.split(' ')[0]}</span>,
                  </h3>
                  <h4 className="text-2xl text-[#0B132B] mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>{member.role}</h4>
                  
                  <p className="text-[#1C2541] text-sm leading-relaxed mb-6">
                    {member.desc}
                  </p>
                  
                  <div className={`flex ${!isImageLeft ? 'md:justify-end' : 'justify-start'}`}>
                    <a href="#orcamento" className="inline-block bg-[#0B132B] hover:bg-[#1C2541] text-[#FFFFFF] font-bold rounded-sm text-xs uppercase tracking-[0.2em] transition-all shadow-md px-8 py-4">
                      Saber Mais
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
            <a href="#equipe" className="inline-flex items-center justify-center bg-[#8D99AE] hover:bg-[#7a5f4f] text-white rounded-full font-black text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(141,153,174,0.4)]" style={{ padding: '20px 48px' }}>
              Ver Toda a Equipe
            </a>
        </div>
      </div>
    </section>
  );
}
