import PropTypes from 'prop-types';
import React from 'react';
import {
  Answer,
  AnswerContainer,
  PotentialAnswersList,
  Question,
  QuestionContainer,
  RadioButton,
  RadioButtonLabel,
} from './TestElements';

export default function MultipleChoice({
  question,
  answers,
  name,
  onAnswerChange,
  hideRadio,
  correctIndex,
  selectedIndex,
}) {
  const answerFormat = (item, name, index, correct) => {
    if (hideRadio) {
      return (
        <Answer correct={correct} selected={index == selectedIndex ? 'true' : 'false'}>
          {item}
        </Answer>
      );
    }

    return (
      <>
        <RadioButton type='radio' name={name} value={index} />
        <RadioButtonLabel />
        <Answer>{item}</Answer>
      </>
    );
  };

  return (
    <QuestionContainer>
      <Question>{question}</Question>
      <PotentialAnswersList onChange={e => onAnswerChange(e.target.value)}>
        {answers.map((item, index) => (
          <AnswerContainer key={index}>
            {answerFormat(item, name, index, index == correctIndex ? 'true' : 'false')}
          </AnswerContainer>
        ))}
      </PotentialAnswersList>
    </QuestionContainer>
  );
}

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  hideRadio: PropTypes.bool.isRequired,
  correctIndex: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};
