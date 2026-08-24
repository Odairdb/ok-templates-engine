import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/MAURO-BENEDETTI-2-890x1024.png',
            imageAlt: 'Nacional e Internacional 1',
            text: (
                <>
                    <p>O Brasil é o maior parque cafeeiro do mundo e possui uma diversidade única de aromas, sabores e perfis sensoriais.</p>
                    <br />
                    <p>No entanto, o mercado atual é cada vez mais competitivo, fragmentado e exigente.</p>
                </>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Qualidade-cafe-Mauro-Benedetti-rjyt1m711osxcb1diemorelit051olnkukzin7pv5w.jpg',
            imageAlt: 'Nacional e Internacional 2',
            text: (
                <p>A atuação da Benedetti Specialty Coffee no mercado nacional e internacional garante que o café brasileiro seja apresentado com consistência, padrão e qualidade comprovada. Em contato direto com as melhores indústrias e compradores, o trabalho assegura que o produto esteja alinhado às exigências do consumidor final.</p>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Mercado-Exterior-Mauro-Benedetti-rjystaciup076mca3zft66f9m5hv3z4cib63rhdbpi.jpg',
            imageAlt: 'Nacional e Internacional 3',
            text: (
                <p>Qualidade garantida é o fator decisivo para acessar e permanecer nos mercados mais valorizados do mundo.</p>
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
            title="Nacional e Internacional" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
