import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyCTA from './components/MobileStickyCTA';
import Home from './pages/Home';
import FullCaseStudy from './pages/FullCaseStudy';
import ServicesPage from './pages/ServicesPage';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/case-studies/:id" element={<FullCaseStudy />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </>
  );
}

export default App;
