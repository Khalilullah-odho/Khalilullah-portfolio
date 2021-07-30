import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Sidebar = ({ isMobile, openMenu }) => {
  return (
    <div className={isMobile ? "side-bar side-bar-active" : "side-bar"}>
      <Link smooth to="#about" onClick={openMenu} className="link-item">
        About
      </Link>

      <Link smooth to="#skills" onClick={openMenu} className="link-item">
        Skills
      </Link>

      <Link smooth to="#projects" onClick={openMenu} className="link-item">
        Projects
      </Link>
      <Link smooth to="#education" onClick={openMenu} className="link-item">
        Education
      </Link>
      <Link smooth to="#certification" onClick={openMenu} className="link-item">
        Certification
      </Link>
      <Link smooth to="#contact" onClick={openMenu} className="link-item">
        Contact
      </Link>
    </div>
  );
};

export default Sidebar;
