import { MdComputer, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './styling/social.scss';

const Social = ({ label, icon: Icon, link, type }) => (
    // <a href={link} target="_blank" rel="noopener noreferrer">
<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className={`social-link ${type}`}
>
  <div className="icon">
    <Icon className="social-icon" size={26} />
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
        </textPath>
      </text>
    </svg>
  </div>
</a>

)


export default Social;