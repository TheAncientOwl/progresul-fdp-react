import React from 'react';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionTitle,
} from '../../content/ContentElements';
import { Quote } from './Elements';

export default function Introducere() {
  return (
    <>
      <SectionTitle>Introducere</SectionTitle>
      <Quote>
        <ParagraphIndent />
        &quot;Așa cum îl folosesc economiștii, capitalul înseamnă mijloace produse pentru producție sau bunuri care pot
        fi folosite pentru a produce bunuri viitoare. Mașinile sunt capital ca și clădirile industriale si comerciale.
        Dar, la fel sunt cunoștintele și măiestria profesională pe care oamenii le acumulează prin educație, calificare
        sau experiență și care le permit să furnizeze servicii productive valoroase pentru ceilalți.&quot;{' '}
        <sup>[1]</sup>
      </Quote>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Pentru dezvoltarea unei economii progresul tehnic este, în același timp, premisă și rezultat.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        FACTORII DE PRODUCȚIE:
        <SectionList>
          {[
            '- reprezintă ansamblul elementelor care participă la producerea bunurilor si serviciilor;',
            '- sunt organic legați de resurse, de aceea pot fi definiți și prin raportarea la resurse;',
            '- constituie partea bunurilor atrase, alocate și consumate în procesul de producere a bunurilor economice.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Prin consumul factorilor de producție:
        <SectionList>
          {[
            '- se creează noi bunuri și servicii;',
            '- se dezvoltă cunoștințele tehnico-științifice;',
            '- se descoperă noi resurse naturale;',
            '- se creează condiții pentru îmbunătățirea calitativă și structurală a resurselor.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph style={{ fontStyle: 'italic' }}>
        <ParagraphIndent />
        <sup>1</sup>(Paul Heyne - ”Modelul economic de gândire. Mersul economiei de piață”, E.D.P., Bucuresti, 1990)
      </Paragraph>
      <Divider />
    </>
  );
}
