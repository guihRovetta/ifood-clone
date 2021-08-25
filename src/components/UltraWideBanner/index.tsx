import React from 'react';
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';

import { styles } from './styles';

type UltraWideBannerProps = {
  source: ImageSourcePropType;
};

const UltraWideBanner = ({ source }: UltraWideBannerProps) => {
  return (
    <View style={styles.ultraWideBannerContainer}>
      <Pressable>
        <Image
          source={source}
          resizeMode="cover"
          style={styles.ultraWideBanner}
        />
      </Pressable>
    </View>
  );
};

export default UltraWideBanner;
