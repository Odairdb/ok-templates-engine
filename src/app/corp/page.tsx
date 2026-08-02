import React from 'react';
import CorpHero from '@/components/corp/CorpHero';
import CorpHeader from '@/components/corp/CorpHeader';
import CorpServices from '@/components/corp/CorpServices';
import CorpGallery from '@/components/corp/CorpGallery';
import CorpTeam from '@/components/corp/CorpTeam';
import CorpProcess from '@/components/corp/CorpProcess';
import CorpFooter from '@/components/corp/CorpFooter';
import PlinShowcase from '@/components/shared/PlinShowcase';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CorpTemplate({ searchParams }: PageProps) {
  // Extract niche from URL params: ?nicho=engenharia, ?nicho=construtora, or ?nicho=arquitetura
  const resolvedParams = await searchParams;
  const nicheParam = resolvedParams?.nicho;
  const niche = typeof nicheParam === 'string' ? nicheParam.toLowerCase() : 'default';

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0B132B] font-sans relative">
      <CorpHeader niche={niche} />
      <CorpHero initialNiche={niche} />
      <CorpServices niche={niche} />
      <CorpGallery niche={niche} />
      <CorpTeam niche={niche} />
      <CorpProcess niche={niche} />
      <PlinShowcase niche={niche} templateType="corp" />
      <CorpFooter niche={niche} />
      <WhatsAppButton />
    </main>
  );
}

