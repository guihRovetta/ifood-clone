import { StoreBigCardType } from './../components/StoreBigCard/index';

export const generateStoreCardList = (storeInfo: StoreBigCardType) => {
  const { source, name, deliveryDay, deliveryTime } = storeInfo || {};

  return {
    source,
    name,
    deliveryDay,
    deliveryTime,
  };
};
