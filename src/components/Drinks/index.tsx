import React from 'react';
import { View } from 'react-native';

import Banner01 from '../../assets/drinks/wide-banners/1.jpeg';
import { drinksBannersList } from '../../data/drinksBannersList';
import { drinksCategoriesImageList } from '../../data/drinksCategoriesImageList';
import { drinksMostRequestedProductsList } from '../../data/drinksMostRequestedProductsList';
import { drinksMostRequestedStoresList } from '../../data/drinksMostRequestedStoresList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import ProductCardList from '../ProductCardList';
import StoreItemList from '../StoreItemList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Drinks = () => {
  return (
    <View>
      <CategoryImageList items={drinksCategoriesImageList} />

      <BannersList items={drinksBannersList} />

      <View style={styles.genericBannerWrapper}>
        <UltraWideBanner source={Banner01} />
      </View>

      <View style={styles.productCardListWrapper}>
        <ProductCardList
          title="Bebidas mais pedidas"
          items={drinksMostRequestedProductsList}
          showMoreButton
        />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList
          title="Mais pedidos"
          items={drinksMostRequestedStoresList}
        />
      </View>
    </View>
  );
};

export default Drinks;
