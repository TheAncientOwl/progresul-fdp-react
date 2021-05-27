import styled, { css } from 'styled-components';
import { BiFoodMenu } from 'react-icons/bi';
import Breakpoints from '../../Breakpoints';

export const MenuButton = styled(BiFoodMenu)`
  position: fixed;
  top: 10px;
  left: 10px;
  color: ${props => props.theme.secondary};
  font-size: 2.5rem;
  z-index: 999;

  &:hover {
    color: ${props => props.theme.primary};
  }

  @media (max-width: ${Breakpoints.tablet}) {
    top: 15px;
    left: 15px;
  }

  @media (max-width: ${Breakpoints.phone}) {
    top: 0.3em;
    left: 0.4rem;
    font-size: 2rem;
  }
`;

export const MenuContainer = styled.div`
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: -1000px;

  transition: all 0.8s ease;
  ${props =>
    props.active &&
    props.active === true &&
    css`
      left: 0;
      transition: all 0.8s ease;
    `}

  width: 40vw;
  height: 100vh;
  z-index: 999;

  background: ${props => props.theme.nav.background};
  border: 3px solid ${props => props.theme.secondary};
  border-left: none;
  border-radius: 0.5rem;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 80vw;
  }
`;

export const MenuTitle = styled.div`
  margin: 10px auto;
  font-size: 1.2rem;
  text-align: center;
  width: 20%;
  color: ${props => props.theme.primary};
  border-bottom: 1px solid;
  border-radius: 0.5rem;
  padding: 15px;

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.4rem;
    width: 50%;
  }
`;

export const MenuLink = styled.div`
  width: 85%;
  margin: 20px auto;
  font-size: 1.2rem;
  text-align: center;
  color: ${props => props.theme.secondary};
  padding: 10px 5px;
  cursor: pointer;

  ${props =>
    props.active &&
    props.active === 'true' &&
    css`
      border-bottom: 2px solid ${props.theme.primary};
      border-radius: 0.5rem;
    `};

  &:hover {
    color: ${props => props.theme.primary};
    border-bottom: 2px solid;
    border-radius: 0.5rem;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.6rem;
    margin-top: 40px;
    padding-bottom: 20px;
    width: 90%;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.25rem;
    width: 85%;
    margin-top: 25px;
  }
`;

export const MenuSubchapter = styled.div`
  padding-top: 10px;
  font-size: 1rem;
  color: ${props => props.theme.text.primary};
`;
