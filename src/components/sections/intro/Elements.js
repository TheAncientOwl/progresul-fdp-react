import styled from 'styled-components';
import Breakpoints from '../../../Breakpoints';
import { Paragraph } from '../../content/ContentElements';

export const Text = styled.div`
  background-image: ${props => `linear-gradient(to top, ${props.theme.secondary} 0%, ${props.theme.primary} 100%)`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Title = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 1.7rem;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.5rem;
    margin-top: 15px;
  }
`;

export const Year = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 1.4rem;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.div`
  margin-top: 45px;
  text-align: center;
  font-size: 1.6rem;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.25rem;
  }
`;

export const Info = styled.div`
  margin: 80px auto 0 auto;
  width: 80%;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 0.9rem;
    margin-top: 60px;
    margin-bottom: 15px;
    width: 90%;
  }
`;

export const Left = styled.div`
  text-align: left;
`;

export const Right = styled.div`
  text-align: right;
`;

export const Quote = styled(Paragraph)`
  @media (min-width: ${Breakpoints.tablet}) {
    width: 55%;
    margin-right: 0;
    font-style: italic;
  } //style={{ width: '55%', marginRight: 0, fontStyle: 'italic' }}
`;
