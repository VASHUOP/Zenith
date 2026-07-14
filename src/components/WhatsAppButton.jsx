import React from 'react';
import './WhatsAppButton.css';
// Note: We use a standard MessageCircle icon from lucide-react if a strict WhatsApp icon isn't available,
// but we can also use an SVG for WhatsApp.
// Lucide does not have a specific 'whatsapp' icon, so we use MessageCircle or a custom SVG.
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "919996829482"; 
  const message = encodeURIComponent("Hello ZenithDigital.ai! I'm interested in your services.");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-wrapper">
      <div className="whatsapp-popup">
        👋 Need help? <strong>Chat with us!</strong>
      </div>
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <div className="fab-pulse"></div>
        <div className="fab-icon-container">
          {/* Custom WhatsApp SVG for authenticity */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      </a>
    </div>
  );
}
