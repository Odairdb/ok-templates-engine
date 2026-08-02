"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ObraProcess({ niche }: { niche: string }) {
  const steps = [
    { num: '01', title: 'Consultoria Inicial', desc: 'Entendemos suas necessidades, restrições orçamentárias e visão do projeto.' },
    { num: '02', title: 'Projeto Técnico', desc: 'Desenvolvimento das plantas, cálculos e modelos 3D com precisão milimétrica.' },
    { num: '03', title: 'Aprovação & Alvarás', desc: 'Cuidamos de toda a burocracia legal para garantir o início seguro da obra.' },
    { num: '04', title: 'Execução & Entrega', desc: 'Construção rigorosa com diário de obra transparente, até a entrega das chaves.' }
  ];

  return (
    <section id="metodologia" style={{ backgroundColor: '#fff', padding: '120px 24px', color: '#041E30' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ color: '#967764', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '16px' }}>/ Processo /</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, fontFamily: 'Times New Roman, serif', color: '#041E30', margin: '0 0 24px 0', lineHeight: 1.1 }}>
            Metodologia<br/>Transparente
          </h2>
          <p style={{ maxWidth: '600px', color: '#3B4146', fontSize: '1.125rem', margin: 0 }}>
            Sem surpresas no orçamento ou atrasos inexplicáveis. Nosso processo é baseado na clareza em todas as etapas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              style={{
                position: 'relative',
                padding: '32px 0',
                borderTop: '2px solid #E7DFDB'
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#E7DFDB', lineHeight: 1, marginBottom: '24px' }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#041E30', margin: '0 0 16px 0' }}>
                {step.title}
              </h3>
              <p style={{ color: '#3B4146', lineHeight: 1.6, margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
