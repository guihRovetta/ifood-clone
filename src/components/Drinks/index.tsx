import React from 'react';
import { View } from 'react-native';

import Banner01 from '../../assets/drinks/wide-banners/1.jpeg';
import { drinksBannersList } from '../../data/drinksBannersList';
import { drinksCategoriesImageList } from '../../data/drinksCategoriesImageList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Drinks: React.FC = () => {
  return (
    <View>
      <CategoryImageList items={drinksCategoriesImageList} />

      <BannersList items={drinksBannersList} />

      <View style={styles.genericBannerWrapper}>
        <UltraWideBanner source={Banner01} />
      </View>
    </View>
  );
};

export default Drinks;
