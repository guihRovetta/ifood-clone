import AcaiImg from '../assets/categories/Acai-out_20.jpg';
import ArabianImg from '../assets/categories/Arabe-out_20.jpg';
import BrazilianImg from '../assets/categories/Brasileira-nov_20.jpg';
import ChineseImg from '../assets/categories/Chinesa-out_20.jpg';
import CandyAndCakeImg from '../assets/categories/Doces_e_bolos-out_20.jpg';
import JapaneseImg from '../assets/categories/Japonesa-out_20.jpg';
import FastFoodImg from '../assets/categories/Lanches-out_20.jpg';
import FoodImg from '../assets/categories/Marmita-nov_20.jpg';
import MarketImg from '../assets/categories/Mercado-nov_20.jpg';
import PastelImg from '../assets/categories/Pastel-out_20.jpg';
import PizzaImg from '../assets/categories/Pizza-out_20.jpg';
import PromoImg from '../assets/categories/Promocoes-out_20.jpg';
import SalgadosImg from '../assets/categories/Salgados-out_20.jpg';
import HealthyFoodImg from '../assets/categories/Saudavel-out_20.jpg';
import IceCreamImg from '../assets/categories/Sorvetes-out_20.jpg';
import VegetarianImg from '../assets/categories/Vegetariana-out_20.jpg';
import { generateItemImageList } from '../utils/generateItemImageList';

export const categoryImageList = [
  generateItemImageList(MarketImg, 'Mercado'),
  generateItemImageList(BrazilianImg, 'Brasileira'),
  generateItemImageList(FastFoodImg, 'Lanches'),
  generateItemImageList(FoodImg, 'Marmita'),
  generateItemImageList(PromoImg, 'Promoções'),
  generateItemImageList(AcaiImg, 'Açaí'),
  generateItemImageList(ArabianImg, 'Arábe'),
  generateItemImageList(ChineseImg, 'Chinesa'),
  generateItemImageList(CandyAndCakeImg, 'Bolos e Doces'),
  generateItemImageList(JapaneseImg, 'Japonesa'),
  generateItemImageList(PastelImg, 'Pastel'),
  generateItemImageList(PizzaImg, 'Pizza'),
  generateItemImageList(SalgadosImg, 'Salgados'),
  generateItemImageList(HealthyFoodImg, 'Saudável'),
  generateItemImageList(IceCreamImg, 'Sorvetes'),
  generateItemImageList(VegetarianImg, 'Vegetariana'),
];
