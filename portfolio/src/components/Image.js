import '../styling/App.scss';
import dedny from '../dither_no_background_2.png'
import dedny1 from '../memoji1.png'
import dedny2 from '../memoji2.png'
import dedny3 from '../memoji3.png'
import dedny4 from '../memoji4.png'
import dedny5 from '../memoji5.png'

import { useRef, useEffect, useState } from 'react';

function useBlobFollow() {
    const ref = useRef(null);
  
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
  
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
  
        el.style.transform = `translate(${x}px, ${y}px)`;
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return ref;
  }



function Image ({ label, icon: Icon, link, type })
{    
    const blobRef = useBlobFollow();
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

        <div style={{marginTop:"40%"}}>
            <div className="blob-wrapper">
                <div className="blob" ref={blobRef}></div>

                <img
                    src={images[index]}
                    alt="dedny" 
                    // width="100%" 
                    // height="100%" 
                    className="avatar"
                    onMouseEnter={startCycle}
                    onMouseLeave={stopCycle} />
            </div>

        </div>
)
}

export default Image;