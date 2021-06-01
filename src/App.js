import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Navbar from './components/navbar';

import { ContentContainer } from './components/content/ContentElements';

import SectionsConfig from './components/sections/SectionsConfig';
import Menu from './components/global-menu';
import { TopAnchor } from './utils/TopAnchor';
import Copyright from './components/copyright';

export default function App() {
  const [currentSection, setCurrentSection] = useState(SectionsConfig[0]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Menu currentSection={currentSection} onSectionChange={setCurrentSection} />
          <Navbar title={currentSection.title} items={currentSection.items} />
          <TopAnchor />
          <ContentContainer>{currentSection.contents}</ContentContainer>
          <Copyright />
        </>
      </ThemeProvider>
    </>
  );
}
