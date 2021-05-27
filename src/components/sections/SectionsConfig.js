import Munca from './principalele-categorii-de-fdp/Munca';
import Natura from './principalele-categorii-de-fdp/Natura';
import Capitalul from './principalele-categorii-de-fdp/Capitalul';

import TipuriDeCapital from './capitalul-tehnic-si-progresul-fdp/TipuriDeCapital';
import Aspecte from './capitalul-tehnic-si-progresul-fdp/Aspecte';
import DezvoltareaEconomica from './capitalul-tehnic-si-progresul-fdp/DezvoltareaEconomica';

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
];

Object.freeze(SectionsConfig);
export default SectionsConfig;
