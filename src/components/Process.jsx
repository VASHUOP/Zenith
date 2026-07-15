import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We dive deep into your business metrics, identifying exactly where you are losing money and mapping a precise path to growth.',
    Icon: Search,
    color: '#0066FF',
  },
  {
    number: '02',
    title: 'System Architecture',
    description:
      'We design and develop your custom acquisition assets — from high-converting landing pages to AI automation workflows.',
    Icon: Palette,
    color: '#3B82F6',
  },
  {
    number: '03',
    title: 'Launch & Traffic',
    description:
      'We deploy the system and flip the switch on targeted traffic, capturing high-intent leads from day one.',
    Icon: Rocket,
    color: '#6366F1',
  },
  {
    number: '04',
    title: 'Scale & Optimise',
    description:
      'We continuously track data, split-test creatives, and refine the engine to drive down your Cost Per Acquisition (CPA) while scaling volume.',
    Icon: BarChart3,
    color: '#8B5CF6',
  },
];

export default function Process() {
  useScrollReveal();

  return (
    <section className="process-section section-padding" id="process">
      {/* Background accents */}
      <div className="process-bg-orb process-bg-orb--1" />
      <div className="process-bg-orb process-bg-orb--2" />

      <div className="container">
        {/* Header */}
        <div className="section-header animate-on-scroll">
          <p className="process-overline">DISCOVERY TO LAUNCH</p>
          <h2 className="section-title">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="section-subtitle">
            A transparent, predictable 4-step framework that turns your business into a scalable customer acquisition machine.
          </p>
        </div>

        {/* Timeline */}
        <div className="process-timeline">
          {/* Animated vertical connecting line */}
          <div className="process-line" aria-hidden="true">
            <div className="process-line-inner" />
            <div className="process-line-glow" />
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.number}
                className={`process-step ${isEven ? 'process-step--left' : 'process-step--right'} animate-on-scroll delay-${(index + 1) * 100}`}
              >
                {/* Number circle on the timeline */}
                <div className="process-node" style={{ '--step-color': step.color }}>
                  <div className="process-node-ring" />
                  <span className="process-node-number">{step.number}</span>
                  <div className="process-node-pulse" />
                </div>

                {/* Card */}
                <div className="process-card glass-panel">
                  <div className="process-card-icon" style={{ '--step-color': step.color }}>
                    <step.Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.description}</p>

                  {/* Decorative corner accent */}
                  <div
                    className="process-card-corner"
                    style={{ '--step-color': step.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
