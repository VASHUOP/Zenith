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
            <h2 className="section-title">Ready to Start?</h2>
            <p className="section-subtitle">Let's discuss how we can elevate your brand and drive results.</p>
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
                <textarea placeholder="Tell us about your project" className="form-input" rows="4" required disabled={isSubmitting || isSubmitted}></textarea>
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
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle size={20} /> Request Sent!
                  </span>
                ) : (
                  <span>Book a Strategy Session</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
