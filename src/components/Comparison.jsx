import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check, X, Minus } from 'lucide-react';
import './Comparison.css';

const comparisonData = [
  {
    feature: 'Focus',
    freelancer: 'Task Execution',
    agency: 'Deliverables & Retainers',
    zenith: 'Revenue & ROI',
  },
  {
    feature: 'AI Automation',
    freelancer: <X className="icon-x" size={20} />,
    agency: <Minus className="icon-minus" size={20} />,
    zenith: <Check className="icon-check" size={20} />,
  },
  {
    feature: 'Speed of Execution',
    freelancer: 'Slow (Solo)',
    agency: 'Slow (Bureaucratic)',
    zenith: 'Fast (Agile & AI-Driven)',
  },
  {
    feature: 'Pricing Model',
    freelancer: 'Hourly / Unpredictable',
    agency: 'High Retainers + Hidden Fees',
    zenith: 'Productized & Transparent',
  },
  {
    feature: 'Skin in the Game',
    freelancer: <X className="icon-x" size={20} />,
    agency: <X className="icon-x" size={20} />,
    zenith: <Check className="icon-check" size={20} />,
  },
];

export default function Comparison() {
  useScrollReveal();

  return (
    <section className="comparison-section section-padding" id="comparison">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="process-overline">THE ZENITH ADVANTAGE</p>
          <h2 className="section-title">
            Why Choose <span className="text-gradient">ZenithDigital.ai?</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
            We aren't just order takers. We are strategic growth partners who leverage AI and performance marketing to scale your business.
          </p>
        </div>

        <div className="comparison-table-wrapper animate-on-scroll delay-200 glass-panel">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>What you get</th>
                <th>Freelancer</th>
                <th>Typical Agency</th>
                <th className="highlight-col">ZenithDigital.ai</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i}>
                  <td className="feature-cell">{row.feature}</td>
                  <td>{row.freelancer}</td>
                  <td>{row.agency}</td>
                  <td className="highlight-col fw-bold">{row.zenith}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
