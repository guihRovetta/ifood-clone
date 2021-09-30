import { StoreInfoType } from '../components/StoreItem';

type GenerateStoreInfoType = Omit<
  StoreInfoType,
  'deliverFee' | 'coupon' | 'recurrence'
> & {
  deliverFee?: number;
  coupon?: number;
  recurrence?: {
    numberOfTimes: number;
    discountValue: number;
  };
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
    isFavorite,
    recurrence,
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
    isFavorite,
    recurrence: {
      numberOfTimes: recurrence?.numberOfTimes,
      discountValue: recurrence?.discountValue
        ? new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
          }).format(recurrence?.discountValue)
        : '',
    },
  };
};
