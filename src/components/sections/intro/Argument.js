import React from 'react';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionTitle,
} from '../../content/ContentElements';

export default function Argument() {
  return (
    <>
      <SectionTitle>Argument</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Interdependența dintre factorii de producție și resurse se referă, în principal la urmatoarele aspecte:
        <SectionList>
          {[
            '- sfera resurselor este mai largă (nu toate resursele sunt factori)',
            '- pe masură ce sunt atrase noi resurse în activitatea economică, sfera factorilor se largește treptat.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Cunoașterea schimbărilor ce intervin în legatură cu locul și rolul factorilor de producție în diverse activități
        prezintă importanță pentru fundamentarea deciziilor agenților economici.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Capacitatea progresului tehnic de a potența posibilitățile economiei constă în:
        {[
          'a) creșterea volumului producției cu același consum de factori;',
          'b) reducerea consumului uneia, mai multora sau tuturor factorilor de producție pe unitatea de produs',
        ].map((item, index) => (
          <SectionListItem key={index}>{item}</SectionListItem>
        ))}
      </Paragraph>
      <Divider />
    </>
  );
}
