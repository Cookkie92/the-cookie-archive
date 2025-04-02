import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/cookielogo.png";

// Styled Components
// const HeaderContainer = styled.header`
//   width: 100%;
//   // background-color: ${({ theme }) => theme.colors.text};
//   color: ${({ theme }) => theme.colors.lightText};
//   padding: 20px 0;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1000;
// `;

const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.lightText};
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  font-family: "Roboto Mono", cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.accent}; // Coral hover
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) =>
      theme.colors.primary}; // Clownfish Orange active link
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%; // makes it round
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // subtle drop shadow
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand>
          <LogoImage src={logo} alt="Cookie Squirrel Logo" />
          <Title>The Cookie Archive</Title>
        </Brand>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/cv">My CV</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
