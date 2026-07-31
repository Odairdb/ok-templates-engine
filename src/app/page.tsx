import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center pt-[10vh] md:pt-[15vh] p-6 md:p-10">
      <div className="max-w-[1200px] text-center w-full flex flex-col items-center">
        
        {/* LOGO DA OK COMUNICA */}
        <div className="flex justify-center mb-10 md:mb-[8vh]">
          <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img src="/logo.png" alt="OK Comunica" className="h-32 md:h-48 object-contain" />
          </a>
        </div>

        {/* HEADLINE E SUBTÍTULO */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 md:mb-[4vh] tracking-tight whitespace-nowrap text-center">Modelos de Templates</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-16 md:mb-[12vh] max-w-3xl mx-auto px-4 text-center">Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.</p>
        
        {/* GRADES DOS TEMPLATES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-6xl mx-auto">
          
          {/* AURA Section */}
          <div className="flex flex-col items-center">
            {/* Title Box */}
            <div className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-8 px-6 mb-12 md:mb-16 shadow-xl flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#C5A880] mb-4 tracking-tight">Template AURA</h2>
              <p className="text-gray-400 text-lg md:text-xl">Beleza, Estética e Bem-Estar</p>
            </div>
            
            {/* Horizontal Buttons */}
            <div className="flex gap-6 md:gap-8 justify-center w-full flex-wrap">
              <Link href="/aura?nicho=salao" className="px-10 py-5 bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-2xl uppercase tracking-widest text-sm md:text-base transition-colors shadow-lg text-center whitespace-nowrap">
                Salão de Beleza
              </Link>
              <Link href="/aura?nicho=barbearia" className="px-10 py-5 bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-2xl uppercase tracking-widest text-sm md:text-base transition-colors shadow-lg text-center whitespace-nowrap">
                Barbearia
              </Link>
              <Link href="/aura?nicho=manicure" className="px-10 py-5 bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-2xl uppercase tracking-widest text-sm md:text-base transition-colors shadow-lg text-center whitespace-nowrap">
                Manicure
              </Link>
            </div>
          </div>

          {/* OBRA Section */}
          <div className="flex flex-col items-center opacity-40 cursor-not-allowed">
            {/* Title Box */}
            <div className="w-full bg-black/20 border border-white/5 rounded-xl py-8 px-6 mb-12 shadow-xl flex flex-col items-center relative overflow-hidden">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4 tracking-tight">Template OBRA</h2>
              <p className="text-gray-500 text-lg md:text-xl mb-6">Engenharia, Construção e Arquitetura</p>
              <span className="px-6 py-3 bg-white/5 text-gray-400 font-black rounded-full uppercase tracking-widest text-sm">
                Em Breve
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
