'use client';
import React from 'react';

export default function ServServices() {
  return (
    <>
      <div className="flex justify-center js-img-sec2 -mt-16 relative z-20 px-6" style={{ marginBottom: '100px' }}>
        <img 
          src="/serv/imgs/AR-COND-07.jpg" 
          alt="Equipe de Ar Condicionado" 
          className="rounded-3xl shadow-2xl w-full max-w-5xl object-cover h-[400px] lg:h-[550px] border border-white/10" 
        />
      </div>

      <section
        id="servicos"
        className="min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden relative z-10 bg-primario"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl w-full px-6 mx-auto">
          {/* Coluna esquerda */}
          <div className="flex-1 left-col">
            <div className="flex gap-8 items-center hidden">
              <img src="/serv/imgs/ftbg.png" alt="" width="90" className="logo" />
              <div className="bg-amarela w-[2px] h-16 opacity-90 line"></div>
              <img src="/serv/imgs/visa.png" alt="" width="150" className="h-14 visa" />
            </div>

            <h3 className="text-[44px] leading-tight font-medium text-white titulo">
              Serviços Especializados
            </h3>

            <div 
              className="text-white text-[17px] max-w-lg font-light mt-8 mb-8 border border-amarela rounded-2xl p-6 backdrop-clip-padding bg-white/5 box"
              style={{ padding: '24px' }}
            >
              <p>
                Soluções completas para manter o clima perfeito na sua casa ou empresa.
              </p>
            </div>

            <div className="flex flex-col gap-6 itens">
              <h2 className="text-white flex items-center gap-5 text-[15px]">
                <div className="flex items-center justify-center min-w-12 h-12 border border-amarela rounded-lg text-amarela">
                  <i className="bi bi-tools text-xl"></i>
                </div>
                Instalação de Aparelhos (Split, Piso Teto, K7)
              </h2>

              <h2 className="text-white flex items-center gap-5 text-[15px]">
                <div className="flex items-center justify-center min-w-12 h-12 border border-amarela rounded-lg text-amarela">
                  <i className="bi bi-droplet-half text-xl"></i>
                </div>
                Limpeza e Higienização Profunda
              </h2>
            </div>

            <p className="mt-14 text-white/70 font-light texto text-[15px]">
              Não sofra com o calor. Agende uma visita técnica hoje mesmo!
            </p>

            <div className="mt-10 botao">
              <a
                href="#contato"
                className="delay1 inline-block border border-amarela p-3 px-12 rounded-xl text-white backdrop-blur hover:bg-amarela hover:text-black transition-all"
                style={{ padding: '12px 48px' }}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="flex-1 right-col w-full relative flex justify-center items-center">
            <div className="absolute -z-10 right-0 top-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-r from-amarela/20 to-transparent"></div>
            <img 
              src="/serv/imgs/AR-COND-17.png" 
              alt="Aparelho de Ar Condicionado" 
              className="rounded-3xl shadow-2xl w-full max-w-[500px] object-contain h-[550px]" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
