import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";
import ProjectsData from "../util/Projects.js";

function ProjectDesc(props) {
  let { data, setVisible } = props;

  return (
    <div className="opaque-wrapper">
      <div className="project-popout">
        <img src={data.image.default} alt={data.title} />
        <div
          className="close-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          <h1>×</h1>
        </div>

        <h3 className="title">{data.title}</h3>

        <h3 className="date">{data.date}</h3>

        <p>{data.description}</p>

        <div className="skills-container">
          {Array.from(data.skills).map((skill, idx) => {
            return (
              <span key={idx} className="skill">
                {skill}
              </span>
            );
          })}
        </div>

        <div className="links-container">
          {Array.from(data.links).map((link, idx) => {
            return (
              <a href={link.url} key={idx}>
                <img src={link.logo.default} alt={link.alt} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProjectTile(props) {
  const tileRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  let { data } = props;
  let [visible, setVisible] = useState(false);

  const handleOpen = (e) => {
    if (e.target.className !== "tile-wrapper") {
      return;
    }
    setVisible(true);
  };

  useEffect(() => {
    observer.current.observe(tileRef.current);
  }, []);

  return (
    <div
      className="tile-wrapper"
      onClick={(e) => {
        handleOpen(e);
      }}
      data-title={data.title}
      ref={tileRef}
    >
      <img className="tile-img" src={data.image.default} alt={data.title} />

      {visible ? <ProjectDesc data={data} setVisible={setVisible} /> : null}
    </div>
  );
}

function Projects(props) {
  return (
    <section id="projects">
      <h1>Recent Projects 🚧</h1>
      <div id="project-tiles">
        {Array.from(ProjectsData).map((project, idx) => {
          return (
            <ProjectTile
              key={idx}
              data={project}
              observerHandler={props.observerHandler}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
