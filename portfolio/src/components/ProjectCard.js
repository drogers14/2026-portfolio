import React from "react";
import '../styling/project.scss'

const ProjectCard = ({
  title,
  description,
  techStack = [],
  github,
  demo,
  status,
  
}) => {
    const statusClass = status
    .toLowerCase()
    .replace(/\s+/g, "-");
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

              <div className="project-links">
              <span className={`status ${statusClass}`}>
            {status}
          </span>
                  {github && (
                      <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                      >
                          Source Code
                      </a>
                  )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
  
