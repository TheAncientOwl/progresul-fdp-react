import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const GraphicContainer = styled.div`
  margin: 0 auto;
  width: 600px;

  @media (max-width: ${Breakpoints.tablet}) {
    width: 500px;
  }

  @media (max-width: ${Breakpoints.phone}) {
    width: 250px;
  }
`;

export const GraphicTitle = styled.div`
  background-image: ${props => `linear-gradient(to top, ${props.theme.secondary} 0%, ${props.theme.primary} 100%)`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  margin: 15px auto;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  padding: 5px;

  border: 1px solid ${props => props.theme.primary};
  border-radius: 0.6rem;
  width: 65%;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 0.9rem;
    padding: 10px 5px;
    width: 80%;
  }
`;
