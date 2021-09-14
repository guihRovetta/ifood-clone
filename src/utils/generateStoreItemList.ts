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
    deliverFee,
    isSuperRestaurant,
    freeDelivery,
  };
};
