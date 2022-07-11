import React, { useEffect, useRef } from "react";
import "../styles/Contact.css";

function Contact(props) {
  const containerRef = useRef();
  const observer = useRef(new IntersectionObserver(props.observerHandler));

  useEffect(() => {
    observer.current.observe(containerRef.current);
  }, []);

  return (
    <section id="contact">
      <h1>Contact Me 📧</h1>
      <div id="contact-container" ref={containerRef}>
        <p>If you would like to contact me, do so with the following email:</p>
        <code>hsingh172000[at]gmail[dot]com</code>
      </div>
    </section>
  );
}

export default Contact;
