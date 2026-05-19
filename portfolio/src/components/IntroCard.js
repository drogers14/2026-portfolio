import '../styling/App.scss';
// import TextLoop from "react-text-loop";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import Social from '../Social';
import Image from './Image';
import { motion } from "framer-motion";

import { useEffect, useState } from "react";


function IntroCard() {
    const [time, setTime] = useState("");
    const [isEngineeringHovered, setIsEngineeringHovered] = useState(false);
    const [isFilmHovered, setIsFilmHovered] = useState(false);
    const [isSustainabilityHovered, setIsSustainabilityHovered] = useState(false);

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
                            <TbUserCode /> Open to Work · Software Engineer | QA Automation
                        </div>
                        <h1 class="title">Hi <span class="wave">👋</span> </h1>
                        <h2 class="subtitle">I'm Destiny Rogers
                        </h2>

                        <div className="values-strip">
                            <span>Software Engineer focused on building and testing reliable web systems.</span>

                        </div>

                        <div className="tags">
                            <span className="tag-pill" title="I love breaking things before users do">🧪 QA Explorer</span>
                            <span className="tag-pill">⚙️ Automater</span>
                            <span className="tag-pill">🧩 Bug Hunter</span>
                            <span className="tag-pill">🎯 Detail-obsessed</span>
                            <span className="tag-pill" title="pun intended">☕ Java fueled</span>
                        </div>

                        <p className="description">
                            ✳ I enjoy building systems that make software more reliable, testable, and easier to ship with confidence.
                            I care about clean systems, thoughtful user experience, and building software that stays stable as it scales. Outside of
                            <span className="interactive-word"
                                onMouseEnter={() => setIsEngineeringHovered(true)}
                                onMouseLeave={() => setIsEngineeringHovered(false)}
                            //   style={{ color: isHovered ? 'blue' : 'black', cursor: 'pointer' }}
                            >
                                {isEngineeringHovered ?  "˙✧˖°🛠️ ༘ ⋆｡˚" : " engineering"}
                            </span>
                            , I explore
                            <span className="interactive-word"
                                onMouseEnter={() => setIsFilmHovered(true)}
                                onMouseLeave={() => setIsFilmHovered(false)}
                            >
                                {isFilmHovered ? "˙✧˖°🍿 ༘ ⋆｡˚"  : " filmmaking" }
                            </span>,
                            photography, and creative work inspired by everyday life and 
                            <span className="interactive-word"
                                onMouseEnter={() => setIsSustainabilityHovered(true)}
                                onMouseLeave={() => setIsSustainabilityHovered(false)}
                            >
                                {isSustainabilityHovered ? "˙✧˖°🌱♻️ ༘ 🌏⋆｡˚"  : " sustainability" }
                            </span>.
                        </p>

                        <p className="description meta">
                            <MdOutlineLocationOn /> San Francisco, CA
                            <span className="time">{time} PST</span>
                        </p>

                        <div className="sustainability-section">
                            <p className="mini-label">Sustainability impact</p>

                            <WebsiteCarbonBadge dark={false} url="www.destinyrogers.dev" />
                        </div>
                    </div>

                    {/* <div className="card-shadow"></div> */}

                </div>
            </div>
            <div className="right">
                <div className="portrait-system">
                    <Image />
                    <div className="nw">
      <span className="dot"></span>
      building
    </div>
                    <div className="social-bar">
                        <Social label="LinkedIn" icon={FaLinkedin} type="linkedin" link="https://www.linkedin.com/in/destiny-rogers/" />
                        <Social label="GitHub" icon={FaGithub} type="github" link="https://github.com/drogers14" />
                        <Social label="Email" icon={MdEmail} type="email" link="mailto:destinyrogers725@gmail.com" />
                        <Social
  label="Resume"
  type="resume"
  link="/resume.pdf"
/>
                    </div>

                    <p className="mini-label">Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default IntroCard;