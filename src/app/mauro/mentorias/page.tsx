import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/2025/12/MAURO-BENEDETTI-2-890x1024.png',
            imageAlt: 'Mentorias 1',
            text: (
                <p>As mentorias e cursos da Benedetti Specialty Coffee são o principal canal de transferência de conhecimento acumulado ao longo de mais de quatro décadas de atuação prática no mercado do café.</p>
            ),
            reverse: false
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Analises-genoma-01-site-Mauro-Benedetti-rg5z2myzeel4njzl8dwot9peohod6u2zjxl1f0241w.jpg',
            imageAlt: 'Mentorias 2',
            text: (
                <>
                    <p>São programas voltados para cafeicultores, marcas, profissionais e empresas que desejam evoluir tecnicamente, compreender melhor o mercado e tomar decisões mais estratégicas.</p>
                    <br />
                    <p>O conteúdo é direto, aplicado e orientado a resultados reais.</p>
                </>
            ),
            reverse: true
        },
        {
            imageSrc: 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/Cafeicultor-01-site-Mauro-Benedetti-rg5yxwu7ejpz0222sisbs4srgt9u4fupphsmrgd8qu.jpg',
            imageAlt: 'Mentorias 3',
            text: (
                <p>Aqui, o aprendizado não vem da teoria isolada, mas da experiência vivida em campo, no mercado e na indústria.</p>
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
            title="Mentorias" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
