import Munca from './principalele-categorii-de-fdp/Munca';
import Natura from './principalele-categorii-de-fdp/Natura';
import Capitalul from './principalele-categorii-de-fdp/Capitalul';

import TipuriDeCapital from './capitalul-tehnic-si-progresul-fdp/TipuriDeCapital';
import Aspecte from './capitalul-tehnic-si-progresul-fdp/Aspecte';
import DezvoltareaEconomica from './capitalul-tehnic-si-progresul-fdp/DezvoltareaEconomica';

import ReglareaEconomica from './progresul-tehnic-economic/ReglareaEconomica';
import InovareInovatie from './progresul-tehnic-economic/InovareInovatie';

import TendinteleCercetarii from './progresul-tehnic-societatea/TendinteleCercetarii';
import RezistentaSociala from './progresul-tehnic-societatea/RezistentaSociala';

const SectionsConfig = [
  {
    title: 'Principalele categorii de factori de producție',
    items: [
      { title: 'Munca', to: 'munca' },
      { title: 'Natura', to: 'natura' },
      { title: 'Capitalul', to: 'capitalul' },
    ],
    contents: [
      <Munca key={0} id={'munca'} />,
      <Natura key={1} id={'natura'} />,
      <Capitalul key={2} id={'capitalul'} />,
    ],
  },
  {
    title: 'Capitalul tehnic și progresul factorilor de producție',
    items: [
      { title: 'Tipuri de capital', to: 'tipuri-de-capital' },
      { title: 'Aspecte', to: 'aspecte' },
      { title: 'Dezvoltarea economică', to: 'dezvoltarea-economica' },
    ],
    contents: [
      <TipuriDeCapital key={0} id={'tipuri-de-capital'} />,
      <Aspecte key={1} id={'aspecte'} />,
      <DezvoltareaEconomica key={2} id={'dezvoltarea-economica'} />,
    ],
  },
  {
    title: 'Progresul tehnic și progresul economic',
    items: [
      { title: 'Reglarea economică', to: 'reglarea-economica' },
      { title: 'Inovare și inovație', to: 'inovare-inovație' },
    ],
    contents: [
      <ReglareaEconomica key={0} id={'reglarea-economica'} />,
      <InovareInovatie key={1} id={'inovare-inovație'} />,
    ],
  },
  {
    title: 'Progresul tehnic și societatea',
    items: [
      { title: 'Tendințele cercetării științifice pe termen lung', to: 'tendintele-cercetarii' },
      { title: 'Rezistența socială la progresul tehnic', to: 'rezistenta-sociala' },
    ],
    contents: [
      <TendinteleCercetarii key={0} id={'tendintele-cercetarii'} />,
      <RezistentaSociala key={1} id={'rezistenta-sociala'} />,
    ],
  },
];

Object.freeze(SectionsConfig);
export default SectionsConfig;
