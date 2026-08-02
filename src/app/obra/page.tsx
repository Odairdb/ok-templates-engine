import React from 'react';
import ObraHero from '@/components/obra/ObraHero';
import ObraHeader from '@/components/obra/ObraHeader';
import ObraServices from '@/components/obra/ObraServices';
import ObraGallery from '@/components/obra/ObraGallery';
import ObraProcess from '@/components/obra/ObraProcess';
import ObraFooter from '@/components/obra/ObraFooter';
import PlinShowcase from '@/components/shared/PlinShowcase';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ObraTemplate({ searchParams }: PageProps) {
  // Extract niche from URL params: ?nicho=engenharia, ?nicho=construtora, or ?nicho=arquitetura
  const resolvedParams = await searchParams;
  const nicheParam = resolvedParams?.nicho;
  const niche = typeof nicheParam === 'string' ? nicheParam.toLowerCase() : 'default';

  return (
    <main className="min-h-screen bg-[#E7DFDB] text-[#3B4146] font-sans relative">
      <ObraHeader niche={niche} />
      <ObraHero initialNiche={niche} />
      <ObraServices niche={niche} />
      <ObraGallery niche={niche} />
      <ObraProcess niche={niche} />
      <PlinShowcase niche={niche} templateType="obra" />
      <ObraFooter niche={niche} />
      <WhatsAppButton />
    </main>
  );
}
