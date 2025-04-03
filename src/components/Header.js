import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AnimatedLogo from "../components/AnimatedLogo";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.lightText};
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); // ← new line
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

const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Brand>
          <AnimatedLogo />
          <Title>The Cookie Archive</Title>
        </Brand>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/cv">Cv</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
