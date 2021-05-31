import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../../content';
import { Divider, SectionTitle } from '../../../content/ContentElements';
import MultipleChoice from './MultipleChoice';
import MultipleChoiceQuestions from './MultipleChoiceQuestions';
import { Button, Score } from './TestElements';

export default function Test({ id }) {
  const [answers, setAnswers] = useState(new Array(MultipleChoiceQuestions.length));
  const [submitted, setSubmitted] = useState(false);

  const calcScore = () => {
    let score = 10;
    for (let i = 0; i < answers.length; i++) if (answers[i] == MultipleChoiceQuestions[i].correctIndex) score += 10;
    return score;
  };

  const setAnswer = (answer, pos) => {
    const newAnswers = [...answers];
    newAnswers[pos] = answer;
    setAnswers(newAnswers);
  };

  const postSolveButton = () => {
    if (submitted) {
      const resetTest = () => {
        setAnswers(new Array(MultipleChoiceQuestions.length));
        setSubmitted(false);
      };

      return (
        <>
          <Button onClick={resetTest}>Reia testul</Button>
          <Score>Ai obținut {calcScore()} / 100 puncte!</Score>
        </>
      );
    }

    const allSelected = () => {
      const selected = answers.reduce((accumulator, currentValue) => accumulator + (currentValue !== undefined), 0);
      return selected == MultipleChoiceQuestions.length;
    };

    if (allSelected()) {
      return <Button onClick={() => setSubmitted(true)}>Submit</Button>;
    }
  };

  return (
    <ContentSection id={id}>
      <SectionTitle>Test</SectionTitle>
      {MultipleChoiceQuestions.map((item, index) => (
        <MultipleChoice
          key={index}
          choiceIndex={index}
          onAnswerChange={answer => setAnswer(answer, index)}
          submitted={submitted}
          selectedIndex={answers[index]}
        />
      ))}
      <Divider />
      {postSolveButton()}
    </ContentSection>
  );
}

Test.propTypes = {
  id: PropTypes.string.isRequired,
};
