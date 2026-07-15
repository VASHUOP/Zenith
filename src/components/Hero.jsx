import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Zap, Shield, BarChart3, CheckCircle, Loader2 } from 'lucide-react';

export default function Hero() {
  useScrollReveal();

  const words = ['Presence', 'Strategy', 'Revenue', 'Empire'];
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef(null);
  
  // Interactive mouse tracking
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    
    // Calculate percentage position for background glow
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Calculate tilt for the content card
    const tiltX = (y - 50) * -0.15; // Max 7.5 deg tilt
    const tiltY = (x - 50) * 0.15;
    
    setMousePos({ x, y });
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    // Reset tilt when mouse leaves
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <section 
      className="hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
    >
      <div className="hero-interactive-bg"></div>
      <div className="hero-grid-overlay"></div>
      
      <div className="hero-bg-graphic"></div>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="shooting-stars">
        <span></span><span></span><span></span>
      </div>

      <div 
        className="container hero-content"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          willChange: 'transform'
        }}
      >
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll delay-100">
            <span>🚀 High-Converting Digital Solutions</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line animate-on-scroll delay-200">
              Predictable <span className="text-gradient">Growth</span>
            </span>
            <br />
            <span className="hero-line animate-on-scroll delay-300">
              For Ambitious Brands
            </span>
          </h1>
          <p className="hero-subtitle animate-on-scroll delay-400">
            Stop guessing. We transform your online presence into a high-converting customer acquisition system using AI, modern web design, and data-driven advertising.
          </p>
          <div className="hero-actions animate-on-scroll delay-500" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary pulse-btn" style={{ textDecoration: 'none' }}>
              <span>Book Free Strategy Call <ArrowRight size={16} style={{display:'inline', verticalAlign:'middle'}} /></span>
            </a>
            <a href="#case-studies" className="btn btn-secondary pulse-btn" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span>View Case Studies</span>
            </a>
          </div>
        </div>

        <div className="hero-lead-capture animate-on-scroll delay-600">
          <p className="hero-trust" style={{ marginTop: '2rem' }}>
            ✨ Trusted by businesses serious about growth
          </p>
        </div>
      </div>
    </section>
  );
}
