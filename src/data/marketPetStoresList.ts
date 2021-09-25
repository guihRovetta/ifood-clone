import Store09 from '../assets/market/stores/9.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const marketPetStoresList = [
  generateStoreItemList({
    source: Store09,
    name: 'Cobasi Jardim Oriente',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store09,
    name: 'Cobasi Parque Industrial',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
];
