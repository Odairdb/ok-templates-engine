import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/Sustainability-in-our-hands-1024x685.jpg',
            imageAlt: 'O Cafeicultor 1',
            text: (
                <>
                    <p>O cafeicultor é a base de toda a cadeia produtiva do café e merece reconhecimento à altura do seu esforço, dedicação e investimento.</p>
                    <br />
                    <p>No entanto, historicamente, grande parte dos produtores não tem acesso às informações que realmente definem o valor do seu café.</p>
                </>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Cafeicultor-03-site-Mauro-Benedetti-rhir59xbtfit9sgacdyuzpl3qudckwvcytku67ee0g.jpg',
            imageAlt: 'O Cafeicultor 2',
            text: (
                <>
                    <p>O trabalho desenvolvido por Mauro Benedetti permite ao produtor conhecer de fato o potencial do café que produz, quebrando paradigmas e reduzindo a dependência das especulações de mercado.</p>
                    <br />
                    <p>Cada lote passa a ser compreendido tecnicamente, valorizando não apenas cafés gourmet, mas toda a produção.</p>
                </>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Cafeicultor-04-site-Mauro-Benedetti-ri8uenrk67hvt4mhxeqnw0r57oi3ovnvvjahv7ygz4.jpg',
            imageAlt: 'O Cafeicultor 3',
            text: (
                <p>Os benefícios são diretos e reais: valorização do produto e do estoque, ganhos independentes das oscilações do mercado e, principalmente, sem a necessidade de novos investimentos, utilizando recursos que o produtor já possui.</p>
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
            title="O Cafeicultor" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
