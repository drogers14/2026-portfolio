import '../styling/stack.scss';
import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
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
   
    return (
        <div className="">

<h1> {'>'} stack <span style={{color: "#00d4ff"}}>--current </span></h1>


            <div className="skills-group">
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