import { StoreInfoType } from '../components/StoreItem';

type GenerateStoreInfoType = Omit<StoreInfoType, 'deliverFee'> & {
  deliverFee?: number;
};

export const generateStoreItemList = (storeInfo: GenerateStoreInfoType) => {
  const {
    name,
    rating,
    source,
    category,
    distance,
    deliveryTime,
    deliverFee,
    isSuperRestaurant,
    freeDelivery,
  } = storeInfo || {};

  return {
    name,
    rating,
    source,
    category,
    distance,
    deliveryTime,
    deliverFee: deliverFee
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(deliverFee)
      : '',
    isSuperRestaurant,
    freeDelivery,
  };
};
