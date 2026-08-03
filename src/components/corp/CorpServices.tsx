"use client";

import React from 'react';
import { motion } from 'framer-motion';

const nicheServices = {
  default: [
    { title: "Direito Societário", tag: "Assessoria", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
    { title: "Auditoria Contábil", tag: "Conformidade", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" },
    { title: "Governança", tag: "Gestão", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
    { title: "Planejamento Estratégico", tag: "Resultados", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" },
    { title: "Consultoria Tributária", tag: "Compliance", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
  ],
  advogados: [
    { title: "Direito Societário", tag: "Empresarial", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
    { title: "Contencioso Cível", tag: "Litígio", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
    { title: "Direito Tributário", tag: "Defesa", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" },
    { title: "Trabalhista", tag: "Prevenção", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
    { title: "Contratos", tag: "Segurança", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  ],
  contadores: [
    { title: "Auditoria Financeira", tag: "Análise", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" },
    { title: "Gestão Tributária", tag: "Compliance", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" },
    { title: "BPO Financeiro", tag: "Terceirização", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
    { title: "Consultoria Contábil", tag: "Estratégia", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
    { title: "Folha de Pagamento", tag: "DP", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" },
  ]
};

export default function CorpServices({ niche }: { niche: string }) {
  const services = nicheServices[niche as keyof typeof nicheServices] || nicheServices.default;

  return (
    <section style={{ backgroundColor: '#0B132B', paddingTop: '90px', paddingBottom: '90px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Times New Roman, serif', color: '#FFFFFF', marginBottom: '32px', fontWeight: 400 }}>Áreas de Atuação</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem', lineHeight: 1.6, padding: '0 16px' }}>
              Experiência, estratégia e solidez. Dominamos as complexidades do seu negócio para garantir que seu patrimônio esteja sempre protegido.
            </p>
          </div>
        </div>

        {/* CSS GRID TO MATCH AURA */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px] lg:h-[700px]" id="especialidades">
          {services.map((service, index) => {
            let layoutClass = "";
            
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
                className={`group relative overflow-hidden rounded-[1.5rem] bg-[#1C2541] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[250px] md:min-h-0 ${layoutClass}`}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-[#0B132B]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-[#8D99AE] uppercase tracking-[0.15em] mb-1 drop-shadow-md">{service.tag}</span>
                  <h3 className={`font-serif text-[#FFFFFF] drop-shadow-md ${index === 2 ? 'text-3xl' : 'text-xl'}`} style={{ fontFamily: 'Times New Roman, serif' }}>{service.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <a href="#orcamento" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#8D99AE', color: '#fff', borderRadius: '999px', fontWeight: 900, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.2em', padding: '20px 48px', boxShadow: '0 0 30px rgba(141,153,174,0.4)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(141,153,174,0.6)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(141,153,174,0.4)'; }}>
              Ver Todos os Serviços
            </a>
        </div>
      </div>
    </section>
  );
}
