import React from 'react';
import PropTypes from 'prop-types';
import { GraphicContainer } from './GraphicElements';

export default function Graphic({ src, alt, width }) {
  return (
    <GraphicContainer width={width}>
      <img src={src} alt={alt} width='100%' height='auto' />
    </GraphicContainer>
  );
}

Graphic.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};
