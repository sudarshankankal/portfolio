import { Building2, Shield, BarChart3, KeyRound } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const iconMap: Record<string, React.ReactNode> = {
  'building-2': <Building2 size={24} />,
  'shield': <Shield size={24} />,
  'bar-chart-3': <BarChart3 size={24} />,
  'key-round': <KeyRound size={24} />,
};

export default function Projects() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <section
      className="projects-section tile-dark-2"
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="tile-wide projects-inner">
        <div className={`projects-header reveal ${isVisible ? 'visible' : ''}`}>
          <p className="projects-label">Projects</p>
          <h2 className="typo-display-lg">What I've built.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              className={`project-card reveal ${isVisible ? 'visible' : ''}`}
              key={project.name}
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  {iconMap[project.icon]}
                </div>
                <span className="project-type">{project.type}</span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-descriptions">
                {project.description.map((desc, dIdx) => (
                  <p className="project-description" key={dIdx}>
                    {desc}
                  </p>
                ))}
              </div>
              {project.tech && (
                <span className="project-tech">{project.tech}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
