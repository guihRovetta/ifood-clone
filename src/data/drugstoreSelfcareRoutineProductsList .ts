import Product01 from '../assets/drugstore/products/1.jpg';
import Product02 from '../assets/drugstore/products/2.jpg';
import Product03 from '../assets/drugstore/products/3.jpg';
import Store01 from '../assets/drugstore/stores/1.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateProductCardList } from '../utils/generateProductCardList';
import { generateRamdomNumber } from '../utils/generateRandomNumber';

export const drugstoreSelfcareRoutineProductsList = [
  generateProductCardList({
    source: Product01,
    name: 'Sabonete Líquido Hidratante Protex 250ml',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(8, 10),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product02,
    name: 'Sabonete Líquido Protex 250ml',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(5, 7),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product03,
    name: 'Elástico para cabelo Nous - 6 unidades',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(8, 10),
    store: {
      source: Store01,
    },
  }),
];
