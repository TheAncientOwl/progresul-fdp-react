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

export default function Munca({ id }) {
  return (
    <ContentSection id={id}>
      <SectionTitle>Munca - factor activ și determinant al producției</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Munca este factorul primar, originar, comun tuturor genurilor de activitate.
        <br />
        <br />
        <ParagraphIndent />
        MUNCA - este activitatea conștientă, specific umană, îndreptată spre realizarea unui anumit scop, prin care omul
        își definește interesul, iși caută și își construiește mijloacele adecvate atingerii scopului propus pentru
        satisfacerea interesului.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Din totdeauna, munca a fost factorul activ și determinant al producției, al activității economice în general
        deoarece:
        <SectionList>
          {[
            '- în muncă se afirmă capacitățile de transformare și de anticipare ale omului;',
            '- are loc combinarea, utilizarea si perfecționarea celorlalți factori de producție;',
            '- orice progres al individului și societății, al activității economice este legat de muncă;',
            '- în muncă omul își folosește aptitudinile, capacitățile și experiența.',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
          <br />
        </SectionList>
        <ParagraphIndent />
        Orice muncă este, în ultimă instanță, o îmbinare de efort fizic și intelectual.
      </Paragraph>
      <Divider />
      <Paragraph>
        La inceputurile civilizației umane, agilitatea și forța fizică erau preponderente în muncă. Treptat, se afirmă
        tot mai mult și mai evident efortul de gândire, de creativitate în muncă. Istoria umanității este un lung proces
        de afirmare a efortului intelectual și imaginativ bazat pe asimilarea progreselor cunoașterii.
      </Paragraph>
      <Divider />
      <SectionSubTitle>Tendința de reducere a duratei de muncă</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        Un element deosebit de important atât pentru desfășurarea și caracterizarea muncii cât și pentru potențarea
        celorlalți factori de producție este informația, privită ca sumă a cunoștințelor veridice, ordonate, instituite
        și folosite
        <br />
        <ParagraphIndent />
        Pe masura imbogățirii conținutului muncii pe seama asimilării informației, a perfecționării celorlalți factori
        de producție crește rodnicia muncii.
        <br />
        <ParagraphIndent />
        Ca urmare, se manifestă o tendință obiectivă de reducere a duratei muncii, concomitent cu creșterea timpului în
        afara muncii.
      </Paragraph>
      <Divider />
    </ContentSection>
  );
}

Munca.propTypes = {
  id: PropTypes.string.isRequired,
};
