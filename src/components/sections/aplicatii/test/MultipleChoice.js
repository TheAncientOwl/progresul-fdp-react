import PropTypes from 'prop-types';
import React from 'react';
import {
  Answer,
  PotentialAnswersList,
  Question,
  QuestionContainer,
  AnswerContainer,
  RadioButton,
  RadioButtonLabel,
} from './TestElements';

export default function MultipleChoice({ question, answers, correctIndex, name }) {
  console.log(correctIndex);
  const onChange = e => {
    console.log(e.target.value);
  };

  return (
    <QuestionContainer>
      <Question>{question}</Question>
      <PotentialAnswersList onChange={onChange}>
        {answers.map((item, index) => (
          <AnswerContainer key={index}>
            <RadioButton type='radio' name={name} value={index} />
            <RadioButtonLabel />
            <Answer>{item}</Answer>
          </AnswerContainer>
        ))}
      </PotentialAnswersList>
    </QuestionContainer>
  );
}

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  correctIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
