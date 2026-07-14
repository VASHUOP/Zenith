import React, { useState } from 'react';
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
    title: 'Web & App Development',
    description:
      'We craft blazing-fast, pixel-perfect websites and mobile applications that turn visitors into loyal customers. Our full-stack team delivers scalable solutions using cutting-edge frameworks.',
    features: [
      'Custom React, Next.js & React Native builds',
      'Conversion-optimised UI/UX design',
      'Headless CMS & e-commerce integrations',
      'Performance audits & Core Web Vitals tuning',
    ],
    color: '#0066FF',
  },
  {
    num: '02',
    icon: Megaphone,
    title: 'Meta Ads Campaign',
    description:
      'Unlock the full power of Facebook and Instagram advertising with data-driven campaigns that reach exactly the right audience and maximise your return on ad spend.',
    features: [
      'Audience research & lookalike modelling',
      'A/B tested ad creatives & copy',
      'Retargeting funnels & dynamic product ads',
      'Real-time analytics dashboards & reporting',
    ],
    color: '#3B82F6',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Leads Generation',
    description:
      'Fill your sales pipeline with high-intent prospects through multi-channel lead generation strategies. We build systems that consistently deliver qualified leads ready to convert.',
    features: [
      'High-converting landing page design',
      'Email & WhatsApp drip sequences',
      'CRM integration & lead scoring',
      'Cost-per-lead optimisation & scaling',
    ],
    color: '#6366F1',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Boosting Sales',
    description:
      'Go beyond traffic — turn clicks into revenue with conversion rate optimisation and strategic growth consulting. We analyse every step of your customer journey.',
    features: [
      'Conversion funnel audits & heatmap analysis',
      'Upsell, cross-sell & bundle strategies',
      'Cart abandonment recovery workflows',
      'Revenue attribution & ROI tracking',
    ],
    color: '#8B5CF6',
  },
  {
    num: '05',
    icon: Video,
    title: 'Video Shoot & Editing',
    description:
      'Bring your brand to life with cinematic video content that captivates audiences across every platform. From concept to final cut, we deliver scroll-stopping content.',
    features: [
      'Professional on-location & studio shoots',
      'Motion graphics & animated explainers',
      'Platform-optimised edits (Reels, Shorts)',
      'Colour grading, sound design & subtitling',
    ],
    color: '#EC4899',
  },
  {
    num: '06',
    icon: Bot,
    title: 'AI Automation & Bots',
    description:
      'Automate customer support, lead qualification, and internal processes using cutting-edge AI chatbots and workflows. Never miss a lead with 24/7 intelligent agents.',
    features: [
      'Custom WhatsApp & Web Chatbots',
      '24/7 automated customer support',
      'Lead qualification & booking workflows',
      'CRM & external API integrations',
    ],
    color: '#10B981',
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
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            End-to-end digital solutions designed to accelerate growth, amplify your brand, and
            deliver measurable ROI.
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

                  <a href="#contact" className="carousel-card__link">
                    Learn More <ArrowRight size={16} />
                  </a>
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
