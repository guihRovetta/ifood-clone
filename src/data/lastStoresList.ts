import Store01 from '../assets/thumbnails/1.jpg';
import Store02 from '../assets/thumbnails/2.png';
import Store03 from '../assets/thumbnails/3.png';
import Store04 from '../assets/thumbnails/4.jpg';
import Store05 from '../assets/thumbnails/5.jpeg';
import Store06 from '../assets/thumbnails/6.png';
import Store07 from '../assets/thumbnails/7.jpg';
import Store08 from '../assets/thumbnails/8.png';
import { generateStoreList } from './../utils/generateStoreList';

export const lastStoresList = [
  generateStoreList(Store01, 'Empório Churraskilo'),
  generateStoreList(Store02, 'Cozinha de Casa'),
  generateStoreList(Store03, 'Dona Martta'),
  generateStoreList(Store04, 'Massa Corrida'),
  generateStoreList(Store05, 'Churraskilo Bethânia'),
  generateStoreList(Store06, 'Patroni'),
  generateStoreList(Store07, 'Patia Rotisserie e Doceria'),
  generateStoreList(Store08, 'Delivery do Chefinho'),
];
