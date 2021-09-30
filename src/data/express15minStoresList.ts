import Store01 from '../assets/express/stores/1.jpg';
import Store02 from '../assets/express/stores/2.jpg';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRandomCoupon } from '../utils/generateRandomCoupon';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const express15minStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Santa Adega Pollux',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(0, 4),
    deliveryTime: generateMinAndMaxTime(5, 15),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    recurrence: {
      numberOfTimes: 4,
      discountValue: generateRandomCoupon(),
    },
  }),
  generateStoreItemList({
    source: Store02,
    name: 'Germânia Chopp Artesanal - Desde 1991',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(0, 4),
    deliveryTime: generateMinAndMaxTime(5, 15),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
  }),
];
