import React from 'react';
import './Founders.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Share2, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Vashu',
    role: 'Co-Founder',
    bio: 'A visionary growth strategist who turns marketing into mathematics. Vashu specializes in engineering high-converting customer acquisition funnels, scaling ambitious brands, and turning digital spend into predictable revenue.',
    initials: 'V',
    color: 'var(--primary-glow)'
  },
  {
    name: 'Partik',
    role: 'Co-Founder',
    bio: 'A master systems engineer and full-stack architect. Partik specializes in building lightning-fast web infrastructure, seamless API integrations, and scalable automation workflows that optimize business performance.',
    initials: 'P',
    color: 'var(--secondary-glow)'
  }
];

export default function Founders() {
  useScrollReveal();

  return (
    <section id="founders" className="founders section-padding">
      <div className="container">
        <div className="section-header animate-on-scroll" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem'}}>
          <h2 className="section-title">The Minds Behind <br/><span className="text-gradient">ZenithDigital.ai</span></h2>
          <p className="section-subtitle">Meet the visionaries who turned a passion for digital excellence into India's fastest-growing agency. Together, they combine strategic brilliance with technical mastery.</p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className={`founder-card animate-on-scroll delay-${(index + 1) * 200}`}
            >
              <div className="founder-card-inner">
                <div className="founder-avatar" style={{ '--glow-color': founder.color }}>
                  <span className="founder-initial">{founder.initials}</span>
                </div>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role text-gradient">{founder.role}</p>
                <p className="founder-bio">{founder.bio}</p>
                
                <div className="founder-socials">
                  <a href="#" className="social-icon"><Globe size={20} /></a>
                  <a href="#" className="social-icon"><Share2 size={20} /></a>
                  <a href="#" className="social-icon"><Mail size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
