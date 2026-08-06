import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useInView(0.15);

  return (
    <section
      className="education-section tile-parchment"
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="tile-content education-inner">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="education-label">Education</p>
          <h2 className="typo-display-lg">Academic foundation.</h2>
        </div>

        <div className={`education-card reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          <div className="education-icon">
            <GraduationCap size={28} />
          </div>
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-institution">{education.institution}</p>
          <div className="education-meta">
            <span>{education.period}</span>
            <span className="education-meta-divider" />
            <span>{education.score}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
