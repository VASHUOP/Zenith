import React, { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Shield, Zap, TrendingUp, Users } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  useSEO({
    title: 'About Zenith Digital | Bahadurgarh Web Developer & Growth Agency',
    description: 'Learn about Zenith Digital, a premier web developer and business automation partner in Bahadurgarh. We focus entirely on performance, speed, and massive ROI.',
    keywords: 'about Zenith Digital, Bahadurgarh web developer team, web development company India, custom AI automation agency'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      <div className="ap-hero">
        <div className="container">
          <p className="ap-overline">WHO WE ARE</p>
          <h1 className="ap-title">We Don't Sell Services.<br/><span className="text-gradient">We Build Growth Systems.</span></h1>
          <p className="ap-subtitle">The traditional agency model is broken. Agencies charge high retainers for vanity metrics—likes, clicks, and impressions—while business owners care about one thing: revenue. We built ZenithDigital.ai to fix this.</p>
        </div>
      </div>

      <div className="container">
        <div className="ap-philosophy glass-panel">
          <div className="ap-philosophy-content">
            <h2>Our Philosophy</h2>
            <p>At ZenithDigital, we view marketing as mathematics. If you put ₹1 into a machine, you should know exactly how to get ₹3 out.</p>
            <p>We leverage cutting-edge AI automation, highly persuasive conversion architecture, and aggressive media buying to build predictable acquisition engines for ambitious brands.</p>
            <p>No fluff. No vanity metrics. Just measurable business outcomes.</p>
          </div>
          <div className="ap-philosophy-stats">
            <div className="ap-stat">
              <span className="ap-stat-value text-gradient">₹0</span>
              <span className="ap-stat-label">Wasted on Fluff</span>
            </div>
            <div className="ap-stat">
              <span className="ap-stat-value text-gradient">100%</span>
              <span className="ap-stat-label">ROI Focused</span>
            </div>
          </div>
        </div>

        <div className="ap-values">
          <h2 className="text-center mb-5" style={{color: 'white'}}>The Zenith Standard</h2>
          <div className="ap-values-grid">
            <div className="ap-value-card glass-panel">
              <Shield size={32} className="text-gradient mb-3" />
              <h3>Radical Transparency</h3>
              <p>We don't hide behind confusing jargon. You will always know exactly what we are doing, why we are doing it, and what the financial return is.</p>
            </div>
            <div className="ap-value-card glass-panel">
              <Zap size={32} className="text-gradient mb-3" />
              <h3>Unmatched Speed</h3>
              <p>In business, speed is a competitive advantage. We deploy our systems fast and iterate even faster based on real-world data.</p>
            </div>
            <div className="ap-value-card glass-panel">
              <TrendingUp size={32} className="text-gradient mb-3" />
              <h3>Mathematical Scaling</h3>
              <p>We rely on data, not emotions. Every decision is backed by analytics, ensuring your cost of acquisition goes down as your scale goes up.</p>
            </div>
            <div className="ap-value-card glass-panel">
              <Users size={32} className="text-gradient mb-3" />
              <h3>True Partnership</h3>
              <p>We act as an extension of your team. When you win, we win. We only take on clients we truly believe we can help scale.</p>
            </div>
          </div>
        </div>

        <div className="ap-cta glass-panel text-center">
          <h2>Ready to Scale Predictably?</h2>
          <p>Let's have a conversation about your business goals and see if our systems are a good fit for you.</p>
          <a href="https://wa.me/919996829482?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20partnering%20with%20ZenithDigital." target="_blank" rel="noreferrer" className="btn btn-primary pulse-btn mt-3">
            Speak With Us Today
          </a>
        </div>
      </div>
    </main>
  );
}
