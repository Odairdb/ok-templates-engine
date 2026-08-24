const fs = require('fs');
const https = require('https');

const pages = [
  { slug: 'cafeicultor', url: '/o-cafeicultor/', title: 'O Cafeicultor' },
  { slug: 'marca-propria', url: '/marca-propria/', title: 'Marca Própria' },
  { slug: 'parcerias', url: '/parcerias-e-conexoes/', title: 'Parcerias e Conexões' },
  { slug: 'mentorias', url: '/mentorias/', title: 'Mentorias' },
  { slug: 'nacional-internacional', url: '/nacional-e-internacional/', title: 'Nacional e Internacional' }
];

async function fetchPage(path) {
  return new Promise((resolve, reject) => {
    https.get('https://maurobenedetti.com.br' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractElementorContent(html) {
  const images = [];
  const imgRegex = /<div class="elementor-element [^"]+ elementor-widget elementor-widget-image"[\s\S]*?<img [^>]*src="([^"]+)"/g;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
      if (!match[1].includes('LOGO') && !match[1].includes('Selo') && !match[1].includes('Favicon')) {
          images.push(match[1]);
      }
  }

  const texts = [];
  const textRegex = /<div class="elementor-element [^"]+ elementor-widget elementor-widget-text-editor"[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/g;
  while ((match = textRegex.exec(html)) !== null) {
      let t = match[1].trim();
      if(t && t.length > 20) {
        texts.push(t);
      }
  }
  return { images: [...new Set(images)].slice(0, 3), texts: texts.slice(0, 3) };
}

async function run() {
  for (const page of pages) {
    console.log('Fetching', page.title);
    const html = await fetchPage(page.url);
    const { images, texts } = extractElementorContent(html);
    
    const img1 = images[0] || 'https://maurobenedetti.com.br/wp-content/uploads/2026/01/marca-propria-02-mauro-benedetti.jpg';
    const img2 = images[1] || 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/banner-03-mauro-benedetti-ri8qmgxdcfoch3dwmn54efza00gc60tihruxudn4sk.jpg';
    const img3 = images[2] || 'https://maurobenedetti.com.br/wp-content/uploads/elementor/thumbs/exportacao-cafe-1-rgi2gxpvdr4gkfeeav6w4l3l75cvbyhrdgk8sox6yu.jpg';
    
    const txt1 = texts[0] || '<p>Conteúdo principal em atualização.</p>';
    const txt2 = texts[1] || '<p>Detalhes adicionais em atualização.</p>';
    const txt3 = texts[2] || '<p>Mais informações em atualização.</p>';

    const out = `import React from 'react';
import ThreeImagePageTemplate from '@/components/mauro/ThreeImagePageTemplate';

export default function Page() {
    const sections = [
        {
            imageSrc: '${img1}',
            imageAlt: '${page.title} 1',
            text: (
                <div dangerouslySetInnerHTML={{ __html: \`${txt1.replace(/`/g, '\\`')}\` }} />
            ),
            reverse: false
        },
        {
            imageSrc: '${img2}',
            imageAlt: '${page.title} 2',
            text: (
                <div dangerouslySetInnerHTML={{ __html: \`${txt2.replace(/`/g, '\\`')}\` }} />
            ),
            reverse: true
        },
        {
            imageSrc: '${img3}',
            imageAlt: '${page.title} 3',
            text: (
                <div dangerouslySetInnerHTML={{ __html: \`${txt3.replace(/`/g, '\\`')}\` }} />
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
            title="${page.title}" 
            subtitle="Benedetti Specialty Coffee"
            sections={sections}
            bottomContent={bottomContent}
        />
    );
}
`;

    fs.writeFileSync(`src/app/mauro/${page.slug}/page.tsx`, out);
    console.log('Saved', page.slug);
  }
}

run();
