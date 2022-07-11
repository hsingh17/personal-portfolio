import React, { useEffect, useRef } from "react";
import "../styles/Education.css";
import DavisSVG from "../img/ucd.svg";

function Education(props) {
  const containerRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  useEffect(() => {
    observer.current.observe(containerRef.current);
  }, []);

  return (
    <section id="education">
      <h1>Education 🎓</h1>
      <div id="education-container" ref={containerRef}>
        <div id="ucd-logo">
          <img src={DavisSVG} alt="UCD Logo" />
        </div>

        <div id="education-info">
          <h2 id="uni-name">University of California, Davis</h2>
          <h3 id="time-spent">September 2018 - June 2022</h3>
          <h3 id="major">Bachelor of Science, Computer Science</h3>
        </div>
      </div>
    </section>
  );
}

export default Education;
