'use client';
import React from 'react';

export default function ServTeam() {
  return (
    <section id="equipe" style={{ marginTop: '80px', paddingBottom: '160px' }} className="z-50">
      <div className="text-center flex justify-center flex-col items-center px-6">
        <h2 className="border border-white/50 text-white rounded-[30px] font-light" style={{ padding: '6px 32px', marginBottom: '24px', fontSize: '15px' }}>
          Nossa Equipe
        </h2>
        <h1 className="text-[36px] text-white font-bold" style={{ marginBottom: '20px' }}>
          Profissionais Prontos Para Atender
        </h1>
        <div className="bg-amarela" style={{ width: '60px', height: '3px', margin: '16px auto 24px' }}></div>
      </div>
      
      <div className="flex flex-wrap justify-center items-stretch px-6 w-full" style={{ gap: '40px', marginTop: '64px', maxWidth: '1200px', margin: '64px auto 0' }}>
        <div className="card border border-white/10 rounded-[30px] bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300" style={{ padding: '40px 24px', minWidth: '280px', maxWidth: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/serv/imgs/guilherme.png" alt="Guilherme" className="rounded-full object-cover border-2 border-amarela" style={{ width: '140px', height: '140px', marginBottom: '24px', display: 'block', margin: '0 auto 24px auto' }} />
          <h3 className="text-[22px] text-white font-semibold" style={{ marginBottom: '8px' }}>Guilherme</h3>
          <p className="text-white/60 text-sm mt-1">Técnico Chefe</p>
        </div>
        <div className="card border border-white/10 rounded-[30px] bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300" style={{ padding: '40px 24px', minWidth: '280px', maxWidth: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/serv/imgs/thiago.png" alt="Thiago" className="rounded-full object-cover border-2 border-amarela" style={{ width: '140px', height: '140px', marginBottom: '24px', display: 'block', margin: '0 auto 24px auto' }} />
          <h3 className="text-[22px] text-white font-semibold" style={{ marginBottom: '8px' }}>Thiago</h3>
          <p className="text-white/60 text-sm mt-1">Especialista de Instalação</p>
        </div>
        <div className="card border border-white/10 rounded-[30px] bg-white/5 backdrop-blur-md hover:-translate-y-2 transition-all duration-300" style={{ padding: '40px 24px', minWidth: '280px', maxWidth: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src="/serv/imgs/jose.png" alt="José" className="rounded-full object-cover border-2 border-amarela" style={{ width: '140px', height: '140px', marginBottom: '24px', display: 'block', margin: '0 auto 24px auto' }} />
          <h3 className="text-[22px] text-white font-semibold" style={{ marginBottom: '8px' }}>José</h3>
          <p className="text-white/60 text-sm mt-1">Manutenção e Suporte</p>
        </div>
      </div>
    </section>
  );
}
