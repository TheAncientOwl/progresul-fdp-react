import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';
import {
  ContentContainer,
  SectionTitle,
  Paragraph,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  SubParagraph,
  ParagraphIndent,
  Divider,
  SectionSubTitle,
} from './components/content/ContentElements';
import ContentSection from './components/content';
import ComponenteleCapitaluluiGr from './images/componentele_capitalului.png';
import Graphic from './components/graphic';

const theme = {
  primary: '#50E627',
  secondary: '#36991A',
  nav: {
    background: '#131313',
    title: {
      gradient: {
        col1: '#062601',
        col2: '#318c18',
      },
    },
  },
  text: {
    primary: '#959595',
    secondary: '#3D3D3D',
  },
};

export default function App() {
  const items = [
    { title: 'Tipuri de capital', to: 'tipuri-de-capital' },
    { title: 'Aspecte', to: 'aspecte' },
    { title: 'Dezvoltarea economică', to: 'section-title' },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Navbar title='Capitalul tehnic si progresul factorilor de productie' items={items} />
          <ContentContainer>
            <ContentSection id='tipuri-de-capital'>
              <SectionTitle>Tipuri de capital</SectionTitle>
              <Paragraph>
                <ParagraphIndent />
                Cele mai importante criterii pentru clasificarea capitalului tehnic sunt:
                <SectionList>
                  {[
                    '- modul în care acesta participă la activitatea economică;',
                    '- cum se consumă;',
                    '- cum se înlocuiesc cu noile procese de producție',
                  ].map((item, index) => (
                    <SectionListItem key={index}>{item}</SectionListItem>
                  ))}
                </SectionList>
              </Paragraph>
              <Divider />
              <Paragraph>
                <ParagraphIndent />
                În baza acestor criterii, capitalul se împarte în:
                <SectionList>
                  {['a) capital fix;', 'b) capital circulant.'].map((item, index) => (
                    <SectionListItem key={index}>{item}</SectionListItem>
                  ))}
                </SectionList>
              </Paragraph>
              <Divider />
              <Paragraph>
                <ParagraphIndent />
                CAPITALUL FIX - este acea parte a capitalului format din bunuri (clădiri, mașini, utilaje, instalații,
                etc.) care participă la mai multe cicluri (acte) de producție, se consumă treptat și se înlocuiesc după
                mai mulți ani de utilizare.
                <SubParagraph>
                  Consumul treptat al capitalului fix își găsește expresia în uzură, aceasta prezentadu-se în două
                  forme:
                  <SectionList>
                    {[
                      {
                        value: 'a) uzură fizică;',
                        desc: 'se manifestă prin deprecierea treptată a caracteristicilor funcționale ale capitalului fix ca urmare a folosirii productive și acțiunii agenților naturali.',
                      },
                      {
                        value: 'b) uzură morală (involuntară).',
                        desc: 'apare sub incidența progresului tehnic și a condițiilor pieței care asigură mașini, utilaje noi, mai ieftine decât cele în funcțiune și/sau cu performanțe tehnico-economice superioare.',
                      },
                    ].map((item, index) => (
                      <div key={index}>
                        <SectionListItem>{item.value}</SectionListItem>
                        <SectionListItemDesc>{item.desc}</SectionListItemDesc>
                      </div>
                    ))}
                  </SectionList>
                </SubParagraph>
              </Paragraph>
              <Divider />
              <Paragraph>
                <ParagraphIndent />
                CAPITALUL CIRCULANT - este partea capitalului formată din bunuri (materii prime, material, combustibil,
                energia consumată în procesul de producție, apă tehnologică, etc) care participă la un singur ciclu de
                producție, sunt consumate sau transformate în cursul acestuia și trebuie înlocuite cu fiecare nou ciclu
                de producție.
              </Paragraph>
              <Divider />
              <Graphic
                title='Componentele capitalului'
                src={ComponenteleCapitaluluiGr}
                alt='componentele capitalului'
              />
              <Divider />
            </ContentSection>

            <ContentSection id='aspecte'>
              <SectionTitle>Aspectul calitativ si cantitativ al factorilor de producție</SectionTitle>
              <Paragraph>
                <ParagraphIndent />
                PROGRESUL FACTORILOR DE PRODUCȚIE - reprezintă un ansamblu de realizări extreme de diverse ce poate fi
                pus în evidență prin surprinderea celor mai importante tendințe de schimbare, cantitative și calitative,
                care s-au manifestat pe termen foarte lung în sfera economicului.
              </Paragraph>
              <Divider />
              <Paragraph>
                <ParagraphIndent />
                Așadar, se impun două aspecte ale progresului factorilor de producție, care pot fi urmărite ca atare dar
                care sunt, în același timp, interdependente:
                <SectionList>
                  {['- unul cantitativ;', '- unul calitativ.'].map((item, index) => (
                    <SectionListItem key={index}>{item}</SectionListItem>
                  ))}
                </SectionList>
              </Paragraph>
              <Divider />
              <SectionSubTitle>Aspectul cantitativ</SectionSubTitle>
              <Paragraph>
                <ParagraphIndent />
                Aspectul cantitativ este relevat de două tendințe:
                <SectionList>
                  {[
                    {
                      value: 'a) Tendința generală de creștere a factorilor de producție:',
                      desc: 'un număr mai mare de factori de producție înseamnă și o mai mare diversificare a lor;',
                    },
                    {
                      value: 'b) Marirea volumului de factori de producție utilizați:',
                      desc: 'acest lucru reprezintă un proces deoarece, în acest fel, s-au putut asigura cantități tot mai mari de factori de producție și, prin bunurile diverse create, au putut fi satisfăcute tot mai multe trebuințe individuale și sociale.',
                    },
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <SectionListItem>{item.value}</SectionListItem>
                      <SectionListItemDesc>{item.desc}</SectionListItemDesc>
                    </React.Fragment>
                  ))}
                </SectionList>
                <br />
                <ParagraphIndent />
                Un aspect cantitativ al progresului factorilor de producție este utilizarea factorilor de producție pe
                principii ecologice
              </Paragraph>
              <Divider />
              <SectionSubTitle>Aspectul calitativ</SectionSubTitle>
              <Paragraph>
                <ParagraphIndent />
                Aspectul calitativ este pus în evidență prin tendințele urmatoare:
                <SectionList>
                  {[
                    'a) Creșterea raționalității utilizarii factorilor de producție, a eficienței utilizării lor, având ca efect diminuarea consumului de factori de producție pe unitate de produs (bun) sau de trebuință satisfăcută;',
                    'b) Extinderea utilizării factorilor de producție la noi activități prin combinarea lor în variante și cu rezultate tot mai diferite;',
                    <>
                      c) Utilizarea factorilor de producție pe principii ecologice urmărindu-se:
                      <SectionList>
                        {[
                          '- Evitarea degradării mediului ambient;',
                          '- Menținerea parametrilor de mediu în limite normale pentru existența umană',
                        ].map((item, index) => (
                          <SectionListItem key={index}>{item}</SectionListItem>
                        ))}
                      </SectionList>
                    </>,
                  ].map((item, index) => (
                    <SectionListItem key={index}>{item}</SectionListItem>
                  ))}
                </SectionList>
              </Paragraph>
              <Divider />
              <Paragraph>
                <ParagraphIndent />
                Procesul de recuperare treptată a valorii capitalului se numește amortizare.
              </Paragraph>
              <Divider />
            </ContentSection>
          </ContentContainer>
        </>
      </ThemeProvider>
    </>
  );
}
