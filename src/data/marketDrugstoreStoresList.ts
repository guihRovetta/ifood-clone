import Store01 from '../assets/drugstore/stores/1.png';
import Store02 from '../assets/drugstore/stores/2.jpeg';
import Store03 from '../assets/drugstore/stores/3.png';
import Store04 from '../assets/drugstore/stores/4.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRandomCoupon } from '../utils/generateRandomCoupon';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

const marketDrugstoreStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Farmácia Pague Menos - 322',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    recurrence: {
      numberOfTimes: 5,
      discountValue: generateRandomCoupon(),
    },
  }),
  generateStoreItemList({
    source: Store02,
    name: 'Drogaria São Paulo - Vila Industrial',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store03,
    name: 'Drogaria Extra São José dos Campos',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store04,
    name: 'Farma Conde 18 - Jd Satélite',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
  }),
];

const middleArrayIndex = Math.ceil(marketDrugstoreStoresList?.length / 2);
const firstLine = marketDrugstoreStoresList?.splice(0, middleArrayIndex);
const secondLine = marketDrugstoreStoresList?.splice(-middleArrayIndex);

export const marketDrugstoreStoresListObject = {
  firstLine,
  secondLine,
};
