import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import './MobileStickyCTA.css';

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta">
      <a href="https://wa.me/919996829482" target="_blank" rel="noreferrer" className="sticky-btn sticky-btn-whatsapp">
        <Phone size={18} />
        <span>WhatsApp</span>
      </a>
      <a href="#contact" className="sticky-btn sticky-btn-book">
        <Calendar size={18} />
        <span>Book Call</span>
      </a>
    </div>
  );
}
