'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    title: 'Diplomas e Certificados',
    description: 'Mais do que papéis, 40 anos de validação rigorosa das maiores instituições globais de café. Cada certificado é a garantia de que o seu lote corporativo foi chancelado pela mais alta patente do setor.',
    year: '1984 - Presente'
  },
  {
    title: 'Eventos Globais',
    description: 'Presença constante nos principais epicentros do café de luxo. Da Europa à ÁÁsia, Mauro Benedetti transita onde as tendências do café especial são ditadas.',
    year: 'Mundo'
  },
  {
    title: 'Conexões Estratégicas',
    description: 'A ponte perfeita entre o campo e as diretorias. Nossa rede de contatos permite que sua empresa entregue aos clientes não apenas um brinde, mas uma peça de networking de alto nível.',
    year: 'B2B'
  }
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Capturando o scroll da página enquanto o usuário passa por esta seção
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Criando a magia: atrelando a opacidade e a posição Y EXATAMENTE ao movimento do mouse!
  // Card 1 (Esquerda) sobe primeiro e mais rápido
  const y1 = useTransform(scrollYProgress, [0.2, 0.5], [200, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Card 2 (Meio) sobe um pouco depois
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [250, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Card 3 (Direita) sobe por último, criando uma "onda" premium
  const y3 = useTransform(scrollYProgress, [0.4, 0.7], [300, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const glassCardClass = `w-full flex flex-col space-y-6 rounded-3xl !p-12 liquid-glass-strong relative z-10`;

  return (
    <section 
      ref={containerRef}
      className="bg-mauro-dark relative border-t border-mauro-gold/10 w-full overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '150px' }}
    >
      {/* BACKGROUND ANIMADO: Orbes Flutuantes de Luxo - VERSíO INTENSA */}
      {/* Opacidade elevada ao máximo e alcance dos movimentos triplicado para maior impacto visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <motion.div 
          animate={{ 
            x: [0, 250, -200, 0], 
            y: [0, -250, 150, 0],
            scale: [1, 1.4, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 300]) }}
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-mauro-amber/40 rounded-full blur-[100px]"
        />
        
        <motion.div 
          animate={{ 
            x: [0, -300, 250, 0], 
            y: [0, 300, -200, 0],
            scale: [1, 0.8, 1.5, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: useTransform(scrollYProgress, [0, 1], [300, -300]) }}
          className="absolute top-[30%] right-[0%] w-[500px] h-[500px] bg-white/20 rounded-full blur-[90px]"
        />

        <motion.div 
          animate={{ 
            x: [0, 200, -300, 0], 
            y: [0, -150, 250, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[30%] w-[800px] h-[400px] bg-mauro-gold/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="w-full relative z-10" style={{ paddingLeft: '8vw', paddingRight: '8vw' }}>
        <div className="max-w-[1200px] mx-auto">
          
          <div 
            className="flex flex-col items-center justify-center text-center gap-4"
            style={{ marginBottom: '150px' }}
          >
            {/* Título também reage ao scroll (Surge suavemente) */}
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
                y: useTransform(scrollYProgress, [0.1, 0.3], [50, 0]),
                scale: useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]), maxWidth: '900px' }}
              className="flex flex-col items-center"
            >
              <h4 className="text-mauro-gold text-sm md:text-base tracking-[0.3em] uppercase font-sans mb-6">
                Selo de Garantia
              </h4>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-mauro-light leading-[1.1]">
                A Experiência <span className="italic text-mauro-gold">do Mestre</span>.
              </h2>
            </motion.div>
            
            {/* Linha que "desenha" de acordo com o scroll */}
            <motion.div 
              style={{ 
                scaleX: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
                opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
              }}
              className="hidden md:block w-32 h-[1px] bg-mauro-gold/50 mt-8 origin-center"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            
            {/* Card 1 */}
            <motion.div style={{ y: y1, opacity: opacity1 }} className={glassCardClass}>
              <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
                {experiences[0].year}
              </h4>
              <h2 className="text-3xl lg:text-4xl font-serif text-white leading-tight drop-shadow-md">
                {experiences[0].title}
              </h2>
              <div className="w-full h-[1px] bg-white/20 my-2"></div>
              <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed">
                {experiences[0].description}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div style={{ y: y2, opacity: opacity2 }} className={glassCardClass}>
              <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
                {experiences[1].year}
              </h4>
              <h2 className="text-3xl lg:text-4xl font-serif text-white leading-tight drop-shadow-md">
                {experiences[1].title}
              </h2>
              <div className="w-full h-[1px] bg-white/20 my-2"></div>
              <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed">
                {experiences[1].description}
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div style={{ y: y3, opacity: opacity3 }} className={glassCardClass}>
              <h4 className="text-mauro-gold text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-bold">
                {experiences[2].year}
              </h4>
              <h2 className="text-3xl lg:text-4xl font-serif text-white leading-tight drop-shadow-md">
                {experiences[2].title}
              </h2>
              <div className="w-full h-[1px] bg-white/20 my-2"></div>
              <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed">
                {experiences[2].description}
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}


