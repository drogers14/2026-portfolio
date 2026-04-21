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

function Stack() {
    const [glow, setGlow] = useState(true);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          setGlow(false);
        }, 2500); // duration of glow
      
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className="">
            <h2>Technical Skills</h2>
            <p className="skills-focus">
  Primary focus: Frontend engineering & UI systems
</p>
            <p className="skills-hint">
            Interactive breakdown by category (hover to explore skills)
            </p>
            <div className="skills-section">

                <div className="radar-wrapper">

                    <div className={`radar-bg ${glow ? 'glow' : ''}`}>
                        <RadarChart
                            height={400}
                            series={[{ data: [85, 70, 90, 65, 60, 88] }]}
                            radar={{
                                max: 100,
                                metrics: [
                                    'Frontend',
                                    'Backend',
                                    'Testing & QA',
                                    'DevOps & Cloud',
                                    'AI/ML',
                                    'Fundamentals'
                                ],
                            }}
                        />
                    </div>

                    <div className="radar-labels">
                        {categories.map((cat) => (
                            <span
                                key={cat}
                                onMouseEnter={() => setActiveCategory(cat)}
                                onMouseLeave={() => setActiveCategory(null)}
                                className={`radar-label ${cat}`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                </div>

                <div className="skills-content">
                    <Skills activeCategory={activeCategory} />
                </div>

            </div>
        </div>
    );
}

export default Stack;