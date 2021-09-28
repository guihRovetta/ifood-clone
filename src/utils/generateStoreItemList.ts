import { StoreInfoType } from '../components/StoreItem';

type GenerateStoreInfoType = Omit<StoreInfoType, 'deliverFee' | 'coupon'> & {
  deliverFee?: number;
  coupon?: number;
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
    freeDeliveryAvailable,
    coupon,
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
    freeDeliveryAvailable,
    coupon: coupon
      ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 0,
        }).format(coupon)
      : '',
  };
};
