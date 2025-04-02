import React from "react";
import styled from "styled-components";

// Styled Components for Footer
const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 20px;
  font-size: 14px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 The Cookie Archive. All rights reserved.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
