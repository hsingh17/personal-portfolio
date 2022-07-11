import React, { useEffect, useRef } from "react";
import "../styles/Background.css";

const BACKGROUND_CLR = "rgba(24, 32, 48, 0.3)",
  PARTICLE_CLR = "#FFFFFF",
  NUM_PARTICLES = 35,
  PARTICLE_SIZE = 15,
  THETA_STEP = 10,
  DEG_TO_RAD = Math.PI / 180;

function Background(props) {
  const height = props.height;
  const width = props.width;
  const requestRef = useRef();
  const prevRef = useRef();
  const canvasRef = useRef();
  let particles = [];
  let theta = 0;

  const generateRandomParticle = () => {
    return {
      x:
        Math.floor(Math.random() < 0.5 ? -1 : 1) *
        Math.floor(Math.random() * width),
      y: -Math.floor(Math.random() * height),
      v: 7 + Math.random(),
    };
  };

  const generateRandomParticles = (N) => {
    for (let i = 0; i < N; i++) {
      particles.push(generateRandomParticle());
    }
  };

  const animate = (time) => {
    if (prevRef.current !== undefined) {
      drawBackground();
      drawParticles();
      drawOverlay();
    }

    requestRef.current = requestAnimationFrame(animate);
    prevRef.current = time;
  };

  const drawBackground = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = BACKGROUND_CLR;
    ctx.fillRect(0, 0, width, height);
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = PARTICLE_CLR;
    particles.forEach((particle, idx) => {
      // Rotate particle around its center
      ctx.translate(
        particle.x + PARTICLE_SIZE / 2,
        particle.y + PARTICLE_SIZE / 2
      );
      ctx.rotate(-theta * DEG_TO_RAD);
      ctx.translate(
        -(particle.x + PARTICLE_SIZE / 2),
        -(particle.y + PARTICLE_SIZE / 2)
      );

      ctx.fillRect(particle.x, particle.y, PARTICLE_SIZE, PARTICLE_SIZE);

      ctx.resetTransform(); // Reset back to identity matrix for the next particle

      if (particle.x > width || particle.y > height) {
        // Reset this particle to new location
        particles[idx] = generateRandomParticle();
      } else {
        // Update particle position
        particle.x += particle.v;
        particle.y += particle.v;
      }
    });

    theta += THETA_STEP;
    if (theta > 360) {
      theta = 0;
    }
  };

  const drawOverlay = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(24, 32, 48, 0.6)";
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    generateRandomParticles(NUM_PARTICLES);
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [height, width]);

  return (
    <canvas ref={canvasRef} width={width} height={height} id="background" />
  );
}

export default Background;
