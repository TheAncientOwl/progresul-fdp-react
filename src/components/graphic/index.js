import React from 'react';
import PropTypes from 'prop-types';
import { GraphicContainer, GraphicTitle } from './GraphicElements';

export default function Graphic({ title, src, alt }) {
  return (
    <>
      <GraphicContainer>
        <img src={src} alt={alt} width='100%' height='auto' />
      </GraphicContainer>
      <GraphicTitle>{title}</GraphicTitle>
    </>
  );
}

Graphic.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.any,
  alt: PropTypes.string.isRequired,
};
