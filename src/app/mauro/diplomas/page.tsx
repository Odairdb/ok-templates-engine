import React from 'react';
import InternalPageTemplate from '@/components/mauro/InternalPageTemplate';
import Image from 'next/image';

export default function DiplomasPage() {
    const certificates = [
        {
            year: "2005",
            title: "Prêmio Máximo Cooxupé",
            subtitle: "Mauro Benedetti",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2025/12/PREMIO-MAXIMO-2005-MAURO-BENEDETTI.png"
        },
        {
            year: "2006",
            title: "Degustador Oficial",
            subtitle: "Mauro Benedetti",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2026/01/DIPLOMA-DEGUSTADOR-2005-MAURO-BENEDETTI.png"
        },
        {
            year: "2006",
            title: "Jurado Cooxupé",
            subtitle: "Mauro Benedetti",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2026/01/JURADO-COOXUPE-2006-MAURO-BENEDETTI.png"
        },
        {
            year: "2011",
            title: "Conclusão de Curso WQS",
            subtitle: "Mauro Benedetti",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2026/01/CERTIFICADO-WQS-MAURO-BENEDETTI.png"
        },
        {
            year: "2011",
            title: "Associado Clube Illy do Café",
            subtitle: "Mauro Benedetti",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2026/01/CLUBE-DO-CAFE-2011-MAURO-BENEDETTI.png"
        },
        {
            year: "2011",
            title: "Graduado em Comunicação Social",
            subtitle: "Publicidade e Propaganda. UNIFEG",
            image: "https://maurobenedetti.com.br/wp-content/uploads/2026/01/UNIFEG-Guaxupe-Mauro-Benedetti.png"
        }
    ];

    return (
        <InternalPageTemplate 
            title="Diplomas e Certificados" 
            subtitle="O Reconhecimento da Excelência"
        >
            {/* Intro Section with Mauro */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                    <Image 
                        src="https://maurobenedetti.com.br/wp-content/uploads/2025/12/MAURO-BENEDETTI-2-890x1024.png"
                        alt="Mauro Benedetti"
                        fill
                        className="object-cover object-top"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-mauro-dark leading-tight mb-8">
                        Mauro Benedetti é um dos nomes mais respeitados do café brasileiro.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Com mais de 40 anos de atuação contínua, construiu uma trajetória sólida baseada em conhecimento técnico, sensorial e mercadológico, vivenciando todas as etapas da cadeia produtiva do café — do campo ao consumidor final.
                    </p>
                    <p className="text-mauro-gold font-bold uppercase tracking-widest text-sm mt-4">
                        Veja alguns Diplomas e Certificados...
                    </p>
                </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {certificates.map((cert, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group">
                        <div className="relative h-64 md:h-72 w-full bg-gray-50 p-4 border-b border-gray-100">
                            <Image 
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8 flex flex-col items-center text-center">
                            <span className="text-mauro-gold font-bold text-sm tracking-widest mb-3">{cert.year}</span>
                            <h3 className="text-xl font-serif text-mauro-dark mb-2">{cert.title}</h3>
                            <p className="text-gray-500 text-sm">{cert.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </InternalPageTemplate>
    );
}
