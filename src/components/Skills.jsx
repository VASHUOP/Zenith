import React from 'react';
import './Skills.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillsRow1 = [
  "React & Next.js", "Meta Ads", "Node.js", "Technical SEO", "Figma Design", "Lead Generation", "UI/UX", "Conversion Optimization"
];
const skillsRow2 = [
  "Video Editing", "Premiere Pro", "Copywriting", "Sales Funnels", "App Development", "Google Ads", "Brand Strategy", "Data Analytics"
];

export default function Skills() {
  useScrollReveal();

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Our Arsenal</h2>
          <p className="section-subtitle">The tools and strategies we use to dominate the digital landscape.</p>
        </div>
      </div>
      
      <div className="skills-marquee-container animate-on-scroll delay-200">
        <div className="marquee">
          <div className="marquee-content">
            {[...skillsRow1, ...skillsRow1].map((skill, i) => (
              <div key={i} className="skill-pill">
                <span className="skill-dot"></span> {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="marquee marquee-reverse">
          <div className="marquee-content">
            {[...skillsRow2, ...skillsRow2].map((skill, i) => (
              <div key={i} className="skill-pill">
                <span className="skill-dot"></span> {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
