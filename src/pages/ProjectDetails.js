// src/pages/ProjectDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 100px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectDetails = () => {
  const { id } = useParams(); // eventually you'll use this to fetch correct project

  return (
    <Wrapper>
      <h1>Project Name (placeholder)</h1>
      <p>Description of the project.</p>
      <p>
        <strong>Tech stack:</strong> HTML, CSS, JavaScript
      </p>
      <p>
        <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
          GitHub Repo
        </a>{" "}
        |{" "}
        <a href="https://netlify.com" target="_blank" rel="noreferrer">
          Live Site
        </a>
      </p>
    </Wrapper>
  );
};

export default ProjectDetails;
