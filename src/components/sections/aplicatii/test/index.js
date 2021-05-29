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

  const showSubmit = () => {
    const fullSelected = () => {
      const selected = answers.reduce((accumulator, currentValue) => accumulator + (currentValue !== undefined), 0);
      return selected == MultipleChoiceQuestions.length;
    };

    return !submitted && fullSelected();
  };

  return (
    <ContentSection id={id}>
      <SectionTitle>Test</SectionTitle>
      {MultipleChoiceQuestions.map((item, index) => (
        <MultipleChoice
          key={index}
          question={item.question}
          answers={item.answers}
          correctIndex={item.correctIndex}
          name={item.name}
          onAnswerChange={answer => setAnswer(answer, index)}
          hideRadio={submitted}
          selectedIndex={answers[index]}
        />
      ))}
      <Divider />

      {showSubmit() && (
        <Button
          onClick={() => {
            setSubmitted(true);
            calcScore();
          }}>
          Submit
        </Button>
      )}

      {submitted && (
        <>
          <Button
            onClick={() => {
              setAnswers(new Array(MultipleChoiceQuestions.length));
              setSubmitted(false);
            }}>
            Reia testul
          </Button>
          <Score>Ai obținut {calcScore()} / 100 puncte!</Score>
        </>
      )}
    </ContentSection>
  );
}

Test.propTypes = {
  id: PropTypes.string.isRequired,
};
