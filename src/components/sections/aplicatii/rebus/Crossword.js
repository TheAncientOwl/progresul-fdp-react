import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, LetterWrapper, LetterInput } from './RebusElements';

export default function Crossword({ length, paddingLeft, index, highlightCell, onWordChange, wrong }) {
  const [word, setWord] = useState(new Array(length));

  const padding = [];
  for (let index = 1; index <= paddingLeft; index++) padding.push(<LetterWrapper key={-index} invisible={true} />);

  const setLetter = (letter, index) => {
    const newWord = [...word];
    newWord[index] = letter;
    setWord(newWord);

    onWordChange(newWord.join('').toUpperCase());
  };

  const cells = [];
  for (let index = 0; index < length; index++)
    cells.push(
      <LetterWrapper key={index}>
        <LetterInput
          type='letter'
          maxLength='1'
          highlight={index == highlightCell}
          onChange={e => setLetter(e.target.value, index)}
          wrong={wrong}
        />
      </LetterWrapper>
    );

  return (
    <Row>
      {padding}
      <LetterWrapper key={length} invisible={true}>
        {index}
      </LetterWrapper>
      {cells}
    </Row>
  );
}

Crossword.propTypes = {
  length: PropTypes.number.isRequired,
  paddingLeft: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  highlightCell: PropTypes.number.isRequired,
  onWordChange: PropTypes.func.isRequired,
  wrong: PropTypes.bool.isRequired,
};
