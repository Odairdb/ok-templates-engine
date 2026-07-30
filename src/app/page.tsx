import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center justify-center p-10">
      <div className="max-w-5xl text-center w-full">
        {/* LOGO DA OK COMUNICA */}
        <div className="flex justify-center mb-12">
          <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img src="/logo.png" alt="OK Comunica" className="h-24 object-contain" />
          </a>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-6">Motor de Templates OK</h1>
        <p className="text-xl text-gray-400 mb-16">Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Link href="/aura" className="p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-3xl flex flex-col items-center text-center group h-full">
            <h2 className="text-3xl font-bold text-[#C5A880] mb-3">Template AURA</h2>
            <p className="text-gray-400 mb-8 text-lg">Beleza, Estética e Bem-Estar</p>
            <div className="flex gap-3 mb-12 flex-wrap justify-center">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold tracking-wide">Barbearia</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold tracking-wide">Salão</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold tracking-wide">Manicure</span>
            </div>
            <div className="mt-auto px-8 py-4 bg-[#FF0054] text-white font-black rounded-full uppercase tracking-widest text-sm flex items-center gap-3 group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,84,0.3)]">
              Ver Template <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          <div className="p-12 border border-white/5 bg-black/20 rounded-3xl flex flex-col items-center text-center opacity-50 cursor-not-allowed h-full">
            <h2 className="text-3xl font-bold text-gray-500 mb-3">Template OBRA</h2>
            <p className="text-gray-500 mb-8 text-lg">Engenharia, Construção e Arquitetura</p>
            <div className="mt-auto px-8 py-4 bg-white/5 text-gray-500 font-black rounded-full uppercase tracking-widest text-sm">
              Em Breve
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
