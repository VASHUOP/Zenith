import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, TrendingUp, Users } from 'lucide-react';
import './CaseStudies.css';

export const caseStudies = [
  {
    id: 1,
    client: 'E-Commerce Brand (D2C)',
    result: '₹12.5L Additional Revenue in 45 Days',
    metrics: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'CPA Reduction', value: '-35%' },
    ],
    description: 'Rebuilt their entire funnel from ad creative to checkout, deploying an AI cart recovery system that instantly boosted conversions.',
    color: '#0066FF',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    client: 'B2B SaaS Startup',
    result: '250+ Qualified Demos Booked',
    metrics: [
      { label: 'Lead Volume', value: '+300%' },
      { label: 'Cost Per Lead', value: '₹450' },
    ],
    description: 'Designed a high-converting landing page and implemented a LinkedIn + Meta retargeting strategy to dominate their niche.',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CaseStudies() {
  useScrollReveal();

  return (
    <section className="case-studies-section section-padding" id="case-studies">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="process-overline">PROVEN RESULTS</p>
          <h2 className="section-title">
            Don't Just Take Our <span className="text-gradient">Word For It</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Real metrics. Real growth. See how we've helped businesses like yours scale predictably.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`case-study-card animate-on-scroll delay-${(index + 1) * 100}`}
              style={{ '--study-color': study.color }}
            >
              <div className="case-study-image">
                <div className="case-study-overlay"></div>
                <img src={study.image} alt={study.client} loading="lazy" />
              </div>
              <div className="case-study-content">
                <div className="case-study-header">
                  <span className="case-study-client">{study.client}</span>
                  <h3 className="case-study-result">{study.result}</h3>
                </div>
                
                <p className="case-study-desc">{study.description}</p>
                
                <div className="case-study-metrics">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="case-study-metric">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link to={`/case-studies/${study.id}`} className="case-study-link">
                  Read Full Case Study <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="case-studies-cta animate-on-scroll delay-300">
          <a href="#contact" className="btn btn-primary pulse-btn">
            <span>Get Similar Results For Your Business</span>
          </a>
        </div>
      </div>
    </section>
  );
}
