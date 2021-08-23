import React from 'react';
import { View } from 'react-native';

import { categoryImageList } from '../../data/categoryImageList';
import { restaurantsBannersList } from '../../data/restaurantsBannersList';
import BannersList from '../BannersList';
import CategoryImageList from '../CategoryImageList';

const Restaurants = () => {
  return (
    <View>
      <CategoryImageList items={categoryImageList} />

      <BannersList items={restaurantsBannersList} />
    </View>
  );
};

export default Restaurants;
