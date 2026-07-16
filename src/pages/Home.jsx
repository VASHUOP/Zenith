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
    title: 'Bahadurgarh Web Developer & AI Growth Agency | Zenith Digital',
    description: 'Scale your business with Zenith Digital. We are the leading web development and AI growth agency in Bahadurgarh, building high-converting websites and predictable customer acquisition funnels.',
    keywords: 'Bahadurgarh web developer, web development company Bahadurgarh, website designer Bahadurgarh, Zenith Digital, AI growth agency, lead generation, customer acquisition, business automation'
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
