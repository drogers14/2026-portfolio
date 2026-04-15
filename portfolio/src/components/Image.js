import '../styling/App.scss';
// import dedny from '../dither_no_background_2.png'
import dedny from '../images/SAM_0975.JPG'
import dedny1 from '../memoji1.png'
import dedny2 from '../memoji2.png'
import dedny3 from '../memoji3.png'
import dedny4 from '../memoji4.png'
import dedny5 from '../memoji5.png'

import { useRef, useEffect, useState } from 'react';


function Image({ label, icon: Icon, link, type }) {
    const images = [
        // dedny,
        dedny1,
        dedny2,
        dedny3,
        dedny4,
        dedny5
    ];
    const hoverImage = dedny;

    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);


    useEffect(() => {
        if (hovered) return; // ⛔ stop cycling on hover

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 1400);

        return () => clearInterval(interval);
    }, [hovered, images.length]);
    const currentImage = hovered
        ? hoverImage
        : images[index];


    return (
        <>
            <p className="avatar-hint">Hover me ✨</p>
            <div className="image-container"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={currentImage} alt="profile"
                    className="avatar"
                />
            </div>
        </>
    );
}

export default Image;