'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Diplomas e Certificados',
    description: 'Formações, Cursos e muita bagagem em 40 anos dedicados ao café.',
    year: '1984 - Presente'
  },
  {
    title: 'Eventos',
    description: 'Participações em eventos nacionais e internacionais.',
    year: 'Global'
  },
  {
    title: 'Conexões',
    description: 'Conhecedor de Mercados e Parcerias Estratégicas.',
    year: 'Mercado'
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-mauro-cream"
            >
              A Experiência do Profissional
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-mauro-brown mt-6 mx-auto md:mx-0"
            ></motion.div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-white/10 z-0"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col"
            >
              {/* Timeline Dot */}
              <div className="w-16 h-16 rounded-full bg-mauro-darkbrown border border-mauro-amber flex items-center justify-center mx-auto md:mx-0 mb-8 shadow-[0_0_15px_rgba(228,150,56,0.2)]">
                <span className="text-mauro-amber font-serif text-sm">{exp.year}</span>
              </div>
              
              <h3 className="text-2xl font-serif text-mauro-cream text-center md:text-left mb-4">
                {exp.title}
              </h3>
              
              <p className="text-white/60 font-sans text-center md:text-left leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}

        </div>
        
      </div>
    </section>
  );
}
