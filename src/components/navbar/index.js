import React, { useState } from 'react';
import { NavMenuToggleButton, Nav, NavContainer, NavTitle, NavMenu, NavMenuItem, NavLink } from './NavbarElements';

export default function Navbar() {
  const [chapterMenuOpen, setChapterMenuOpen] = useState(false);

  return (
    <>
      <NavMenuToggleButton open={chapterMenuOpen} onClick={() => setChapterMenuOpen(!chapterMenuOpen)} />
      <Nav>
        <NavContainer>
          <NavTitle>Capitalul tehnic si progresul factorilor de productie</NavTitle>
          <NavMenu active={chapterMenuOpen}>
            {['Tipuri de capital', 'Aspecte', 'Dezvoltarea economică'].map((item, index) => (
              <NavMenuItem key={index}>
                <NavLink onClick={() => setChapterMenuOpen(!chapterMenuOpen)}>{item}</NavLink>
              </NavMenuItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}
