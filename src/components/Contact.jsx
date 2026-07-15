import React, { useState } from 'react';
import './Contact.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after some time
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-inner glass-panel animate-on-scroll">
          <div className="contact-content">
            <h2 className="section-title">Ready to <span className="text-gradient">Scale?</span></h2>
            <p className="section-subtitle">Book a free strategy call to discover how we can build a predictable growth engine for your business.</p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Prefer to book directly on our calendar?</p>
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary pulse-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                Open Calendly Schedule
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                  <input type="text" placeholder="Name" className="form-input" required disabled={isSubmitting || isSubmitted} />
                </div>
                <div className="form-group" style={{ flex: 1, marginBottom: 0 }}>
                  <input type="tel" placeholder="Mobile Number" className="form-input" required disabled={isSubmitting || isSubmitted} />
                </div>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" className="form-input" required disabled={isSubmitting || isSubmitted} />
              </div>
              <div className="form-group">
                <select className="form-input" required disabled={isSubmitting || isSubmitted} defaultValue="" style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}>
                  <option value="" disabled>Select your monthly marketing budget</option>
                  <option value="under-50k">Under ₹50k</option>
                  <option value="50k-1L">₹50k - ₹1L</option>
                  <option value="1L-plus">₹1L+</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your business goals..." className="form-input" rows="4" required disabled={isSubmitting || isSubmitted}></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary w-100 ${isSubmitted ? 'btn-success' : ''}`}
                disabled={isSubmitting || isSubmitted}
                style={{ height: '56px', transition: 'all 0.3s ease' }}
              >
                {isSubmitting ? (
                  <Loader2 className="spinner" size={24} />
                ) : isSubmitted ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    <CheckCircle size={20} /> Request Sent!
                  </span>
                ) : (
                  <span>Request Free Strategy Audit</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
