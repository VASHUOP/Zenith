import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, LineChart, Target, Bot, PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import './ServicesPage.css';

const detailedServices = [
  {
    id: 'conversion-architecture',
    icon: <Layout size={40} />,
    title: 'Conversion Architecture',
    subtitle: 'High-Performance Websites & Landing Pages',
    description: 'We don\'t just build websites; we architect conversion engines. Every pixel is designed to guide visitors toward a specific action, minimizing bounce rates and maximizing lead generation.',
    deliverables: [
      'UI/UX Audits & Heatmap Analysis',
      'High-Converting Landing Page Design',
      'Fast-Loading, Mobile-First Development',
      'A/B Testing Framework Setup'
    ]
  },
  {
    id: 'customer-acquisition',
    icon: <Target size={40} />,
    title: 'Customer Acquisition Systems',
    subtitle: 'Data-Driven Meta & Google Ads',
    description: 'Stop guessing with your ad spend. We deploy scientifically tested ad creatives and precise targeting strategies to acquire customers at the lowest possible CPA (Cost Per Acquisition).',
    deliverables: [
      'Competitor Ad Research & Strategy',
      'Multi-Platform Campaign Management',
      'Continuous Split-Testing (Creative & Copy)',
      'Advanced Retargeting Funnels'
    ]
  },
  {
    id: 'predictable-lead-engine',
    icon: <LineChart size={40} />,
    title: 'Predictable Lead Engine',
    subtitle: 'Outbound & Inbound Synergy',
    description: 'A mathematical approach to lead generation. We build systems that consistently fill your pipeline with high-quality prospects through organic SEO, automated outreach, and optimized funnels.',
    deliverables: [
      'B2B Automated Outreach Campaigns',
      'Technical & Content SEO Optimization',
      'Lead Magnet Creation & Integration',
      'CRM Setup & Data Syncing'
    ]
  },
  {
    id: 'ai-automation',
    icon: <Bot size={40} />,
    title: 'AI Employees & Automation',
    subtitle: 'Scale Without Increasing Headcount',
    description: 'Leverage custom AI agents to handle customer support, pre-qualify leads, and automate repetitive tasks. Your business runs 24/7, providing instant responses to potential customers.',
    deliverables: [
      'Custom WhatsApp/Web Chatbots',
      'AI Lead Qualification & Routing',
      'Automated Follow-up Sequences',
      'Zapier/Make Internal Workflows'
    ]
  },
  {
    id: 'brand-content',
    icon: <PenTool size={40} />,
    title: 'Brand Content Studio',
    subtitle: 'Authority-Building Creatives',
    description: 'In a crowded market, trust is the ultimate currency. We produce premium video content, persuasive copywriting, and brand assets that position you as the undeniable authority in your space.',
    deliverables: [
      'Short-Form Video Production',
      'Direct-Response Copywriting',
      'Authority-Building Social Strategy',
      'Premium Graphic Design Assets'
    ]
  }
];

export default function ServicesPage() {
  useSEO({
    title: 'Web Design & Growth Marketing Services in Bahadurgarh | Zenith Digital',
    description: 'Outcomes-driven services by a premium web developer in Bahadurgarh: conversion-focused web design, Meta & Google Ads management, predictable lead engines, and custom AI chatbot automations.',
    keywords: 'web design services Bahadurgarh, website development Bahadurgarh, digital marketing services Bahadurgarh, Zenith Digital services, local web developer'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page">
      <div className="sp-hero">
        <div className="container">
          <p className="sp-overline">OUR EXPERTISE</p>
          <h1 className="sp-title">Architects of <span className="text-gradient">Predictable Growth</span></h1>
          <p className="sp-subtitle">We don't offer generic marketing services. We build end-to-end customer acquisition systems designed to scale your revenue mathematically.</p>
        </div>
      </div>

      <div className="container">
        <div className="sp-grid">
          {detailedServices.map((service, index) => (
            <div key={index} id={service.id} className="sp-card glass-panel">
              <div className="sp-card-icon text-gradient">
                {service.icon}
              </div>
              <h2 className="sp-card-title">{service.title}</h2>
              <h3 className="sp-card-subtitle">{service.subtitle}</h3>
              <p className="sp-card-desc">{service.description}</p>
              
              <div className="sp-deliverables">
                <h4>What's Included:</h4>
                <ul>
                  {service.deliverables.map((item, i) => (
                    <li key={i}><CheckCircle size={16} className="text-gradient" /> {item}</li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/919996829482?text=${encodeURIComponent('Hi, I want to learn more about the ' + service.title + ' system.')}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary w-100 mt-4"
              >
                Inquire About This <ArrowRight size={16} style={{ display: 'inline', marginLeft: '8px' }} />
              </a>
            </div>
          ))}
        </div>

        <div className="sp-cta glass-panel text-center mt-5">
          <h2>Not sure where to start?</h2>
          <p>Book a free strategy session. We'll audit your current process and map out a custom growth system for your business.</p>
          <a href="https://wa.me/919996829482?text=Hi%2C%20I%20would%20like%20to%20book%20a%20strategy%20session." target="_blank" rel="noreferrer" className="btn btn-primary pulse-btn mt-3">
            Book Strategy Call
          </a>
        </div>
      </div>
    </main>
  );
}
