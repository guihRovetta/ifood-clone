import React from 'react';
import { View } from 'react-native';

import { petBannersList } from '../../data/petBannersList';
import { petComfortProductsList } from '../../data/petComfortProductsList ';
import { petHygieneAndBeautyProductsList } from '../../data/petHygieneAndBeautyProductsList ';
import { petMostRequestedStoresList } from '../../data/petMostRequestedStoresList';
import BannersList from '../BannersList';
import ProductCardList from '../ProductCardList';
import StoreItemList from '../StoreItemList';
import { styles } from './styles';

const Pets = () => {
  return (
    <View>
      <BannersList items={petBannersList} />

      <View style={styles.productCardListWrapper}>
        <ProductCardList
          title="Rotina de Autocuidado"
          items={petHygieneAndBeautyProductsList}
          showMoreButton
        />
      </View>

      <View style={styles.productCardListWrapper}>
        <ProductCardList
          title="Tudo para o Conforto do seu Pet"
          items={petComfortProductsList}
          showMoreButton
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Mais pedidos"
          items={petMostRequestedStoresList}
        />
      </View>
    </View>
  );
};

export default Pets;
