import '../styling/App.scss';
// import dedny from '../dither_no_background_2.png'
import dedny from '../images/SAM_0975.JPG'
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



function Image({ label, icon: Icon, link, type }) {
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const speed = hovered ? 180 : 1400;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, speed);

        return () => clearInterval(interval);
    }, [hovered]);

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
        <>
            <p className="avatar-hint">Hover me ✨</p>
            <div className="image-container">
                <img
                    src={images[index]}
                    className="avatar"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
        </>
    );
}

export default Image;