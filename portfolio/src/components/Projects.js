import '../styling/App.scss'
import ProjectCard from './ProjectCard';
function Projects() {
    return (
        <div className="hero">
            <h1 className="title">Projects</h1>

            <h2><span style={{ color: '#dff58a'}}>{'>' }</span> Ideas Brought to Life</h2>
            <div className="projects-grid">
            <ProjectCard
                title={
                    <span>
                      <span style={{ color: '#dff58a' }}>[00]</span>
                      {" "}Playwright Automation Framework
                    </span>
                  }
                description="Scalable Playwright + TypeScript automation framework focused on reusable architecture, CI/CD integration, API testing, and reliable end-to-end validation."
                techStack={[
                    "Playwright",
                    "TypeScript",
                    "GitHub Actions",
                    "API Testing",
                ]}
                github="https://github.com/drogers14/playwright-automation-framework"
                status= "In Progress"
            />
               <ProjectCard
                title={
                    <span>
                      <span style={{ color: '#dff58a' }}>[01]</span>
                      {" "}Portfolio Built with React
                    </span>
                  }
                description="React portfolio website showcasing modern web development practices, creative UI design, and professional growth across software engineering, automation, and quality engineering."
                techStack={[
                    "React",
                    "SCSS",
                    "Vercel",
                    "Git",
                ]}
                github="https://github.com/drogers14/2026-portfolio"
                demo="https://www.destinyrogers.dev/"
                status= "Active"
            />

            </div>
        </div>
    )
}

export default Projects;
