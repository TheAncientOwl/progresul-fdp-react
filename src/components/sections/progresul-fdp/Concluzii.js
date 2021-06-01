import React from 'react';
import {
  Divider,
  Paragraph,
  ParagraphIndent,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  SectionSubTitle,
  SectionTitle,
} from '../../content/ContentElements';

export default function Concluzii() {
  return (
    <>
      <SectionTitle>Concluzii</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        Inițial, literatura economică a reținut la baza activității umane doi factori de producție (numiți originari).
        <SectionList>
          {['- Munca ( omul cu capacitatea sa de muncă );', '- Natura ( pământul )'].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
        <br />
        <ParagraphIndent />
        Acestora li s-a adaugat ulterior capitalul (mașini, utilaje, instalații, materii prime, etc.)
        <br />
        <br />
        <ParagraphIndent />
        Cercetarea conținutului factorilor de producție permite clasificarea acestora în trei mari câtegorii (fiecare
        fiind formată dintr-un număr mai mare sau mai mic de componente cu acțiune specifică)
        <SectionList>
          {['- Munca;', '- Natura;', '- Capitalul'].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Economia reprezintă, de fapt, sinteaza acțiunii celor trei grupe de factori anterior prezentate( munca, natura,
        capitalul ), fiecare dintre ele având un conținut omogen, dar diferit de al celorlalte. Natura și capitalul sunt
        factori de producție derivați.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Factori de producție sunt:
        <SectionList>
          {[
            '- capitalul tehnic utilizat;',
            '- fondul funciar utilizat al unei țări;',
            '- echipamentul de producție al unor fabrici aflate în activitate;',
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <SectionSubTitle>Efectele sociale ale progresului tehnic</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        Progresul tehnic are importante efecte sociale, dintre care cel mai important este asupra gradului de ocupare a
        populației apte de muncă:
        {[
          {
            value: 'a) pe termen scurt:',
            desc: 'Determină reducerea numarului de locuri de muncă (șomaj) prin automatizarea, mecanizarea și robotizarea producției; otodată, chiar prin aplicarea progresului tehnic are loc și un proces invers de creare a noi locuri de muncă;',
          },
          {
            value: 'b) pe termen lung:',
            desc: 'Promovarea progresului tehnic determina creșterea numărului de locuri de muncă, fapt demonstrat de țările dezvoltate care realizează o eficiență economică ridicâtă cu un numar superior de oameni angajați în muncă.',
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
        Progresul tehnic este puternic contestat, atunci când este însoțit de creșterea șomajului și de anumite riscuri
        proprii activității economice.
      </Paragraph>
      <Divider />
    </>
  );
}
