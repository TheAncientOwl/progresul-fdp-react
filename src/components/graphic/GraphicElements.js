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
