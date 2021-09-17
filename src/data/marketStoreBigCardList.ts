import Store01 from '../assets/market/stores/6.png';
import Store02 from '../assets/market/stores/9.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateStoreCardList } from '../utils/generateStoreCardList';

export const marketStoreBigCardList = [
  generateStoreCardList({
    source: Store01,
    name: 'Supermercados Nagumo',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Amanhã',
  }),
  generateStoreCardList({
    source: Store02,
    name: 'Cobasi - Sjc Jardim Oriente',
    deliveryTime: generateMinAndMaxTime(0, 24, false),
    deliveryDay: 'Amanhã',
  }),
];
