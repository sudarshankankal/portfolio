import { summary, stats } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './About.css';

export default function About() {
  const [ref, isVisible] = useInView(0.15);

  return (
    <section
      className="about-section tile-parchment"
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="tile-content about-inner">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="about-label">About</p>
          <h2 className="typo-display-lg about-headline">
            Crafting exceptional web experiences.
          </h2>
        </div>

        <p className={`typo-lead-airy about-summary reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          {summary}
        </p>

        <div className={`about-stats reveal ${isVisible ? 'visible' : ''} reveal-delay-2`}>
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
