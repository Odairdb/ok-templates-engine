import React from 'react';
import CoffeeSequence from '@/components/mauro/CoffeeSequence';
import AboutSection from '@/components/mauro/AboutSection';
import PillarsSection from '@/components/mauro/PillarsSection';
import InstitutoSection from '@/components/mauro/InstitutoSection';
import ExperienceSection from '@/components/mauro/ExperienceSection';
import PartnersMarquee from '@/components/mauro/PartnersMarquee';
import ContactPLIN from '@/components/mauro/ContactPLIN';
import './mauro.css';

export const metadata = {
  title: 'Mauro Benedetti | Especialista em Café',
  description: 'Do genoma à xícara: traduzindo o real valor do café.',
};

export default function MauroBenedettiPage() {
  return (
    <main className="bg-mauro-black min-h-screen text-white mauro-scrollbar">
      {/* 1) HERO SCROLLYTELLING */}
      <CoffeeSequence />

      {/* 2) O MESTRE DE TORRA */}
      <AboutSection />

      {/* 3) INSTITUTO BSC */}
      <InstitutoSection />

      {/* 4) PILARES */}
      <PillarsSection />

      {/* 5) EXPERIÊNCIA DO PROFISSIONAL */}
      <ExperienceSection />

      {/* 6) PARCEIROS E CLIENTES */}
      <PartnersMarquee />

      {/* 7) CONTATO & CONVERSÃO (PLIN) */}
      <ContactPLIN />
    </main>
  );
}
