import React from 'react';
import { View } from 'react-native';

import Banner02 from '../../assets/market/wide-banners/2.jpeg';
import { marketBannersList } from '../../data/marketBannersList';
import { marketCategoriesImageList } from '../../data/marketCategoriesImageList';
import { marketStoreBigCardList } from '../../data/marketStoreBigCardList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';
import StoreBigCardList from '../StoreBigCardList';
import UltraWideBanner from '../UltraWideBanner';
import { styles } from './styles';

const Markets = () => {
  return (
    <View>
      <CategoryImageList items={marketCategoriesImageList} />

      <View style={styles.storeBigCardListWrapper}>
        <StoreBigCardList items={marketStoreBigCardList} />
      </View>

      <BannersList items={marketBannersList} />

      <View style={styles.genericBannerWrapper}>
        <UltraWideBanner source={Banner02} />
      </View>
    </View>
  );
};

export default Markets;
