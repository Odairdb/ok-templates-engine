"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

export default function CorpHeader({ niche }: { niche: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLogoText = () => {
    switch(niche) {
      case 'arquitetura': return 'ARQ.STUDIO';
      case 'construtora': return 'BUILD.CO';
      case 'engenharia': return 'ENG.PRO';
      default: return 'Corp.INC';
    }
  };

  const navItems = ['Projetos', 'Especialidades', 'Metodologia', 'Sobre'];

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50, 
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(141, 153, 174, 0.2)' : '1px solid transparent',
        padding: isScrolled ? '12px 0' : '24px 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0B132B' }}>
          <Hexagon size={24} color="#8D99AE" strokeWidth={2.5} />
          <span style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '2px' }}>{getLogoText()}</span>
        </div>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'none' }} className="md-flex">
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  style={{ color: '#1C2541', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#8D99AE'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#1C2541'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <div style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="md-flex">
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1C2541' }}>PT</span>
          <a 
            href="#orcamento" 
            style={{ 
              borderBottom: '2px solid #0B132B', 
              color: '#0B132B', 
              fontWeight: 700, 
              fontSize: '0.875rem', 
              textTransform: 'uppercase', 
              textDecoration: 'none',
              paddingBottom: '4px'
            }}
          >
            Fale Conosco
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md-hidden"
          style={{ background: 'none', border: 'none', color: '#0B132B', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#FFFFFF', padding: '24px', borderBottom: '1px solid #8D99AE', display: 'flex', flexDirection: 'column', gap: '16px' }} className="md-hidden">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ color: '#0B132B', fontSize: '1.125rem', fontWeight: 600, textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#orcamento" 
            style={{ color: '#8D99AE', fontSize: '1.125rem', fontWeight: 800, textDecoration: 'none', marginTop: '16px' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}

      {/* Basic responsive styles hack for inline usage */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .md-hidden { display: none !important; }
          .md-flex { display: flex !important; }
        }
      `}} />
    </header>
  );
}
