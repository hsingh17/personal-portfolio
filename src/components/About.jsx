import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import Skills from "../util/Skills";

const DEG_TO_RAD = Math.PI / 180,
  THETA_STEP = 0.05;
function SkillSpinner() {
  const skills = Array.from(Skills);
  const requestRef = useRef();
  const prevRef = useRef();
  let theta = 0;

  const animate = (time) => {
    const spinner = document.getElementById("skills-spinner");
    const widthString = getComputedStyle(spinner).width;
    const R = Number(widthString.substring(0, widthString.indexOf("px"))) / 2;

    // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
    if (prevRef.current !== undefined) {
      const skillImgs = Array.from(spinner.children).slice(1); // Need slice so we get rid of the span
      const N = skillImgs.length;
      const thetaSlices = 360 / N; // Needed for even spacing of imgs

      skillImgs.forEach((e, idx) => {
        if (theta > 360) {
          theta = 0;
        }

        const radTheta = (theta + thetaSlices * idx) * DEG_TO_RAD;
        const x = R * Math.cos(radTheta);
        const y = R * Math.sin(-radTheta);

        e.style.transform = `translate(${x}px, ${y}px)`;
        theta += THETA_STEP;
      });
    }
    requestRef.current = requestAnimationFrame(animate);
    prevRef.current = time;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div id="skills-spinner">
      <span id="hacker-man">👨‍💻</span>
      {skills.map((skill, idx) => {
        return <img key={idx} src={skill.img.default} alt={skill.name} />;
      })}
    </div>
  );
}

function About(props) {
  const containerRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  useEffect(() => {
    observer.current.observe(containerRef.current);
  }, []);

  return (
    <section id="about-me">
      <h1>About Me 😀</h1>
      <div id="about-me-container" ref={containerRef}>
        <div className="hook">
          <p>
            I am a UC Davis Computer Science graduate, and I am currently a 
            Junior Software Developer at Public Consulting Group. Here are some technologies
            I have experience in:
          </p>
        </div>
        {<SkillSpinner />}
      </div>
    </section>
  );
}

export default About;
