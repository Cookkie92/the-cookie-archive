import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./theme";
import styled from "styled-components";
import ProjectDetails from "./pages/ProjectDetails";
import FuturisticIntro from "./components/futuristicIntro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

const Main = styled.main`
  flex: 1;
  width: 80%;
  max-width: 1200px;
  margin: 100px auto 20px auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

function App() {
  const introRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Container>
          <Header scrollToTop={() => introRef.current?.scrollToTop()} />

          <Routes>
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/" element={<FuturisticIntro ref={introRef} />} />
            <Route
              path="/cv"
              element={
                <Main>
                  <CV />
                </Main>
              }
            />
            <Route
              path="/contact"
              element={
                <Main>
                  <Contact />
                </Main>
              }
            />
          </Routes>

          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
