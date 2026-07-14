import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Founders from './components/Founders';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Skills />
      <Testimonials />
      <Founders />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
