import { NavLink } from "react-router";
import './App.css';

export function Navbar() {
  return (
    <nav>
      <NavLink to="/" >
     {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {isActive ? "👉" : ""} Home
        </span>
      )}
      </NavLink>

      <NavLink to="/experience" end>
      {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {isActive ? "👉" : ""} Experience
        </span>
      )}
      </NavLink>

      <NavLink to="/education" end>
      {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {isActive ? "👉" : ""} Education
          </span>
      )}
      </NavLink>

      <NavLink to="/stack" end> {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {isActive ? "👉" : ""} Tech Stack
        </span>
      )}</NavLink>

      <NavLink to="/contact-me"> {({ isActive }) => (
        <span className={isActive ? "active" : ""}>
          {isActive ? "👉" : ""} Contact
        </span>
      )}</NavLink>
    </nav>
  );
}