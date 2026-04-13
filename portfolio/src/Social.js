import { MdComputer, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './styling/social.scss';

const Social = ({ label, icon: Icon, link, type }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">

    <div className={`brand ${type}`}>
            <div className="icon">
                <Icon className='social-icon' size={30} style={{ padding: '0px', }} />
            </div>
        <div className="brand-label">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" aria-hidden="true">
                <defs>
                    <path id="a" d="M150 150 m-80 0 a80 80 0 1 1 160 0 a80 80 0 1 1 -160 0" />            </defs>
                <use xlinkHref="#a" fill="none" /><text>
                    <textPath xlinkHref="#a"> {label} &bull; {label} &bull; {label} &bull;</textPath>
                </text>
            </svg>
        </div>
    </div>
    </a>

)


export default Social;