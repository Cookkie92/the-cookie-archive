portfoliosites
https://cranky-swanson-d2114a.netlify.app/ -- https://github.com/Cookkie92/kristian-koloy-js1-ca
https://incomparable-bavarois-077734.netlify.app/ -- https://github.com/Cookkie92/js-frameworks-ca
https://singular-pony-f812ff.netlify.app/ -- https://github.com/Cookkie92/GoodFoodMood
https://determined-shockley-36c2b8.netlify.app/ -- https://github.com/Cookkie92/SP1
https://candid-marshmallow-290178.netlify.app/ -- https://github.com/Cookkie92/Semester-Project-2 -- bidbois

workclow ca
https://github.com/Cookkie92/workflow-repo-ca

The Cookie Archive

Overview

The Cookie Archive is a personal portfolio website built with React. It showcases my CV, contact information, and more. The project follows a modular structure with reusable components and React Router for navigation.

Tech Stack

React (Frontend Framework)

React Router (Page Navigation)

CSS Modules (Styling)

JavaScript (ES6+)

Node.js & npm (Package Management)

Installation & Setup

To run the project locally, follow these steps:

1. Clone the Repository

git clone https://github.com/your-username/the-cookie-archive.git
cd the-cookie-archive

2. Install Dependencies

npm install

3. Start the Development Server

npm start

This will start the app at http://localhost:3000/.

Project Structure

/the-cookie-archive
│── /public # Static assets
│── /src # Source code
│ │── /components # Reusable UI components (Header, Footer, etc.)
│ │── /pages # Individual pages (Home, CV, Contact)
│ │── /styles # Global and modular CSS files
│ │── App.js # Main app component with routing
│ │── index.js # React entry point
│── package.json # Project dependencies and scripts
│── README.md # Project documentation

Features Implemented

✅ React Router for Navigation (Home, CV, Contact pages)✅ Modular Component-Based Structure✅ Global & Modular CSS Styling✅ Responsive Design with CSS✅ Custom Fonts & Theme Colors

Pages & Components

Pages

/ - Home (Welcome and introduction)

/cv - CV (Resume and experience details)

/contact - Contact (Contact form and details)

Components

Header.js - Navigation bar

Footer.js - Footer with links

App.js - Main layout with routing

Dependencies

These are the main dependencies used in the project:

"dependencies": {
"react": "^18.0.0",
"react-dom": "^18.0.0",
"react-router-dom": "^6.0.0"
}
react-slick slick-carousel
How to Contribute

Fork the repository

Create a new branch (git checkout -b feature-branch)

Make your changes and commit (git commit -m "Added new feature")

Push to your branch (git push origin feature-branch)

Open a pull request

Future Improvements

Add animations and transitions

Improve styling with a UI framework (Tailwind, Styled Components, etc.)

Implement a dark mode toggle

Add backend for form submissions

License

What is Styled Components?
Styled Components is a CSS-in-JS library for React that allows you to write CSS directly inside your JavaScript files. Instead of using separate .css files, you define styles as components.

Why Use Styled Components?
✅ Scoped Styles – Styles apply only to the component, avoiding global conflicts
✅ Dynamic Styling – Pass props to modify styles dynamically
✅ No Class Name Bugs – No need to worry about class name conflicts
✅ Cleaner Code – Styles stay with the components they belong to

How to Set Up Styled Components
Install the package in your project:

sh
Copy
Edit
npm install styled-components
Create a Styled Component Example: A styled button component

js
Copy
Edit
import styled from 'styled-components';

const Button = styled.button`
background: #3498db;
color: white;
border: none;
padding: 10px 20px;
font-size: 16px;
border-radius: 5px;
cursor: pointer;

&:hover {
background: #2980b9;
}
`;

function App() {
return <Button>Click Me</Button>;
}

export default App;
How Styled Components Works
Instead of using class names, you define a styled component (Button).
It automatically generates unique class names and applies the styles.
You can pass props to make styles dynamic:
js
Copy
Edit
const Button = styled.button`  background: ${props => (props.primary ? "#3498db" : "#e74c3c")};
  color: white;`;

function App() {
return <Button primary>Primary Button</Button>;
}
If you pass primary as a prop, it will use #3498db.
If not, it will use #e74c3c.
When to Use Styled Components vs. CSS Files
Use Styled Components if you want component-scoped styles and dynamic styling.
Use CSS files if you prefer traditional styling and want to separate concerns.

Step-by-Step Solution:
Install a Carousel Library (Optional) If you prefer a pre-built solution, libraries like React Slick or Swiper make it easy to implement a carousel.

Example: To install React Slick:

bash
Copy
Edit
npm install react-slick slick-carousel
Then, add the required CSS for slick-carousel:

js
Copy
Edit
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
Create a Custom Carousel with Styled Components

If you want a custom solution, you can create a simple carousel using React and CSS for styling.

Example: Basic Project Card Carousel
Let's go ahead and build a simple project card carousel using React and styled-components.

1. Create Project Card Carousel Component
   js
   Copy
   Edit
   // src/components/ProjectCarousel.js

import React, { useState } from "react";
import styled from "styled-components";

// Styled Components for Carousel
const CarouselContainer = styled.div`  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;`;

const CarouselWrapper = styled.div`  display: flex;
  transition: transform 0.5s ease;`;

const ProjectCard = styled.div`  width: 300px;
  height: 400px;
  background-color: #f8f9fa;
  margin: 0 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;`;

const Button = styled.button`
background-color: #333;
color: white;
border: none;
padding: 10px 20px;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
background-color: #555;
}
`;

const ArrowButton = styled.button`
background-color: rgba(0, 0, 0, 0.3);
color: white;
position: absolute;
top: 50%;
${props => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
transform: translateY(-50%);
border: none;
padding: 10px;
cursor: pointer;
border-radius: 50%;
transition: background-color 0.3s;

&:hover {
background-color: rgba(0, 0, 0, 0.6);
}
`;

function ProjectCarousel() {
const projects = [
{ id: 1, name: "Project 1", description: "This is project 1" },
{ id: 2, name: "Project 2", description: "This is project 2" },
{ id: 3, name: "Project 3", description: "This is project 3" },
{ id: 4, name: "Project 4", description: "This is project 4" },
{ id: 5, name: "Project 5", description: "This is project 5" }
];

const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
if (currentIndex < projects.length - 1) {
setCurrentIndex(currentIndex + 1);
} else {
setCurrentIndex(0); // Loop back to the first project
}
};

const prevSlide = () => {
if (currentIndex > 0) {
setCurrentIndex(currentIndex - 1);
} else {
setCurrentIndex(projects.length - 1); // Loop to the last project
}
};

return (
<CarouselContainer>
<ArrowButton direction="left" onClick={prevSlide}>{"<"}</ArrowButton>
<CarouselWrapper style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
{projects.map(project => (
<ProjectCard key={project.id}>

<h3>{project.name}</h3>
<p>{project.description}</p>
<Button>View Details</Button>
</ProjectCard>
))}
</CarouselWrapper>
<ArrowButton direction="right" onClick={nextSlide}>{">"}</ArrowButton>
</CarouselContainer>
);
}

export default ProjectCarousel; 2. Use the Carousel in Your App
Now that we’ve created the carousel component, let’s use it in your Home.js or any other component where you want to display the portfolio.

js
Copy
Edit
// src/pages/Home.js

import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";

function Home() {
return (

<section>
<h2>Welcome to The Cookie Archive</h2>
<p>Your go-to place for everything about me!</p>

      <h3>My Portfolio</h3>
      <ProjectCarousel />
    </section>

);
}

export default Home;
Explanation:
Carousel Container: The main wrapper for the carousel, using overflow: hidden to hide the content that’s outside the visible area.

Carousel Wrapper: This is the flex container that holds all the project cards. It moves horizontally (translateX) based on the currentIndex.

Project Card: This represents each project in the carousel. It includes a title, description, and a button for more details (you can link this to your project’s actual page or a demo).

Navigation Arrows: The left and right arrow buttons allow the user to navigate through the carousel.

3. Optional: Add Auto-Sliding
   If you want the carousel to automatically slide every few seconds, you can use useEffect and setInterval to change the slide automatically.

js
Copy
Edit
import React, { useState, useEffect } from "react";
// Inside the ProjectCarousel function, add this effect:
useEffect(() => {
const interval = setInterval(() => {
nextSlide();
}, 3000); // Change every 3 seconds

return () => clearInterval(interval); // Cleanup on unmount
}, [currentIndex]);
Conclusion:
This is a simple, custom carousel using React and styled-components.
You can add more features, such as autoplay, pagination, or infinite loop based on your needs.
If you prefer a more feature-rich carousel, consider using a library like React Slick or Swiper, which offer additional functionality out-of-the-box.
Let me know if you need more help or further customization!

the-cookie-archive/
├── public/
│ └── index.html # Main HTML file
├── src/
│ ├── components/
│ │ ├── Header.js # Header component for the site
│ │ ├── ProjectCarousel.js # Carousel for displaying projects
│ │ └── CV.js # CV page with personal and work details
│ ├── App.js # Main component for routing and layout
│ ├── index.js # Entry point for React
│ └── styles/ # Folder for styled components
└── package.json # Project metadata and dependencies
