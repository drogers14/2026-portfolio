import '../styling/App.scss'
import ProjectCard from './ProjectCard';
function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <h2>Ideas Brought to Life</h2>
            <div className="projects-grid">
            <ProjectCard
                title="Playwright Automation Framework"
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
                title="Portfolio Built with React"
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
                        {/* <h1 className="title-hero">🚧 Coming Soon! 🚧</h1> */}

            {/* <ProjectCard />
            <ProjectCard /> */}
            </div>
        </>
    )
}

export default Projects;
