import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center justify-center p-6 md:p-10">
      <div className="max-w-5xl text-center w-full">
        {/* LOGO DA OK COMUNICA */}
        <div className="flex justify-center mb-10 md:mb-16">
          <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img src="/logo.png" alt="OK Comunica" className="h-20 md:h-28 object-contain" />
          </a>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Modelos de Templates</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-16 md:mb-24 max-w-2xl mx-auto px-4">Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* AURA Section */}
          <div className="flex flex-col items-center">
            {/* Title Box */}
            <div className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-6 px-4 mb-6 shadow-xl flex flex-col items-center">
              <h2 className="text-3xl font-bold text-[#C5A880] mb-2">Template AURA</h2>
              <p className="text-gray-400 text-sm md:text-base">Beleza, Estética e Bem-Estar</p>
            </div>
            
            {/* Horizontal Buttons */}
            <div className="flex gap-3 justify-center w-full flex-wrap">
              <Link href="/aura?nicho=salao" className="px-5 py-2.5 bg-[#FF0054] hover:bg-[#D40045] text-white font-bold rounded-lg uppercase tracking-wider text-[11px] md:text-xs transition-colors shadow-lg flex-1 md:flex-none text-center whitespace-nowrap">
                Salão de Beleza
              </Link>
              <Link href="/aura?nicho=barbearia" className="px-5 py-2.5 bg-[#FF0054] hover:bg-[#D40045] text-white font-bold rounded-lg uppercase tracking-wider text-[11px] md:text-xs transition-colors shadow-lg flex-1 md:flex-none text-center whitespace-nowrap">
                Barbearia
              </Link>
              <Link href="/aura?nicho=manicure" className="px-5 py-2.5 bg-[#FF0054] hover:bg-[#D40045] text-white font-bold rounded-lg uppercase tracking-wider text-[11px] md:text-xs transition-colors shadow-lg flex-1 md:flex-none text-center whitespace-nowrap">
                Manicure
              </Link>
            </div>
          </div>

          {/* OBRA Section */}
          <div className="flex flex-col items-center opacity-50 cursor-not-allowed">
            {/* Title Box */}
            <div className="w-full bg-black/20 border border-white/5 rounded-xl py-6 px-4 mb-6 shadow-xl flex flex-col items-center relative overflow-hidden">
              <h2 className="text-3xl font-bold text-gray-500 mb-2">Template OBRA</h2>
              <p className="text-gray-500 text-sm md:text-base mb-3">Engenharia, Construção e Arquitetura</p>
              <span className="px-4 py-1.5 bg-white/5 text-gray-400 font-bold rounded-full uppercase tracking-widest text-[10px]">
                Em Breve
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
