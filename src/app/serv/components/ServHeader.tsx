'use client';
import React from 'react';

export default function ServHeader() {
  return (
    <header 
      className="flex justify-between items-center top-0 w-full backdrop-blur bg-white/5 border-b border-white/20 z-50"
      style={{ padding: '24px 40px' }}
    >
      <div className="delay1">
        <div className="text-3xl font-bold text-amarela flex items-center">
          <i className="bi bi-snow mr-2 text-white"></i> ArCond
        </div>
      </div>
      <div className="hidden lg:block delay1">
        <ul className="flex gap-5 text-white font-medium">
          <li>
            <a href="#hero" className="menu-link">Início</a>
          </li>
          <li>
            <a href="#servicos" className="menu-link">Serviços</a>
          </li>
          <li>
            <a href="#marcas" className="menu-link">Marcas</a>
          </li>
          <li>
            <a href="#diferenciais" className="menu-link">Diferenciais</a>
          </li>
          <li>
            <a href="#contato" className="menu-link">Contato</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <a
          href="https://wa.me/5511999999999"
          className="border delay1 border-amarela p-3 px-8 rounded-md text-white backdrop-blur hover:bg-amarela hover:text-black texto-secundario transition-all"
          style={{ padding: '12px 28px' }}
        >
          Ligar Agora
        </a>
        <a
          href="#contato"
          className="p-3 px-8 delay1 border border-amarela bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md hover:bg-gradient-to-r hover:from-transparent hover:to-transparent hover:text-white transition-all text-black font-medium"
          style={{ padding: '12px 28px' }}
        >
          Solicitar Orçamento
        </a>
      </div>
      
      {/* Mobile Menu Button - Keeping it just in case, but hidden on lg */}
      <div className="lg:hidden">
        <button className="text-white text-3xl">
          <i className="bi bi-list"></i>
        </button>
      </div>
    </header>
  );
}
