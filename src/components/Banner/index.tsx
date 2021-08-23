import React from 'react';
import {
  Image,
  ImageSourcePropType,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { styles } from './styles';

type BannerProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

const Banner = ({ source, style }: BannerProps) => {
  return (
    <View style={style}>
      <Pressable>
        <Image source={source} resizeMode="contain" style={styles.banner} />
      </Pressable>
    </View>
  );
};

export default Banner;
