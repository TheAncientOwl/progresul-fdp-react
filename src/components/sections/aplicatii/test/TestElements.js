import styled, { css } from 'styled-components';
import Breakpoints from '../../../../Breakpoints';

export const QuestionContainer = styled.div`
  padding: 5px 20px;
  margin-top: 10px;
  font-size: 1.15rem;
`;

export const Question = styled.div`
  color: ${props => props.theme.text.secondary};
`;

export const AnswersList = styled.div`
  margin-top: 8px;
  margin-left: 25px;
`;

export const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.text.primary};
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 0.45rem;

  &:hover ~ ${RadioButtonLabel}, &:checked + ${RadioButtonLabel} {
    background: ${props => props.theme.secondary};
    border: 2px solid ${props => props.theme.primary};
  }
`;

export const AnswerText = styled.div(
  ({ theme, selected, correct }) => css`
    color: ${theme.text.primary};

    ${selected &&
    css`
      color: red;
      font-style: italic;
    `};

    ${correct &&
    css`
      color: ${theme.secondary};
      font-style: italic;
    `}
  `
);

export const Button = styled.div(
  ({ theme }) => css`
    font-size: 1.2rem;
    width: 20%;
    border: 1px solid;
    color: ${theme.secondary};
    border-radius: 0.4rem;
    text-align: center;
    padding: 10px;
    margin: 5px auto 15px auto;
    cursor: pointer;

    &:hover {
      color: ${theme.primary};
    }

    @media (max-width: ${Breakpoints.phone}) {
      width: 80%;
    }
  `
);

export const Score = styled.div`
  font-size: 1.4rem;
  border: 1px solid;
  color: ${props => props.theme.primary};
  border-radius: 0.4rem;
  text-align: center;
  padding: 10px;
  margin-bottom: 15px;
`;
