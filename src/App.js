import Navbar from "./components/Navbar.jsx";
import Background from "./components/Background.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function observerHandler(entries, observer) {
  entries.forEach((entry) => {
    const { isIntersecting } = entry;
    if (isIntersecting) {
      entry.target.style.opacity = "1";
      if (entry.target.className !== "tile-wrapper") {
        entry.target.style.transform = "translateY(0px)";
      }
      observer.disconnect();
    }
  });
}

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize); }
  }, []);

  return (
    <div className="App">
      <Background height={height} width={width}/>
      <Navbar height={height} width={width} />
      <Hero observerHandler={observerHandler} />
      <About observerHandler={observerHandler} />
      <Projects observerHandler={observerHandler} />
      <Education observerHandler={observerHandler} />
      <Experience width={width} observerHandler={observerHandler} />
      <Contact observerHandler={observerHandler} />
    </div>
  );
}

export default App;
