import Store10 from '../assets/market/stores/10.png';
import Store11 from '../assets/market/stores/11.png';
import Store12 from '../assets/market/stores/12.jpg';
import Store13 from '../assets/market/stores/13.png';
import Store14 from '../assets/market/stores/14.png';
import Store15 from '../assets/market/stores/15.jpg';
import Store16 from '../assets/market/stores/16.jpeg';
import Store09 from '../assets/market/stores/9.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const marketAvailableMarketStoresList = [
  generateStoreItemList({
    source: Store09,
    name: 'Cobasi - Vila Emma',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store10,
    name: 'Farma Conde - Jardim Paulista',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store11,
    name: 'Supermercados Videira',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store12,
    name: 'Nespresso Exprres - Colinas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store13,
    name: 'Supermercados Simpatia',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store14,
    name: 'Peg Já - Minimercado',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store15,
    name: 'S.O.S - Breja',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store16,
    name: 'Mercadinho Irmãos Mansa',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
];
