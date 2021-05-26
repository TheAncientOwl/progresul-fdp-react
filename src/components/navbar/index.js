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
            <NavMenuItem active={true}>
              <NavLink
                to='section-title'
                smooth={true}
                duration={1000}
                offset={-90}
                onClick={() => {
                  setChapterMenuOpen(!chapterMenuOpen);
                }}>
                Tipuri de capital
              </NavLink>
            </NavMenuItem>

            {['Aspecte', 'Dezvoltarea economică'].map((item, index) => (
              <NavMenuItem key={index}>
                <NavLink to='section-title' onClick={() => setChapterMenuOpen(!chapterMenuOpen)}>
                  {item}
                </NavLink>
              </NavMenuItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
}
