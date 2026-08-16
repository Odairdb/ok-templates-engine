'use client';
import SmartLeadWidgetDemo from '@/components/shared/SmartLeadWidgetDemo';

export default function ServAction() {
  return (
    <section id="aproximacao" className="flex flex-col lg:flex-row justify-center items-center w-full px-6" style={{ minHeight: '80vh', gap: '80px', marginTop: '60px', marginBottom: '60px' }}>
      <div className="flex flex-col flex-1" style={{ maxWidth: '550px' }}>
        <h1 className="text-white text-[42px] font-bold leading-tight" style={{ marginBottom: '40px' }}>
          Peça um Orçamento Expresso Sem Compromisso ou fale conosco pelo Whatsapp
        </h1>
        <div className="flex items-center" style={{ marginBottom: '40px' }}>
          <i className="bi bi-whatsapp text-[#25D366]" style={{ fontSize: '64px' }}></i>
          <div className="bg-amarela" style={{ width: '2px', height: '60px', margin: '0 24px' }}></div>
          <p className="text-white text-[20px]">Resposta Imediata!</p>
        </div>

        <a
          href="https://wa.me/5511999999999"
          className="border border-white/40 rounded-[12px] text-white hover:bg-white/10 transition-all text-center font-medium"
          style={{ padding: '16px 40px', width: 'fit-content', marginBottom: '40px' }}
        >
          Chamar no WhatsApp
        </a>

        <div className="flex flex-col" style={{ gap: '12px' }}>
          <p className="text-white/60 text-[15px]">
            Atendemos residências, comércios e indústrias.
          </p>
          <p className="text-white/60 text-[15px]">
            Orçamentos sem compromisso.
          </p>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center w-full" style={{ maxWidth: '500px' }}>
        <div className="w-full">
          <SmartLeadWidgetDemo templateType="serv" />
        </div>
      </div>
    </section>
  );
}
