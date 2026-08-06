import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero tile-black" id="hero">
      {/* Animated grid background */}
      <div className="hero-grid" />
      {/* Ambient glow */}
      <div className="hero-glow" />

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="hero-name-accent">{personalInfo.name.split(' ')[1]}</span>
        </h1>
        <p className="hero-title">
          {personalInfo.title} · {personalInfo.subtitle}
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowDown size={16} />
          </a>
          <a href="#contact" className="btn-secondary-pill-on-dark">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
