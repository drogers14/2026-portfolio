import '../styling/stack.scss';
import { useState } from 'react';
import { RadarChart } from '@mui/x-charts/RadarChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Marquee from "react-fast-marquee";
import { IoMdGitMerge, IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaDocker, FaJenkins, FaTools, FaRobot} from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

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
      {/* <div style={{ display: "flex", gap: "10px", alignItems: "center" }}> */}
      {/* <label className="switch">
  <input
    type="checkbox"
    checked={showRadar}
    onChange={() => setShowRadar(prev => !prev)}
  />
  <span className="slider">
    <span className="label left">Radar</span>
    <span className="label right">Bar</span>
  </span> */}
{/* </label> */}

{/* </div> */}
   {showRadar  ?
    <RadarChart
      height={300}
      series={[{  data: [100, 98, 65, 70, 85, 95] }]}
      radar={{
        max: 120,
        metrics: ['Frontend', 'Testing', 'Backend', 'AI/ML', 'Cloud', 'Debugging & Root Cause Analysis'],
      }}
    />
    :
<div className="skills-chart">
      <BarChart
        height={400}
        layout="horizontal"
        slotProps={{
            bar: {
              style: {
                transition: 'all 0.6s ease',
              },
            },
          }}
        yAxis={[
          {
            scaleType: 'band',
            data: skills.map((s) => s.name),
          },
        ]}
        series={[
          {
            data: skills.map((s) => s.level),
            barLabel: 'value',
          },
        ]}
        margin={{ left: 100 }}
        borderRadius={12}
      />
    </div>}
     {/* <div className="skill-pill">React</div> */}
     <div className="tags">
  <Marquee
    style={{ margin: "20px 0" , padding: "20px"
    }}  // ✅ fixed
    pauseOnHover
    gradient={false} // optional: removes fade edges
    speed={50} // optional: smoother speed
  >
    <span className="tag"><IoLogoJavascript /> Javascript</span>
    <span className="tag"><IoMdGitMerge /> Git</span>
    <span className="tag"><FaDocker /> Docker</span>
    <span className="tag"><FaReact /> React</span>
    <span className="tag"><IoLogoPython /> Python</span>
    <span className="tag"><FaJenkins /> Jenkins</span>
    <span className="tag"><DiGoogleCloudPlatform /> GCP</span>
    <span className="tag"><FaTools /> Playwright</span>
    <span className="tag"><SiCplusplus /> C++</span>
    <span className="tag"><FaRobot /> OpenCV</span>

  </Marquee>
</div>
    </div>
    
  );
}

export default Stack;