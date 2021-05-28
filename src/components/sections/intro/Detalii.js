import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../content';
import { Text, Title, Year, Subtitle, Left, Right, Info } from './Elements';

export default function Detalii({ id }) {
  return (
    <ContentSection id={id}>
      <Title>
        {['Concursul Național', '"Istorie și Societate în Dimensiune Virtuală"'].map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Title>

      <Year>
        <Text>Anul școlar 2017 - 2019</Text>
      </Year>

      <Subtitle>
        {['Factorii de producție', 'Progresul factorilor de producție'].map((item, index) => (
          <Text key={index + 2}>{item}</Text>
        ))}
      </Subtitle>

      <Info>
        <Left>
          {[
            'Elev: Delegeanu Alexandru',
            'Clasa a XI-a A',
            'Colegiul Național "Dinicu Golescu"',
            'Câmpulung Mușcel, Jud. Argeș',
          ].map((item, index) => (
            <Text key={index * 5}>{item}</Text>
          ))}
        </Left>

        <Right>
          {['Profesori coordonatori:', 'Zăbavă Pavel', 'Tătulea Maria'].map((item, index) => (
            <Text key={index * 20}>{item}</Text>
          ))}
        </Right>
      </Info>
    </ContentSection>
  );
}

Detalii.propTypes = {
  id: PropTypes.string.isRequired,
};