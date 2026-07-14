import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We analyze your market, competitors, and goals to build a winning blueprint.',
    Icon: Search,
    color: '#0066FF',
  },
  {
    number: '02',
    title: 'Design & Develop',
    description:
      'Our team crafts stunning, conversion-optimized designs and robust applications.',
    Icon: Palette,
    color: '#3B82F6',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description:
      'We deploy, test, and fine-tune everything for maximum performance.',
    Icon: Rocket,
    color: '#6366F1',
  },
  {
    number: '04',
    title: 'Scale & Grow',
    description:
      'Continuous optimization and scaling strategies to keep you ahead of the competition.',
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
          <p className="process-overline">OUR PROCESS</p>
          <h2 className="section-title">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">
            A proven four-step framework that transforms ideas into high-impact
            digital products — on time and on budget.
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
