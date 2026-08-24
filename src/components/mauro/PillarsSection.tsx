'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const pillars = [
  {
    title: 'Cafeicultores',
    subtitle: 'A busca pela pureza máxima.',
    description: 'Análise técnica e orientação para extrair notas surpreendentes da mesma terra. Conectamos o produtor às exigências altíssimas do mercado global e de luxo.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/Cafeicultor-03-site-Mauro-Benedetti.jpg'
  },
  {
    title: 'Presente Corporativo',
    subtitle: 'Uma extensão do seu prestígio.',
    description: 'Nós elevamos o café a um artigo de luxo. Lotes exclusivos de 250g pensados estrategicamente para Diretores e CEOs presentearem seus clientes mais vitais. Uma experiência sensorial que fala pela sua marca.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/marca-propria-02-mauro-benedetti.jpg'
  },
  {
    title: 'Expansão de Marcas',
    subtitle: 'Blends com identidade e mercado.',
    description: 'Apoiamos a estruturação de linhas premium. Entregamos a base técnica, a identidade visual do sabor e o peso necessário para atuar nas prateleiras mais cobiçadas.',
    image: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/mercado-de-cafe-01-mauro-benedetti.jpg'
  }
];

export default function PillarsSection() {
  return (
    <section 
      className="bg-mauro-dark relative border-t border-mauro-gold/10 w-full overflow-hidden"
      style={{ paddingTop: '150px', paddingBottom: '150px' }}
    >
      <div 
        className="w-full" 
        style={{ paddingLeft: '8vw', paddingRight: '8vw' }}
      >
        <div className="max-w-[1200px] mx-auto">
        
        <div 
          className="flex flex-col items-center justify-center text-center gap-4"
          style={{ marginBottom: '150px' }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
            style={{ maxWidth: '900px' }}
          >
            <h4 className="text-mauro-gold text-sm md:text-base tracking-[0.3em] uppercase font-sans mb-6">
              Nossos Pilares
            </h4>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-mauro-light leading-[1.1]">
              Elevando o café ao status de <br className="hidden md:block" />
              <span className="italic text-mauro-gold">Arte Corporativa</span>.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block w-32 h-[1px] bg-mauro-gold/50 mt-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[600px] rounded-sm overflow-hidden cursor-pointer bg-mauro-dark"
            >
              <Image 
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-mauro-dark via-mauro-dark/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-700"></div>

              <div 
                className="absolute inset-0 flex flex-col justify-end"
                style={{ padding: '0px 40px 50px 40px' }}
              >
                <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-4">
                  <h3 className="text-4xl font-serif text-mauro-light mb-2 leading-tight">
                    {pillar.title}
                  </h3>
                  <h4 className="text-xl text-mauro-gold font-serif italic mb-6 opacity-90">
                    {pillar.subtitle}
                  </h4>
                  
                  <div className="overflow-hidden">
                    <p className="text-mauro-light/70 font-sans font-light text-base leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-mauro-gold/0 group-hover:border-mauro-gold/50 transition-colors duration-700"></div>
            </motion.div>
          ))}
        </div>

        </div>

      </div>
    </section>
  );
}
