// import React, { useState, useEffect, useCallback } from "react";
// import styled from "styled-components";

// // Styled Components
// const CarouselContainer = styled.div`
//   width: 80%;
//   max-width: 1200px;
//   margin: 0 auto;
//   overflow: hidden;
//   position: relative;
// `;

// const CarouselWrapper = styled.div`
//   display: flex;
//   transition: transform 0.5s ease;
// `;

// const ProjectCard = styled.div`
//   width: 300px;
//   height: 400px;
//   background-color: #f8f9fa;
//   margin: 0 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   text-align: center;
// `;

// const Button = styled.button`
//   border: none;
//   padding: 10px 20px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const ArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
//   transform: translateY(-50%);
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 50%;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.6);
//   }
// `;

// function ProjectCarousel() {
//   const projects = [
//     { id: 1, name: "Project 1", description: "This is project 1" },
//     { id: 2, name: "Project 2", description: "This is project 2" },
//     { id: 3, name: "Project 3", description: "This is project 3" },
//     { id: 4, name: "Project 4", description: "This is project 4" },
//     { id: 5, name: "Project 5", description: "This is project 5" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < projects.length - 1 ? prevIndex + 1 : 0
//     );
//   }, [projects.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : projects.length - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   return (
//     <CarouselContainer>
//       <ArrowButton direction="left" onClick={prevSlide}>
//         {"<"}
//       </ArrowButton>
//       <CarouselWrapper
//         style={{ transform: `translateX(-${currentIndex * 320}px)` }}
//       >
//         {projects.map((project) => (
//           <ProjectCard key={project.id}>
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <Button>View Details</Button>
//           </ProjectCard>
//         ))}
//       </CarouselWrapper>
//       <ArrowButton direction="right" onClick={nextSlide}>
//         {">"}
//       </ArrowButton>
//     </CarouselContainer>
//   );
// }

// export default ProjectCarousel;
