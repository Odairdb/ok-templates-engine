"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ObraGallery({ niche }: { niche: string }) {
  
  const getGallery = () => {
    switch (niche) {
      case 'arquitetura':
        return [
          { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', title: 'Residência Alphaville' },
          { url: 'https://images.unsplash.com/photo-1600566753086-00f18efc2294?q=80&w=2070&auto=format&fit=crop', title: 'Cobertura Duplex' },
          { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop', title: 'Studio Minimalista' }
        ];
      case 'construtora':
        return [
          { url: 'https://images.unsplash.com/photo-1541888081622-c2e472061099?q=80&w=2070&auto=format&fit=crop', title: 'Edifício Horizon' },
          { url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop', title: 'Condomínio Reserva' },
          { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop', title: 'Sede Corporativa' }
        ];
      case 'engenharia':
      default:
        return [
          { url: 'https://images.unsplash.com/photo-1590496739988-9d22ffc32ef0?q=80&w=2070&auto=format&fit=crop', title: 'Fundação Profunda' },
          { url: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop', title: 'Estrutura Metálica' },
          { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop', title: 'Reforço Estrutural' }
        ];
    }
  };

  const images = getGallery();

  return (
    <section id="projetos" style={{ backgroundColor: '#E7DFDB', padding: '120px 24px', color: '#3B4146' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '80px' }}>
          <span style={{ color: '#967764', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '16px' }}>/ Portfólio /</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, fontFamily: 'Times New Roman, serif', color: '#041E30', margin: '0 0 24px 0', lineHeight: 1.1 }}>
            Obras Realizadas
          </h2>
          <p style={{ maxWidth: '600px', color: '#3B4146', fontSize: '1.125rem', margin: 0 }}>
            Nossa assinatura está impressa na qualidade dos acabamentos e na solidez de cada fundação. Conheça nossos trabalhos recentes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
              className="group"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(4,30,48,0.8) 0%, rgba(4,30,48,0) 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '32px',
                  pointerEvents: 'none'
                }}
              >
                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, margin: 0, fontFamily: 'Times New Roman, serif' }}>
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
