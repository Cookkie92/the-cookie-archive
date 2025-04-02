import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components for Header
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
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

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #f8f9fa;
  }

  &.active {
    font-weight: bold;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>The Cookie Archive</Title>
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
