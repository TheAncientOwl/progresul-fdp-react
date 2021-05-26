import React from 'react';
import PropTypes from 'prop-types';
import { ImplContentSection } from './ContentElements';

export default function ContentSection({ children, id }) {
  return (
    <>
      <div id={id} />
      <ImplContentSection id={id}>{children}</ImplContentSection>
    </>
  );
}

ContentSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
};
