import { useEffect } from "react";
import './styling/App.scss';

import IntroCard from './components/IntroCard';
import Experience from './components/Experience';
import Education from './components/Education';
import Stack from './components/Stack';
import { Navbar } from './Navbar';


function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15, // triggers when 15% visible
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
      <Navbar />
      <div id="home">
      <IntroCard />
      </div>

      <div id="skills">
      <Stack />
      </div>

      <div id="experience">
      <Experience />
      </div>
      <div id="education">
      <Education  />
      </div>
    </div>
  );
}

export default App;
