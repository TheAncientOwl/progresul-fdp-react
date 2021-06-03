import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const GraphicContainer = styled.div`
  margin: 0 auto;
  width: ${props => `${props.width}px`};

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;

export const GraphicTitle = styled.div`
  color: ${props => props.theme.primary};

  margin: 15px auto;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  padding: 5px;

  border: 1px solid ${props => props.theme.primary};
  border-radius: 0.6rem;
  width: 65%;

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`;
