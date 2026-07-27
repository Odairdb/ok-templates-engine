import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PlinShowcase({ niche, templateType }: { niche: string, templateType: string }) {
  // Custom texts based on niche could go here
  return (
    <section className="py-32 bg-[#0A1128] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="text-[#FF0054] font-bold tracking-widest uppercase text-sm mb-4 block">Poder Oculto</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Mais do que um Site. <br/>O Controle Total.</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Nossos sites vêm equipados com a base do <strong>Sistema Plin</strong>. Esqueça planilhas e agendas de papel. Gerencie agendamentos, clientes e fluxo de caixa em um painel inteligente integrado ao seu novo site.
          </p>
          <a href="https://wa.me/5531973516770?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Sistema%20Plin%20e%20os%20templates%20de%20sites!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0054] hover:bg-pink-600 rounded-full font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,84,0.4)]">
            Testar Sistema Plin <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF0054] to-purple-600 blur-[100px] opacity-30 rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl h-[400px] flex items-center justify-center">
            <span className="text-gray-500 font-mono">Mockup do Dashboard Plin ({niche})</span>
          </div>
        </div>
      </div>
    </section>
  );
}
