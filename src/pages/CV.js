// pages/CV.js
import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f7fafc;
  color: #1a202c;
  padding: 3rem 1.5rem;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

export default function CV() {
  return (
    <div>
      <Header />
      <Container>
        <Card>
          {/* Personal Header Section */}
          <Section>
            <Title>Kristian Koløy</Title>
            <Paragraph>
              Service Elektroniker / IT / ATM tekniker / IT Konsulent / Junior
              Front-end utvikler
            </Paragraph>
            <Paragraph>
              Austmannaveien 5B, 5537 Haugesund | +47 45864965 |
              Kristiankoloy92@hotmail.no
            </Paragraph>
          </Section>

          <Section>
            <Title>Curriculum Vitae</Title>
          </Section>

          {/* Nøkkelkvalifikasjoner Section */}
          <Section>
            <SubTitle>Nøkkelkvalifikasjoner</SubTitle>
            <Paragraph>
              Jeg er en selvmotivert og entusiastisk arbeidstaker med variert
              erfaring fra ulike fagområder...
            </Paragraph>
          </Section>

          {/* Education Section */}
          <Section>
            <SubTitle>Utdannelse</SubTitle>
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

          {/* Work Experience Section */}
          <Section>
            <SubTitle>Arbeidserfaring</SubTitle>

            {/* Seam AS */}
            <div className="mb-6">
              <p className="font-semibold">
                IT-Koordinator/Driftstekniker, Seam AS (2024 – Dags dato)
              </p>
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
            </div>

            {/* Infocare (ATM/IT-Tekniker) */}
            <div className="mb-6">
              <p className="font-semibold">
                ATM/IT-Tekniker, Infocare (2022 – 2023)
              </p>
              <List>
                <ListItem>
                  Feilsøking, reparasjon og vedlikehold av minibanker
                </ListItem>
                <ListItem>Opplæring som Printer tekniker</ListItem>
                <ListItem>
                  Feilsøking av Samsung/Phillips TV og PC skjermer
                </ListItem>
              </List>
            </div>

            {/* Infocare (IT-Tekniker) */}
            <div className="mb-6">
              <p className="font-semibold">
                IT-Tekniker (prosjektansatt), Infocare (2020 - 2022)
              </p>
              <List>
                <ListItem>
                  PC-reparasjon, service for Norsk Tipping, Coop, Apotek
                  Systemer og Norsk Rikstoto
                </ListItem>
                <ListItem>
                  Installasjon og service av kasse-systemer og nettverksutstyr
                </ListItem>
              </List>
            </div>

            {/* Risa AS */}
            <div className="mb-6">
              <p className="font-semibold">
                IKT-Lærling, Risa AS (2019 - 2020)
              </p>
              <List>
                <ListItem>
                  Første linje support for 500+ ansatte, arbeidet med Azure
                  Intune og Office-pakken
                </ListItem>
                <ListItem>
                  Hjelpe ansatte med tekniske problemer og dokumentasjon
                </ListItem>
              </List>
            </div>
          </Section>

          {/* Skills Section */}
          <Section>
            <SubTitle>Ferdigheter</SubTitle>
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

          {/* Relevant Courses & Certifications Section */}
          <Section>
            <SubTitle>Relevante Kurs og Sertifikater</SubTitle>
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

          {/* Other Information Section */}
          <Section>
            <SubTitle>Annet</SubTitle>
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

          {/* References Section */}
          <Section>
            <SubTitle>Referanser</SubTitle>
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
    </div>
  );
}
