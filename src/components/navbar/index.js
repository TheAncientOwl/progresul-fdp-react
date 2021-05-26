import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavMenuToggleButton, Nav, NavContainer, NavTitle, NavMenu, NavSection } from './NavbarElements';

export default function Navbar({ title, items }) {
  const [chapterMenuOpen, setChapterMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(items[0].title);

  return (
    <>
      <NavMenuToggleButton open={chapterMenuOpen} onClick={() => setChapterMenuOpen(!chapterMenuOpen)} />
      <Nav>
        <NavContainer>
          <NavTitle>{title}</NavTitle>
          <NavMenu active={chapterMenuOpen}>
            {items.map((item, index) => {
              const active = item.title === activeChapter ? 'true' : 'false';
              return (
                <NavSection
                  key={index}
                  active={active}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-90}
                  onClick={() => {
                    setChapterMenuOpen(!chapterMenuOpen);
                    setActiveChapter(item.title);
                  }}>
                  {item.title}
                </NavSection>
              );
            })}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
