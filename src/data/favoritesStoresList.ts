import Store02 from '../assets/restaurants/stores/10.jpg';
import Store03 from '../assets/restaurants/stores/11.png';
import Store04 from '../assets/restaurants/stores/12.png';
import Store05 from '../assets/restaurants/stores/13.png';
import Store06 from '../assets/restaurants/stores/14.png';
import Store07 from '../assets/restaurants/stores/15.png';
import Store08 from '../assets/restaurants/stores/16.png';
import Store01 from '../assets/restaurants/stores/9.jpg';
import { generateStoreList } from './../utils/generateStoreList';

export const favoritesStoresList = [
  generateStoreList(Store01, 'K&K Adega Delivery Sul'),
  generateStoreList(Store02, 'Sabor Brasil'),
  generateStoreList(Store03, 'K&K Burguer Delivery'),
  generateStoreList(Store04, 'Na Cumbuca Caldos e Sopas'),
  generateStoreList(Store05, 'Cacau Show'),
  generateStoreList(Store06, 'Samambaya'),
  generateStoreList(Store07, 'Lig-Lig'),
  generateStoreList(Store08, 'Brasileirinho Delivery'),
];
