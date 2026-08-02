"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileSearch, Building2, CheckCircle } from 'lucide-react';

export default function ObraProcess({ niche }: { niche: string }) {
  const steps = [
    { num: '01', title: 'Consultoria Inicial', desc: 'Entendemos suas necessidades, restrições orçamentárias e visão do projeto.', icon: <FileSearch size={24} /> },
    { num: '02', title: 'Projeto Técnico', desc: 'Desenvolvimento das plantas, cálculos e modelos 3D com precisão milimétrica.', icon: <Calculator size={24} /> },
    { num: '03', title: 'Aprovação & Alvarás', desc: 'Cuidamos de toda a burocracia legal para garantir o início seguro da obra.', icon: <CheckCircle size={24} /> },
    { num: '04', title: 'Execução & Entrega', desc: 'Construção rigorosa com diário de obra transparente, até a entrega das chaves.', icon: <Building2 size={24} /> }
  ];

  return (
    <section id="metodologia" style={{ backgroundColor: '#fff', padding: '120px 24px', color: '#041E30', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ color: '#967764', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '16px' }}>/ Processo /</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, fontFamily: 'Times New Roman, serif', color: '#041E30', margin: '0 0 24px 0', lineHeight: 1.1 }}>
            Metodologia Transparente
          </h2>
          <p style={{ maxWidth: '600px', color: '#3B4146', fontSize: '1.125rem', margin: 0 }}>
            Sem surpresas no orçamento ou atrasos inexplicáveis. Nosso processo é baseado na clareza em todas as etapas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              style={{
                position: 'relative',
                padding: '48px 32px',
                backgroundColor: '#041E30',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease',
                border: '1px solid rgba(231,223,219,0.1)',
                boxShadow: '0 10px 30px rgba(4, 30, 48, 0.1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(4, 30, 48, 0.2)';
                e.currentTarget.style.backgroundColor = '#06263d';
                const numberBg = e.currentTarget.querySelector('.bg-number') as HTMLElement;
                if (numberBg) {
                  numberBg.style.transform = 'scale(1.2) translate(10px, -10px)';
                  numberBg.style.color = 'rgba(150, 119, 100, 0.2)';
                }
                const iconBox = e.currentTarget.querySelector('.icon-box') as HTMLElement;
                if (iconBox) {
                  iconBox.style.backgroundColor = '#967764';
                  iconBox.style.color = '#fff';
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(4, 30, 48, 0.1)';
                e.currentTarget.style.backgroundColor = '#041E30';
                const numberBg = e.currentTarget.querySelector('.bg-number') as HTMLElement;
                if (numberBg) {
                  numberBg.style.transform = 'scale(1) translate(0, 0)';
                  numberBg.style.color = 'rgba(231, 223, 219, 0.05)';
                }
                const iconBox = e.currentTarget.querySelector('.icon-box') as HTMLElement;
                if (iconBox) {
                  iconBox.style.backgroundColor = 'rgba(231, 223, 219, 0.05)';
                  iconBox.style.color = '#967764';
                }
              }}
            >
              {/* Giant background number */}
              <div 
                className="bg-number"
                style={{ 
                  position: 'absolute', 
                  top: '-10%', 
                  right: '5%', 
                  fontSize: '8rem', 
                  fontWeight: 900, 
                  color: 'rgba(231, 223, 219, 0.05)', 
                  lineHeight: 1, 
                  transition: 'transform 0.5s ease, color 0.5s ease',
                  pointerEvents: 'none',
                  fontFamily: 'Times New Roman, serif'
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div 
                className="icon-box"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(231, 223, 219, 0.05)',
                  color: '#967764',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '40px',
                  transition: 'background-color 0.4s ease, color 0.4s ease',
                  position: 'relative',
                  zIndex: 10
                }}
              >
                {step.icon}
              </div>

              {/* Text content */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, color: '#E7DFDB', margin: '0 0 16px 0', fontFamily: 'Times New Roman, serif', letterSpacing: '1px' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(231, 223, 219, 0.7)', lineHeight: 1.6, margin: 0, fontSize: '0.9rem' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
