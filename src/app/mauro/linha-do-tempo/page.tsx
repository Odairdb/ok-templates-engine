import React from 'react';
import InternalPageTemplate from '@/components/mauro/InternalPageTemplate';
import Image from 'next/image';

export default function LinhaDoTempoPage() {
    const timelineData = [
        {
            year: "2025",
            text: (
                <p>Sua experiência vai muito além da análise do grão. Mauro entende o café como um sistema vivo, onde genética, manejo, pós-colheita, perfil sensorial e mercado precisam estar alinhados para que o produtor alcance reconhecimento e valorização real. Ao longo de sua carreira, esteve em contato direto com cafeicultores, indústrias, traders, cafeterias e mercados internacionais, desenvolvendo uma visão macro e estratégica rara no setor.</p>
            ),
            logos: [
                '/mauro/LOGO-MB-02.png',
                '/mauro/SELO-MB-01.png'
            ]
        },
        {
            year: "2017",
            text: (
                <>
                    <p><strong>Capebe</strong> – Cooperativa Agropecuária de Boa Esperança Ltda.</p>
                    <p><strong>Ucom</strong> – Cargo: Consultor Técnico. Departamento de Café – Controle de Qualidade Implantação e Acompanhamento de Métodos Eficiente de todo complexo – Equipe e Industrial.</p>
                    <p><strong>Associação Cafés Vulcânicos</strong> – Poços de Caldas – Membro Fundador / Trader.</p>
                    <p className="mt-2"><strong>Syngenta – Nucoffee</strong> – Cargo: Consultor Técnico. Departamento de Café – Controle de Qualidade Acompanhamento e Implantação de Métodos Eficiente junto a Equipe, Hubs e Parceiros.</p>
                </>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-CAPEBE-MAURO-BENEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-UCOM-MAURO-BENNEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/cafes-vulcanicos-mauro-benedetti.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-NUCOFFEE-SYNGENTA-MAUROBENEDETTI-1.png'
            ]
        },
        {
            year: "2012-2015",
            text: (
                <>
                    <p><strong>Colline Import & Export (2012-2015)</strong> – Cargo: Consultor Técnico Principais atividades: Responsável pela qualidade de compra e venda do café, junto mercado Interno e Externo.</p>
                    <p><strong>Concurso de Café</strong> – Poços de Caldas / MG – Membro do Júri (2012/2013).</p>
                    <p><strong>Bolsa de Valores</strong> – Curso XP Investimentos / Educação (2012).</p>
                    <p><strong>UTZ Certified</strong> – Cadeia de Custódia – UTZ Certified Good Inside (2011).</p>
                    <p><strong>Concurso de Café</strong> – Vale da Grama – Membro do Júri (2011).</p>
                    <p><strong>Curso de Torra de Café</strong> – Laboratório Lucca (2011).</p>
                </>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-COLLINE-GROUP-MAURO-BENEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/CONCURSO-DE-CAFE.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/bolsa-de-valores-mauro-benedetti.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-UTZ-MAURO-BENEDETTI-2-BR.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/CURSO-DE-CAFE.png'
            ]
        },
        {
            year: "2010-2012",
            text: (
                <>
                    <p><strong>SMC Comercial e Exportadora de Café S/A (2010-2012)</strong> – Cargo: Coordenador do Setor de Qualidade Principais atividades: Responsável pela qualidade de compra e venda do café, junto mercado Interno e Externo.</p>
                    <p><strong>Illy Café</strong> – Sócio Classificador – (2007-2012).</p>
                    <p><strong>Projeto Melhoria da Qualidade</strong> – Núcleos da Cooxupé – COOXUPÉ / UFLA (2006).</p>
                    <p><strong>Curso de Barista</strong> – SINDICAFESP – (2006).</p>
                    <p><strong>Concurso de Café</strong> – EMATER – MG – Membro do Júri (2005-2007).</p>
                    <p><strong>Concurso de Café</strong> – CAFUSO / UCC – Membro do Júri (2004-2006).</p>
                    <p><strong>Concurso de Café</strong> – BSCA – Membro do Júri (2002-2006).</p>
                </>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-SMC-MAURO-BENEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/CLUBE-ILLY-DO-CAFE.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-COOXUPE-MAURO-BENEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-EMATER-MG.jpg',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-UCC-MAURO-BENEDETTI.png',
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-BSCA-MAURO-BENEDETTI-2.png'
            ]
        },
        {
            year: "1998-2010",
            text: (
                <p><strong>COOXUPÉ</strong> – Cooperativa Regional dos Cafeicultores em Guaxupé (1998-2010) – Cargo: Coordenador do Departamento de Cafés Especiais Principais atividades: Identificar, Selecionar e Premiar os melhores cafés de Produtores e prospectar junto ao mercado.</p>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-COOXUPE-MAURO-BENEDETTI.png'
            ]
        },
        {
            year: "1995-1998",
            text: (
                <p><strong>COOPADAP</strong> – Cooperativa Agrícola do Alto Paranaíba (1995-1998) – Cargo: Classificador de Café. Principais atividades: Desenvolvimento na parte técnica de classificação de café, Armazenagem e assistência técnica aos produtores.</p>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-COOPADAP-MAURO-BENEDETTI.png'
            ]
        },
        {
            year: "1992-1994",
            text: (
                <p><strong>CAC</strong> – Cooperativa Agrícola de Cotia (1992-1994) – Cargo: Classificador de Café. Principais atividades: Desenvolvimento na parte técnica de classificação de café, Armazenagem e assistência técnica aos produtores.</p>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/COOPERATIVA-COTIA.png'
            ]
        },
        {
            year: "1981-1994",
            text: (
                <p><strong>COOXUPÉ</strong> – Cooperativa Regional dos Cafeicultores em Guaxupé (1981-1994) – Cargo: Auxiliar de Classificação.</p>
            ),
            logos: [
                'https://maurobenedetti.com.br/wp-content/uploads/2026/01/LOGO-COOXUPE-MAURO-BENEDETTI.png'
            ]
        }
    ];

    return (
        <InternalPageTemplate 
            title="Linha do Tempo" 
            subtitle="Benedetti Specialty Coffee"
        >
            {/* Intro Section with Mauro */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
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
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Esta Linha do Tempo é um resumo das etapas que Mauro Benedetti vivenciou de 1981 até os dias atuais, com participações em Empresas, Cursos, Consultor Técnico e Membro de Júri.
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-mauro-gold/30 ml-4 md:ml-12 pl-8 md:pl-16 py-10 space-y-24">
                {timelineData.map((item, idx) => (
                    <div key={idx} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-[42px] md:-left-[74px] top-1 w-5 h-5 bg-mauro-gold rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                        
                        {/* Year */}
                        <h3 className="text-3xl font-serif text-mauro-gold font-bold mb-4">
                            {item.year}
                        </h3>
                        
                        {/* Text */}
                        <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 space-y-2">
                            {item.text}
                        </div>
                        
                        {/* Logos */}
                        {item.logos && item.logos.length > 0 && (
                            <div className="flex flex-wrap gap-4 mt-6">
                                {item.logos.map((logo, lIdx) => (
                                    <div key={lIdx} className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-3 hover:shadow-md transition-shadow">
                                        <Image 
                                            src={logo}
                                            alt={`Logo parceiro ${item.year}`}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
        </InternalPageTemplate>
    );
}




