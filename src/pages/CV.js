// pages/CV.js
import React from "react";
import logo from "../images/cookielogo3.png";
import {
  PrintStyles,
  Container,
  Card,
  LogoPage,
  LogoImage,
  PrintButton,
  Section,
  SectionHeader,
  Title,
  SubText,
  Paragraph,
  List,
  ListItem,
  ExperienceItem,
  JobTitle,
  Company,
} from "../styles/CVPageStyles";

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

            {/* Add other ExperienceItems the same way */}
          </Section>

          {/* Add other sections like Ferdigheter, Kurs, Annet, Referanser using same structure */}
        </Card>
      </Container>
    </>
  );
}
