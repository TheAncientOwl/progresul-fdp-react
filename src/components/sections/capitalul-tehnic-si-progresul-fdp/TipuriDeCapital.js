import React from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  Paragraph,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  SubParagraph,
  ParagraphIndent,
  Divider,
} from '../../content/ContentElements';
import ContentSection from '../../content';
import ComponenteleCapitaluluiGr from '../../../images/componentele_capitalului.png';
import Graphic from '../../graphic';

export default function TipuriDeCapital({ id }) {
  return (
    <ContentSection id={id}>
      <SectionTitle>Tipuri de capital</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Cele mai importante criterii pentru clasificarea capitalului tehnic sunt:
        <SectionList>
          {[
            '- modul în care acesta participă la activitatea economică;',
            '- cum se consumă;',
            '- cum se înlocuiesc cu noile procese de producție',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        În baza acestor criterii, capitalul se împarte în:
        <SectionList>
          {['a) capital fix;', 'b) capital circulant.'].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        CAPITALUL FIX - este acea parte a capitalului format din bunuri (clădiri, mașini, utilaje, instalații, etc.)
        care participă la mai multe cicluri (acte) de producție, se consumă treptat și se înlocuiesc după mai mulți ani
        de utilizare.
        <SubParagraph>
          Consumul treptat al capitalului fix își găsește expresia în uzură, aceasta prezentadu-se în două forme:
          <SectionList>
            {[
              {
                value: 'a) uzură fizică;',
                desc: 'se manifestă prin deprecierea treptată a caracteristicilor funcționale ale capitalului fix ca urmare a folosirii productive și acțiunii agenților naturali.',
              },
              {
                value: 'b) uzură morală (involuntară).',
                desc: 'apare sub incidența progresului tehnic și a condițiilor pieței care asigură mașini, utilaje noi, mai ieftine decât cele în funcțiune și/sau cu performanțe tehnico-economice superioare.',
              },
            ].map((item, index) => (
              <div key={index}>
                <SectionListItem>{item.value}</SectionListItem>
                <SectionListItemDesc>{item.desc}</SectionListItemDesc>
              </div>
            ))}
          </SectionList>
        </SubParagraph>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        CAPITALUL CIRCULANT - este partea capitalului formată din bunuri (materii prime, material, combustibil, energia
        consumată în procesul de producție, apă tehnologică, etc) care participă la un singur ciclu de producție, sunt
        consumate sau transformate în cursul acestuia și trebuie înlocuite cu fiecare nou ciclu de producție.
      </Paragraph>
      <Divider />
      <Graphic title='Componentele capitalului' src={ComponenteleCapitaluluiGr} alt='componentele capitalului' />
      <Divider />
    </ContentSection>
  );
}

TipuriDeCapital.propTypes = {
  id: PropTypes.string.isRequired,
};
