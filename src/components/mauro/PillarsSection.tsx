'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pillars = [
  {
    title: 'Cafeicultores',
    subtitle: 'Valorizar o Potencial e o Real Valor do Café.',
    description: 'Análise técnica, visão de mercado e orientação estratégica para que o produtor entenda, comprove e alcance as melhores valorizações para sua produção.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/Cafeicultor-03-site-Mauro-Benedetti.jpg'
  },
  {
    title: 'Marcas Próprias',
    subtitle: 'Desenvolver a Marca Própria com os Melhores Blends.',
    description: 'Apoio completo para estruturar marcas próprias com base técnica, identidade clara e visão comercial, conectando produto, posicionamento e mercado.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/marca-propria-02-mauro-benedetti.jpg'
  },
  {
    title: 'Mercados',
    subtitle: 'Introdução nos Mercados com Parcerias Estratégicas.',
    description: 'Análise técnica, visão de mercado e orientação estratégica para que o produtor entenda, comprove e alcance as melhores valorizações para sua produção.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/mercado-de-cafe-01-mauro-benedetti.jpg'
  }
];

export default function PillarsSection() {
  return (
    <section className="bg-mauro-darkbrown relative" style={{ padding: '120px 24px' }}>
      <div className="flex flex-col gap-16" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-mauro-cream"
          >
            Seu café tem mais valor do que você imagina
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-mauro-amber mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image 
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mauro-black via-mauro-black/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75"></div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-serif text-mauro-amber mb-2">
                  {pillar.title}
                </h3>
                <h4 className="text-xl text-mauro-cream font-serif italic mb-4">
                  {pillar.subtitle}
                </h4>
                
                {/* Expandable Description */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <p className="text-white/70 font-sans text-sm leading-relaxed mt-2">
                    {pillar.description}
                  </p>
                  <button className="mt-6 text-sm font-bold uppercase tracking-wider text-mauro-amber flex items-center gap-2">
                    Saiba Mais <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
