import React from 'react';
import { ImageSourcePropType, FlatList, View } from 'react-native';

import Banner from '../Banner';
import { styles } from './styles';

type BannersListProps = {
  items: ImageSourcePropType[];
};

const BannersList = ({ items }: BannersListProps) => {
  return (
    <FlatList
      horizontal
      data={items}
      renderItem={({ item }) => <Banner source={item} />}
      keyExtractor={(item) => item?.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.bannerContainer} />}
      contentContainerStyle={styles.bannerListContainer}
    />
  );
};

export default BannersList;
