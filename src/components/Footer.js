import React from "react";
import styled from "styled-components";

// Styled Components for Footer
const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  text-align: center;
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
        <FooterText>
          &copy; 2025 The Cookie Archive. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
