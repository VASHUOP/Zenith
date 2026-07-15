import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Growth Starter',
    price: '₹24,999',
    period: '/yr',
    description: 'Perfect for local businesses looking to establish a strong online presence and capture consistent leads.',
    features: [
      'Conversion-Optimised Website (Up to 5 Pages)',
      'Basic On-Page SEO Setup',
      'Google My Business Optimisation',
      'Contact Form & Lead Capture',
      'Standard Support (48h SLA)',
    ],
    buttonText: 'Start Growing',
    isPopular: false,
    color: '#0066FF',
    whatsappMessage: 'Hi, I am interested in the Growth Starter package.',
  },
  {
    name: 'Business Growth System',
    price: '₹49,999',
    period: '/yr',
    description: 'Our most popular system. An end-to-end acquisition engine to scale your revenue predictably.',
    features: [
      'Everything in Starter, plus:',
      'Meta or Google Ads Management (Ad Spend Extra)',
      'High-Converting Landing Pages',
      'Automated Email Nurture Sequence (5 Emails)',
      'Basic AI Lead Qualification Bot',
      'Priority Support (24h SLA)',
      'Monthly ROI Reporting',
    ],
    buttonText: 'Scale Now',
    isPopular: true,
    color: '#8B5CF6',
    whatsappMessage: 'Hi, I am interested in the Business Growth System package.',
  },
  {
    name: 'Scale System',
    price: '₹99,999+',
    period: '/yr',
    description: 'For aggressive brands looking to dominate their market with omnipresent campaigns and full AI automation.',
    features: [
      'Everything in Growth System, plus:',
      'Multi-Channel Ad Campaigns (Meta + Google)',
      'Full Brand Content Studio (1 Video Shoot/yr)',
      'Advanced AI Customer Support Agent',
      'Custom CRM Integrations & Automation',
      'Dedicated Account Manager',
      'Weekly Strategy Calls',
    ],
    buttonText: 'Apply For Scale',
    isPopular: false,
    color: '#EC4899',
    whatsappMessage: 'Hi, I am interested in the Scale System package.',
  },
];

export default function Pricing() {
  useScrollReveal();

  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="pricing-bg-glow pricing-bg-glow--left" />
      <div className="pricing-bg-glow pricing-bg-glow--right" />

      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="process-overline">TRANSPARENT PRICING</p>
          <h2 className="section-title">
            Productized <span className="text-gradient">Growth</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            No hidden fees. No hourly billing. Just predictable systems designed to generate a massive return on your investment.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`pricing-card animate-on-scroll delay-${(index + 1) * 100} ${plan.isPopular ? 'pricing-card--popular' : ''}`}
              style={{ '--plan-color': plan.color }}
            >
              {plan.isPopular && (
                <div className="pricing-badge">
                  <Zap size={14} /> Most Popular
                </div>
              )}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>
              
              <div className="pricing-price-wrap">
                <span className="pricing-price">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              
              <a 
                href={`https://wa.me/919996829482?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className={`btn w-100 ${plan.isPopular ? 'btn-primary pulse-btn' : 'btn-secondary'}`} 
                style={{ marginBottom: '2rem' }}
              >
                {plan.buttonText} <ArrowRight size={16} style={{ display: 'inline', marginLeft: '8px' }} />
              </a>

              <div className="pricing-features-title">What's included:</div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="pricing-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
