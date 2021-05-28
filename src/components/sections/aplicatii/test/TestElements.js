import styled from 'styled-components';

export const QuestionContainer = styled.div`
  padding: 5px 20px;
  margin-top: 10px;
  font-size: 1.15rem;
`;

export const Question = styled.div`
  color: ${props => props.theme.text.secondary};
`;

export const PotentialAnswersList = styled.div`
  margin-top: 8px;
  margin-left: 25px;
`;

export const AnswerContainer = styled.div`
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

export const Answer = styled.div`
  color: ${props => props.theme.text.primary};
`;
