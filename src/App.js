import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Navbar from './components/navbar';

import { ContentContainer } from './components/content/ContentElements';

import SectionsConfig from './components/sections/SectionsConfig';

export default function App() {
  const [currentSection] = useState(SectionsConfig[2]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Navbar title={currentSection.title} items={currentSection.items} />
          <ContentContainer>{currentSection.contents}</ContentContainer>
        </>
      </ThemeProvider>
    </>
  );
}
