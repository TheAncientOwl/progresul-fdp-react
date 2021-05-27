import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Navbar from './components/navbar';

import { ContentContainer } from './components/content/ContentElements';
import ContentSection from './components/content';

import TipuriDeCapital from './components/sections/capitalul-tehnic-si-progresul-fdp/TipuriDeCapital';
import Aspecte from './components/sections/capitalul-tehnic-si-progresul-fdp/Aspecte';

export default function App() {
  const items = [
    { title: 'Tipuri de capital', to: 'tipuri-de-capital' },
    { title: 'Aspecte', to: 'aspecte' },
    { title: 'Dezvoltarea economică', to: 'dezvoltarea-economica' },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Navbar title='Capitalul tehnic si progresul factorilor de productie' items={items} />
          <ContentContainer>
            <TipuriDeCapital id='tipuri-de-capital' />
            <Aspecte id='aspecte' />
            <ContentSection id='dezvoltarea-economica'></ContentSection>
          </ContentContainer>
        </>
      </ThemeProvider>
    </>
  );
}
