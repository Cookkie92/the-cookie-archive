// FuturisticIntro.js
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "Immersive WebGL Experience",
    image: "/images/project1.PNG",
  },
  {
    id: 2,
    name: "Project Beta",
    description: "AI-powered Productivity App",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    name: "Project Gamma",
    description: "Next-gen Portfolio",
    image: "/images/project3.jpg",
  },
];

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const FullscreenSlide = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
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
