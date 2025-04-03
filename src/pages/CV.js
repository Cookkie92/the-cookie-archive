// pages/CV.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../images/cookielogo3.png";

const PrintStyles = createGlobalStyle`
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

const Container = styled.div`
  background-color: #f7fafc;
  color: #1a202c;
  padding: 3rem 1.5rem;
  min-height: 100vh;

  @media print {
    padding: 0.5rem;
  }
`;

const Card = styled.div`
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

const LogoPage = styled.div`
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

const LogoImage = styled.img`
  max-width: 300px;
  height: auto;
  opacity: 0.95;
  margin-bottom: 20px;
`;

const PrintButton = styled.button`
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary || "#2c5282"};
  border-bottom: 2px solid #edf2f7;
  padding-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  text-align: center;
  margin-bottom: 0.25rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Company = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

export default function CV() {
  return (
    <>
      <PrintStyles />
      <Container>
        <Card>
          <LogoPage className="print-only">
            <LogoImage src={logo} alt="Logo" />
          </LogoPage>

          <PrintButton onClick={() => window.print()}>
            Skriv ut / Lagre som PDF
          </PrintButton>

          <Section>
            <Title>Kristian Koløy</Title>
            <SubText>
              Service Elektroniker / IT / ATM tekniker / IT Konsulent / Junior
              Front-end utvikler
            </SubText>
            <SubText>
              Austmannaveien 5B, 5537 Haugesund | +47 45864965 |
              Kristiankoloy92@hotmail.no
            </SubText>
          </Section>

          <Section>
            <SectionHeader>Nøkkelkvalifikasjoner</SectionHeader>
            <Paragraph>
              Jeg er en selvmotivert og entusiastisk arbeidstaker med variert
              erfaring fra ulike fagområder.
            </Paragraph>
          </Section>

          <Section>
            <SectionHeader>Utdannelse</SectionHeader>
            <Paragraph>
              <strong>Front-end Utvikling, Noroff nettstudier</strong> – 2020 –
              2024
            </Paragraph>
            <Paragraph>
              <strong>IKT VG2, AOF Haugaland</strong> – 2017 - 2018
            </Paragraph>
            <Paragraph>
              <strong>
                VG2 Teknikk og Industriell Produksjon, Karmsund VGS
              </strong>{" "}
              – 2010 - 2011
            </Paragraph>
            <Paragraph>
              <strong>VG1 TIP, Skoleskipet Gann</strong> – 2009 - 2010
            </Paragraph>
          </Section>

          <Section>
            <SectionHeader>Arbeidserfaring</SectionHeader>

            <ExperienceItem>
              <JobTitle>IT-Koordinator/Driftstekniker</JobTitle>
              <Company>Seam AS (2024 – Dags dato)</Company>
              <List>
                <ListItem>
                  IT-drift og koordinering mellom SEAM AS og eksterne
                  leverandører
                </ListItem>
                <ListItem>
                  Oppfølging av software-leverandører og administrasjon av
                  skybaserte løsninger
                </ListItem>
                <ListItem>Brukerstøtte og opplæring, dokumentasjon</ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>ATM/IT-Tekniker</JobTitle>
              <Company>Infocare (2022 – 2023)</Company>
              <List>
                <ListItem>
                  Feilsøking, reparasjon og vedlikehold av minibanker
                </ListItem>
                <ListItem>Opplæring som Printer tekniker</ListItem>
                <ListItem>
                  Feilsøking av Samsung/Phillips TV og PC skjermer
                </ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>IT-Tekniker (prosjektansatt)</JobTitle>
              <Company>Infocare (2020 - 2022)</Company>
              <List>
                <ListItem>
                  PC-reparasjon, service for Norsk Tipping, Coop, Apotek
                  Systemer og Norsk Rikstoto
                </ListItem>
                <ListItem>
                  Installasjon og service av kasse-systemer og nettverksutstyr
                </ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>IKT-Lærling</JobTitle>
              <Company>Risa AS (2019 - 2020)</Company>
              <List>
                <ListItem>
                  Første linje support for 500+ ansatte, arbeidet med Azure
                  Intune og Office-pakken
                </ListItem>
                <ListItem>
                  Hjelpe ansatte med tekniske problemer og dokumentasjon
                </ListItem>
              </List>
            </ExperienceItem>
          </Section>

          <Section>
            <SectionHeader>Ferdigheter</SectionHeader>
            <List>
              <ListItem>Kundeservice</ListItem>
              <ListItem>Samarbeid og teamarbeid</ListItem>
              <ListItem>Kommunikasjonsevner</ListItem>
              <ListItem>Azure Intune</ListItem>
              <ListItem>Azure Active Directory</ListItem>
              <ListItem>Microsoft Office</ListItem>
              <ListItem>Sharepoint</ListItem>
              <ListItem>Windows</ListItem>
              <ListItem>HTML, CSS, SCSS, Javascript</ListItem>
              <ListItem>Photoshop</ListItem>
              <ListItem>Adobe XD</ListItem>
              <ListItem>Dell, Lenovo, HP Pc-er</ListItem>
              <ListItem>
                Teknisk feilsøking på forskjellige teknologier
              </ListItem>
              <ListItem>IT-Support</ListItem>
              <ListItem>Oppsett av nettverksutstyr</ListItem>
              <ListItem>IT-Systemer</ListItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>Relevante Kurs og Sertifikater</SectionHeader>
            <List>
              <ListItem>Førerkort klasse B</ListItem>
              <ListItem>Fallsikring, Westcon (September 2012)</ListItem>
              <ListItem>RiggerKurs, Westcon (September 2012)</ListItem>
              <ListItem>
                Løfteberedskap G11 Bro-og Traverskran G4, Aibel (September 2012)
              </ListItem>
              <ListItem>
                Offshore Kurs, ResQ (August 2013 — August 2017)
              </ListItem>
              <ListItem>
                IKT-Servicefaget Fagbrev, Risa AS (August 2020)
              </ListItem>
              <ListItem>Dell Certified Technician (November 2020)</ListItem>
              <ListItem>HP PC Certified Technician (November 2020)</ListItem>
              <ListItem>HP Print Certified Technician (November 2020)</ListItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>Annet</SectionHeader>
            <h3>Språk</h3>
            <List>
              <ListItem>Norsk, flytende skriftlig og muntlig</ListItem>
              <ListItem>Engelsk, flytende skriftlig og muntlig</ListItem>
            </List>

            <h3>Interesser</h3>
            <List>
              <ListItem>Snowboard</ListItem>
              <ListItem>Gaming</ListItem>
              <ListItem>Web-utvikling</ListItem>
              <ListItem>Finne på ting med familie</ListItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>Referanser</SectionHeader>
            <List>
              <ListItem>
                Anders Kornelius Johnsen, Risa AS
                <br />
                johnsenanderskornelius@gmail.com · 90910207
              </ListItem>
              <ListItem>
                Kjetil Henriksen, Aibel AS
                <br />
                45637851
              </ListItem>
              <ListItem>
                Huseyin Keceli Øzdemir, STS Gruppen AS
                <br />
                +456015228
              </ListItem>
              <ListItem>
                Helge Grannes, Teamleader avd Haugesund Infocare AS
                <br />
                helge.grannes@infocare.com · 91898078
              </ListItem>
            </List>
          </Section>
        </Card>
      </Container>
    </>
  );
}
