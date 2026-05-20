import React from "react";
import '../styling/App.scss';
import Image from './Image';
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import SignalCard from "./SignalCard";
import Social from '../Social';
import { useEffect, useState } from "react";

const currentSong = {
    title: "Book of Love",
    artist: "The Magnetic Fields"
  };

export default function IntroCard() {

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

    return (
        <>
       <section className="hero">

{/* TOP HERO ROW */}
<div className="hero-top">

    {/* LEFT */}
    <div className="hero-left">

        <div className="open-to-work-badge">
            <TbUserCode />
            Open to Work · Software Engineer | QA Automation
        </div>

        <div className="hero-copy">

            <h1 className="title">
                Hi <span className="wave">👋</span>
            </h1>

            <h2 className="subtitle">
                I'm Destiny Rogers
            </h2>

            <p className="hero-description">
                Software Engineer focused on automation,
reliability, and scalable quality systems.
            </p>
            
        </div>
        <p className="description meta">
                            <MdOutlineLocationOn /> San Francisco, CA
                            <span className="time">{time} PST</span>
                        </p>
                        <div className="tags">
            <span className="tag-pill">
                🧪 QA Explorer
            </span>

            <span className="tag-pill">
                ⚙️ Automater
            </span>

            <span className="tag-pill">
                🧩 Bug Hunter
            </span>

            <span className="tag-pill">
                🎯 Detail-obsessed
            </span>

            <span className="tag-pill">
                ☕ Java fueled
            </span>
        </div>
                        <div className="social-bar">
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

            <Social
                label="Resume"
                type="resume"
                link="/resume.pdf"
            />

                        {/* <div className="sustainability-section">
                            <p className="mini-label">Sustainability impact</p>

                            <WebsiteCarbonBadge dark={false} url="www.destinyrogers.dev" />
                        </div> */}
        </div>

       

        

    </div>

    {/* RIGHT */}
    <div className="hero-right">

        <div className="portrait-system">

            <Image />

            <div className="nw">
                <span className="dot"></span>
                building
            </div>

        </div>

    </div>

</div>

{/* CURRENT SIGNALS */}
<span className="section-label">IN MY ORBIT</span>

<div className="current-signals">

    <SignalCard
        label="CURRENTLY BUILDING"
        title="Playwright Framework"
        subtitle="TypeScript · CI/CD · API Testing"
        emoji="⚙️"
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
        title="San Francisco"
        subtitle="foggy walks + coffee shops"
        emoji="🌁"
        status="RECENT"
    />

</div>

</section>
        </>
    );
}