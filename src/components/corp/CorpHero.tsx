"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CorpHero({ initialNiche }: { initialNiche: string }) {
  const getHeroContent = () => {
    switch (initialNiche) {
      case 'arquitetura':
        return {
          title: "THE PERFECT\nHOME®",
          subtitle: "/ We craft custom homes /",
          bgImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')"
        };
      case 'construtora':
        return {
          title: "SOLID\nFOUNDATIONS®",
          subtitle: "/ Construindo o seu futuro /",
          bgImage: "url('https://images.unsplash.com/photo-1541888081622-c2e472061099?q=80&w=2070&auto=format&fit=crop')"
        };
      case 'engenharia':
        return {
          title: "ENGINEERING\nEXCELLENCE®",
          subtitle: "/ Precisão em cada detalhe /",
          bgImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')"
        };
      default:
        return {
          title: "THE PERFECT\nPROJECT®",
          subtitle: "/ Especialistas em Corps de alto padrão /",
          bgImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')"
        };
    }
  };

  const content = getHeroContent();

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '800px',
        backgroundColor: '#FFFFFF',
        backgroundImage: content.bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%)', zIndex: 1 }}></div>

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LEFT CONTENT: HEADLINE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '600px' }}
        >
          <h1 
            style={{ 
              color: '#1C2541', 
              fontSize: 'clamp(4rem, 8vw, 7rem)', 
              fontWeight: 400, 
              lineHeight: 0.9, 
              fontFamily: 'Times New Roman, serif', 
              letterSpacing: '-2px',
              margin: '0 0 24px 0',
              whiteSpace: 'pre-line'
            }}
          >
            {content.title}
          </h1>
          <p style={{ color: '#0B132B', fontSize: '1.25rem', letterSpacing: '1px', margin: '0 0 48px 0', fontWeight: 500 }}>
            {content.subtitle}
          </p>
          <a 
            href="#orcamento"
            style={{
              display: 'inline-block',
              backgroundColor: '#8D99AE',
              color: '#fff',
              padding: '16px 48px',
              borderRadius: '999px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(141, 153, 174, 0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(141, 153, 174, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(141, 153, 174, 0.4)';
            }}
          >
            Começar
          </a>
        </motion.div>

        {/* RIGHT CONTENT: FLOATING CARD (SIMULATING 3D/ARCH) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            backdropFilter: 'blur(20px)',
            padding: '40px', 
            borderRadius: '24px', 
            boxShadow: '0 30px 60px rgba(4, 30, 48, 0.1)',
            maxWidth: '450px',
            display: 'none' // Hidden on mobile, controlled by media query below
          }}
          className="md-block"
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <span style={{ border: '1px solid #8D99AE', color: '#8D99AE', padding: '4px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>Interior</span>
            <span style={{ border: '1px solid #8D99AE', color: '#8D99AE', padding: '4px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>Design</span>
            <span style={{ backgroundColor: '#0B132B', color: '#fff', padding: '4px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600 }}>3D</span>
          </div>
          
          <h3 style={{ color: '#0B132B', fontSize: '2rem', fontWeight: 400, lineHeight: 1.2, marginBottom: '16px', fontFamily: 'Times New Roman, serif' }}>
            Design Único &<br />Ergonomia
          </h3>
          <p style={{ color: '#8D99AE', fontSize: '1rem' }}>
            Da planta baixa aos renders hiper-realistas.
          </p>

          <div style={{ marginTop: '40px', position: 'relative' }}>
            {/* Embedded small video/image mockup */}
            <div style={{ width: '100%', height: '200px', backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" alt="Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(4,30,48,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#8D99AE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid #fff', marginLeft: '4px' }}></div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-16px', right: '-16px', backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px', color: '#1C2541', display: 'block', marginBottom: '8px' }}>ROOMTOUR</span>
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" alt="Room" style={{ width: '80px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .md-block { display: block !important; }
        }
        @media (max-width: 1023px) {
          .md-block { display: none !important; }
        }
      `}} />
    </section>
  );
}

