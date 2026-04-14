import '../styling/stack.scss';
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import { IoMdGitMerge, IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaDocker, FaJenkins, FaTools, FaRobot, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCplusplus, SiVercel } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";



function Skills() {
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
        <div className="skills-section">


            <div className="skills-group">
                <h3>Frontend</h3>
                <div className="skills-cloud">

                        <span className="skill" >
                            <FaReact /> React
                        </span>
                        <span className="skill primary">
                            <IoLogoJavascript /> Javascript
                            </span>
                        <span className="skill"><FaHtml5 /> HTML</span>
                        <span className="skill"><FaCss3 /> CSS</span>
                        <span className="skill"><BsFiletypeScss /> SCSS</span>
                </div>
            </div>

            <div className="skills-group">
            <h3>Tools</h3>

                <div className="skills-cloud">
                    <span className="skill"><IoMdGitMerge /> Git</span>
                    <span className="skill"><FaGithub /> GitHub</span>
                    <span className="skill"><VscVscode /> VS Code</span>
                </div>
            </div>
            <div className="skills-group">
                <h3>Cloud & DevOps</h3>
                <div className="skills-cloud">
                    <span className="skill"><FaDocker /> Docker</span>
                    <span className="skill"><FaJenkins /> Jenkins</span>
                    <span className="skill"><DiGoogleCloudPlatform /> GCP</span>
                    <span className="skill"><SiVercel /> Vercel</span>
                </div>
            </div>

            <div className="skills-group">
                <h3>Testing & Automation</h3>
                <div className="skills-cloud">
                    <span className="skill"><FaTools /> Playwright</span>
                </div>
            </div>

            <div className="skills-group">
                <h3>AI & ML</h3>
                <div className="skills-cloud">
                    <span className="skill"><FaRobot /> OpenCV</span>    </div>
            </div>

            <div className="skills-group">
                <h3>Backend & Programming Languages</h3>
                <div className="skills-cloud">
                    <span className="skill muted">Node.js</span>
                    <span className="skill muted">APIs</span>
                    <span className="skill"><IoLogoPython /> Python</span>
                    <span className="skill"><SiCplusplus /> C++</span>
                </div>
            </div>

        </div>
    );
}

export default Skills;