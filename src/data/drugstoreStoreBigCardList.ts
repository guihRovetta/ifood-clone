import Store01 from '../assets/drugstore/stores/1.png';
import Store02 from '../assets/drugstore/stores/2.jpeg';
import Store03 from '../assets/drugstore/stores/3.png';
import Store04 from '../assets/drugstore/stores/4.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateStoreCardList } from '../utils/generateStoreCardList';

const firstLine = [
  generateStoreCardList({
    source: Store01,
    name: 'Farmácias Pague Menos - Bosque',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Hoje',
  }),
  generateStoreCardList({
    source: Store02,
    name: 'Drogaria São Paulo - Vila Industrial',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Hoje',
  }),
];

const secondLine = [
  generateStoreCardList({
    source: Store03,
    name: 'Drogaria Extra - São José dos Campos',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Amanhã',
  }),
  generateStoreCardList({
    source: Store04,
    name: 'Farma Conde 18 - Jd. Satélite',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Amanhã',
  }),
];

export const drugstoreStoreBigCardList = {
  firstLine,
  secondLine,
};
