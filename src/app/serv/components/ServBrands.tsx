'use client';
import React, { useEffect, useState } from 'react';

export default function ServBrands() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="marcas" style={{ marginTop: '120px' }}>
      <div className="text-center flex flex-col items-center px-6">
        <h1 className="border border-white/50 text-white rounded-[30px] font-light" style={{ padding: '6px 32px', marginBottom: '24px', fontSize: '15px' }}>
         Marcas Atendidas
        </h1>
        <h1 className="text-[36px] text-white font-bold" style={{ marginBottom: '20px' }}>
          Trabalhamos com as Maiores Fabricantes
        </h1>
        <div className="bg-amarela" style={{ width: '60px', height: '3px', margin: '16px auto 24px' }}></div>
        <p className="text-[15px] text-white/70 text-center" style={{ maxWidth: '700px', marginBottom: '32px', lineHeight: '1.6' }}>
        Conhecemos as especificidades técnicas de cada marca para entregar a manutenção correta.
        </p>
      </div>

      <div className="relative flex justify-center items-center overflow-hidden w-full">
        <div id="carrosselImagens" className="flex w-max text-white uppercase items-center font-bold" style={{ gap: '48px', marginTop: '0px', marginBottom: '80px', fontSize: '48px' }}>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">LG</div>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">SAMSUNG</div>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">GREE</div>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">FUJITSU</div>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">CONSUL</div>
          <div className="hover:-translate-y-1 transition-all duration-700 ease-in-out hover:text-amarela">ELECTROLUX</div>
        </div>
      </div>
      
      <div className="w-full mx-auto px-6 relative overflow-hidden shadow-2xl group border border-white/10" style={{ maxWidth: '1200px', height: '550px', borderRadius: '40px', margin: '0 auto 160px auto' }}>
        <img src="/serv/imgs/AR-COND-19-50.jpg" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'} banner-slide`} alt="Imagem 1" />
        <img src="/serv/imgs/AR-COND-20-50.jpg" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'} banner-slide`} alt="Imagem 2" />
        <img src="/serv/imgs/AR-COND-21-50.jpg" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'} banner-slide`} alt="Imagem 3" />
        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
    </section>
  );
}
