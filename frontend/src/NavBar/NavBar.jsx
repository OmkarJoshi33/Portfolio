import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="flex bg-gray-900 justify-evenly fixed top-0 w-full z-50">
      <div className="block text-white p-4 font-semibold text-lg">
        <span>Omkar | Portfolio</span>
      </div>
      <ul className="flex gap-6 text-white p-4 text-lg">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
