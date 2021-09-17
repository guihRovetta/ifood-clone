import AcaiImg from '../assets/restaurants/categories/Acai-out_20.jpg';
import ArabianImg from '../assets/restaurants/categories/Arabe-out_20.jpg';
import BrazilianImg from '../assets/restaurants/categories/Brasileira-nov_20.jpg';
import ChineseImg from '../assets/restaurants/categories/Chinesa-out_20.jpg';
import CandyAndCakeImg from '../assets/restaurants/categories/Doces_e_bolos-out_20.jpg';
import JapaneseImg from '../assets/restaurants/categories/Japonesa-out_20.jpg';
import FastFoodImg from '../assets/restaurants/categories/Lanches-out_20.jpg';
import FoodImg from '../assets/restaurants/categories/Marmita-nov_20.jpg';
import MarketImg from '../assets/restaurants/categories/Mercado-nov_20.jpg';
import PastelImg from '../assets/restaurants/categories/Pastel-out_20.jpg';
import PizzaImg from '../assets/restaurants/categories/Pizza-out_20.jpg';
import PromoImg from '../assets/restaurants/categories/Promocoes-out_20.jpg';
import SalgadosImg from '../assets/restaurants/categories/Salgados-out_20.jpg';
import HealthyFoodImg from '../assets/restaurants/categories/Saudavel-out_20.jpg';
import IceCreamImg from '../assets/restaurants/categories/Sorvetes-out_20.jpg';
import VegetarianImg from '../assets/restaurants/categories/Vegetariana-out_20.jpg';
import { generateItemImageList } from '../utils/generateItemImageList';
import { categoryDictionary } from './categoryDictionary';

export const restaurantsCategoriesImageList = [
  generateItemImageList(MarketImg, categoryDictionary?.market?.label),
  generateItemImageList(BrazilianImg, categoryDictionary?.brazilian?.label),
  generateItemImageList(FastFoodImg, categoryDictionary?.fastFood?.label),
  generateItemImageList(FoodImg, categoryDictionary?.food?.label),
  generateItemImageList(PromoImg, categoryDictionary?.promo?.label),
  generateItemImageList(AcaiImg, categoryDictionary?.acai?.label),
  generateItemImageList(ArabianImg, categoryDictionary?.arabian?.label),
  generateItemImageList(ChineseImg, categoryDictionary?.chinese?.label),
  generateItemImageList(
    CandyAndCakeImg,
    categoryDictionary?.candyAndCake?.label
  ),
  generateItemImageList(JapaneseImg, categoryDictionary?.japanese?.label),
  generateItemImageList(PastelImg, categoryDictionary?.pastel?.label),
  generateItemImageList(PizzaImg, categoryDictionary?.pizza?.label),
  generateItemImageList(SalgadosImg, categoryDictionary?.salgados?.label),
  generateItemImageList(HealthyFoodImg, categoryDictionary?.healthy?.label),
  generateItemImageList(IceCreamImg, categoryDictionary?.iceCream?.label),
  generateItemImageList(VegetarianImg, categoryDictionary?.vegetarian?.label),
];
