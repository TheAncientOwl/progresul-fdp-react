import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../content';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionTitle,
} from '../../content/ContentElements';

export default function RezistentaSociala({ id }) {
  return (
    <ContentSection id={id}>
      <SectionTitle>Rezistența socială la progresul tehnic</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Promovarea progresului tehnic presupune eforturi de adaptare la o serie de schimbări ce decurg din natura sa,
        cum ar fi:
        {[
          '- înlocuirea unor echipamente și perfecționarea altora;',
          '- reorganizarea producției și a muncii;',
          '- reorientarea spre alte activități a unei părți din populația profesională a noilor generații;',
          '- renunțarea la tehnologiile depășite.',
        ].map((item, index) => (
          <SectionListItem key={index}>{item}</SectionListItem>
        ))}
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Toate aceste schimbări sunt greu de realizat pentru anumite persoane, grupuri sau firme, deoarece:
        <SectionList>
          {[
            '- nu au resursele financiare necesare;',
            '- nu au vârsta și psihologia adecvate;',
            '- nu sesizează necesitatea și importanța acestor schimbări;',
            '- nu au interesul să le facă.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Rezistența socială a progresului tehnic este determinată de efectele negative (poluarea) ale progresului tehnic,
        de aici și preocuparea pentru:
        <SectionList>
          {[
            '- dezvoltarea și promovarea tehnicilor și tehnologiilor mai putin poluante;',
            '- creșterea producției pentru mijloace de depoluare;',
            '- măsuri ferme pentru protejarea naturii.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
    </ContentSection>
  );
}

RezistentaSociala.propTypes = {
  id: PropTypes.string.isRequired,
};
