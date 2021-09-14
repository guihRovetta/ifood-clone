import ConvenienceImg from '../assets/restaurants/categories/new_GROCCON.png';
import DrinksImg from '../assets/restaurants/categories/new_drinks.png';
import DrugstoreImg from '../assets/restaurants/categories/new_grocfarma.png';
import PetImg from '../assets/restaurants/categories/new_petCON.png';
import { generateItemImageList } from '../utils/generateItemImageList';

export const secondCategoryImageList = [
  generateItemImageList(DrinksImg, 'Bebidas'),
  generateItemImageList(DrugstoreImg, 'Farmácia'),
  generateItemImageList(PetImg, 'Pet'),
  generateItemImageList(ConvenienceImg, 'Conveniência'),
];
