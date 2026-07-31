import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PlinShowcase({ niche, templateType }: { niche: string, templateType: string }) {
  // Map niche to business name for a dynamic transition
  const getBusinessName = () => {
    switch(niche) {
      case 'barbearia': return 'Sua Barbearia';
      case 'salao': return 'Seu Salão';
      case 'manicure': return 'Seu Espaço';
      default: return 'Seu Negócio';
    }
  };

  const businessName = getBusinessName();

  return (
    <section className="bg-[#0A1128] text-white relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      
      {/* BRIDGE / TRANSITION HEADER */}
      <div className="w-full max-w-[1200px] mx-auto text-center mb-24 px-6 md:px-10 lg:px-20 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black mb-6 leading-tight">
          {businessName} já tem agendamento <span className="text-[#FF0054]">online</span> de clientes?
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
          Esqueça as planilhas manuais e o caos no WhatsApp. Conheça a inteligência que vai profissionalizar o seu atendimento.
        </p>
      </div>

      {/* PLIN CORE SHOWCASE */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 px-6 md:px-10 lg:px-20">
        <div>
          <span className="text-[#FF0054] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">O Poder em suas mãos</span>
          <h3 className="text-3xl md:text-4xl lg:text-[42px] font-black mb-6 leading-tight">
            <span className="whitespace-nowrap">Mais do que um Site.</span> <br/>O Controle Total.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nossos sites vêm equipados com a base do <strong>Sistema Plin</strong>. Gerencie agendamentos, clientes e fluxo de caixa em um painel inteligente totalmente integrado ao seu novo site.
          </p>
          <div style={{ marginTop: '60px' }}>
            <a href="https://wa.me/5531973516770?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Sistema%20Plin%20e%20os%20templates%20de%20sites!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#FF0054] hover:bg-pink-600 rounded-full font-black uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,0,84,0.4)]" style={{ padding: '20px 48px' }}>
              Testar Sistema Plin <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF0054] to-purple-600 blur-[100px] opacity-30 rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-xl shadow-2xl h-[400px] flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Mockup Dashboard Plin" className="w-full h-full object-cover rounded-xl opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
