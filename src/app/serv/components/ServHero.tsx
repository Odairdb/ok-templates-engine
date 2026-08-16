'use client';
import React from 'react';
import ServHeader from './ServHeader';

export default function ServHero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col" id="hero" style={{ paddingBottom: '70px' }}>
      {/* Círculos animados no fundo (posições originais restauradas) */}
      <div className="absolute -z-10 top-0 left-1/4 w-[500px] h-[500px] bg-amarela/20 rounded-full blur-[150px] animate-circle1"></div>
      <div className="absolute -z-10 top-1/4 right-1/4 w-[400px] h-[400px] bg-amarela/15 rounded-full blur-[120px] animate-circle2"></div>
      <div className="absolute -z-10 bottom-0 left-1/2 w-[600px] h-[600px] bg-amarela/10 rounded-full blur-[200px] animate-circle3"></div>

      <ServHeader />

      <div 
        className="z-50 relative flex flex-col lg:flex-row items-center w-full flex-1"
        style={{ margin: '0 auto', maxWidth: '1300px', paddingLeft: '40px', paddingRight: '40px', marginTop: '64px', gap: '64px' }}
      >
        <div className="flex flex-col items-start flex-1 w-full lg:max-w-[55%]">
          <h3 className="text-white delay1 border border-white/40 inline-block rounded-[30px]" style={{ padding: '8px 24px', marginBottom: '24px' }}>
            Climatização de qualidade para você.
          </h3>
          <h1 className="text-[52px] leading-[1.1] lg:text-[68px] lg:leading-[1.05] delay2 text-white font-bold uppercase" style={{ marginBottom: '24px' }}>
            ESPECIALISTAS <br />EM <span className="text-amarela">INSTALAÇÃO</span> <br />E <span className="text-amarela">MANUTENÇÃO</span>
          </h1>
          <p className="text-white/60 md:max-w-xl delay3 text-[17px] leading-relaxed" style={{ marginBottom: '32px' }}>
            Garantimos o conforto da sua família e da sua empresa com atendimento rápido, 
            equipe técnica certificada e garantia total em todos os serviços de ar condicionado.
          </p>
          <div className="delay4" style={{ marginBottom: '48px' }}>
            <div className="glowbox glowbox-active">
              <div className="glowbox-animations">
                <div className="glowbox-glow"></div>
                <div className="glowbox-stars-masker">
                  <div className="glowbox-stars"></div>
                </div>
              </div>

              <div className="glowbox-borders-masker">
                <div className="glowbox-borders"></div>
              </div>

              <a href="#">
                <div className="btn-cta-box" style={{ padding: '12px 24px' }}>
                  <div className="btn-cta font-bold text-lg">Falar no WhatsApp</div>
                  <img
                    src="https://zeph.com.br/wp-content/uploads/2023/12/seta-2.svg"
                    className="arrow-icon"
                    alt="Seta"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full" style={{ gap: '24px' }}>
            <div className="delay5 card hover:-translate-y-1 hover: border border-amarela rounded-2xl backdrop-blur bg-white/5 flex-1" style={{ padding: '32px 24px' }}>
              <i className="bi bi-lightning-charge text-3xl text-amarela"></i>
              <h1 className="text-[22px] font-semibold text-white" style={{ marginTop: '16px' }}>ATENDIMENTO<br/>RÁPIDO</h1>
              <p className="text-[14px] text-white/70 leading-snug" style={{ marginTop: '12px' }}>
                Equipe pronta para emergências. Chegamos rápido para resolver.
              </p>
            </div>
            <div className="card delay6 hover:-translate-y-1 hover:ease-in-out border border-amarela rounded-2xl backdrop-blur bg-white/5 flex-1" style={{ padding: '32px 24px' }}>
              <i className="bi bi-patch-check text-3xl text-amarela"></i>
              <h1 className="text-[22px] font-semibold text-white" style={{ marginTop: '16px' }}>GARANTIA E<br/>PEÇAS</h1>
              <p className="text-[14px] text-white/70 leading-snug" style={{ marginTop: '12px' }}>
                Utilizamos apenas peças originais para assegurar a vida útil.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center right-col delayimg z-10 w-full" style={{ marginTop: '40px' }}>
          <img 
            src="/serv/imgs/AR-COND-11.png" 
            alt="Ar Condicionado" 
            className="w-full h-auto object-contain" 
            style={{ maxWidth: '600px' }}
          />
        </div>
      </div>
    </section>
  );
}
