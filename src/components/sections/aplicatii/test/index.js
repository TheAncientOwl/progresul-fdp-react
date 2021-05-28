import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../../content';
import { Divider, SectionTitle } from '../../../content/ContentElements';
import MultipleChoice from './MultipleChoice';
import MultipleChoiceQuestions from './MultipleChoiceQuestions';

export default function Test({ id }) {
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
        />
      ))}
      <Divider />
    </ContentSection>
  );
}

Test.propTypes = {
  id: PropTypes.string.isRequired,
};
