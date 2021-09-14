import React from 'react';
import { View, Text } from 'react-native';

import StoreItem, { StoreInfoType } from '../StoreItem';
import { styles } from './styles';

type StoreItemListProps = {
  title: string;
  items: StoreInfoType[];
};

const StoreItemList = ({ title, items }: StoreItemListProps) => {
  return (
    <View>
      <Text style={styles.storeListItemTitle}>{title}</Text>

      {items?.map((item) => (
        <React.Fragment key={item?.name}>
          <StoreItem storeInfo={item} />
          <View style={styles.storeItemListSeparatorComponent} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default StoreItemList;
