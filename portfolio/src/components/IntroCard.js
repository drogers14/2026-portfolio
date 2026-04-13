import '../styling/App.scss';
// import TextLoop from "react-text-loop";
import { MdComputer, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import Social from '../Social';
import Image from './Image';

import { useEffect, useState } from "react";



function IntroCard() {
        const [time, setTime] = useState("");
      
        useEffect(() => {
          const updateTime = () => {
            const now = new Date();
            setTime(
              now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          };
      
          updateTime();
          const interval = setInterval(updateTime, 1000);
      
          return () => clearInterval(interval);
        }, []);
    return (
        <div className="grid-container">

            <div className="left">
                <div class="card-frame">

                    <div class="card">
                        <div className="open-to-work-badge">
                        <TbUserCode /> Open to Work · Software Engineering / QA / Frontend Roles
                        </div>
                        <h1 class="title">Hi <span class="wave">👋</span> </h1>
                        <h2 class="subtitle">I'm Destiny</h2>

                        <div class="tags">
                            <span>Software Engineer</span>
                            <span>Full Stack</span>
                            <span>Automation</span>
                            <span>Testing</span>
                            <span>Design</span>
                            {/* <span>Jenkins</span> */}
                        </div>

                        <p className="description">
                            ✳ Software Engineer who is curious and always exploring new ideas. I’m passionate about building reliable, 
                            consistent software with a focus on sustainability both in technology and in life. Outside of engineering, 
                            I enjoy filmmaking, photography, music, and exploring nature.
                        </p>
                        <p className="description meta">
  <MdOutlineLocationOn /> San Francisco, CA
  <span className="time">{time} PST</span>
</p>

<div className="interests-row">
  <span>🌱 Sustainability</span>
  <span>🎬 Film</span>
  <span>📸 Photography</span>
  <span>🎵 Music</span>
  <span>🌄 Nature</span>
</div>
                        <WebsiteCarbonBadge dark={true} co2="0.12" percentage="89" />

                    </div>

                    {/* <div className="card-shadow"></div> */}
                    <div className="social-row">
                        <Social label="LinkedIn" icon={FaLinkedin} type="linkedin" link={"https://www.linkedin.com/in/destiny-rogers/"}/>
                        <Social label="GitHub" icon={FaGithub} type="github" link={"https://github.com/drogers14"}/>
                        <Social label="Email" icon={MdEmail} type="email" />
                    </div>
                </div>
            </div>
            <div>
                {/* Column 2 */}
                <Image />
            </div>

        </div>
    );
}

export default IntroCard;