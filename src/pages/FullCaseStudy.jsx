import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowLeft, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { caseStudies } from '../components/CaseStudies';
import './FullCaseStudy.css';

export default function FullCaseStudy() {
  const { id } = useParams();
  
  const study = caseStudies.find(s => s.id === parseInt(id));

  if (!study) {
    return <Navigate to="/" replace />;
  }

  // Dummy extended data based on the study ID
  const extendedData = {
    challenge: `The client approached ZenithDigital.ai struggling with high customer acquisition costs and an inability to scale past their current revenue plateau. Their existing agency was focused on vanity metrics rather than actual business growth, leading to a fragmented user journey and wasted ad spend.`,
    solution: `We implemented our proprietary Business Growth System. First, we completely overhauled their landing pages using our high-converting architecture. Second, we restructured their ad campaigns to focus on unit economics rather than just clicks. Finally, we deployed our AI Lead Qualification Bot to ensure their sales team only spoke to highly qualified prospects.`,
    timeline: study.id === 1 ? '90 Days' : '6 Months',
    industry: study.industry,
    deliverables: [
      'Conversion Rate Optimization (CRO) Audit',
      'High-Converting Landing Page Architecture',
      'Meta & Google Ads Management',
      'AI Lead Qualification System',
      'Automated Nurture Sequences'
    ]
  };

  useSEO({
    title: study ? `Case Study: ${study.client} | ZenithDigital.ai` : 'Case Study',
    description: study ? `Discover how ZenithDigital.ai built a predictable growth system for ${study.client} leading to massive ROI.` : '',
    keywords: 'case study, marketing results, AI automation case study, lead generation case study'
  });

  return (
    <main className="full-case-study">
      <div className="container">
        <div className="fcs-nav">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>

        <div className="fcs-header">
          <p className="fcs-overline">CASE STUDY</p>
          <h1 className="fcs-title">{study.client}</h1>
          <p className="fcs-subtitle">{study.title}</p>
        </div>

        <div className="fcs-metrics-banner glass-panel">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="fcs-metric">
              <span className="fcs-metric-label">{metric.label}</span>
              <span className="fcs-metric-value text-gradient">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="fcs-grid">
          <div className="fcs-main-content">
            <h2>The Challenge</h2>
            <p>{extendedData.challenge}</p>

            <h2>The Solution</h2>
            <p>{extendedData.solution}</p>

            <h2>The Results</h2>
            <p>Within {extendedData.timeline}, the client saw a massive shift in their business trajectory. By prioritizing conversion architecture before turning up the ad spend, we were able to drop their CPA dramatically while simultaneously increasing lead volume.</p>
            
            <div className="fcs-impact glass-panel">
              <TrendingUp size={32} className="text-gradient mb-3" />
              <h3>Business Impact</h3>
              <p>The system we built now acts as a predictable, scalable acquisition engine. They no longer rely on referrals or luck, but have a mathematical formula for growth.</p>
            </div>
          </div>

          <div className="fcs-sidebar">
            <div className="glass-panel fcs-sidebar-card">
              <h3>Project Details</h3>
              <div className="fcs-detail-row">
                <strong>Industry:</strong> <span>{extendedData.industry}</span>
              </div>
              <div className="fcs-detail-row">
                <strong>Timeline:</strong> <span>{extendedData.timeline}</span>
              </div>
              
              <h4 className="mt-4">What We Did</h4>
              <ul className="fcs-deliverables">
                {extendedData.deliverables.map((item, i) => (
                  <li key={i}><CheckCircle size={16} className="text-gradient" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-panel fcs-cta-card">
              <h3>Want Similar Results?</h3>
              <p>Book a free strategy session to see if our systems can scale your business.</p>
              <a href="https://wa.me/919996829482?text=Hi%2C%20I%20want%20to%20achieve%20results%20like%20your%20case%20studies." target="_blank" rel="noreferrer" className="btn btn-primary w-100">
                Book Strategy Call <ArrowRight size={16} style={{ display: 'inline', marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
