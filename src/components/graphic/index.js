import React from 'react';
import PropTypes from 'prop-types';
import { GraphicContainer, GraphicTitle } from './GraphicElements';

export default function Graphic({ title, src, alt, width, children }) {
  return (
    <>
      <GraphicContainer width={width}>
        <img src={src} alt={alt} width='100%' height='auto' />
      </GraphicContainer>
      <GraphicTitle>{title}</GraphicTitle>
      {children}
    </>
  );
}

Graphic.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.any,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.any,
};
