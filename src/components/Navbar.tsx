import { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="global-nav"
        id="global-nav"
        style={{
          backgroundColor: scrolled
            ? 'rgba(0, 0, 0, 0.88)'
            : 'var(--color-surface-black)',
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        }}
      >
        <div className="global-nav-inner">
          <a
            href="#"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {personalInfo.name.split(' ')[0]}
            <span className="nav-logo-accent">.</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${personalInfo.email}`} className="nav-cta">
              Hire Me
            </a>
          </div>

          <button
            className={`nav-hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary"
          style={{ marginTop: 'var(--space-lg)' }}
          onClick={handleNavClick}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
