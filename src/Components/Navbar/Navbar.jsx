import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";

import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    setIsMobile(!isMobile);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav className={isScroll ? "navbar navbar-colored" : "navbar"}>
        <div className="logo">
          <Link smooth to="#home">
            Home
          </Link>
        </div>
        <ul className="menu">
          <Link smooth to="#about" className="link-item">
            About
          </Link>

          <Link smooth to="#skills" className="link-item">
            Skills
          </Link>

          <Link smooth to="#projects" className="link-item">
            Projects
          </Link>

          <Link smooth to="#education" className="link-item">
            Education
          </Link>

          <Link smooth to="#certification" className="link-item">
            Certifications
          </Link>
          <Link smooth to="#contact" className="link-item">
            Contact
          </Link>
        </ul>
        <div className="hamburger">
          {!isMobile ? (
            <MdMenu onClick={openMenu} className="icon" />
          ) : (
            <MdClear onClick={openMenu} className="icon" />
          )}
        </div>
      </nav>

      <Sidebar isMobile={isMobile} openMenu={openMenu} />
    </>
  );
};

export default Navbar;
