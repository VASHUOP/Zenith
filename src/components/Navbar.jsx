import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Navbar() {
  useScrollReveal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo animate-on-scroll">ZenithDigital<span className="accent">.ai</span></div>
        <ul className="nav-links">
          <li className="animate-on-scroll delay-100"><a href="#services">Services</a></li>
          <li className="animate-on-scroll delay-200"><a href="#process">How We Work</a></li>
          <li className="animate-on-scroll delay-300"><a href="#testimonials">Reviews</a></li>
          <li className="animate-on-scroll delay-400"><a href="#blog">Blog</a></li>
          <li className="animate-on-scroll delay-400"><a href="#founders">Founders</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary nav-btn animate-on-scroll delay-500" style={{textDecoration: 'none'}}>
          <span>Let's Talk</span>
        </a>
      </div>
    </nav>
  );
}
