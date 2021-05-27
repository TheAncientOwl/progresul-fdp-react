import styled, { css } from 'styled-components';
import Breakpoints from '../../Breakpoints';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NAVBAR_HEIGHT = '80px';

export const NavMenuToggleButton = styled(FaBars)`
  color: ${props => (props.open && props.open === true ? props.theme.primary : props.theme.secondary)};
  position: fixed;
  z-index: 9999;
  top: -1000px;

  @media (max-width: ${Breakpoints.tablet}) {
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;
  }

  @media (max-width: ${Breakpoints.phone}) {
    top: 0.7rem;
    right: 0.7rem;
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  z-index: 100;
  display: flex;
  position: sticky;
  top: 0;

  width: 100%;
  height: ${NAVBAR_HEIGHT};

  justify-content: center;
  align-items: center;

  background: ${props => props.theme.nav.background};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: ${NAVBAR_HEIGHT};
  width: 100%;

  padding: 0 35px;

  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0;
  }
`;

export const NavTitle = styled.div`
  background-image: ${props => `linear-gradient(to top, ${props.theme.secondary} 0%, ${props.theme.primary} 100%)`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: flex;
  align-items: center;
  font-size: 1.25rem;

  text-align: center;

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0 auto;

    width: 600px;
    font-size: 1.6rem;
  }

  @media (max-width: ${Breakpoints.phone}) {
    width: 290px;
    font-size: 1.2rem;
  }

  @media (max-width: ${Breakpoints.miniPhone}) {
    padding-top: 15px;
    width: 215px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  transition: all 0.5s ease;

  @media (max-width: ${Breakpoints.tablet}) {
    position: absolute;
    top: -1000px;

    ${props =>
      props.active &&
      props.active === true &&
      css`
        top: 0;
        transition: all 0.5s ease;
      `}

    display: grid;
    grid-template-columns: auto;

    height: 40vh;
    width: 100%;

    background: ${props => props.theme.nav.background};
    border-bottom: 3px solid ${props => props.theme.secondary};
    border-radius: 0.8rem;

    padding-top: 30px;
  }

  @media (max-width: ${Breakpoints.phone}) {
    padding-top: 20px;
  }
`;

export const NavSection = styled(Link)`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;

  min-width: 125px;
  max-width: 200px;

  font-size: 1.1rem;
  text-decoration: none;
  height: ${NAVBAR_HEIGHT};

  color: ${props => props.theme.secondary};
  transition: all 0.3 ease;

  border-bottom: ${props => (props.active && props.active === 'true' ? `2px solid ${props.theme.primary}` : '')};

  &:hover {
    color: ${props => props.theme.primary};
    transition: all 0.3 ease;
    cursor: pointer;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0 auto;
    font-size: 3rem;
    max-width: 600px;
    height: auto;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.5rem;
    max-width: 345px;
  }
`;
