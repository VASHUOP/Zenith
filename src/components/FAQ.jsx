import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "Do you guarantee results?",
    answer: "While no one can guarantee specific numbers, our entire model is built on predictability. We don't take on clients unless we are confident our systems can deliver a positive ROI. If we don't think we can help you, we'll tell you upfront."
  },
  {
    question: "How long until I see a return on investment?",
    answer: "Most of our clients see initial traction within the first 14-30 days of launch. However, true scalable growth usually compounds between months 2 and 3 as our AI systems gather data and optimize your cost per acquisition."
  },
  {
    question: "Are there any hidden fees or long-term contracts?",
    answer: "No. Our productized packages mean you know exactly what you're paying upfront. We operate on month-to-month agreements because we believe we should earn your business every 30 days."
  },
  {
    question: "Do I need to provide the ad budget separately?",
    answer: "Yes. The prices listed on our site cover our system build, management, creative production, and AI integrations. Your advertising spend on platforms like Meta or Google is paid directly to those networks."
  },
  {
    question: "What makes ZenithDigital.ai different from a typical agency?",
    answer: "Typical agencies focus on deliverables (like 'we will post 3 times a week'). We focus purely on business outcomes (revenue and leads). We also leverage advanced AI automation to handle lead qualification and customer support, meaning we actually help you handle the growth we generate."
  }
];

export default function FAQ() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="process-overline">COMMON QUESTIONS</p>
          <h2 className="section-title">
            Clear Answers For <span className="text-gradient">Clear Growth</span>
          </h2>
        </div>

        <div className="faq-container animate-on-scroll delay-200">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'faq-item--open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className="faq-icon" size={20} />
              </div>
              <div className="faq-answer-wrapper" style={{ height: openIndex === index ? 'auto' : '0px', overflow: 'hidden' }}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
