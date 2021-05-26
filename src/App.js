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
    { title: 'Tipuri de capital', to: 'section-title' },
    { title: 'Aspecte', to: 'section-title' },
    { title: 'Dezvoltarea economică', to: 'section-title' },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: '150vh' }}>
          <Navbar title='Capitalul tehnic si progresul factorilor de productie' items={items} />
          <ContentContainer>
            <ContentSection id='section-title'>
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
          </ContentContainer>
        </div>
      </ThemeProvider>
    </>
  );
}
