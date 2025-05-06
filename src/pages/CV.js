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
              IT-Koordinator / Driftstekniker / ATM-Tekniker / Frontend-utvikler
            </SubText>
            <SubText>
              Austmannaveien 5B, 5537 Haugesund | +47 45864965 |
              Kristiankoloy92@hotmail.no
            </SubText>
          </Section>

          <Section>
            <SectionHeader>Nøkkelkvalifikasjoner</SectionHeader>
            <Paragraph>
              Teknologidrevet og løsningsorientert IT-profesjonell med bred
              erfaring innen IT-støtte, systemdrift, og frontend-utvikling.
              Dyktig i selvstendig problemløsning, prosjektledelse, og teknisk
              dokumentasjon. God på kundebehandling, teamarbeid og har en sterk
              interesse for kontinuerlig læring og faglig utvikling. Har
              erfaring med både drift av lokale nettverk og skybaserte tjenester
              som Microsoft Azure og Microsoft 365. Har også utviklet og
              vedlikeholdt interne digitale løsninger som informasjons-skjermer
              og porteføljenettsteder.
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
                  Koordinering mellom selskap og eksterne IT-leverandører
                </ListItem>
                <ListItem>
                  Administrasjon av software og skyløsninger (Azure, M365)
                </ListItem>
                <ListItem>Prosjektarbeid og sikkerhetsadministrasjon</ListItem>
                <ListItem>
                  Brukerstøtte, opplæring og teknisk dokumentasjon
                </ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>ATM/IT-Tekniker</JobTitle>
              <Company>Infocare (2022 – 2023)</Company>
              <List>
                <ListItem>Feilsøking og vedlikehold av minibanker</ListItem>
                <ListItem>
                  Skjermreparasjon og arbeid med printere og TV/PC-utstyr
                </ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>IT-Tekniker (Prosjekt)</JobTitle>
              <Company>Infocare (2020 – 2022)</Company>
              <List>
                <ListItem>
                  Service for Norsk Tipping, Coop, Apotek1 og Rikstoto
                </ListItem>
                <ListItem>
                  Nettverksinstallasjon og kartlegging for bedrifter
                </ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>IKT-lærling</JobTitle>
              <Company>Risa AS (2019 – 2020)</Company>
              <List>
                <ListItem>Førstelinjestøtte for 500+ ansatte</ListItem>
                <ListItem>Arbeid med Azure Intune, AD og Office 365</ListItem>
              </List>
            </ExperienceItem>

            <ExperienceItem>
              <JobTitle>Andre roller</JobTitle>
              <Company>Diverse (2012 – 2017)</Company>
              <List>
                <ListItem>Rigger/Kranfører – Aibel</ListItem>
                <ListItem>
                  Logistikk, kontor og flaggmann – Kaefer, Nær Energi, STS
                  Gruppen
                </ListItem>
              </List>
            </ExperienceItem>
          </Section>

          <Section>
            <SectionHeader>Ferdigheter</SectionHeader>
            <List>
              <ListItem>Kundeservice og teamarbeid</ListItem>
              <ListItem>
                Azure Intune, Active Directory, M365, SharePoint
              </ListItem>
              <ListItem>HTML, CSS, SCSS, JavaScript</ListItem>
              <ListItem>Photoshop, Adobe XD</ListItem>
              <ListItem>Feilsøking på PC, printere, nettverk</ListItem>
              <ListItem>IT-systemadministrasjon og support</ListItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>Kurs og Sertifikater</SectionHeader>
            <List>
              <ListItem>IKT-Servicefaget Fagbrev – Risa AS (2020)</ListItem>
              <ListItem>
                Dell / HP PC og Print Certified Technician (2020)
              </ListItem>
              <ListItem>Førerkort klasse B</ListItem>
              <ListItem>
                Fallsikring, Riggerkurs, G4 Bro- og Traverskran
              </ListItem>
              <ListItem>Offshorekurs – ResQ (2013–2017)</ListItem>
            </List>
          </Section>

          <Section>
            <SectionHeader>Annet</SectionHeader>
            <Paragraph>
              <strong>Språk:</strong> Norsk og engelsk – flytende skriftlig og
              muntlig
            </Paragraph>
            <Paragraph>
              <strong>Interesser:</strong> Snowboard, gaming, webutvikling,
              familieaktiviteter
            </Paragraph>
          </Section>

          <Section>
            <SectionHeader>Referanser</SectionHeader>
            <Paragraph>
              Tilgjengelig på forespørsel, inkludert kontaktinfo for:
            </Paragraph>
            <List>
              <ListItem>Anders Kornelius Johnsen – Risa AS</ListItem>
              <ListItem>Kjetil Henriksen – Aibel AS</ListItem>
              <ListItem>Huseyin Keceli Øzdemir – STS Gruppen AS</ListItem>
              <ListItem>Helge Grannes – Infocare Haugesund</ListItem>
            </List>
          </Section>
        </Card>
      </Container>
    </>
  );
}
