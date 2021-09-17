import React from 'react';
import { View } from 'react-native';

import Banner01 from '../../assets/restaurants/banners/1.jpeg';
import Banner02 from '../../assets/restaurants/banners/2.jpeg';
import { favoritesStoresList } from '../../data/favoritesStoresList';
import { ifoodFamousStoresList } from '../../data/ifoodFamousStoresList';
import { lastStoresList } from '../../data/lastStoresList';
import { marketCategoriesImageList } from '../../data/marketCategoriesImageList';
import { restaurantsBannersList } from '../../data/restaurantsBannersList';
import { restaurantsCategoriesImageList } from '../../data/restaurantsCategoriesImageList';
import { restaurantsStoresList } from '../../data/restaurantsStoresList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import StoreItemList from '../StoreItemList';
import StoreList from '../StoreList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Restaurants = () => {
  return (
    <View>
      <CategoryImageList items={restaurantsCategoriesImageList} />

      <BannersList items={restaurantsBannersList} />

      <StoreList
        title="Últimas lojas"
        showMoreButton
        items={lastStoresList}
        style={styles.genericList}
      />

      <StoreList
        title="Meus Favoritos"
        showMoreButton
        items={favoritesStoresList}
        style={styles.genericList}
      />

      <View style={styles.genericBannerWrapper}>
        <UltraWideBanner source={Banner01} />
      </View>

      <StoreList
        title="Famosos no iFood"
        items={ifoodFamousStoresList}
        style={styles.genericList}
      />

      <View style={styles.genericBannerWrapper}>
        <UltraWideBanner source={Banner02} />
      </View>

      <View style={styles.categoryImageListWrapper}>
        <CategoryImageList items={marketCategoriesImageList} />
      </View>

      <View style={styles.storeItemListWrapper}>
        <StoreItemList title="Lojas" items={restaurantsStoresList} />
      </View>
    </View>
  );
};

export default Restaurants;
