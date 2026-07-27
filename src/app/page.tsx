import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-black mb-6">Motor de Templates OK</h1>
        <p className="text-xl text-gray-400 mb-12">Selecione um dos Super-Templates abaixo para visualizar a demonstração dinâmica.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/aura" className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-3xl flex flex-col items-center text-center group">
            <h2 className="text-2xl font-bold text-[#C5A880] mb-2">Template AURA</h2>
            <p className="text-gray-400 mb-6">Beleza, Estética e Bem-Estar</p>
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Barbearia</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Salão</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Manicure</span>
            </div>
            <div className="mt-auto px-6 py-3 bg-[#FF0054] text-white font-bold rounded-full uppercase tracking-widest text-xs flex items-center gap-2 group-hover:scale-105 transition-transform">
              Ver Template <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <div className="p-8 border border-white/5 bg-black/20 rounded-3xl flex flex-col items-center text-center opacity-50 cursor-not-allowed">
            <h2 className="text-2xl font-bold text-gray-400 mb-2">Template OBRA</h2>
            <p className="text-gray-500 mb-6">Engenharia, Construção e Arquitetura</p>
            <div className="mt-auto px-6 py-3 bg-white/5 text-gray-400 font-bold rounded-full uppercase tracking-widest text-xs">
              Em Breve
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
