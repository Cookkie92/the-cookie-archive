// styles/CVPageStyles.js
import styled, { createGlobalStyle } from "styled-components";

export const PrintStyles = createGlobalStyle`
  @media print {
    html, body {
      height: auto;
      margin: 0;
      padding: 0;
      overflow: visible !important;
      font-size: 10px !important;
      -webkit-print-color-adjust: exact;
    }

    * {
      box-shadow: none !important;
      background: white !important;
      color: black !important;
    }

    button, nav, footer {
      display: none !important;
    }

    #root {
      overflow: visible !important;
    }

    section, div {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  }
`;

export const Container = styled.div`
  background-color: #f7fafc;
  color: #1a202c;
  padding: 3rem 1.5rem;
  min-height: 100vh;

  @media print {
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
  overflow: visible;

  @media print {
    border-radius: 0;
    box-shadow: none;
    padding: 1rem;
  }
`;

export const LogoPage = styled.div`
  display: none;

  @media screen {
    display: none;
  }

  @media print {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    page-break-after: always;
    padding: 0;
  }
`;

export const LogoImage = styled.img`
  max-width: 300px;
  height: auto;
  opacity: 0.95;
  margin-bottom: 20px;
`;

export const PrintButton = styled.button`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || "#2c5282"};
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  text-align: center;
  margin-bottom: 0.25rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

export const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const Company = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;
