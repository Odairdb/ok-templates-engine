"use client";

import React from 'react';
import { Hexagon, Mail, MapPin, Phone, Globe } from 'lucide-react';

export default function ObraFooter({ niche }: { niche: string }) {
  const getLogoText = () => {
    switch(niche) {
      case 'arquitetura': return 'ARQ.STUDIO';
      case 'construtora': return 'BUILD.CO';
      case 'engenharia': return 'ENG.PRO';
      default: return 'OBRA.INC';
    }
  };

  return (
    <footer style={{ backgroundColor: '#041E30', color: '#E7DFDB', padding: '80px 24px 40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '80px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E7DFDB', marginBottom: '24px' }}>
              <Hexagon size={32} color="#967764" strokeWidth={2.5} />
              <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '2px' }}>{getLogoText()}</span>
            </div>
            <p style={{ color: 'rgba(231,223,219,0.6)', lineHeight: 1.6, marginBottom: '24px' }}>
              Tradição e tecnologia aplicadas à engenharia de alto padrão. Construindo o futuro, respeitando a sua história.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: '#E7DFDB', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
                <Globe size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Contato</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(231,223,219,0.7)' }}>
                <MapPin size={20} color="#967764" style={{ flexShrink: 0 }} />
                <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(231,223,219,0.7)' }}>
                <Phone size={20} color="#967764" style={{ flexShrink: 0 }} />
                <span>(11) 3333-4444</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(231,223,219,0.7)' }}>
                <Mail size={20} color="#967764" style={{ flexShrink: 0 }} />
                <span>contato@obrainc.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Projetos', 'Especialidades', 'Metodologia', 'Fale Conosco'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(231,223,219,0.7)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(231,223,219,0.7)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-10">
          <p style={{ color: 'rgba(231,223,219,0.5)', fontSize: '0.875rem', margin: 0, textAlign: 'center' }}>
            &copy; 2026 {getLogoText()}. Todos os direitos reservados. CREA: 123456-7
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'rgba(231,223,219,0.5)', fontSize: '0.75rem' }}>Desenvolvido por</span>
            <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', opacity: 0.7, transition: 'opacity 0.2s' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}>
              <img src="/logo.png" alt="OK Comunica" style={{ height: '24px', filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
