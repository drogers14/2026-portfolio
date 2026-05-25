import '../styling/stack.scss';
import { useState, useEffect } from 'react';

import Skills from './Skills.js';

const commands = [
    " stack --current",
    " tooling --active",
    " tests --running",
    " automation --enabled",
    " systems --online"
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

    return (
        <div className="hero">
            <h1 className="stack-heading">
                <span> {'>'} </span>
                <span style={{ color: "#00d4ff" }}>{commands[commandIndex]}</span>
                <span className="cursor">_</span>
            </h1>
            <p className="skills-focus">
                {/* Primary focus: Frontend engineering & UI systems */}
            </p>

            <div className="skills-section">


                <div className="skills-content">
                    <Skills />
                </div>

            </div>
        </div>
    );
}

export default Stack;