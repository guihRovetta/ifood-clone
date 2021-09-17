import React from 'react';
import { FlatList, View } from 'react-native';

import StoreBigCard, { StoreBigCardType } from '../StoreBigCard';

type StoreBigCardListProps = {
  items: StoreBigCardType[];
};

const StoreBigCardList = ({ items }: StoreBigCardListProps) => {
  return (
    <FlatList
      horizontal
      data={items}
      renderItem={({ item }) => <StoreBigCard storeInfo={item} />}
      keyExtractor={(item) => item?.name}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: 10 }} />}
    />
  );
};

export default StoreBigCardList;
