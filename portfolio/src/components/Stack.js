import '../styling/stack.scss';
import { useState } from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';

import Skills from './Skills.js';
const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Cypress', level: 80 },
    { name: 'Selenium', level: 75 },
    { name: 'Postman', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'Python', level: 65 },
    { name: 'Git', level: 90 },
];

function Stack() {
    const [showRadar, setShowRadar] = useState(true);
    return (
        <div className="">
            <h2>Technical Skills</h2>


            <div className="skills-section">
  
  <div className="radar-bg">
    <RadarChart
      height={400}
      series={[{ data: [100, 98, 65, 70, 85, 95] }]}
      sx={{
        opacity: 0.8,
        "& .MuiChartsRadarArea": {
          fill: "rgba(16, 185, 129, 0.2)",
        },
        "& .MuiChartsRadarLine": {
          stroke: "#3B82F6",
        }
      }}
      radar={{
        max: 100,
        metrics: [
          'Frontend',
          'Testing',
          'Backend',
          'AI/ML',
          'CI/CD',
          'Debugging and Root cause analysis'
        ],
      }}
    />
  </div>

  <div className="skills-content">
    <Skills />
  </div>

</div>
        </div>

    );
}

export default Stack;