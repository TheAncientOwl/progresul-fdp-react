import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../../content';
import Words from './Words';
import { Container, CrosswordsBody, CrosswordsWrapper, Hint, HintsContainer, HintWord } from './RebusElements';
import Crossword from './Crossword';
import { Button } from '../test/TestElements';
import { Divider, SectionTitle } from '../../../content/ContentElements';

export default function Rebus({ id }) {
  const [answers, setAnswers] = useState(new Array(Words.length));
  const [submitted, setSubmitted] = useState(false);

  const crosswords = [];
  const hints = [];

  const setAnswer = (answer, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  Words.map((item, index) => {
    crosswords.push(
      <Crossword
        key={index}
        index={index + 1}
        length={item.word.length}
        paddingLeft={item.paddingLeft}
        highlightCell={item.highlightCell}
        onWordChange={answer => setAnswer(answer, index)}
        wrong={submitted && answers[index] !== Words[index].word}
      />
    );

    hints.push(
      <Hint key={index}>
        {`${index + 1} ~ ${item.hint}`}
        <HintWord submitted={submitted} right={answers[index] === Words[index].word}>
          Raspuns: {item.word}
        </HintWord>
      </Hint>
    );
  });

  const allCompleted = () => {
    const selected = answers.reduce((accumulator, currentValue) => accumulator + (currentValue !== undefined), 0);
    return selected == Words.length;
  };

  return (
    <ContentSection id={id}>
      <SectionTitle>Rebus</SectionTitle>
      <Container>
        <CrosswordsWrapper>
          <CrosswordsBody>{crosswords}</CrosswordsBody>
        </CrosswordsWrapper>
        <HintsContainer>{hints}</HintsContainer>
      </Container>
      <Divider />
      {allCompleted() && (
        <>
          <Button onClick={() => setSubmitted(true)}>Verfică rebusul</Button>
          <Divider />
        </>
      )}
    </ContentSection>
  );
}

Rebus.propTypes = {
  id: PropTypes.string.isRequired,
};
