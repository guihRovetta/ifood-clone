import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';

import { styles } from './styles';

type CategoryImageItemProps = {
  imageUrl: ImageSourcePropType;
  label: string;
  style?: StyleProp<ViewStyle>;
};

const CategoryImageItem = ({
  imageUrl,
  label,
  style,
}: CategoryImageItemProps) => {
  return (
    <View style={style}>
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
