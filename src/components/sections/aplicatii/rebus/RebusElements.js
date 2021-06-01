import styled, { css } from 'styled-components';
import Breakpoints from '../../../../Breakpoints';

export const Container = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
  padding: 5px;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
  }
`;

export const CrosswordsWrapper = styled.table`
  width: 100%;
  margin: 10px auto;
`;

export const CrosswordsBody = styled.tbody``;

export const Row = styled.tr``;

export const LetterWrapper = styled.td`
  width: 40px;
  height: 40px;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};

  ${props =>
    props.invisible &&
    css`
      border-style: none;
    `}
`;

export const LetterInput = styled.input(
  ({ theme, highlight, wrong }) => css`
    width: 100%;
    height: 100%;

    text-align: center;
    text-transform: uppercase;

    background: ${theme.background};
    color: ${theme.text.primary};

    border: 1px solid ${theme.text.secondary};
    border-radius: 0.4rem;

    cursor: pointer;
    transition: all 0.1s ease;

    ${highlight &&
    css`
      color: ${theme.secondary};
      border-color: ${theme.secondary};
    `}

    &:hover {
      color: ${theme.primary};
      border: 1px solid;
      transition: all 0.1s ease;

      ${wrong &&
      css`
        color: red;
      `}
    }

    ${wrong &&
    css`
      color: red;
    `}
  `
);

export const HintsContainer = styled.div`
  width: 100%;
  margin: 20px auto;

  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 30px;
  }
`;

export const Hint = styled.div`
  color: ${props => props.theme.text.primary};
  margin-top: 10px;
`;

export const HintWord = styled.div(
  ({ submitted, right, theme }) => css`
    margin-left: 30px;
    padding-top: 5px;
    font-size: small;
    display: none;
    color: red;

    ${submitted &&
    css`
      display: block;
    `}

    ${right &&
    css`
      color: ${theme.primary};
    `}
  `
);
