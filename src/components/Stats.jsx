import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Stats.css';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const isDecimal = String(target).includes('.');

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="stats-number text-gradient">
      {count}{suffix}
    </span>
  );
}

const statsData = [
  { target: 7, suffix: ' Days', label: 'Average Launch Time', description: 'From strategy to live system' },
  { target: 3.5, suffix: 'x', label: 'Average ROI', description: 'Across active campaigns' },
  { target: 95, suffix: '%', label: 'Client Retention', description: 'Long-term partnerships' },
  { target: 4, suffix: '', label: 'Published Case Studies', description: 'Verified results' },
];

export default function Stats() {
  useScrollReveal();

  return (
    <section className="stats-section">
      {/* Background effects */}
      <div className="stats-bg-glow stats-bg-glow--left" />
      <div className="stats-bg-glow stats-bg-glow--right" />

      <div className="container">
        <div className="stats-bar glass-panel">
          {/* Animated top border glow */}
          <div className="stats-bar-glow" />

          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={stat.label} className="stats-item-wrapper">
                <div
                  className={`stats-item animate-on-scroll delay-${(index + 1) * 100}`}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                  <span className="stats-label">{stat.label}</span>
                  <span className="stats-description">{stat.description}</span>

                  {/* Pulsing dot accent */}
                  <span className="stats-pulse" />
                </div>

                {/* Gradient divider (not after last item) */}
                {index < statsData.length - 1 && (
                  <div className="stats-divider" aria-hidden="true">
                    <div className="stats-divider-line" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
