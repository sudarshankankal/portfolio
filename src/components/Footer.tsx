import { navLinks, personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a
            href="#"
            className="footer-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {personalInfo.name.split(' ')[0]}
            <span className="footer-logo-accent">.</span>
          </a>
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </span>
          <span className="footer-built">
            Built with <span className="footer-built-accent">React 19</span> + TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
