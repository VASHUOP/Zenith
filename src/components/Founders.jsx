import React from 'react';
import './Founders.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Share2, Mail, Award, Target, Code } from 'lucide-react';

const founders = [
  {
    name: 'Vashu',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 8+ years of experience driving digital innovation. Vashu has helped scale over 100 brands from startup to market dominance through strategic growth planning and data-driven marketing.',
    initials: 'V',
    color: 'var(--primary-glow)',
    expertise: ['Growth Strategy', 'Brand Building', 'Meta Ads'],
    highlight: '100+ Brands Scaled'
  },
  {
    name: 'Partik',
    role: 'Co-Founder & CTO',
    bio: 'Tech mastermind with expertise in full-stack development, AI integration, and scalable architecture. Partik has architected platforms that serve millions of users with 99.9% uptime.',
    initials: 'P',
    color: 'var(--secondary-glow)',
    expertise: ['Full-Stack Dev', 'AI & ML', 'Cloud Architecture'],
    highlight: '50+ Apps Shipped'
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
                
                <div className="founder-highlight">
                  <Award size={16} />
                  <span>{founder.highlight}</span>
                </div>
                
                <div className="founder-expertise">
                  {founder.expertise.map((skill, i) => (
                    <span key={i} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                
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
