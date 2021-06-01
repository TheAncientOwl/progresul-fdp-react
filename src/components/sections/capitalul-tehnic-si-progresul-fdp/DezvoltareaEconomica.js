import React from 'react';
import {
  SectionTitle,
  Paragraph,
  SectionList,
  SectionListItem,
  ParagraphIndent,
  Divider,
} from '../../content/ContentElements';

export default function DezvoltareaEconomica() {
  return (
    <>
      <SectionTitle>Dezvoltarea economică extensivă și intensivă</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Orice factor de producție apare ca unitate a unor aspecte cantitative și calitative.
        <br />
        Creșterea producției de bunuri și servicii, odată cu dezvoltarea societății a fost posibilă prin:
        <SectionList>
          {[
            '- utilizarea unei cantități mai mari de factori;',
            '- îmbunătățirea calității și ridicarea eficienței utilizării lor.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Pentru a surprinde, distinct, aportul aspectelor cantitative și, respectiv, calitative ale factorilor de
        producție la realizarea diferitelor activități în analizele economice se utilizează noțiunile:
        <SectionList>
          {['a) dezvoltare economică extensivă;', 'b) dezvoltare economică intensivă.'].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        DEZVOLTARE DE TIP EXTENSIV - se produce atunci când creșterea activității și a volumului de producție se axează,
        în principal, pe sporirea cantității de producție.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        DEZVOLTARE DE TIP INTENSIV - e realizează atunci când aportul calității și eficienței utilizării factorilor la
        creșterea activității și a producției este preponderent.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Actualmente, economisirea și analizarea calității factorilor de producție sunt impuse de o serie de împrejurări:
        <SectionList>
          {[
            '- creșterea nevoilor de bunuri și servicii, precum și diversificarea acestora;',
            '- tendința generală de creștere a dificultăților de acces la anumiți factori de producție;',
            '- sporirea exigențelor pentru calitatea bunurilor și serviciilor;',
            '- tendința de scumpire a multora dintre factorii de producție;',
            '- necesitatea atenuării poluării și promovării măsurilor de prevenire a degradării mediului ambiant.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
    </>
  );
}
