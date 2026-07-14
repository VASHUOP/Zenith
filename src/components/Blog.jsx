import React from 'react';
import './Blog.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Proven Meta Ads Strategies to Double Your ROI in 2024',
    excerpt: 'Discover the exact audience targeting and creative frameworks we use to generate massive returns for e-commerce brands on Facebook and Instagram.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Advertising',
    date: 'Oct 24, 2023',
    author: 'Vashu',
    slug: '#'
  },
  {
    id: 2,
    title: 'Why AI Automation is the Future of Customer Support',
    excerpt: 'How integrating smart WhatsApp chatbots and automated workflows can save you hundreds of hours while closing more leads 24/7.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'AI & Tech',
    date: 'Nov 02, 2023',
    author: 'Partik',
    slug: '#'
  },
  {
    id: 3,
    title: 'Core Web Vitals: The Secret to Ranking #1 on Google',
    excerpt: 'Is your website too slow? Learn how fixing your site speed and architecture directly influences your SEO rankings and conversion rates.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'SEO & Web',
    date: 'Nov 15, 2023',
    author: 'Zenith Team',
    slug: '#'
  }
];

export default function Blog() {
  useScrollReveal();

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="section-header text-center animate-on-scroll">
          <h2 className="section-title">Latest <span className="text-gradient">Insights</span></h2>
          <p className="section-subtitle">Actionable strategies and industry updates to help you scale your digital empire.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <article key={post.id} className={`blog-card animate-on-scroll delay-${(idx + 1) * 100}`}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" loading="lazy" />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Clock size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
                <h3 className="blog-title">
                  <a href={post.slug}>{post.title}</a>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.slug} className="blog-link">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
