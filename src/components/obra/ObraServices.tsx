"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, PenTool, PencilRuler, Ruler, BrickWall, Sparkles } from 'lucide-react';

export default function ObraServices({ niche }: { niche: string }) {
  
  const getServices = () => {
    switch(niche) {
      case 'arquitetura':
        return [
          { icon: <PencilRuler size={32} />, title: "Projeto Arquitetônico", desc: "Design completo, da fachada à divisão inteligente de ambientes." },
          { icon: <PenTool size={32} />, title: "Design de Interiores", desc: "Ergonomia, paleta de cores e mobiliário sob medida para o seu bem-estar." },
          { icon: <Sparkles size={32} />, title: "Maquetes 3D & Renders", desc: "Visualização hiper-realista antes do primeiro tijolo ser assentado." }
        ];
      case 'construtora':
        return [
          { icon: <BrickWall size={32} />, title: "Execução de Obra", desc: "Equipe própria e gestão de ponta a ponta com rigor de cronograma." },
          { icon: <Ruler size={32} />, title: "Reformas de Alto Padrão", desc: "Transformamos o seu imóvel atual na sua casa dos sonhos." },
          { icon: <HardHat size={32} />, title: "Gerenciamento", desc: "Fiscalização, compra de materiais e gestão de empreiteiros terceirizados." }
        ];
      case 'engenharia':
      default:
        return [
          { icon: <HardHat size={32} />, title: "Projetos Estruturais", desc: "Cálculos precisos garantindo economia de aço e segurança total." },
          { icon: <Ruler size={32} />, title: "Instalações (Elétrica/Hidráulica)", desc: "Dimensionamento correto para evitar patologias e manutenções futuras." },
          { icon: <BrickWall size={32} />, title: "Laudos & Perícias", desc: "Vistoria técnica, emissão de ART e diagnósticos estruturais complexos." }
        ];
    }
  };

  const services = getServices();

  return (
    <section id="especialidades" style={{ backgroundColor: '#041E30', padding: '120px 24px', color: '#E7DFDB' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, fontFamily: 'Times New Roman, serif', color: '#E7DFDB', margin: '0 0 16px 0', lineHeight: 1.1 }}>
            Nossas<br/>Especialidades
          </h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#967764', margin: '0 auto 24px auto' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(231,223,219,0.7)', fontSize: '1.125rem' }}>
            Técnica, estética e precisão. Dominamos cada etapa do processo construtivo para garantir que sua visão se torne realidade.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              style={{ 
                backgroundColor: 'rgba(231,223,219,0.05)', 
                border: '1px solid rgba(231,223,219,0.1)',
                padding: '48px 32px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(231,223,219,0.1)';
                e.currentTarget.style.borderColor = '#967764';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(231,223,219,0.05)';
                e.currentTarget.style.borderColor = 'rgba(231,223,219,0.1)';
              }}
            >
              <div style={{ color: '#967764', marginBottom: '24px' }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E7DFDB', margin: '0 0 16px 0', fontFamily: 'Times New Roman, serif' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'rgba(231,223,219,0.7)', lineHeight: 1.6, margin: 0 }}>
                {svc.desc}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
