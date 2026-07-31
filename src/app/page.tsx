import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center px-6 md:px-10 pb-10" style={{ paddingTop: '10vh' }}>
      <div className="max-w-[1200px] text-center w-full flex flex-col items-center">
        
        {/* LOGO DA OK COMUNICA */}
        <div className="flex justify-center" style={{ marginBottom: '60px' }}>
          <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform block">
            <img src="/logo.png" alt="OK Comunica" className="h-20 md:h-28 object-contain" style={{ display: 'block' }} />
          </a>
        </div>

        {/* HEADLINE E SUBTÍTULO */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight whitespace-nowrap text-center" style={{ marginBottom: '20px', lineHeight: '1.2' }}>
          Modelos de Templates
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4 text-center" style={{ marginBottom: '100px' }}>
          Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.
        </p>
        
        {/* GRADES DOS TEMPLATES */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto" style={{ gap: '80px' }}>
          
          {/* AURA Section */}
          <div className="flex flex-col items-center w-full">
            {/* Title Box */}
            <div className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-6 px-4 shadow-xl flex flex-col items-center" style={{ marginBottom: '40px' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#C5A880] mb-2 tracking-tight">Template AURA</h2>
              <p className="text-gray-400 text-base md:text-lg m-0">Beleza, Estética e Bem-Estar</p>
            </div>
            
            {/* Horizontal Buttons */}
            <div className="flex justify-center w-full flex-wrap" style={{ gap: '20px' }}>
              <Link href="/aura?nicho=salao" className="bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-full uppercase tracking-widest transition-colors shadow-lg text-center whitespace-nowrap block" style={{ padding: '16px 32px', fontSize: '13px' }}>
                Salão de Beleza
              </Link>
              <Link href="/aura?nicho=barbearia" className="bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-full uppercase tracking-widest transition-colors shadow-lg text-center whitespace-nowrap block" style={{ padding: '16px 32px', fontSize: '13px' }}>
                Barbearia
              </Link>
              <Link href="/aura?nicho=manicure" className="bg-[#FF0054] hover:bg-[#D40045] text-white font-black rounded-full uppercase tracking-widest transition-colors shadow-lg text-center whitespace-nowrap block" style={{ padding: '16px 32px', fontSize: '13px' }}>
                Manicure
              </Link>
            </div>
          </div>

          {/* OBRA Section */}
          <div className="flex flex-col items-center opacity-40 cursor-not-allowed w-full">
            {/* Title Box */}
            <div className="w-full bg-black/20 border border-white/5 rounded-xl py-6 px-4 shadow-xl flex flex-col items-center relative overflow-hidden" style={{ marginBottom: '40px' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-2 tracking-tight">Template OBRA</h2>
              <p className="text-gray-500 text-base md:text-lg m-0" style={{ marginBottom: '16px' }}>Engenharia, Construção e Arquitetura</p>
              <span className="bg-white/5 text-gray-400 font-black rounded-full uppercase tracking-widest block" style={{ padding: '8px 24px', fontSize: '12px' }}>
                Em Breve
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
