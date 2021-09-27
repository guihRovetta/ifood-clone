import { ProductCardType } from '../components/ProductCard';

type GenerateProductCardListType = Omit<
  ProductCardType,
  'deliverFee' | 'price'
> & {
  deliverFee?: number;
  price: number;
};

export const generateProductCardList = (
  product: GenerateProductCardListType
) => {
  const { name, source, deliveryTime, deliverFee, price, priceFrom, store } =
    product || {};

  return {
    name,
    source,
    deliveryTime,
    deliverFee: deliverFee
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(deliverFee)
      : '',
    price: price
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)
      : '',
    priceFrom,
    store,
  };
};
