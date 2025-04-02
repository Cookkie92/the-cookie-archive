// FuturisticIntro.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

const SplitSection = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;

const TopWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const AboutColumn = styled.div`
  width: 30%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.background};
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
`;

const CarouselColumn = styled.div`
  width: 70%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const CarouselWrapper = styled.div`
  display: flex;
  height: 100%;
  width: ${projects.length * 100}%;
  transform: translateX(${(props) => `-${props.index * 100}%`});
  transition: transform 1s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  z-index: 2;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
`;

const SlideBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  z-index: 0;
`;

const Info = styled.div`
  z-index: 2;
  text-align: left;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px 30px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 10%,
    rgba(0, 0, 0, 0.9) 90%
  );
  border-radius: 12px;
  backdrop-filter: blur(4px);
  margin-bottom: 40px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
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

const ScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
  scroll-padding-top: 80px;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const MotionSection = styled(motion.section)`
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 100px 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bg})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
`;

const FuturisticIntro = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollWrapper>
      <SplitSection>
        <TopWrapper>
          <AboutColumn>
            <h1>Hi, I'm Cookkie92</h1>
            <p>
              I'm a front-end developer with a love for creative, interactive UI
              experiences.
            </p>
          </AboutColumn>
          <CarouselColumn>
            <CarouselWrapper index={current}>
              {projects.map((project) => (
                <Slide key={project.id}>
                  <SlideBackground bg={project.image} />
                  <Info>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <Button as="a" href={`/projects/${project.id}`}>
                      View Details
                    </Button>
                  </Info>
                </Slide>
              ))}
            </CarouselWrapper>
          </CarouselColumn>
        </TopWrapper>
      </SplitSection>

      {projects.map((project) => (
        <MotionSection
          key={project.id}
          bg={project.image}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <Button as="a" href={`/projects/${project.id}`}>
            View Details
          </Button>
        </MotionSection>
      ))}
    </ScrollWrapper>
  );
};

export default FuturisticIntro;
