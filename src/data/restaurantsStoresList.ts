import Store01 from '../assets/restaurants/stores/1.jpg';
import Store10 from '../assets/restaurants/stores/10.jpg';
import Store11 from '../assets/restaurants/stores/11.png';
import Store12 from '../assets/restaurants/stores/12.png';
import Store13 from '../assets/restaurants/stores/13.png';
import Store14 from '../assets/restaurants/stores/14.png';
import Store15 from '../assets/restaurants/stores/15.png';
import Store16 from '../assets/restaurants/stores/16.png';
import Store02 from '../assets/restaurants/stores/2.png';
import Store03 from '../assets/restaurants/stores/3.png';
import Store04 from '../assets/restaurants/stores/4.jpg';
import Store05 from '../assets/restaurants/stores/5.jpeg';
import Store06 from '../assets/restaurants/stores/6.png';
import Store07 from '../assets/restaurants/stores/7.jpg';
import Store08 from '../assets/restaurants/stores/8.png';
import Store09 from '../assets/restaurants/stores/9.jpg';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRandomCoupon } from '../utils/generateRandomCoupon';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { generateRamdomNumber } from './../utils/generateRandomNumber';
import { categoryDictionary } from './categoryDictionary';

export const restaurantsStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Empório Churraskilo',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.brazilian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isSuperRestaurant: true,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store02,
    name: 'Cozinha de Casa',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.food?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store03,
    name: 'Dona Martta',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.candyAndCake?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store04,
    name: 'Massa Corrida',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.italian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store05,
    name: 'Churraskilo Bethânia',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.brazilian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isSuperRestaurant: true,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store06,
    name: 'Patroni',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.fastFood?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store07,
    name: 'Patia Rotisserie e Doceria',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.candyAndCake?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store08,
    name: 'Delivery do Chefinho',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.food?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    freeDelivery: true,
  }),
  generateStoreItemList({
    source: Store09,
    name: 'K&K Adega Delivery Sul',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.pizza?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store10,
    name: 'Sabor Brasil',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.brazilian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store11,
    name: 'K&K Burguer Delivery',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.fastFood?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store12,
    name: 'Na Cumbuca Caldos e Sopas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.food?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    freeDelivery: true,
  }),
  generateStoreItemList({
    source: Store13,
    name: 'Cacau Show',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.candyAndCake?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isSuperRestaurant: true,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store14,
    name: 'Samambaya',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.vegetarian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store15,
    name: 'Lig-Lig',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.chinese?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isSuperRestaurant: true,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store16,
    name: 'Brasileirinho Delivery',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.brazilian?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
];
