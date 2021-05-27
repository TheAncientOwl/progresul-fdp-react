import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../content';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  SectionTitle,
} from '../../content/ContentElements';

export default function ReglareaEconomica({ id }) {
  return (
    <ContentSection id={id}>
      <SectionTitle>Reglarea economică a progresului tehnic</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Progresul tehnic este considerat temelia progresului economic sau cheia dezvoltării viitoare fiind condiționat
        de propagarea sau generalizarea sa la cât mai multe unități economice sau activități.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Promovarea progresului tehnic este reglată pe principiul raționalității economice:
        <SectionList>
          {[
            '- nimeni nu-și asumă responsabilitatea promovării progresului tehnic ce se dovedește neeconomic;',
            '- promovarea sa implică, în ansamblu, resurse economice și o adaptare la nevoile economiei.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Reglarea economică a progresului tehnic o face piața prin:
        {[
          { value: '- concurență', desc: 'are rolul de a stimula promovarea progresului tehnic' },
          {
            value: '- comercializarea progresului tehnic',
            desc: 'aceasta evidențiază eficiența sau ineficiența sa economică',
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <SectionListItem>{item.value}</SectionListItem>
            <SectionListItemDesc>{item.desc}</SectionListItemDesc>
          </React.Fragment>
        ))}
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Prin intermediul acestor elemente, piața elimină rezultatele neeconomice și permite manifestarea liberei
        inițiative în promovarea progresului tehnic.
      </Paragraph>
      <Divider />
    </ContentSection>
  );
}

ReglareaEconomica.propTypes = {
  id: PropTypes.string.isRequired,
};
