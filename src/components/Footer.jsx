import { Globe, Camera, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Footer.css';

const services = [
  'Web Development',
  'Meta Ads',
  'Lead Generation',
  'Sales Boosting',
  'Video Production',
];

const company = [
  'About Us',
  'Our Team',
  'Careers',
  'Privacy Policy',
  'Terms of Service',
];

const socials = [
  { icon: Globe, label: 'Website', href: '#' },
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:ZenithDigital.ai@gmail.com' },
];

export default function Footer() {
  useScrollReveal();

  const year = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      {/* Gradient top line */}
      <div className="footer-gradient-line" />

      <div className="container">
        <div className="footer-grid">
          {/* Column 1 – Brand */}
          <div className="footer-col footer-col--brand animate-on-scroll delay-100">
            <a href="#" className="footer-logo">
              <span className="footer-logo-accent">Zenith</span>Digital
              <span className="footer-logo-dot">.ai</span>
            </a>

            <p className="footer-tagline">
              Transforming brands through digital excellence.
            </p>

            <div className="footer-socials">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Services */}
          <div className="footer-col animate-on-scroll delay-200">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s}>
                  <a href="#">
                    <ArrowUpRight size={14} className="footer-link-icon" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Company */}
          <div className="footer-col animate-on-scroll delay-300">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              {company.map((c) => (
                <li key={c}>
                  <a href="#">
                    <ArrowUpRight size={14} className="footer-link-icon" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div className="footer-col animate-on-scroll delay-400">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:ZenithDigital.ai@gmail.com">ZenithDigital.ai@gmail.com</a>
              </li>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+919996829482">+91 99968 29482</a>
              </li>
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>Bahadurgarh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} ZenithDigital.ai &mdash; All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="footer-legal-sep">/</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
