import React from 'react';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import { styles } from './styles';

type StoreProps = {
  label: string;
  source: ImageSourcePropType;
};

const Store = ({ label, source }: StoreProps) => {
  return (
    <Pressable>
      <View style={styles.storeContainer}>
        <View style={styles.storeImageContainer}>
          <Image
            source={source}
            resizeMode="contain"
            style={styles.storeImage}
          />
        </View>
        <Text numberOfLines={2} style={styles.storeLabel}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Store;
