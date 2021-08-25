import React from 'react';
import { View } from 'react-native';

import Banner01 from '../../assets/ultrawide-banners/1.jpeg';
import Banner02 from '../../assets/ultrawide-banners/2.jpeg';
import { categoryImageList } from '../../data/categoryImageList';
import { favoritesStoresList } from '../../data/favoritesStoresList';
import { ifoodFamousStoresList } from '../../data/ifoodFamousStoresList';
import { lastStoresList } from '../../data/lastStoresList';
import { restaurantsBannersList } from '../../data/restaurantsBannersList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import StoreList from '../StoreList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Restaurants = () => {
  return (
    <View>
      <CategoryImageList items={categoryImageList} />

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

      <View style={styles.genericBanner}>
        <UltraWideBanner source={Banner01} />
      </View>

      <StoreList
        title="Famosos no iFood"
        items={ifoodFamousStoresList}
        style={styles.genericList}
      />

      <View style={styles.genericBanner}>
        <UltraWideBanner source={Banner02} />
      </View>
    </View>
  );
};

export default Restaurants;
