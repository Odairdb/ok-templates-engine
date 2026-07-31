"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function PlinShowcase({ niche, templateType }: { niche: string, templateType: string }) {
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
    <section className="bg-[#050505] text-white relative overflow-hidden flex flex-col" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 relative z-20">
        
        {/* TOP ROW: HEADLINE & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Huge Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
              {businessName} já tem agendamento <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0054] to-[#ff7eb3]">online?</span>
            </h2>
          </motion.div>

          {/* Right: Paragraph and Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col pt-2 lg:pt-4"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              O <strong>Sistema PLIN</strong> escuta, entende e transforma o caos do WhatsApp em agendamentos claros — para que nenhum cliente se perca na conversa.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/5531973516770" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF0054] to-purple-600 hover:opacity-90 text-white rounded-xl font-bold text-sm transition-all px-8 py-4 shadow-[0_0_20px_rgba(255,0,84,0.4)]">
                <Sparkles className="w-4 h-4" /> Começar Grátis
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-xl font-bold text-sm transition-all px-8 py-4">
                 Ver Demonstração
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MIDDLE ROW: ABSTRACT GLOW / HORIZON */}
      <div className="relative w-full h-[400px] md:h-[500px] mt-10 overflow-hidden pointer-events-none z-10 flex items-center justify-center">
        {/* Core light bloom */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FF0054] rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
        
        {/* Sweeping horizon lines simulated with squashed borders */}
        <div className="absolute w-[200%] h-[800px] border-t-[4px] border-white/80 rounded-[100%] shadow-[0_-10px_40px_rgba(255,0,84,1)] opacity-80 mix-blend-screen" style={{ top: '60%', left: '-50%', transform: 'rotate(-3deg)' }}></div>
        <div className="absolute w-[200%] h-[900px] border-t-[2px] border-[#FF0054] rounded-[100%] shadow-[0_-5px_20px_rgba(180,0,200,0.8)] opacity-60 mix-blend-screen" style={{ top: '65%', left: '-50%', transform: 'rotate(-5deg)' }}></div>
        <div className="absolute w-[200%] h-[1000px] border-t-[1px] border-purple-400 rounded-[100%] opacity-30 mix-blend-screen" style={{ top: '68%', left: '-50%', transform: 'rotate(-2deg)' }}></div>
        
        {/* The intense star/flare on the right */}
        <div className="absolute right-[15%] top-[55%] w-[100px] h-[2px] bg-white shadow-[0_0_20px_#fff] rotate-45"></div>
        <div className="absolute right-[15%] top-[55%] w-[100px] h-[2px] bg-white shadow-[0_0_20px_#fff] -rotate-45"></div>
        <div className="absolute right-[15%] top-[55%] w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.8)]"></div>
      </div>

      {/* BOTTOM ROW: 3 FEATURES GRID */}
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 relative z-20 -mt-20 md:-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-white/10 pt-12">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Calendar className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Agendamento Inteligente</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Sua agenda funcionando 24h por dia, recebendo marcações automaticamente sem você mover um dedo.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ação, não apenas anotação</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Histórico de clientes, preferências e taxas de retorno. Saiba exatamente quem senta na sua cadeira.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-5 h-5 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Integração Financeira</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Fluxo de caixa automático. O sistema calcula seu lucro e comissões de forma transparente e em tempo real.</p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
