import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import StoreItem, { StoreInfoType } from '../StoreItem';
import { styles } from './styles';

type HorizontalStoreListProps = {
  title: string;
  subtitle?: string;
  firstLineItems: StoreInfoType[];
  secondLineItems?: StoreInfoType[];
};

const HorizontalStoreList = ({
  title,
  subtitle,
  firstLineItems,
  secondLineItems = [],
}: HorizontalStoreListProps) => {
  return (
    <View>
      <Text style={styles.horizontalStoreListTitle}>{title}</Text>
      <Text style={styles.horizontalStoreListSubtitle}>{subtitle}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View>
          <View style={styles.horizontalStoreListContainer}>
            {firstLineItems?.map((item) => (
              <View
                key={item?.name}
                style={styles.horizontalStoreListStoreItemContainer}
              >
                <StoreItem storeInfo={item} />
              </View>
            ))}
          </View>

          <View style={styles.horizontalStoreListContainer}>
            {secondLineItems?.map((item) => (
              <View
                key={item?.name}
                style={styles.horizontalStoreListStoreItemContainer}
              >
                <StoreItem storeInfo={item} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalStoreList;
