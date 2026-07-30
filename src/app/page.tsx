import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center justify-center p-10">
      <div className="max-w-5xl text-center w-full">
        {/* LOGO DA OK COMUNICA */}
        <div className="flex justify-center mb-16">
          <a href="https://okcomunica.com.br" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img src="/logo.png" alt="OK Comunica" className="h-24 object-contain" />
          </a>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Modelos de Templates</h1>
        <p className="text-xl text-gray-400 mb-20 max-w-2xl mx-auto">Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-16 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-[2.5rem] flex flex-col items-center text-center group h-full hover:shadow-[0_0_40px_rgba(197,168,128,0.15)] hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A880] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl font-bold text-[#C5A880] mb-4">Template AURA</h2>
            <p className="text-gray-400 mb-8 text-xl">Beleza, Estética e Bem-Estar</p>
            
            <div className="mt-auto w-full flex flex-col gap-3">
              <Link href="/aura?nicho=salao" className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl uppercase tracking-wider text-sm flex justify-between items-center transition-all hover:border-[#FF0054]/50 group/btn shadow-sm hover:shadow-[0_0_15px_rgba(255,0,84,0.2)]">
                Salão de Beleza <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:text-[#FF0054] transition-all" />
              </Link>
              <Link href="/aura?nicho=barbearia" className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl uppercase tracking-wider text-sm flex justify-between items-center transition-all hover:border-[#FF0054]/50 group/btn shadow-sm hover:shadow-[0_0_15px_rgba(255,0,84,0.2)]">
                Barbearia <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:text-[#FF0054] transition-all" />
              </Link>
              <Link href="/aura?nicho=manicure" className="w-full px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl uppercase tracking-wider text-sm flex justify-between items-center transition-all hover:border-[#FF0054]/50 group/btn shadow-sm hover:shadow-[0_0_15px_rgba(255,0,84,0.2)]">
                Manicure <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:text-[#FF0054] transition-all" />
              </Link>
            </div>
          </div>

          <div className="p-16 border border-white/5 bg-black/20 rounded-[2.5rem] flex flex-col items-center text-center opacity-60 cursor-not-allowed h-full relative overflow-hidden">
            <h2 className="text-4xl font-bold text-gray-500 mb-4">Template OBRA</h2>
            <p className="text-gray-500 mb-10 text-xl">Engenharia, Construção e Arquitetura</p>
            <div className="mt-auto px-10 py-5 bg-white/5 border border-white/10 text-gray-400 font-black rounded-full uppercase tracking-[0.2em] text-sm">
              Em Breve
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
