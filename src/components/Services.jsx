import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Megaphone,
  UserCheck,
  TrendingUp,
  Video,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Bot,
} from 'lucide-react';
import './Services.css';

const services = [
  {
    num: '01',
    icon: Code2,
    title: 'Business Growth Websites',
    description:
      'We don\'t just build pretty websites. We engineer high-converting digital storefronts designed to capture attention and turn cold traffic into paying customers.',
    features: [
      'Conversion-optimised UI/UX design',
      'Lightning-fast load times (Core Web Vitals)',
      'Clear, persuasive copywriting',
      'Seamless mobile experience',
    ],
    color: '#0066FF',
  },
  {
    num: '02',
    icon: Megaphone,
    title: 'Customer Acquisition Systems',
    description:
      'Stop burning money on ineffective ads. We build data-driven Meta and Google Ad systems that consistently acquire customers at a profitable ROI.',
    features: [
      'Data-driven audience targeting',
      'High-converting ad creatives & copy',
      'Advanced retargeting funnels',
      'Transparent ROI reporting',
    ],
    color: '#3B82F6',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Predictable Lead Engine',
    description:
      'Fill your sales pipeline with high-intent prospects. We build multi-channel inbound systems that deliver qualified leads ready to convert.',
    features: [
      'High-converting landing pages',
      'Automated email nurture sequences',
      'CRM integration & lead tracking',
      'Cost-per-lead optimisation',
    ],
    color: '#6366F1',
  },
  {
    num: '04',
    icon: Bot,
    title: 'AI Employees & Automation',
    description:
      'Scale without adding headcount. We deploy smart AI agents and automated workflows to handle customer support and qualify leads 24/7.',
    features: [
      'Custom WhatsApp & Web Chatbots',
      '24/7 automated customer support',
      'Lead qualification workflows',
      'Seamless API integrations',
    ],
    color: '#10B981',
  },
  {
    num: '05',
    icon: Video,
    title: 'Brand Content Studio',
    description:
      'Command attention in a crowded market with premium video content and brand assets that build absolute trust and authority with your audience.',
    features: [
      'Cinematic video shoots & editing',
      'Short-form content (Reels/Shorts)',
      'Brand identity & visual language',
      'Scroll-stopping motion graphics',
    ],
    color: '#EC4899',
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const total = services.length;

  const goTo = (idx) => {
    setActive(((idx % total) + total) % total);
  };

  const getPos = (idx) => {
    let diff = idx - active;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="services-bg-glow services-bg-glow--left" />
      <div className="services-bg-glow services-bg-glow--right" />

      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="services-badge">What We Do</span>
          <h2 className="section-title">
            Growth <span className="text-gradient">Solutions</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            End-to-end digital systems designed to predictably acquire customers, scale revenue, and build absolute trust.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-stage">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const pos = getPos(idx);
              const isActive = pos === 0;

              return (
                <div
                  className={`carousel-card ${isActive ? 'carousel-card--active' : ''}`}
                  key={service.num}
                  data-pos={pos}
                  style={{
                    '--card-color': service.color,
                    '--pos': pos,
                  }}
                  onClick={() => goTo(idx)}
                >
                  <span className="service-card__number">{service.num}</span>
                  <div className="carousel-card__glow" />

                  <div className="carousel-card__icon-wrap" style={{ '--c': service.color }}>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="carousel-card__title">{service.title}</h3>

                  <p className="carousel-card__desc">{service.description}</p>

                  <ul className="carousel-card__features">
                    {service.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="carousel-card__check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="carousel-card__link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Nav buttons */}
          <button className="carousel-nav carousel-nav--prev" onClick={() => goTo(active - 1)} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-nav carousel-nav--next" onClick={() => goTo(active + 1)} aria-label="Next">
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === active ? 'carousel-dot--active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
