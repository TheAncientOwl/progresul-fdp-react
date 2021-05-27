import React from 'react';
import PropTypes from 'prop-types';
import ContentSection from '../../content';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionSubTitle,
  SectionTitle,
} from '../../content/ContentElements';

export default function InovareInovatie({ id }) {
  return (
    <ContentSection id={id}>
      <SectionTitle>Inovare și inovație</SectionTitle>
      <SectionSubTitle>Inovarea</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        INOVAREA - este activitatea creatoare, exclusiv umană, prin care este generat progresul tehnic.
        <br />
        <ParagraphIndent />
        Întrucât actul creativ implică, prin natura sa, știinta, această activitate este denumită și cercetare
        știintifică;
        <br />
        <ParagraphIndent />
        Importanța deosebită a progresului tehnic:
        <SectionList>
          {[
            '- a determinat transformarea cercetării științifice într-o activitate sistematică și permanentă, cu un cadru organizatoric și juridic propriu;',
            '- complexitatea acestei activități și impactul său economic și social sunt relevate prin conceptul revoluției științifice, tehnologice, tehncie sau tehnico-stiintifică;',
            '- cercetarea științifică presupune parcurgerea cu necesitate a unor faze: sesizarea-identificarea fenomenelor (problemelor), documentarea și trecând prin alte faze se încheie cu utilizarea efectivă a rezultatului obținut și prin generalizarea sa;',
            '- această activitate se desfășoară în unități specializate, în întreprinderi și universități.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <SectionSubTitle>Inovația</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        INOVAȚIA - este ideea, proiectul, realizarea care prin aplicare iși demonstrează capacitatea de creștere a
        eficienței:
        <SectionList>
          {[
            '- la inovație se ajunge printr-o selecție severă pe criterii economice a realizărilor tehnice și științifice;',
            '- vânzarea unei inovații se face la prețuri ridicâte;',
            '- inovația este protejată prin dreptul de proprietate industrială sau intelectuală, prin care se apreciază că autorul ei este singurul îndreptățit să o foloseasca și nimeni altcineva fără consimțământul său.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
    </ContentSection>
  );
}

InovareInovatie.propTypes = {
  id: PropTypes.string.isRequired,
};
