import '../styling/App.scss';
// import TextLoop from "react-text-loop";
import { MdComputer, MdEmail, MdOutlineLocationOn, MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import Social from '../Social';
import Image from './Image';
import { motion } from "framer-motion";

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
                    second: "2-digit",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const tags = document.querySelectorAll(".tags .tag-pill");

        const strength = 18; // lower = stronger movement

        tags.forEach((el) => {
            const handleMove = (e) => {
                const rect = el.getBoundingClientRect();

                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
            };

            const handleLeave = () => {
                el.style.transform = "translate(0, 0)";
            };

            el.addEventListener("mousemove", handleMove);
            el.addEventListener("mouseleave", handleLeave);
        });

        // cleanup
        return () => {
            const tags = document.querySelectorAll(".tags .tag-pill");
            tags.forEach((el) => {
                el.replaceWith(el.cloneNode(true));
            });
        };
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
                        <h2 class="subtitle">I'm Destiny Rogers
                        </h2>

                        <div className="values-strip">
                            <span>Engineering</span>
                            <span className="dot">•</span>
                            <span>Sustainability</span>
                            <span className="dot">•</span>
                            <span>Creativity</span>
                        </div>

                        <div class="tags">
                            <span className="tag-pill">Software Engineer</span>
                            <span className="tag-pill">Full Stack</span>
                            <span className="tag-pill">Automation</span>
                            <span className="tag-pill">Testing</span>
                            <span className="tag-pill">Design</span>
                            { }
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

                   
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-btn"
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MdDownload />
                            <span>Resume</span>
                        </motion.a>
                        <div className="interests-row">
                            <span>🌱 Sustainability</span>
                            <span>🎬 Film</span>
                            <span>📸 Photography</span>
                            <span>🎵 Music</span>
                            <span>🌄 Nature</span>
                        </div>
                        <div className="sustainability-section">
                        <p className="mini-label">Sustainability impact</p>

  <WebsiteCarbonBadge dark={true} url="www.destinyrogers.dev" />
</div>
                    </div>

                    {/* <div className="card-shadow"></div> */}
          
                </div>
            </div>
            <div className="right">
            <Image />

                <div className="social-row-right">
                        <Social label="LinkedIn" icon={FaLinkedin} type="linkedin" link={"https://www.linkedin.com/in/destiny-rogers/"} />
                        <Social label="GitHub" icon={FaGithub} type="github" link={"https://github.com/drogers14"} />
                        <Social label="Email" icon={MdEmail} type="email" />
                    </div>

            </div>

        </div>
    );
}

export default IntroCard;