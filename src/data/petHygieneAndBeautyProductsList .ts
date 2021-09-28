import Product01 from '../assets/pet/products/1.jpg';
import Product02 from '../assets/pet/products/2.jpg';
import Product03 from '../assets/pet/products/3.jpg';
import Product04 from '../assets/pet/products/4.jpg';
import Store01 from '../assets/pet/stores/1.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateProductCardList } from '../utils/generateProductCardList';
import { generateRamdomNumber } from '../utils/generateRandomNumber';

export const petHygieneAndBeautyProductsList = [
  generateProductCardList({
    source: Product01,
    name: 'Brinquedo de morder para cachorros',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(5, 7),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product02,
    name: 'Ração Progato Clássica 10kg - Multigrãos',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(25, 30),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product03,
    name: 'Herbavelt T.A 1l - Ourofino',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(85, 95),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product04,
    name: 'Tapete Higiêncio Tico Pads - 30 unidades',
    deliveryTime: generateMinAndMaxTime(40, 60),
    deliverFee: generateRamdomNumber(4, 10, true) + 0.9,
    price: generateRamdomNumber(45, 55),
    store: {
      source: Store01,
    },
  }),
];
