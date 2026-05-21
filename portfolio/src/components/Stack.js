import '../styling/stack.scss';
import { useState, useEffect } from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';

import Skills from './Skills.js';
const categories = [
    'frontend',
    'backend',
    'testing',
    'fundamentals',
    'devops',
    'ai'
];
const commands = [
    "> stack --current",
    "> tooling --active",
    "> tests --running",
    "> automation --enabled",
    "> systems --online"
];
function Stack() {
    const [commandIndex, setCommandIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCommandIndex((prev) =>
                (prev + 1) % commands.length
            );
        }, 3500);

        return () => clearInterval(interval);
    }, []);
    const [glow, setGlow] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setGlow(false);
        }, 2500); // duration of glow

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="hero">
            {/* <h1> {'>'} stack --current </h1> */}
            <h1 className="stack-heading">
                {commands[commandIndex]}
                <span className="cursor">_</span>
            </h1>
            <p className="skills-focus">
                {/* Primary focus: Frontend engineering & UI systems */}
            </p>
            <p className="skills-hint">
                {/* Interactive breakdown by category (hover to explore skills) */}
            </p>
            <div className="skills-section">

                
                <div className="skills-content">
                    <Skills activeCategory={activeCategory} />
                </div>

            </div>
        </div>
    );
}

export default Stack;