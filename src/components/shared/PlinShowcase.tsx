"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Sparkles, CalendarClock, MessageSquare, Target, Zap } from 'lucide-react';
import BookingWidgetDemo from './BookingWidgetDemo';
import SmartLeadWidgetDemo from './SmartLeadWidgetDemo';

export default function PlinShowcase({ niche, templateType }: { niche: string, templateType: string }) {
  const getBusinessName = () => {
    if (templateType === 'obra') {
      switch(niche) {
        case 'arquitetura': return 'Seu EscritÃ³rio';
        case 'construtora': return 'Sua Construtora';
        case 'engenharia': return 'Sua Engenharia';
        default: return 'Sua Empresa';
      }
    } else if (templateType === 'corp') {
      switch(niche) {
        case 'advogados': return 'Seu EscritÃ³rio';
        case 'contadores': return 'Sua Contabilidade';
        default: return 'Sua Empresa';
      }
    } else {
      switch(niche) {
        case 'barbearia': return 'Sua Barbearia';
        case 'salao': return 'Seu SalÃ£o';
        case 'manicure': return 'Seu EspaÃ§o';
        default: return 'Seu NegÃ³cio';
      }
    }
  };

  const businessName = getBusinessName();

  const demoServices = [
    { id: "1", name: "Corte DegradÃª + Barba", duration: 45, price: 65.00 },
    { id: "2", name: "Sobrancelha na Navalha", duration: 15, price: 15.00 },
    { id: "3", name: "Limpeza de Pele Express", duration: 30, price: 50.00 }
  ];

  return (
    <section className={`text-white relative overflow-hidden flex flex-col ${templateType === 'obra' ? 'bg-[#041E30]' : templateType === 'corp' ? 'bg-[#0B132B]' : 'bg-[#050505]'}`} style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      
      <div className="w-full max-w-[1200px] mx-auto relative z-20" style={{ paddingLeft: '160px', paddingRight: '80px' }}>
        
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
              {businessName} jÃ¡ tem <br/>
              {templateType === 'obra' ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#967764] to-[#E7DFDB]">orÃ§amentos</span> <br/>
                  online?
                </>
              ) : templateType === 'corp' ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8D99AE] to-[#FFFFFF]">avaliaÃ§Ãµes</span> <br/>
                  online?
                </>
              ) : (
                <>
                  agendamento <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0054] to-[#ff7eb3]">online?</span>
                </>
              )}
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
              {(templateType === 'obra' || templateType === 'corp') 
                ? "O Sistema PLIN capta, qualifica e organiza as solicitaÃ§Ãµes de orÃ§amento automaticamente â€” para que nenhum lead se perca no caos do WhatsApp."
                : "O Sistema PLIN escuta, entende e transforma o caos do WhatsApp em agendamentos claros â€” para que nenhum cliente se perca na conversa."}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://wa.me/5531973516770" target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center text-white rounded-full font-black text-sm uppercase tracking-[0.15em] transition-transform hover:scale-105 px-10 py-5 ${templateType === 'obra' ? 'bg-[#967764] hover:bg-[#7a5f4f] shadow-[0_0_30px_rgba(150,119,100,0.6)]' : templateType === 'corp' ? 'bg-[#8D99AE] hover:bg-[#6C7A92] shadow-[0_0_30px_rgba(141,153,174,0.6)]' : 'bg-[#FF0054] hover:bg-[#D00045] shadow-[0_0_30px_rgba(255,0,84,0.6)]'}`}>
                CHAMA NO WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MIDDLE ROW: ANIMATED GRAPH */}
      <div className="relative w-full h-[400px] md:h-[450px] mt-16 overflow-hidden z-10 flex items-center justify-center pointer-events-none">
        
        {/* Background Gradients */}
        <div className={`absolute right-[20%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 mix-blend-screen ${templateType === 'obra' ? 'bg-[#967764]' : templateType === 'corp' ? 'bg-[#8D99AE]' : 'bg-[#FF0054]'}`}></div>
        <div className={`absolute left-[20%] top-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[100px] opacity-20 mix-blend-screen ${templateType === 'obra' ? 'bg-[#E7DFDB]' : templateType === 'corp' ? 'bg-[#FFFFFF]' : 'bg-purple-600'}`}></div>
        
        {/* Animated SVG Graph */}
        <div className="w-full max-w-[1000px] mx-auto px-6 relative h-full flex items-end pb-10">
          
          {/* Faint Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pt-10 pb-10 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full border-b border-white border-dashed"></div>
            ))}
          </div>

          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
            {/* The Line */}
            <motion.path
              d="M0,280 C150,280 250,150 400,180 C550,210 650,80 800,90 C900,100 950,20 1000,0"
              fill="none"
              stroke="url(#gradientLine)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              style={{ filter: templateType === 'obra' ? 'drop-shadow(0 0 15px rgba(150,119,100,0.8))' : templateType === 'corp' ? 'drop-shadow(0 0 15px rgba(141,153,174,0.8))' : 'drop-shadow(0 0 15px rgba(255,0,84,0.8))' }}
            />
            
            {/* Gradient for Line */}
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                {templateType === 'obra' ? (
                  <>
                    <stop offset="0%" stopColor="#E7DFDB" />
                    <stop offset="50%" stopColor="#967764" />
                    <stop offset="100%" stopColor="#E7DFDB" />
                  </>
                ) : templateType === 'corp' ? (
                  <>
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#8D99AE" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#ff7eb3" />
                    <stop offset="50%" stopColor="#FF0054" />
                    <stop offset="100%" stopColor="#9d00ff" />
                  </>
                )}
              </linearGradient>
            </defs>

            {/* Glowing Dots */}
            {[
              { cx: 400, cy: 180, delay: 1 },
              { cx: 800, cy: 90, delay: 2 },
              { cx: 1000, cy: 0, delay: 3 }
            ].map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r="8"
                fill="#FFF"
                className="drop-shadow-[0_0_10px_#fff]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: dot.delay, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 }}
              />
            ))}
          </svg>

          {/* Floating UI Elements simulating a dashboard */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute right-[5%] top-[20%] bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
          >
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Crescimento Mensal</p>
            <p className="text-3xl font-black text-white flex items-center gap-2">
              +38% <TrendingUp className={`w-6 h-6 ${templateType === 'obra' ? 'text-[#967764]' : templateType === 'corp' ? 'text-[#8D99AE]' : 'text-[#FF0054]'}`} />
            </p>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM ROW: 3 FEATURES GRID */}
      <div className="w-full max-w-[1200px] mx-auto relative z-20 -mt-20 md:-mt-10" style={{ paddingLeft: '160px', paddingRight: '80px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-white/10 pt-12">
          
          {(templateType === 'obra' || templateType === 'corp') ? (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CaptaÃ§Ã£o 24h</h3>
                <p className="text-sm text-gray-400 leading-relaxed">NÃ£o perca mais nenhuma oportunidade. O sistema recebe pedidos de orÃ§amento a qualquer hora do dia ou da noite.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <MessageSquare className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Caixa Ãšnica (CRM)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Todos os contatos centralizados. Gerencie status, adicione notas e acompanhe toda a negociaÃ§Ã£o em um sÃ³ lugar.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fechamento Mais RÃ¡pido</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Respostas Ã¡geis geram mais vendas. Elimine processos manuais e converta leads qualificados com facilidade.</p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Calendar className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Agendamento Inteligente</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Sua agenda funcionando 24h por dia, recebendo marcaÃ§Ãµes automaticamente sem vocÃª mover um dedo.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AÃ§Ã£o, nÃ£o apenas anotaÃ§Ã£o</h3>
                <p className="text-sm text-gray-400 leading-relaxed">HistÃ³rico de clientes, preferÃªncias e taxas de retorno. Saiba exatamente quem senta na sua cadeira.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col lg:border-l lg:border-white/10 lg:pl-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IntegraÃ§Ã£o Financeira</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Fluxo de caixa automÃ¡tico. O sistema calcula seu lucro e comissÃµes de forma transparente e em tempo real.</p>
              </motion.div>
            </>
          )}

        </div>
      </div>

      {/* DEGUSTAÃ‡ÃƒO PREMIUM: EXPERIMENTE NA PRÃTICA */}
      <div className="w-full max-w-[1200px] mx-auto relative z-20 mt-24" style={{ paddingLeft: '160px', paddingRight: '80px', marginTop: '96px' }}>
        <div className="border-t border-white/10 pt-20 relative" style={{ paddingTop: '80px' }}>
          
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none ${templateType === 'obra' ? 'bg-[#967764]/10' : templateType === 'corp' ? 'bg-[#8D99AE]/10' : 'bg-[#FF0054]/10'}`}></div>

          <div className="text-center mb-16 relative z-10" style={{ marginBottom: '64px', textAlign: 'center' }}>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4" style={{ marginBottom: '16px' }}>Experimente na <span className={`text-transparent bg-clip-text bg-gradient-to-r ${templateType === 'obra' ? 'from-[#967764] to-[#E7DFDB]' : templateType === 'corp' ? 'from-[#8D99AE] to-[#FFFFFF]' : 'from-[#FF0054] to-pink-500'}`}>PrÃ¡tica</span></h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ margin: '0 auto', maxWidth: '672px' }}>
              Interaja com a ferramenta abaixo. Simule um agendamento com dados fictÃ­cios e sinta a experiÃªncia de conversÃ£o instantÃ¢nea.
            </p>
          </div>

          <div className="max-w-md mx-auto relative z-10" style={{ maxWidth: '448px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {(templateType === 'obra' || templateType === 'corp') ? (
                <SmartLeadWidgetDemo businessName={businessName} templateType={templateType} />
              ) : (
                <BookingWidgetDemo 
                  title={businessName}
                  services={demoServices} 
                />
              )}
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}


