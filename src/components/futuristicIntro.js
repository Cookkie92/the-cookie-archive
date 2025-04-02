// FuturisticIntro.js

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "Immersive WebGL Experience",
    image: project1,
  },
  {
    id: 2,
    name: "Project Beta",
    description: "AI-powered Productivity App",
    image: project2,
  },
  {
    id: 3,
    name: "Project Gamma",
    description: "Next-gen Portfolio",
    image: project3,
  },
];

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  scroll-padding-top: 80px;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const FullscreenSlide = styled.div`
  height: calc(100vh - 80px); // ← 80px = header height
  margin-top: 80px; // ← push each slide down visually
  width: 100%;
  scroll-snap-align: start;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 40px;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Info = styled.div`
  z-index: 2;
  color: #fff;
  text-align: right;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FuturisticIntro = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <Wrapper>
      {/* Auto-changing fullscreen carousel at the top */}
      <FullscreenSlide bg={projects[current].image}>
        <Overlay />
        <Info>
          <h1>{projects[current].name}</h1>
          <p>{projects[current].description}</p>
          <Button>View Details</Button>
        </Info>
      </FullscreenSlide>

      {/* Scroll sections */}
      {projects.map((project) => (
        <FullscreenSlide key={project.id} bg={project.image}>
          <Overlay />
          <Info>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Button>View Details</Button>
          </Info>
        </FullscreenSlide>
      ))}
    </Wrapper>
  );
};

export default FuturisticIntro;
