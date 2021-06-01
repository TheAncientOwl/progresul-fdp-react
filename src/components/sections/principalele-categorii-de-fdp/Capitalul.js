import React from 'react';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionSubTitle,
  SectionTitle,
} from '../../content/ContentElements';

export default function Capitalul() {
  return (
    <>
      <SectionTitle>Capitalul</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        CAPITALUL - desemnează ansamblul bunurilor produse prin muncă și folosite pentru producerea altor bunuri și
        servicii destinate vânzării.
      </Paragraph>
      <Divider />
      <SectionSubTitle>Capitalul tehnic</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        Bunurile care formează capitalul servesc indirect la satisfacerea trebuințelor sociale, adică prin intermediul
        bunurilor și serviciilor la producerea cărora participă împreună cu ceilalți factori.
        <br />
        <br />
        <ParagraphIndent />
        De asemenea, elementele care formează factorul de producție capital mai sunt numite capital tehnic sau bunuri
        (mijloace) de producție (clădiri pentru producție, mașini, utilaje, instalații, materii prime, materiale,
        combustibil, energie, tehnică electronică, de calcul, licențe după invenții, etc.).
        <br />
        <br />
        În activitatea economică elementele capitalului tehinc:
        <SectionList>
          {['', '', ''].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
    </>
  );
}
