// Header.js
import React from "react";
import AnimatedLogo from "../components/AnimatedLogo";
import {
  HeaderContainer,
  HeaderContent,
  Brand,
  Title,
  Nav,
  StyledLink,
} from "../styles/HeaderStyles";

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
