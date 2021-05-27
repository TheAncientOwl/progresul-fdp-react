import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuButton, MenuContainer, MenuLink, MenuTitle } from './MenuElements';
import SectionsConfig from '../sections/SectionsConfig';
import { moveToTopAnchor } from '../../utils/TopAnchor';

export default function Menu({ onSectionChange, currentSection }) {
  const [activeMenu, setActiveMenu] = useState(false);

  const closeMenu = () => setActiveMenu(false);

  return (
    <>
      <MenuButton onClick={() => setActiveMenu(!activeMenu)} />
      <MenuContainer active={activeMenu} onClick={closeMenu}>
        <MenuTitle>Meniu</MenuTitle>
        {SectionsConfig.map((section, index) => {
          const active = section.title === currentSection.title ? 'true' : 'false';
          return (
            <MenuLink
              key={index}
              active={active}
              onClick={() => {
                onSectionChange(section);
                closeMenu();
                moveToTopAnchor();
              }}>
              {section.title}
            </MenuLink>
          );
        })}
      </MenuContainer>
    </>
  );
}

Menu.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
  currentSection: PropTypes.object.isRequired,
};
