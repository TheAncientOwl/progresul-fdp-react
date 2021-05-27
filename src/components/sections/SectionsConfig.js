import Aspecte from './capitalul-tehnic-si-progresul-fdp/Aspecte';
import DezvoltareaEconomica from './capitalul-tehnic-si-progresul-fdp/DezvoltareaEconomica';
import TipuriDeCapital from './capitalul-tehnic-si-progresul-fdp/TipuriDeCapital';

const SectionsConfig = [
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
