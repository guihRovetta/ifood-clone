import Store01 from '../assets/drinks/stores/1.jpeg';
import Store10 from '../assets/drinks/stores/10.jpg';
import Store11 from '../assets/drinks/stores/11.jpg';
import Store12 from '../assets/drinks/stores/12.png';
import Store13 from '../assets/drinks/stores/13.png';
import Store14 from '../assets/drinks/stores/14.jpeg';
import Store15 from '../assets/drinks/stores/15.jpg';
import Store16 from '../assets/drinks/stores/16.png';
import Store02 from '../assets/drinks/stores/2.jpeg';
import Store03 from '../assets/drinks/stores/3.jpg';
import Store04 from '../assets/drinks/stores/4.jpg';
import Store05 from '../assets/drinks/stores/5.png';
import Store06 from '../assets/drinks/stores/6.jpg';
import Store07 from '../assets/drinks/stores/7.jpeg';
import Store08 from '../assets/drinks/stores/8.jpg';
import Store09 from '../assets/drinks/stores/9.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { generateRamdomNumber } from './../utils/generateRandomNumber';
import { categoryDictionary } from './categoryDictionary';

export const drinksMostRequestedStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Kober - Cerveja Gelada',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    isSuperRestaurant: true,
  }),
  generateStoreItemList({
    source: Store02,
    name: 'Adega Donzelas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store03,
    name: 'Beer',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store04,
    name: 'Lacasa das Bebidas - Adega',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store05,
    name: 'Gênio das Bebidas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    isSuperRestaurant: true,
  }),
  generateStoreItemList({
    source: Store06,
    name: 'FOG - Tabacaria & Lounge',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store07,
    name: 'Beer - Empório de Bebidas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store08,
    name: 'Aramazém da Cerveja - Desde 2004',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    freeDelivery: true,
  }),
  generateStoreItemList({
    source: Store09,
    name: 'Comércio de Bebidas Diamantina',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store10,
    name: 'K&K Adega - Delivery',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
  }),
  generateStoreItemList({
    source: Store11,
    name: 'Adega Drink Bros',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store12,
    name: 'Esquenta Bebidas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    freeDelivery: true,
  }),
  generateStoreItemList({
    source: Store13,
    name: 'Fritz - Cervejaria Artesanal',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    isSuperRestaurant: true,
  }),
  generateStoreItemList({
    source: Store14,
    name: 'Madrugadão Leste',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store15,
    name: "Habib's",
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 100),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
    isSuperRestaurant: true,
  }),
  generateStoreItemList({
    source: Store16,
    name: 'Café Donuts',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(2, 8),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(3, 12, true) + 0.9,
  }),
];
