import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import { styles } from './styles';

type CategoryImageItemProps = {
  imageUrl: ImageSourcePropType;
  label: string;
};

const CategoryImageItem = ({ imageUrl, label }: CategoryImageItemProps) => {
  return (
    <View>
      <Pressable style={styles.categoryContainer}>
        <Image
          source={imageUrl}
          resizeMode="contain"
          style={styles.categoryImage}
        />
        <Text style={styles.categoryLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryImageItem;
