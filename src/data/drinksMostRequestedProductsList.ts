import Product01 from '../assets/drinks/products/1.jpeg';
import Product10 from '../assets/drinks/products/10.jpg';
import Product02 from '../assets/drinks/products/2.png';
import Product03 from '../assets/drinks/products/3.jpg';
import Product04 from '../assets/drinks/products/4.jpg';
import Product05 from '../assets/drinks/products/5.jpg';
import Product06 from '../assets/drinks/products/6.jpg';
import Product07 from '../assets/drinks/products/7.jpg';
import Product08 from '../assets/drinks/products/8.png';
import Product09 from '../assets/drinks/products/9.jpg';
import Store01 from '../assets/drinks/stores/1.jpeg';
import Store02 from '../assets/drinks/stores/2.jpeg';
import Store03 from '../assets/drinks/stores/3.jpg';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateProductCardList } from '../utils/generateProductCardList';
import { generateRamdomNumber } from '../utils/generateRandomNumber';

export const drinksMostRequestedProductsList = [
  generateProductCardList({
    source: Product01,
    name: 'Coca-Cola Lata 350ml',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(2, 5),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product02,
    name: 'Coca-Cola Zero Lata 350ml',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(3, 6),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product03,
    name: 'Cerveja Skol Lata 350ml',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(2, 3),
    store: {
      source: Store01,
    },
  }),
  generateProductCardList({
    source: Product04,
    name: 'Cerveja Petra Lata 350ml',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(2, 3),
    store: {
      source: Store02,
    },
  }),
  generateProductCardList({
    source: Product05,
    name: 'Cerveja Budweiser Garrafa',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(4, 5),
    store: {
      source: Store02,
    },
    priceFrom: true,
  }),
  generateProductCardList({
    source: Product06,
    name: 'Coca-Cola 2l',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(10, 13),
    store: {
      source: Store02,
    },
    priceFrom: true,
  }),
  generateProductCardList({
    source: Product07,
    name: 'Suco de Laranja',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(5, 7),
    store: {
      source: Store03,
    },
  }),
  generateProductCardList({
    source: Product08,
    name: 'Água Crystal sem gás - 500ml',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(3, 5),
    store: {
      source: Store03,
    },
  }),
  generateProductCardList({
    source: Product09,
    name: 'Cerveja Artesanal Dunkel',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(15, 20),
    store: {
      source: Store03,
    },
  }),
  generateProductCardList({
    source: Product10,
    name: 'Cerveja Artesanal Weiss',
    deliveryTime: generateMinAndMaxTime(20, 60),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
    price: generateRamdomNumber(18, 25),
    store: {
      source: Store03,
    },
  }),
];
