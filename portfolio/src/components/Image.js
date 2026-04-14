import '../styling/App.scss';
import dedny from '../dither_no_background_2.png'
import dedny1 from '../memoji1.png'
import dedny2 from '../memoji2.png'
import dedny3 from '../memoji3.png'
import dedny4 from '../memoji4.png'
import dedny5 from '../memoji5.png'

import { useRef, useEffect, useState } from 'react';

function useMagneticBackground() {
    const ref = useRef(null);
  
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
  
      const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
  
        el.style.transform = `translate(${x}px, ${y}px)`;
      };
  
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }, []);
  
    return ref;
  }



function Image ({ label, icon: Icon, link, type })
{    
    const blobRef = useMagneticBackground();
    const images = [
        dedny,
        dedny1, 
        dedny2,
        dedny3,
        dedny4,
        dedny5
      ];
      const [index, setIndex] = useState(0);
      const intervalRef = useRef(null);
    
      const startCycle = () => {
        if (intervalRef.current) return;
    
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 400);
    };

    const stopCycle = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIndex(0); // reset (remove if you want to keep last frame)
    };
    return (
<div className="image-container">
  
<div className="svg-bg" ref={blobRef}>
  <svg viewBox="0 0 600 600">
    <path
      d="M421,337Q389,424,301,447Q213,470,153,395Q93,320,121,229Q149,138,244,120Q339,102,403,171Q467,240,421,337Z"
      fill="#00c6ff"
      opacity="0.35"
    />
  </svg>
</div>

  <img
    src={images[index]}
    alt="portrait"
    className="avatar"
    onMouseEnter={startCycle}
    onMouseLeave={stopCycle}
  />
</div>

        // <div style={{marginTop:"40%"}}>
        //     <div className="blob-wrapper">
        //         <div className="blob" ref={blobRef}></div>

        //         <img
        //             src={images[index]}
        //             alt="dedny" 
        //             // width="100%" 
        //             // height="100%" 
        //             className="avatar"
        //             onMouseEnter={startCycle}
        //             onMouseLeave={stopCycle} />
        //     </div>

        // </div>
)
}

export default Image;