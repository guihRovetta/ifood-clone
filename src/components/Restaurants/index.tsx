import React from 'react';
import { View } from 'react-native';

import { categoryImageList } from '../../data/categoryImageList';
import CategoryImageList from '../CategoryImageList';

const Restaurants = () => {
  return (
    <View>
      <CategoryImageList items={categoryImageList} />
    </View>
  );
};

export default Restaurants;
