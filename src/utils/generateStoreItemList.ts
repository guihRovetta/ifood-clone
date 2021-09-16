import { StoreInfoType } from '../components/StoreItem';

export const generateStoreItemList = (storeInfo: StoreInfoType) => {
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
