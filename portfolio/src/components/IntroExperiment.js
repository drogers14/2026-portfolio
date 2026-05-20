import React from "react";
import '../styling/App.scss';

import Image from './Image';
import SignalCard from "./SignalCard";
import Social from '../Social';
// import EyesGraphic from '../images/eyes.png'
import Eyes from './Eyes';
import { useEffect, useState } from "react";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";

export default function IntroCard() {

    const currentSong = {
        title: "A Forest",
        artist: "The Cure"
    };

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
        const handleMove = (e) => {
            const eyes = document.querySelectorAll(".pupil");

            eyes.forEach((eye) => {
                const rect = eye.parentElement.getBoundingClientRect();

                const eyeX = rect.left + rect.width / 2;
                const eyeY = rect.top + rect.height / 2;

                const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

                const maxX = 14;
                const maxY = 18;

                const x = Math.cos(angle) * maxX;
                const y = Math.sin(angle) * maxY;


                eye.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);
    const [latestCommit, setLatestCommit] = useState(null);

useEffect(() => {
  fetch("https://api.github.com/repos/drogers14/playwright-automation-framework/commits")
    .then((res) => res.json())
    .then((data) => {
      setLatestCommit(data[0]);
    });
}, []);
    return (

        <section className="hero">

            {/* NAV SPACING */}
            {/* <div className="hero-spacer"></div> */}

            {/* HERO CENTER */}
            <div className="hero-center-layout">


                <div className="hero-portrait-row">

                    {/* LEFT */}
                    <div className="hero-meta-side">

                        {/* SOCIALS */}
                        {/* OPEN TO WORK */}
                        <div className="open-to-work-badge">
                            <TbUserCode />
                            Open to Work
                            {/* · Software Engineer | QA Automation */}
                        </div>
                        <p className="mini-label">Connect with me</p>

                        <div className="social-bar centered">

                            <Social
                                label="LinkedIn"
                                icon={FaLinkedin}
                                type="linkedin"
                                link="https://www.linkedin.com/in/destiny-rogers/"
                            />

                            <Social
                                label="GitHub"
                                icon={FaGithub}
                                type="github"
                                link="https://github.com/drogers14"
                            />

                            <Social
                                label="Email"
                                icon={MdEmail}
                                type="email"
                                link="mailto:destinyrogers725@gmail.com"
                            />

                        </div>


                    </div>

                    {/* CENTER */}
                    <div className="portrait-system">
                        <div className="hero-heading">
                            <span className="hero-marquee">Software Engineer in Test · QA Automation · Developer Tooling</span>
                            <h1 className="title">
                                <span className="first-name">Destiny</span> Rogers
                                {/* <span className="eyes-wrapper"> */}
                                {/* <Eyes className="eyes-base" />

                                    <div className="pupil left"></div>
                                    <div className="pupil right"></div>
                                </span>  */}

                            </h1>

                            <h2 className="subtitle">
                                {/* Software Engineer in Test */}
                            </h2>
                            {/* <span className="wave">👋</span> */}
                        </div>

                        <Image />

                        <div className="nw">
                            <span className="dot"></span>
                            building
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="hero-summary">

                        <p>
                            {/* <span style={{fontWeight: "700"}}>Software Engineer in Test</span>  */}
                            Building <span className="highlighter">reliable</span> automation systems through
                            automation engineering, <span className="highlighter">CI/CD</span> workflows,
                            <span className="highlighter">scalable testing</span>, and  <span className="highlighter">quality-focused</span> tooling.
                            Outside of engineering, I enjoy photography, filmmaking, and exploring thoughtful digital experiences.
                        </p>
                        {/* TAGS */}
                        <div className="tags centered">

                            <span className="tag-pill">
                                🧪 QA Explorer
                            </span>

                            <span className="tag-pill">
                                ⚙️ Automater
                            </span>

                            <span className="tag-pill">
                                🧩 Bug Hunter
                            </span>

                            {/* <span className="tag-pill">
                                ☕ Java fueled
                            </span> */}

                        </div>
                        <p className="description meta">
                            <MdOutlineLocationOn />
                            San Francisco, CA
                            <span className="time">
                                {time} PST
                            </span>
                        </p>


                    </div>

                </div>



            </div>

            {/* ORBIT SECTION */}
            <div className="orbit-section">

                <div className="orbit-header">
                    <p className="section-label">
                        IN MY ORBIT
                    </p>
                </div>

                <div className="current-signals">

                    <SignalCard
                        label="CURRENTLY BUILDING"
                        title="Playwright Framework"
                        subtitle={latestCommit?.commit.message}
                        emoji={<a href="https://github.com/drogers14/playwright-automation-framework"
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                        >⚙️</a>}
                        status="LIVE"
                    />

                    <SignalCard
                        label="CURRENTLY LISTENING"
                        title={currentSong.title}
                        subtitle={currentSong.artist}
                        emoji="🎵"
                        status="NOW PLAYING"
                    />

                    <SignalCard
                        label="RECENTLY EXPLORED"
                        title="Golden Gate Park"
                        subtitle="foggy walks + coffee shops"
                        emoji="🌁"
                        status="RECENT"

                    />
                    <SignalCard
                        label=""
                        title={<span className="carbon-badge"><WebsiteCarbonBadge dark={false} url="www.destinyrogers.dev" /></span>}
                        subtitle="optimized for performance + sustainability"
                        emoji="♻️"
                        status="SUSTAINABILITY IMPACT"

                    />
                </div>

            </div>

        </section>

    );
}