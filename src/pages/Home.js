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
