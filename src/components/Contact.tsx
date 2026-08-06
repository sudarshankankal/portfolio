import { Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useInView(0.15);

  return (
    <section
      className="contact-section tile-dark-3"
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="contact-glow" />
      <div className="tile-content contact-inner">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="contact-label">Contact</p>
          <h2 className="typo-display-lg contact-headline">
            Let's build something together.
          </h2>
        </div>

        <p className={`typo-lead-airy contact-subtitle reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className={`contact-links reveal ${isVisible ? 'visible' : ''} reveal-delay-2`}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-link"
          >
            <span className="contact-link-icon"><Mail size={18} /></span>
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="contact-link"
          >
            <span className="contact-link-icon"><Phone size={18} /></span>
            {personalInfo.phone}
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon"><ExternalLink size={18} /></span>
            GitHub
          </a>
        </div>

        <div className={`contact-primary-cta reveal ${isVisible ? 'visible' : ''} reveal-delay-3`}>
          <a
            href={`mailto:${personalInfo.email}?subject=Let's Connect&body=Hi Sudarshan,`}
            className="btn-primary"
          >
            Send Email
            <Send size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
