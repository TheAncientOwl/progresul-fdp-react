import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Navbar from './components/navbar';

import { ContentContainer } from './components/content/ContentElements';

import SectionsConfig from './components/sections/SectionsConfig';
import Menu from './components/global-menu';
import { TopAnchor } from './utils/TopAnchor';
import Copyright from './components/copyright';
import ContentSection from './components/content';

export default function App() {
  const [currentSection, setCurrentSection] = useState(SectionsConfig[0]);

  const sections = [];
  for (let index = 0; index < currentSection.contents.length; index++)
    sections.push(
      <ContentSection key={index} id={currentSection.items[index].to}>
        {currentSection.contents[index]}
      </ContentSection>
    );

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <Menu currentSection={currentSection} onSectionChange={setCurrentSection} />
          <Navbar title={currentSection.title} items={currentSection.items} />
          <TopAnchor />
          <ContentContainer>{sections}</ContentContainer>
          <Copyright />
        </>
      </ThemeProvider>
    </>
  );
}
