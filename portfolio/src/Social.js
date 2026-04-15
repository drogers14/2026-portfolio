import { MdDescription, MdEmail, MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './styling/social.scss';

const ICONS = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: MdEmail,
    resume: MdDownload,
  };

const Social = ({ label, link, type }) => {
    const Icon = ICONS[type];
  
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${type}`}
      >
        <div className="icon">
          <Icon className="social-icon" size={28} />
        </div>
  
        <div className="brand-label">
          <svg viewBox="0 0 300 300">
            <defs>
              <path
                id={`circlePath-${type}`}
                d="M150,150 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
              />
            </defs>
  
            <text>
              <textPath href={`#circlePath-${type}`}>
                {label} • {label} • {label} • 
                {label} • {label} • {label} • {label} •
              </textPath>
            </text>
          </svg>
        </div>
      </a>
    );
  };


export default Social;