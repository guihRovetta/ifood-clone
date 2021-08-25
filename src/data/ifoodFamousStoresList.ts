import Store01 from '../assets/thumbnails/17.png';
import Store02 from '../assets/thumbnails/18.jpg';
import Store03 from '../assets/thumbnails/19.jpg';
import Store04 from '../assets/thumbnails/20.jpg';
import Store05 from '../assets/thumbnails/21.jpg';
import Store06 from '../assets/thumbnails/22.jpg';
import Store07 from '../assets/thumbnails/23.jpg';
import Store08 from '../assets/thumbnails/24.png';
import { generateStoreList } from './../utils/generateStoreList';

export const ifoodFamousStoresList = [
  generateStoreList(Store01, 'Burger King'),
  generateStoreList(Store02, 'Açaí e Pizzaria do Keke'),
  generateStoreList(Store03, 'Açaíteria do Monstro'),
  generateStoreList(Store04, 'Fast Food do Krueger'),
  generateStoreList(Store05, 'K&K Dogueira Delivery'),
  generateStoreList(Store06, 'Rei do Açaí'),
  generateStoreList(Store07, 'K&K Pizzaria Delivery'),
  generateStoreList(Store08, 'KFC'),
];
