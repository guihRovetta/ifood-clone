import Store01 from '../assets/market/stores/1.png';
import Store02 from '../assets/market/stores/2.jpeg';
import Store03 from '../assets/market/stores/3.png';
import Store04 from '../assets/market/stores/4.png';
import Store05 from '../assets/market/stores/5.png';
import Store06 from '../assets/market/stores/6.png';
import Store07 from '../assets/market/stores/7.png';
import Store08 from '../assets/market/stores/8.png';
import { generateMinAndMaxTime } from '../utils/generateMinAndMaxTime';
import { generateRandomCoupon } from '../utils/generateRandomCoupon';
import { generateRamdomNumber } from '../utils/generateRandomNumber';
import { generateStoreItemList } from '../utils/generateStoreItemList';
import { categoryDictionary } from './categoryDictionary';

export const marketMostRequestStoresList = [
  generateStoreItemList({
    source: Store01,
    name: 'Farma Conde - Cidade Jardim',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store02,
    name: 'Rei do Campo - Mercado',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    freeDeliveryAvailable: true,
  }),
  generateStoreItemList({
    source: Store03,
    name: 'Semar',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store04,
    name: 'Mercado Dia',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
  generateStoreItemList({
    source: Store05,
    name: 'Extra Hiper - Sjc Colinas',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    coupon: generateRandomCoupon(),
  }),
  generateStoreItemList({
    source: Store06,
    name: 'Supermercado Nagumo - São José',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store07,
    name: 'Mercadinho Beira Rio',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
    isFavorite: true,
  }),
  generateStoreItemList({
    source: Store08,
    name: 'Supermercado Tomazzini',
    rating: generateRamdomNumber(4, 5),
    category: categoryDictionary?.market?.label,
    distance: generateRamdomNumber(0, 12),
    deliveryTime: generateMinAndMaxTime(20, 120),
    deliverFee: generateRamdomNumber(0, 20, true) + 0.9,
  }),
];
