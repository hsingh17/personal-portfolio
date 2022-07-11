import React, { useEffect, useRef } from "react";
import ExperienceData from "../util/Experience";
import "../styles/Experience.css";

const MOBILE_WIDTH = 768;

function JobGrid(props) {
  const { title, company, description, dateStart, dateEnd, img } = props.job;
  const viewClass = props.viewClass;
  const gridRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  useEffect(() => {
    observer.current.observe(gridRef.current);
  }, []);

  return (
    <div className={`job-grid ${viewClass}`} ref={gridRef}>
      <img id="job-img" className={viewClass} src={img.default} alt={company} />
      <div id="bar" className={viewClass}></div>
      <div id="job-company-date" className={viewClass}>
        <span id="job-company" className={viewClass}>
          {company}
        </span>
        <span
          id="job-dates"
          className={viewClass}
        >{`${dateStart}-${dateEnd}`}</span>
      </div>
      <div id="job-title" className={viewClass}>
        {title}
      </div>
      <div id="job-desc" className={viewClass}>
        {description}
      </div>
    </div>
  );
}

function Experience(props) {
  const width = props.width;
  const containerRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));
  let viewClass = width >= MOBILE_WIDTH ? "desktop" : "mobile";

  useEffect(() => {
    observer.current.observe(containerRef.current);
  }, []);

  return (
    <section id="experience" ref={containerRef}>
      <h1>Experience 💼</h1>
      <div id="experience-container">
        {Array.from(ExperienceData).map((job, idx) => {
          return (
            <JobGrid
              key={idx}
              job={job}
              viewClass={viewClass}
              observerHandler={props.observerHandler}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
