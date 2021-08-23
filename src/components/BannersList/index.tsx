import React from 'react';
import { ImageSourcePropType, ScrollView } from 'react-native';

import Banner from '../Banner';
import { styles } from './styles';

type BannersListProps = {
  items: ImageSourcePropType[];
};

const BannersList = ({ items }: BannersListProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.bannerListContainer}
    >
      {items?.map((item, index) => (
        <Banner key={index} source={item} style={styles.bannerContainer} />
      ))}
    </ScrollView>
  );
};

export default BannersList;
