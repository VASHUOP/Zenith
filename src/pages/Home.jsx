import React from 'react';
import { useSEO } from '../hooks/useSEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Founders from '../components/Founders';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  useSEO({
    title: 'ZenithDigital.ai | Premium AI Growth & Lead Generation Agency',
    description: 'Transform your business with ZenithDigital.ai. We build predictable customer acquisition systems, high-converting websites, and AI automation for ambitious brands.',
    keywords: 'AI growth agency, customer acquisition, lead generation, meta ads, business growth systems, AI automation, ZenithDigital'
  });

  return (
    <main>
      <Hero />
      <Stats />
      <CaseStudies />
      <Pricing />
      <Services />
      <Comparison />
      <Process />
      <Skills />
      <Testimonials />
      <FAQ />
      <Founders />
      <Blog />
      <Contact />
    </main>
  );
}
