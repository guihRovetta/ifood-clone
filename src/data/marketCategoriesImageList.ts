import ConvenienceImg from '../assets/market/categories/new_GROCCON.png';
import DrinksImg from '../assets/market/categories/new_drinks.png';
import DrugstoreImg from '../assets/market/categories/new_grocfarma.png';
import PetImg from '../assets/market/categories/new_petCON.png';
import { generateItemImageList } from '../utils/generateItemImageList';

export const marketCategoriesImageList = [
  generateItemImageList(DrinksImg, 'Bebidas'),
  generateItemImageList(DrugstoreImg, 'Farmácia'),
  generateItemImageList(PetImg, 'Pet'),
  generateItemImageList(ConvenienceImg, 'Conveniência'),
];
