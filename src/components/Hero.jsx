import { useEffect, useRef } from "react";
import ResumePDF from "../docs/Harjot_Singh_Resume.pdf";
import EmailSVG from "../img/email.svg";
import GithubSVG from "../img/github.svg";
import ResumeSVG from "../img/resume.svg";
import "../styles/Hero.css";

function Hero(props) {
  const containerRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  useEffect(() => {
    observer.current.observe(containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="hero">
      <h1 id="name">Harjot Singh</h1>
      <h2 id="title">Software Engineer</h2>
      <div id="socials">
        <a href="https://github.com/hsingh17">
          <img src={GithubSVG} alt="github" />
        </a>

        <a href={ResumePDF}>
          <img src={ResumeSVG} alt="resume" />
        </a>

        <a href="mailto: hsingh172000@gmail.com">
          <img src={EmailSVG} alt="email" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
