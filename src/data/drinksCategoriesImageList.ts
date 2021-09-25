import BeerImg from '../assets/drinks/categories/beer.png';
import EnergeticImg from '../assets/drinks/categories/energetic.png';
import SodaImg from '../assets/drinks/categories/soda.png';
import VodcaImg from '../assets/drinks/categories/vodca.png';
import WaterImg from '../assets/drinks/categories/water.png';
import WyneImg from '../assets/drinks/categories/wyne.png';
import { generateItemImageList } from '../utils/generateItemImageList';

export const drinksCategoriesImageList = [
  generateItemImageList(BeerImg, 'Cervejas'),
  generateItemImageList(WyneImg, 'Vinhos'),
  generateItemImageList(VodcaImg, 'Destilados'),
  generateItemImageList(EnergeticImg, 'Energéticos'),
  generateItemImageList(SodaImg, 'Refrigerantes'),
  generateItemImageList(WaterImg, 'Sucos e Águas'),
];
