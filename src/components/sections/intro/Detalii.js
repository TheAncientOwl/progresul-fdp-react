import React from 'react';
import { Text, Title, Year, Subtitle, Left, Right, Info } from './Elements';

export default function Detalii() {
  return (
    <>
      <Title>
        {['Concursul Național', '"Istorie și Societate în Dimensiune Virtuală"'].map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Title>

      <Year>
        <Text>Anul școlar 2017 - 2018</Text>
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
    </>
  );
}
