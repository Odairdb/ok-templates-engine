import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/marca-propria-02-mauro-benedetti.jpg',
            imageAlt: 'Instituto BSC',
            text: (
                <p>O Instituto Benedetti Specialty Coffee nasce com a missão de formar, capacitar e profissionalizar pessoas e negócios do setor cafeeiro por meio de conhecimento técnico aplicado e visão estratégica de mercado.</p>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/banner-03-mauro-benedetti-ri8qmgxdcfoch3dwmn54efza00gc60tihruxudn4sk.jpg',
            imageAlt: 'Cursos',
            text: (
                <p>Idealizado por Mauro Benedetti, o Instituto oferece cursos dinâmicos, práticos e avançados, que abrangem todos os processos do café: plantio, pós-colheita, secagem, beneficiamento, armazenamento, classificação, degustação e mercado — tanto no segmento de Commodities quanto no de Cafés Especiais.</p>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/exportacao-cafe-1-rgi2gxpvdr4gkfeeav6w4l3l75cvbyhrdgk8sox6yu.jpg',
            imageAlt: 'Decisões no Mercado',
            text: (
                <p>O foco do Instituto não é apenas ensinar técnicas, mas preparar profissionais e produtores para tomar decisões melhores, compreender o valor do seu produto e atuar com mais segurança e autonomia no mercado. O conhecimento aqui é tratado como ferramenta de transformação econômica e profissional.</p>
            ),
            reverse: false
        }
    ];

    const bottomContent = (
        <div className="text-center bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h2 className="text-2xl font-serif text-mauro-dark mb-6">Conheça os cursos do Instituto BSC ou solicite informações sobre capacitações.</h2>
            <a href="/mauro#contato" className="inline-block px-8 py-4 bg-mauro-dark text-mauro-gold text-sm uppercase tracking-widest font-bold hover:bg-mauro-gold hover:text-mauro-dark transition-all rounded-full shadow-lg">
                Converse com Mauro Benedetti
            </a>
        </div>
    );

    return (
        <ThreeImagePageTemplate 
            title="Instituto BSC" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
