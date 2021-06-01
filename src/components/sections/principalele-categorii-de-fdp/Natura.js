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

export default function Natura() {
  return (
    <>
      <SectionTitle>Natura - factor de producție</SectionTitle>
      <SectionSubTitle>Munca împreună cu natura sunt factori de producție originari.</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        NATURA (ca factor de producție) - este un ansamblu de elemente la care omul face apel pentru a produce și pe
        care le influențează prin muncă.
        <br />
        <ParagraphIndent />
        Din rândul elementelor naturale se detașează ca importanță pamântul (care din punct de vedere economic include
        și apa).
        <ParagraphIndent />
        Rolul economic al pământului decurge din multitudinea de activități pe care le mijlocețte și din procesele pe
        care le intreține:
        <SectionList>
          {[
            '- constituie cadrul general, spațial de desfasurare a tuturor activitșților umane;',
            '- este sursa de elemente nutritive pentru floră și faună;',
            '- este principalul factor de producție în agricultură.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <SectionSubTitle>Pământul - factor de producție limitat</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        În calitate de factor de producție, pământul este limitat și, de aceea, tinde să devină restrictiv pentru
        activitatea economică.
        <br />
        <ParagraphIndent />
        Acest fapt impune:
        <SectionList>
          {[
            '- utilizarea rațională a pământului;',
            '- creșterea calității, funcțiilor și rolului pământului în combinație cu alți factori de producție;',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
        <br />
        <ParagraphIndent />
        În asemenea situație, pământul se prezintă ca un factor de producție regenerabil.
      </Paragraph>
      <Divider />
    </>
  );
}
