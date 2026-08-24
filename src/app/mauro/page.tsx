import React from 'react';
import Header from '@/components/mauro/Header';
import CoffeeSequence from '@/components/mauro/CoffeeSequence';
import AboutSequence from '@/components/mauro/AboutSequence';
import PillarsSection from '@/components/mauro/PillarsSection';
import InstitutoSection from '@/components/mauro/InstitutoSection';
import ExperienceSection from '@/components/mauro/ExperienceSection';
import PartnersMarquee from '@/components/mauro/PartnersMarquee';
import ContactPLIN from '@/components/mauro/ContactPLIN';
import Footer from '@/components/mauro/Footer';
import './mauro.css';

export const metadata = {
  title: 'Mauro Benedetti | Especialista em Café',
  description: 'Do genoma à xícara: traduzindo o real valor do Café.',
};

export default function MauroBenedettiPage() {
  return (
    <main className="bg-mauro-dark min-h-screen text-mauro-light font-sans selection:bg-mauro-gold selection:text-mauro-dark mauro-scrollbar relative">
      
      {/* 0) NAVBAR / HEADER */}
      <Header />

      {/* 1) HERO SCROLLYTELLING */}
      <div id="inicio"><CoffeeSequence /></div>

      {/* 2) O MESTRE DE TORRA */}
      <div id="mestre"><AboutSequence /></div>

      {/* 3) PILARES */}
      <div id="pilares"><PillarsSection /></div>

      {/* 4) SELO DE GARANTIA (EXPERIÊNCIA) */}
      <div id="experiencia"><ExperienceSection /></div>

      {/* 5) INSTITUTO BSC */}
      <div id="instituto"><InstitutoSection /></div>

      {/* 6) PARCEIROS E CLIENTES */}
      <PartnersMarquee />

      {/* 7) CONTATO & CONVERSÃO (PLIN) */}
      <div id="contato"><ContactPLIN /></div>

      {/* 8) FOOTER / RODAPÉ */}
      <Footer />
    </main>
  );
}





