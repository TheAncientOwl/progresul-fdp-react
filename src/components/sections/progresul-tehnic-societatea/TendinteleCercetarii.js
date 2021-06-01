import React from 'react';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  SectionTitle,
} from '../../content/ContentElements';

export default function TendinteleCercetarii() {
  return (
    <>
      <SectionTitle>Tendințele cercetării științifice pe termen lung</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Pe termen lung, cercetarea științifică este marcâtă de două mari tendințe:
        <SectionList>
          {[
            {
              value: 'a) de accelerare, ilustrată prin:',
              desc: [
                '- reducerea timpului de la inițierea unei cercetări până la finalizarea sa;',
                '- creșterea numărului anual de cercetări inițiate și finalizate;',
                '- creșterea ponderei produselor noi.',
              ],
            },
            {
              value: ' b) de creștere a cheltuielilor, sumele tot mai mari utilizate pentru cercetare conduc la:',
              desc: [
                '- eliminarea sau marginalizarea celor ce nu pot face față creșterii cheltuielilor;',
                '- unirea eforturilor și cooperarea în vederea susținerii cheltuielilor pentru cercetare.',
              ],
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <SectionListItem>{item.value}</SectionListItem>
              {item.desc.map((desc, descIndex) => (
                <SectionListItemDesc key={descIndex}>{desc}</SectionListItemDesc>
              ))}
            </React.Fragment>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Caracterul tot mai costisitor al cercetării și riscurilor nereușitei au determinat:
        <SectionList>
          {[
            '- concentrarea cercetării și a invoațiilor la firmele și în tările cele mai avute;',
            '- implicarea statului (prin buget) ca important susținator financiar al cercetării științifice în domeniul apărării (în țările în curs de dezvoltare, bugetul de stat este singura sursă de finanțare).',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Pe masura generalizarii sociale a inovației, avantajele celor care o dețin se diminuează și, în cele din urmă,
        dispar; de aici și preocuparea agenților economici pentru realizarea de alte și alte inovații.
        <br />
        <br />
        <ParagraphIndent />
        Inovația este aceea care transformă progresul tehnic, generat de activitatea de cercetare științifică, în
        progres economic.
      </Paragraph>
    </>
  );
}
