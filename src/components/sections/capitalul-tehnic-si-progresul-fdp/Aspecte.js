import React from 'react';
import {
  SectionTitle,
  Paragraph,
  SectionList,
  SectionListItem,
  SectionListItemDesc,
  ParagraphIndent,
  SectionSubTitle,
  Divider,
} from '../../content/ContentElements';
import AspecteCantitativeCalitativeGr from '../../../images/aspecte_cantitative_si_calitative_fdp.png';
import Graphic from '../../graphic';

export default function Aspecte() {
  return (
    <>
      <SectionTitle>Aspectul calitativ si cantitativ al factorilor de producție</SectionTitle>
      <Paragraph>
        <ParagraphIndent />
        PROGRESUL FACTORILOR DE PRODUCȚIE - reprezintă un ansamblu de realizări extreme de diverse ce poate fi pus în
        evidență prin surprinderea celor mai importante tendințe de schimbare, cantitative și calitative, care s-au
        manifestat pe termen foarte lung în sfera economicului.
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Așadar, se impun două aspecte ale progresului factorilor de producție, care pot fi urmărite ca atare dar care
        sunt, în același timp, interdependente:
        <SectionList>
          {['- unul cantitativ;', '- unul calitativ.'].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <SectionSubTitle>Aspectul cantitativ</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        Aspectul cantitativ este relevat de două tendințe:
        <SectionList>
          {[
            {
              value: 'a) Tendința generală de creștere a factorilor de producție:',
              desc: 'un număr mai mare de factori de producție înseamnă și o mai mare diversificare a lor;',
            },
            {
              value: 'b) Marirea volumului de factori de producție utilizați:',
              desc: 'acest lucru reprezintă un proces deoarece, în acest fel, s-au putut asigura cantități tot mai mari de factori de producție și, prin bunurile diverse create, au putut fi satisfăcute tot mai multe trebuințe individuale și sociale.',
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <SectionListItem>{item.value}</SectionListItem>
              <SectionListItemDesc>{item.desc}</SectionListItemDesc>
            </React.Fragment>
          ))}
        </SectionList>
        <br />
        <ParagraphIndent />
        Un aspect cantitativ al progresului factorilor de producție este utilizarea factorilor de producție pe principii
        ecologice
      </Paragraph>
      <Divider />
      <SectionSubTitle>Aspectul calitativ</SectionSubTitle>
      <Paragraph>
        <ParagraphIndent />
        Aspectul calitativ este pus în evidență prin tendințele urmatoare:
        <SectionList>
          {[
            'a) Creșterea raționalității utilizarii factorilor de producție, a eficienței utilizării lor, având ca efect diminuarea consumului de factori de producție pe unitate de produs (bun) sau de trebuință satisfăcută;',
            'b) Extinderea utilizării factorilor de producție la noi activități prin combinarea lor în variante și cu rezultate tot mai diferite;',
            <>
              c) Utilizarea factorilor de producție pe principii ecologice urmărindu-se:
              <SectionList>
                {[
                  '- Evitarea degradării mediului ambient;',
                  '- Menținerea parametrilor de mediu în limite normale pentru existența umană',
                ].map((item, index) => (
                  <SectionListItem key={index}>{item}</SectionListItem>
                ))}
              </SectionList>
            </>,
          ].map((item, index) => (
            <SectionListItem key={index}>{item}</SectionListItem>
          ))}
        </SectionList>
      </Paragraph>
      <Divider />
      <Paragraph>
        <ParagraphIndent />
        Procesul de recuperare treptată a valorii capitalului se numește amortizare.
      </Paragraph>
      <Divider />
      <Graphic
        title='Aspecte cantitative și calitative ale factorilor de producție'
        src={AspecteCantitativeCalitativeGr}
        alt='aspecte cantitative și calitative ale factorilor de producție'
        width='450'>
        <Divider />
      </Graphic>
    </>
  );
}
