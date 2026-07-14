import { useEffect } from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote:
      'ZenithDigital transformed our online presence completely. Our leads increased by 300% within just 3 months. Their Meta Ads strategy was a game-changer for our business.',
    name: 'Rahul Sharma',
    role: 'CEO of TechVault',
    delay: 'delay-100',
    metric: '300%',
    metricLabel: 'Lead Increase',
  },
  {
    id: 2,
    quote:
      "The website they built for us is absolutely stunning. The animations and user experience are world-class. We've seen a 5x increase in customer engagement.",
    name: 'Priya Patel',
    role: 'Founder of StyleHive',
    delay: 'delay-300',
    metric: '5x',
    metricLabel: 'Engagement',
  },
  {
    id: 3,
    quote:
      'Their video production quality is unmatched. Every piece of content they create converts. Best digital agency we have ever worked with.',
    name: 'Amit Kumar',
    role: 'Director of GrowthBox',
    delay: 'delay-500',
    metric: '#1',
    metricLabel: 'Agency Choice',
  },
];

function StarRating() {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="star-icon"
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div
      className={`testimonial-card glass-panel animate-on-scroll ${testimonial.delay}`}
    >
      {/* Glow accent */}
      <div className="testimonial-card-glow" />

      {/* Quote icon */}
      <div className="testimonial-quote-icon">
        <MessageSquareQuote size={32} />
      </div>

      {/* Quote text */}
      <p className="testimonial-text">&ldquo;{testimonial.quote}&rdquo;</p>

      {/* Star rating */}
      <StarRating />

      {/* Divider */}
      <div className="testimonial-divider" />

      {/* Client info row */}
      <div className="testimonial-client">
        {/* Avatar placeholder with initials */}
        <div className="testimonial-avatar">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>

        <div className="testimonial-client-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">{testimonial.role}</span>
        </div>

        {/* Metric badge */}
        <div className="testimonial-metric">
          <span className="testimonial-metric-value">
            {testimonial.metric}
          </span>
          <span className="testimonial-metric-label">
            {testimonial.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      {/* Background decorations */}
      <div className="testimonials-bg-orb testimonials-bg-orb--1" />
      <div className="testimonials-bg-orb testimonials-bg-orb--2" />
      <div className="testimonials-bg-grid" />

      <div className="container">
        {/* Section header */}
        <div className="section-header animate-on-scroll">
          <span className="testimonials-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don&rsquo;t just take our word for it&mdash;hear from the businesses
            we&rsquo;ve helped scale to new heights.
          </p>
        </div>

        {/* Cards grid */}
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Trust strip */}
        <div className="testimonials-trust animate-on-scroll delay-600">
          <div className="trust-item">
            <span className="trust-number">50+</span>
            <span className="trust-label">Happy Clients</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">4.9</span>
            <span className="trust-label">Avg Rating</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-number">120+</span>
            <span className="trust-label">Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
