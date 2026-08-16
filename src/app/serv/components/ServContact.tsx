'use client';
import React from 'react';

export default function ServContact() {
  return (
    <section id="contato" style={{ marginTop: '120px', paddingBottom: '80px' }}>
      <div className="flex justify-center items-center flex-col px-6">
         <h6 className="border border-white/50 text-white rounded-[30px] font-light" style={{ padding: '6px 32px', marginBottom: '24px', fontSize: '15px' }}>
         Atendimento
        </h6>
        <h2 className="text-[36px] text-white font-bold" style={{ marginBottom: '20px' }}>
          Orçamento Descomplicado
        </h2>
        <div className="bg-amarela" style={{ width: '60px', height: '3px', margin: '16px auto 24px' }}></div>
        <h6 className="text-[16px] text-white/70 text-center" style={{ maxWidth: '700px', marginBottom: '64px', lineHeight: '1.6' }}>
          Você não precisa perder tempo. Agende sua visita técnica ou solicite um orçamento em poucos minutos pelo nosso canal direto.
        </h6>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-6" style={{ marginTop: '40px', gap: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Coluna Esquerda (Textos) */}
        <div id="leftNodes" className="flex flex-col text-center lg:text-right w-full lg:w-1/3" style={{ gap: '48px' }}>
          <div><p className="text-white font-medium mindmap-node2">Diagnóstico Rápido</p></div>
          <div><p className="text-white font-medium mindmap-node2">Agendamento Fácil</p></div>
          <div><p className="text-white font-medium mindmap-node2">Garantia Comprovada</p></div>
        </div>

        {/* Imagem Central */}
        <div className="flex justify-center flex-shrink-0" id="mindmapImage">
          <img src="/serv/imgs/AR-COND-14.png" alt="Suporte" className="rounded-[30px]" style={{ width: '350px' }} />
        </div>

        {/* Coluna Direita (Textos) */}
        <div id="rightNodes" className="flex flex-col text-center lg:text-left w-full lg:w-1/3" style={{ gap: '48px' }}>
          <div><p className="text-white font-medium mindmap-node1">Serviço Limpo</p></div>
          <div><p className="text-white font-medium mindmap-node1">Profissionais Uniformizados</p></div>
          <div><p className="text-white font-medium mindmap-node1">Pagamento Facilitado</p></div>
        </div>
      </div>
    </section>
  );
}
