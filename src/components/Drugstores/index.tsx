import React from 'react';
import { View } from 'react-native';

import { drugstoreAllStoresList } from '../../data/drugstoreAllStoresList';
import { drugstoreBannersList } from '../../data/drugstoreBannersList';
import { drugstoreSelfcareRoutineProductsList } from '../../data/drugstoreSelfcareRoutineProductsList ';
import { drugstoreStoreBigCardList } from '../../data/drugstoreStoreBigCardList';
import BannersList from '../BannersList';
import ProductCardList from '../ProductCardList';
import StoreBigCardList from '../StoreBigCardList';
import StoreItemList from '../StoreItemList';
import { styles } from './styles';

const Drugstores = () => {
  return (
    <View>
      <View style={styles.storeBigCardListWrapper}>
        <StoreBigCardList items={drugstoreStoreBigCardList?.firstLine} />
      </View>

      <View style={styles.storeBigCardListWrapper}>
        <StoreBigCardList items={drugstoreStoreBigCardList?.secondLine} />
      </View>

      <BannersList items={drugstoreBannersList} />

      <View style={styles.productCardListWrapper}>
        <ProductCardList
          title="Rotina de Autocuidado"
          items={drugstoreSelfcareRoutineProductsList}
          showMoreButton
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Tudo em Farmácia"
          items={drugstoreAllStoresList}
        />
      </View>
    </View>
  );
};

export default Drugstores;
