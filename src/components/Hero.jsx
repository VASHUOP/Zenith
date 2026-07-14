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
        <div className="hero-badge animate-on-scroll delay-100">
          <Zap size={14} /> #1 Digital Agency in India
        </div>

        <h1 className="hero-title">
          <span className="hero-line animate-on-scroll delay-200">Elevate Your</span><br />
          <span className="hero-line animate-on-scroll delay-300">
            <span className="text-gradient hero-word-cycle" key={currentWord}>
              Digital {words[currentWord]}
            </span>
          </span>
        </h1>

        <p className="hero-subtitle animate-on-scroll delay-400">
          We are <strong className="text-gradient">ZenithDigital.ai</strong> — a premium digital agency helping brands
          dominate online. From stunning websites to high-ROI ad campaigns, we engineer every touchpoint
          for maximum growth and conversions.
        </p>

        <div className="hero-features animate-on-scroll delay-500">
          <div className="hero-feature">
            <Shield size={18} className="hero-feature-icon" />
            <span>Guaranteed Results</span>
          </div>
          <div className="hero-feature">
            <BarChart3 size={18} className="hero-feature-icon" />
            <span>3x Average ROI</span>
          </div>
          <div className="hero-feature">
            <Zap size={18} className="hero-feature-icon" />
            <span>Launch in 2 Days</span>
          </div>
        </div>

        <div className="hero-lead-capture animate-on-scroll delay-600">
          <form className="lead-form" onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setTimeout(() => {
              setIsSubmitting(false);
              setIsSubmitted(true);
              setTimeout(() => setIsSubmitted(false), 3000);
            }, 1500);
          }}>
            <input type="email" placeholder="Enter your email to scale..." className="lead-input" required disabled={isSubmitting || isSubmitted} />
            <button 
              type="submit" 
              className={`btn btn-primary pulse-btn ${isSubmitted ? 'btn-success' : ''}`}
              disabled={isSubmitting || isSubmitted}
              style={{ minWidth: '160px', transition: 'all 0.3s ease' }}
            >
              {isSubmitting ? (
                <Loader2 className="spinner" size={20} />
              ) : isSubmitted ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={18} /> Sent!</span>
              ) : (
                <span>Get Started <ArrowRight size={16} style={{display:'inline', verticalAlign:'middle'}} /></span>
              )}
            </button>
          </form>
          <p className="hero-trust">
            ✨ Trusted by <strong>150+</strong> innovative brands across India
          </p>
        </div>
      </div>
    </section>
  );
}
