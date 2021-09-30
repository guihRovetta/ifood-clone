import React from 'react';
import { ImageSourcePropType, FlatList, View } from 'react-native';

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
    <FlatList
      horizontal
      data={items}
      renderItem={({ item }) => (
        <CategoryImageItem imageUrl={item?.uri} label={item?.label} />
      )}
      keyExtractor={(item) => item?.label}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.categoryContainer} />}
      contentContainerStyle={styles.categoryListContainer}
    />
  );
};

export default CategoryImageList;
