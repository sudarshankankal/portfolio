import { experiences } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <section
      className="experience-section tile-light"
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="tile-content experience-inner">
        <div className={`experience-header reveal ${isVisible ? 'visible' : ''}`}>
          <p className="experience-label">Experience</p>
          <h2 className="typo-display-lg">Where I've worked.</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              className={`timeline-item reveal ${isVisible ? 'visible' : ''}`}
              key={exp.company}
              style={{ transitionDelay: `${0.15 + idx * 0.15}s` }}
            >
              <div className="timeline-dot" />
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">
                {exp.company} — {exp.location}
              </p>
              <div className="timeline-highlights">
                {exp.highlights.map((h, hIdx) => (
                  <p className="timeline-highlight" key={hIdx}>
                    {h}
                  </p>
                ))}
              </div>
              {exp.techStack && (
                <span className="timeline-tech">{exp.techStack}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
