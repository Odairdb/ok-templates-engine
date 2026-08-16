'use client';
import React, { useEffect } from 'react';
import './serv.css'; // Global custom CSS for SERV theme
import ServHero from './components/ServHero';
import ServServices from './components/ServServices';
import ServFeatures from './components/ServFeatures';
import ServContact from './components/ServContact';
import ServAction from './components/ServAction';
import ServBrands from './components/ServBrands';
import ServTeam from './components/ServTeam';
import ServFooter from './components/ServFooter';

// Use require inside useEffect to avoid SSR issues with GSAP and Lenis
export default function ServTemplate() {
  useEffect(() => {
    let lenisInstance: any = null;
    let ScrollTriggerInstance: any = null;

    const initAnimations = async () => {
      // Dynamic imports to prevent SSR mismatch
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const Lenis = (await import('@studio-freight/lenis')).default;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTriggerInstance = ScrollTrigger;

      lenisInstance = new Lenis({
        duration: 1.2,
      });

      lenisInstance.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Section animations (Diferenciais)
      gsap.from('#diferenciais h1, #diferenciais h2', {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#diferenciais',
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      gsap.from('#diferenciais p', {
        opacity: 0,
        y: 10,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '#diferenciais',
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      gsap.from('#diferenciais .card2', {
        opacity: 0,
        y: 28,
        scale: 0.995,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#diferenciais',
          start: 'top 60%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      // Contato Animations
      const tlContact = gsap.timeline({
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 60%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      tlContact.from('#leftNodes .mindmap-node2', {
        x: -28,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      }, 0);

      tlContact.from('#rightNodes .mindmap-node1', {
        x: 28,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      }, 0.1);

      tlContact.from('#mindmapImage img', {
        scale: 0.94,
        opacity: 0,
        y: 14,
        duration: 1.2,
        ease: 'expo.out',
      }, 0.15);

      tlContact.call(() => {
        gsap.to('#mindmapImage img', {
          y: 6,
          duration: 6.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      // Aproximação (Action) Animations
      gsap.from('#aproximacao h1', {
        scrollTrigger: {
          trigger: '#aproximacao',
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.img-aproxima', {
        scrollTrigger: {
          trigger: '#aproximacao',
          start: 'top 65%',
        },
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    };

    initAnimations();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      if (ScrollTriggerInstance) {
        ScrollTriggerInstance.getAll().forEach((st: any) => st.kill());
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-primario font-sans relative overflow-hidden">
      {/* Bootstrap Icons CDNs can be injected here or in layout.tsx */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />
      
      <ServHero />
      <ServServices />
      <ServFeatures />
      <ServContact />
      <ServAction />
      <ServBrands />
      <ServTeam />
      <ServFooter />
    </main>
  );
}
