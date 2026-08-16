'use client';
import React from 'react';

export default function ServFooter() {
  return (
    <footer className="bg-primario text-white border-t border-white/10 relative z-50" style={{ paddingTop: '80px', paddingBottom: '60px', marginTop: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="flex flex-col lg:flex-row justify-between w-full" style={{ gap: '48px', marginBottom: '80px' }}>
          {/* Coluna 1: Logo e Sobre */}
          <div style={{ maxWidth: '300px' }}>
            <div className="flex items-center gap-3 mb-6">
              <i className="bi bi-snow2 text-amarela" style={{ fontSize: '40px' }}></i>
              <span className="font-bold text-xl uppercase tracking-wider leading-tight">
                Ar Condicionado<br />
                <span className="text-amarela text-sm">Especialistas</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tradição e tecnologia aplicadas à climatização de alto padrão. Garantimos o conforto perfeito para sua casa ou empresa com agilidade e máxima qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amarela hover:text-black transition-all duration-300"><i className="bi bi-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amarela hover:text-black transition-all duration-300"><i className="bi bi-facebook"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amarela hover:text-black transition-all duration-300"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          
          {/* Coluna 2: Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#hero" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Início</a></li>
              <li><a href="#servicos" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Diferenciais</a></li>
              <li><a href="#equipe" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Nossa Equipe</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#servicos" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Instalação de Splits</a></li>
              <li><a href="#servicos" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Manutenção Preventiva</a></li>
              <li><a href="#servicos" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Limpeza Profunda</a></li>
              <li><a href="#servicos" className="hover:text-amarela transition-colors flex items-center gap-2"><i className="bi bi-chevron-right text-[10px] text-amarela"></i> Projetos Comerciais</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Fale Conosco</h4>
            <ul className="space-y-5 text-white/60 text-sm">
              <li className="flex gap-4 items-start">
                <i className="bi bi-geo-alt text-amarela text-lg mt-0.5"></i>
                <span className="leading-relaxed">Av. Principal, 1000 - Centro<br />São Paulo, SP</span>
              </li>
              <li className="flex gap-4 items-center">
                <i className="bi bi-envelope text-amarela text-lg"></i>
                <span>contato@arcondicionado.com</span>
              </li>
              <li className="flex gap-4 items-center">
                <i className="bi bi-whatsapp text-amarela text-lg"></i>
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
          <p>Todos os direitos reservados Especialistas em Ar Condicionado © 2026</p>
          <p style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
            Desenvolvido por
            <a href="#" className="ml-2 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="OK Comunica" style={{ height: '24px', objectFit: 'contain' }} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
