import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="logo animate-on-scroll" style={{ textDecoration: 'none', color: 'white' }}>ZenithDigital<span className="accent">.ai</span></Link>
        <ul className="nav-links">
          <li className="animate-on-scroll delay-100"><Link to="/services">Services</Link></li>
          <li className="animate-on-scroll delay-200"><Link to="/about">About Us</Link></li>
          <li className="animate-on-scroll delay-300"><Link to="/#testimonials">Reviews</Link></li>
          <li className="animate-on-scroll delay-400"><Link to="/#founders">Founders</Link></li>
        </ul>
        <a href="/#contact" className="btn btn-primary nav-btn animate-on-scroll delay-500" style={{textDecoration: 'none'}}>
          <span>Let's Talk</span>
        </a>
      </div>
    </nav>
  );
}
