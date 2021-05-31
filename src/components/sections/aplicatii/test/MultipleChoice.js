import PropTypes from 'prop-types';
import React from 'react';
import MultipleChoiceQuestions from './MultipleChoiceQuestions';
import { AnswerText, AnswerBox, AnswersList, Question, QuestionContainer } from './TestElements';
import RadioButton from './RadioButton';

export default function MultipleChoice({ choiceIndex, onAnswerChange, submitted, selectedIndex }) {
  const { question, answers, name, correctIndex } = MultipleChoiceQuestions[choiceIndex];

  const answersList = answers.map((answerText, index) => (
    <AnswerBox key={index}>
      {submitted ? (
        <AnswerText correct={index == correctIndex} selected={index == selectedIndex}>
          {answerText}
        </AnswerText>
      ) : (
        <>
          <RadioButton name={name} value={index} />
          <AnswerText>{answerText}</AnswerText>
        </>
      )}
    </AnswerBox>
  ));

  return (
    <QuestionContainer>
      <Question>{question}</Question>
      <AnswersList onChange={e => onAnswerChange(e.target.value)}>{answersList}</AnswersList>
    </QuestionContainer>
  );
}

MultipleChoice.propTypes = {
  choiceIndex: PropTypes.number.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.any,
};
