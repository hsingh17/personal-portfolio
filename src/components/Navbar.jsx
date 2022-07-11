import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Monogram from "../img/monogram.svg";

const MOBILE_WIDTH = 930,
  HIDE = "hide",
  SHOW = "show",
  STICKY = "sticky-nav",
  OPEN_HEIGHT = "clamp(100px, 20vh, 400px)",
  CLOSE_HEIGHT = "0px";

function Navbar(props) {
  const height = props.height;
  const width = props.width;
  let desktopClass = width <= MOBILE_WIDTH ? HIDE : SHOW;
  let mobileClass = width <= MOBILE_WIDTH ? SHOW : HIDE;
  let [sticky, setSticky] = useState("");

  const handleScroll = () => {
    setSticky(window.scrollY >= height ? STICKY : "");
  };

  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    const open = menu.style.height === OPEN_HEIGHT;
    menu.style.height = open ? CLOSE_HEIGHT : OPEN_HEIGHT;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Close the menu if it was previously open and we're in desktop mode
    const menu = document.getElementById("menu");
    if (width > MOBILE_WIDTH && menu.style.height === OPEN_HEIGHT) {
      toggleMenu();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [width, height]);

  return (
    <div>
      <nav className={sticky}>
        <a href="#hero">
          <img id="monogram" src={Monogram} alt="monogram" />
        </a>

        <a href="#about-me" className={desktopClass}>
          About Me
        </a>

        <a href="#projects" className={desktopClass}>
          Projects
        </a>

        <a href="#education" className={desktopClass}>
          Education
        </a>

        <a href="#experience" className={desktopClass}>
          Experience
        </a>

        <a href="#contact" className={desktopClass}>
          Contact
        </a>

        <a
          id="menu-button"
          className={mobileClass}
          onClick={() => {
            toggleMenu();
          }}
        >
          ☰
        </a>

        <div id="menu">
          <a
            href="#about-me"
            onClick={() => {
              toggleMenu();
            }}
          >
            About Me
          </a>
          <a
            href="#projects"
            onClick={() => {
              toggleMenu();
            }}
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={() => {
              toggleMenu();
            }}
          >
            Education
          </a>
          <a
            href="#experience"
            onClick={() => {
              toggleMenu();
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => {
              toggleMenu();
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
