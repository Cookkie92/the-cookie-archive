import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./theme";
import styled from "styled-components";

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Container>
          <Header />

          <Routes>
            {/* Render Home FULLSCREEN – no Main wrapper */}
            <Route path="/" element={<Home />} />

            {/* Wrap other pages inside <Main> layout */}
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
