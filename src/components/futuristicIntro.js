// FuturisticIntro.js
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  SplitSection,
  TopWrapper,
  AboutColumn,
  CarouselColumn,
  CarouselWrapper,
  Slide,
  SlideBackground,
  Info,
  StyledLink,
  ScrollWrapper,
  MotionSection,
} from "../styles/FuturisticIntroStyles";
import { Link } from "react-router-dom";
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

const FuturisticIntro = forwardRef((props, ref) => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollWrapper ref={scrollRef}>
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
            <CarouselWrapper index={current} projectCount={projects.length}>
              {projects.map((project) => (
                <Slide key={project.id}>
                  <SlideBackground bg={project.image} />
                  <Info>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <StyledLink to={`/projects/${project.id}`}>
                      View Details
                    </StyledLink>
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
          <StyledLink to={`/projects/${project.id}`}>View Details</StyledLink>
        </MotionSection>
      ))}
    </ScrollWrapper>
  );
});

export default FuturisticIntro;
