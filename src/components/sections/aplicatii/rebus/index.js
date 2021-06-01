import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../../content';

export default function Rebus({ id }) {
  return <ContentSection id={id}></ContentSection>;
}

Rebus.propTypes = {
  id: PropTypes.string.isRequired,
};
