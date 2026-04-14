import { useEffect } from "react";
import './styling/App.scss';

import IntroCard from './components/IntroCard';
import Experience from './components/Experience';
import Education from './components/Education';
import Stack from './components/Stack';
import Projects from "./components/Projects";
import { Navbar } from './Navbar';


function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // ✅ important optimization
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px", // 🔥 makes animation feel earlier
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}

function App() {
  useScrollReveal();

  return (
    <div className="App">
      {/* <div className="top-banner">
  <div className="banner-track">
    <span>🚀 Attending SF Climate Week events</span>
    <span>•</span>
    <span>🚀 Attending SF Climate Week events</span>
    <span>•</span>
    <span>🚀 Attending SF Climate Week events</span>
    <span>•</span>
    <span>🚀 Attending SF Climate Week events</span>
  </div>
</div> */}
      <Navbar />
      <div id="home">
      <IntroCard />
      </div>

      <div id="skills" className="section">
      <Stack />
      </div>

      <div id="experience">
      <Experience />
      </div>
      <div id="education">
      <Education  />
      </div>
      <div id="projects">
      <Projects  />
      </div>
    </div>
  );
}

export default App;
