import React from 'react';
import { ImageSourcePropType, ScrollView } from 'react-native';

import CategoryImageItem from '../CategoryImageItem';
import { styles } from './styles';

type CategoryImageListProps = {
  items: {
    uri: ImageSourcePropType;
    label: string;
  }[];
};

const CategoryImageList = ({ items }: CategoryImageListProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.categoryListContainer}
    >
      {items?.map((item) => (
        <CategoryImageItem
          key={item?.label}
          imageUrl={item?.uri}
          label={item?.label}
          style={styles.categoryContainer}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryImageList;
