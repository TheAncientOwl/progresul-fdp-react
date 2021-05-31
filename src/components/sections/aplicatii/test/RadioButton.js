import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton as Radio, RadioButtonLabel } from './TestElements';

export default function RadioButton({ name, value }) {
  return (
    <>
      <Radio type='radio' name={name} value={value} />
      <RadioButtonLabel />
    </>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
};
