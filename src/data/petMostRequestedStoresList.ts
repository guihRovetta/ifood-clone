import Store01 from '../assets/pet/stores/1.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const petMostRequestedStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Cobasi - Sjc Jardim Oriente',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
];
