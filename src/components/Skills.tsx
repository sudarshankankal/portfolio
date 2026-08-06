import { skills } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Skills.css';

export default function Skills() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <section
      className="skills-section tile-dark"
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="tile-content skills-inner">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="skills-label">Skills</p>
          <h2 className="typo-display-lg">
            Technologies I work with.
          </h2>
        </div>

        <div className={`skills-grid reveal ${isVisible ? 'visible' : ''} reveal-delay-1`}>
          {skills.map((category, catIdx) => (
            <div className="skill-category" key={category.category}>
              <span className="skill-category-name">{category.category}</span>
              <div className="skill-chips">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    className="skill-chip"
                    key={skill}
                    style={{
                      transitionDelay: `${(catIdx * 0.05) + (skillIdx * 0.03)}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
