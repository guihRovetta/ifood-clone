import Store03 from '../assets/express/stores/3.png';
import Store04 from '../assets/express/stores/4.jpg';
import Store05 from '../assets/express/stores/5.jpeg';
import Store06 from '../assets/express/stores/6.jpg';
import Store07 from '../assets/express/stores/7.jpg';
import Store08 from '../assets/express/stores/8.jpeg';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const express30minStoresList = [
  generateStoreItemList({
    source: Store03,
    name: 'Esquenta Bebidas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store04,
    name: 'Adega Open Beer Delivery',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store05,
    name: 'Chopp Brahma Express',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store06,
    name: 'Dama Bier Delivery',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store07,
    name: 'Adega Nova Conquista',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.drinks?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store08,
    name: 'Panificadora Central Integração',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.convenience?.label,
    distance: generateRamdomNumber(4, 10),
    deliveryTime: generateMinAndMaxTime(5, 30),
    deliverFee: generateRamdomNumber(4, 12, true) + 0.9,
  }),
];
