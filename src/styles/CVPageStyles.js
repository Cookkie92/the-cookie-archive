// styles/CVPageStyles.js
import styled, { createGlobalStyle } from "styled-components";

export const PrintStyles = createGlobalStyle`
  @media print {
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      height: auto !important;
      overflow: visible !important;
      font-size: 10px !important;
      -webkit-print-color-adjust: exact !important;
    }

    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
    }

    #root, section, div, img, h1, h2, h3, p, ul, li {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    nav, footer, header, button, .non-printable {
      display: none !important;
    }

    @page {
      margin: 1cm;
    }
  }
`;

export const Container = styled.div`
  background-color: #f9fafb;
  color: #1a202c;
  padding: 4rem 2rem;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media print {
    padding: 1rem;
    background: white;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  max-width: 960px;
  margin: 0 auto;
  overflow: visible;
  border: 1px solid #e2e8f0;

  @media print {
    border-radius: 0;
    box-shadow: none;
    padding: 1rem;
    border: none;
  }
`;

export const LogoPage = styled.div`
  display: none;

  @media print {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 2rem;
    page-break-after: always;
  }
`;

export const LogoImage = styled.img`
  max-width: 320px;
  height: auto;
  opacity: 0.95;
  margin-bottom: 20px;
`;

export const PrintButton = styled.button`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary || "#2b6cb0"};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  margin-bottom: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent || "#2c5282"};
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
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  text-align: center;
  margin-bottom: 0.3rem;
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.75rem;
  margin-top: 0.5rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 2.5rem;
`;

export const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #2d3748;
`;

export const Company = styled.p`
  font-style: italic;
  color: #4a5568;
  margin-bottom: 0.5rem;
`;
