import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/MAURO-BENEDETTI-2-890x1024.png',
            imageAlt: 'Marca Própria 1',
            text: (
                <>
                    <p>Criar uma marca própria de café é uma excelente oportunidade de negócio, desde que seja feita com gestão, estratégia e base técnica sólida.</p>
                    <br />
                    <p>Sem isso, o risco de decisões equivocadas é alto.</p>
                </>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/cafe-graos-rgi21ck7oi6jbau5cy7i9ujm91vu1u2v3csw2yqcqs.jpg',
            imageAlt: 'Marca Própria 2',
            text: (
                <>
                    <p>A Benedetti Specialty Coffee atua no apoio completo à estruturação de marcas próprias, começando pela análise do café, definição do padrão ideal e alinhamento ao perfil do consumidor.</p>
                    <br />
                    <p>Cada detalhe é pensado para que o produto entregue exatamente o que promete, seja no café expresso ou moído.</p>
                </>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/marca-propria-01-mauro-benedetti-rhitbpkhuz3zmcnwr2lqu57ztirn8vlq8az07e5shy.jpg',
            imageAlt: 'Marca Própria 3',
            text: (
                <>
                    <p>Marca própria não é apenas colocar um rótulo no café.</p>
                    <br />
                    <p>É transformar qualidade em posicionamento, confiança e valor percebido pelo mercado.</p>
                </>
            ),
            reverse: false
        }
    ];

    const bottomContent = (
        <div className="text-center bg-gray-50 p-8 rounded-lg border border-gray-100">
            <h2 className="text-2xl font-serif text-mauro-dark mb-6">Entre em contato para saber mais sobre nossos serviços e parcerias.</h2>
            <a href="/mauro#contato" className="inline-block px-8 py-4 bg-mauro-dark text-mauro-gold text-sm uppercase tracking-widest font-bold hover:bg-mauro-gold hover:text-mauro-dark transition-all rounded-full shadow-lg">
                Falar com Mauro Benedetti
            </a>
        </div>
    );

    return (
        <ThreeImagePageTemplate 
            title="Marca Própria" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
