import Product01 from '../assets/pet/products/5.jpg';
import Product02 from '../assets/pet/products/6.jpg';
import Product03 from '../assets/pet/products/7.jpg';
import Product04 from '../assets/pet/products/8.jpg';
import Store01 from '../assets/pet/stores/1.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateProductCardList } from '../utils/generateProductCardList';
import { generateRamdomNumber } from '../utils/generateRandomNumber';

export const petComfortProductsList = [
  generateProductCardList({
    source: Product01,
    name: 'Kelco Pipicat Classic',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(26, 30),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product02,
    name: 'Progato 1,8kg',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(18, 22),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product03,
    name: 'Ecopads - Tapetes Higiênicos',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(60, 75),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product04,
    name: 'Revolution 6% - Zoetis',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(75, 85),
    store: {
      source: Store01,
    },
  }),
];
