'use client';
import React from 'react';

export default function ServFeatures() {
  return (
    <section id="diferenciais" className="z-50 flex flex-col items-center w-full" style={{ marginTop: '100px', marginBottom: '100px' }}>
      <div className="text-center flex flex-col items-center w-full px-6">
        <h2 className="border border-white/50 text-white rounded-[30px] font-light" style={{ padding: '6px 32px', marginBottom: '24px', fontSize: '15px' }}>
          Diferenciais
        </h2>
        <h1 className="text-[36px] text-white font-bold" style={{ marginBottom: '20px' }}>
          Por que escolher nossa equipe?
        </h1>
        <div className="bg-amarela" style={{ width: '60px', height: '3px', margin: '16px auto 24px' }}></div>
        <p className="text-[16px] text-white/70" style={{ maxWidth: '700px', marginBottom: '64px', lineHeight: '1.6' }}>
         Oferecemos o melhor serviço de climatização da região. Nossos profissionais são treinados pelas principais fabricantes para garantir que seu equipamento funcione com a máxima eficiência.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full px-6" style={{ gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="card2 flex-1 flex">
          <div className="bg text-center w-full flex flex-col items-center justify-center" style={{ padding: '48px 32px' }}>
            <i className="bi bi-clock-history text-amarela" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
            <h1 className="text-[22px] text-white font-bold" style={{ marginBottom: '16px' }}>
              Agilidade no Atendimento
            </h1>
            <p className="text-white/70 text-[14px] leading-relaxed">
              Não deixamos você esperando no calor. Atendimento prioritário e agendamento rápido via WhatsApp.
            </p>
          </div>
          <div className="blob"></div>
        </div>

        <div className="card2 flex-1 flex">
          <div className="bg text-center w-full flex flex-col items-center justify-center" style={{ padding: '48px 32px' }}>
            <i className="bi bi-award text-amarela" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
            <h1 className="text-[22px] text-white font-bold" style={{ marginBottom: '16px' }}>
              Equipe Qualificada
            </h1>
            <p className="text-white/70 text-[14px] leading-relaxed">
              Técnicos certificados e com anos de experiência, preparados para resolver qualquer problema.
            </p>
          </div>
          <div className="blob"></div>
        </div>

        <div className="card2 flex-1 flex">
          <div className="bg text-center w-full flex flex-col items-center justify-center" style={{ padding: '48px 32px' }}>
            <i className="bi bi-shield-check text-amarela" style={{ fontSize: '48px', marginBottom: '20px' }}></i>
            <h1 className="text-[22px] text-white font-bold" style={{ marginBottom: '16px' }}>
              Garantia de Qualidade
            </h1>
            <p className="text-white/70 text-[14px] leading-relaxed">
              Todos os nossos serviços contam com garantia. Usamos peças originais para sua total tranquilidade.
            </p>
          </div>
          <div className="blob"></div>
        </div>
      </div>

      <div className="flex justify-center w-full px-6" style={{ marginTop: '100px', maxWidth: '1200px', margin: '100px auto 0' }}>
        <img 
          src="/serv/imgs/AR-COND-05.jpg" 
          alt="Equipe em ação" 
          className="rounded-[40px] shadow-2xl border border-white/10 w-full object-cover" 
          style={{ height: '550px' }} 
        />
      </div>
    </section>
  );
}
