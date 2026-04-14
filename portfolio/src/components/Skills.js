import '../styling/stack.scss';
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import { IoMdGitMerge, IoLogoPython, IoLogoJavascript } from "react-icons/io";
import {
    FaReact, FaDocker, FaJenkins, FaTools,
    FaRobot, FaHtml5, FaCss3, FaGithub,
    FaMobileAlt, FaNodeJs
} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCplusplus, SiVercel, SiDjango, SiPostman, 
        SiGithubcopilot, SiMysql, SiJira  } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";



function Skills({ activeCategory }) {
    const getClass = (cat) => {
        return `skill ${activeCategory === cat ? 'active' : ''}`;
    };
    useEffect(() => {
        const elements = document.querySelectorAll(".skill");

        const listeners = [];

        elements.forEach((el) => {
            const strength = 15;

            const handleMouseMove = (e) => {
                const rect = el.getBoundingClientRect();
                const relX = e.clientX - rect.left - rect.width / 2;
                const relY = e.clientY - rect.top - rect.height / 2;

                el.style.transform = `translate(${relX / strength}px, ${relY / strength}px)`;
            };

            const handleMouseLeave = () => {
                el.style.transform = "translate(0, 0)";
            };

            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);

            listeners.push({ el, handleMouseMove, handleMouseLeave });
        });

        return () => {
            listeners.forEach(({ el, handleMouseMove, handleMouseLeave }) => {
                el.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);
    return (
        <div className="">


            <div className="skills-group">
                <h3>Frontend</h3>
                <div className="skills-cloud">

                    <span className={getClass('frontend')}>
                        <FaReact /> React
                    </span>

                    <span className={getClass('frontend')}>
                        <IoLogoJavascript /> Javascript
                    </span>
                    <span className={getClass('frontend')}><FaHtml5 /> HTML</span>
                    <span className={getClass('frontend')}><FaCss3 /> CSS</span>
                    <span className={getClass('frontend')}><BsFiletypeScss /> SCSS</span>
                </div>
            </div>

            <div className="skills-group">
                <h3>Tools</h3>

                <div className="skills-cloud">
                    <span className={getClass('fundamentals')}>
                        <IoMdGitMerge /> Git
                    </span>

                    <span className={getClass('fundamentals')}>
                        <FaGithub /> GitHub
                    </span>
                    <span className={getClass('fundamentals')}><VscVscode /> VS Code</span>
                    <span className={getClass('fundamentals')}><SiGithubcopilot /> Copilot</span>
                    <span className={getClass('fundamentals')}><SiJira /> Jira</span>

                </div>
            </div>
            <div className="skills-group">
                <h3>Cloud & DevOps</h3>
                <div className="skills-cloud">
                    <span className={getClass('devops')}>
                        <FaDocker /> Docker
                    </span>
                    <span className="skill"><FaJenkins /> Jenkins</span>
                    <span className="skill"><DiGoogleCloudPlatform /> GCP</span>
                    <span className="skill"><SiVercel /> Vercel</span>
                </div>
            </div>

            <div className="skills-group">
                <h3>Testing & Automation</h3>
                <div className="skills-cloud">
                    <span className={getClass('testing')}>
                        <FaTools /> Playwright
                    </span>
                    <span className="skill"><FaTools /> Selenium</span>
                    <span className="skill"><SiPostman /> Postman</span>
                    <span className="skill"><FaMobileAlt />LamdaTest</span>

                </div>
            </div>

            <div className="skills-group">
                <h3>AI & ML</h3>
                <div className="skills-cloud">
                    <span className={getClass('ai')}>
                        <FaRobot /> OpenCV
                    </span>    </div>
            </div>

            <div className="skills-group">
                <h3>Backend</h3>
                <div className="skills-cloud">
                    <span className="skill muted"><FaNodeJs />Node.js</span>
                    <span className="skill muted"><SiMysql /> MySQL</span>
                    <span className="skill muted">APIs</span>
                    <span className={getClass('backend')}>
                        <SiDjango /> Django
                    </span>
                </div>
            </div>

            <div className="skills-group">
                <h3>Programming Languages</h3>
                <div className="skills-cloud">
                    <span className={getClass('backend')}>
                        <IoLogoPython /> Python
                    </span>

                    <span className={getClass('fundamentals')}>
                        <SiCplusplus /> C++
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Skills;