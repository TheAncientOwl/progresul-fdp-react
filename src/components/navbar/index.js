import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavMenuToggleButton, Nav, NavContainer, NavTitle, NavMenu, NavSection } from './NavbarElements';

export default function Navbar({ title, items }) {
  const [chapterMenuOpen, setChapterMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(items[0].title);
  const [offsets, setOffsets] = useState([]);

  const pullOffsets = () => {
    const $offsets = [];
    for (let item of items) {
      const element = document.getElementById(item.to);
      if (!element) {
        console.error(`Cannot find element with id ${item.to}`);
        $offsets.push(0);
        continue;
      }
      $offsets.push(element.offsetTop - 150);
    }
    $offsets.push($offsets[$offsets.length - 1] * 10000);
    setOffsets($offsets);
  };

  useEffect(() => {
    pullOffsets();
    setActiveChapter(items[0].title);
  }, [items]);

  useEffect(() => {
    window.addEventListener('resize', pullOffsets);
    return () => window.removeEventListener('resize', pullOffsets);
  });

  useEffect(() => {
    const onScroll = e => {
      const pos = e.target.documentElement.scrollTop;
      for (let i = 1; i < offsets.length; i++)
        if (pos < offsets[i]) {
          setActiveChapter(items[i - 1].title);
          break;
        }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

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
                  duration={1200}
                  offset={-90}
                  onClick={() => setChapterMenuOpen(!chapterMenuOpen)}>
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
