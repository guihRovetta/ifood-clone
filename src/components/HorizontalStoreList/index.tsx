import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import StoreItem, { StoreInfoType } from '../StoreItem';
import { styles } from './styles';

type HorizontalStoreListProps = {
  title: string;
  subtitle?: string;
  firstLineItems: StoreInfoType[];
  secondLineItems?: StoreInfoType[];
  showMoreButton?: boolean;
};

const HorizontalStoreList = ({
  title,
  subtitle,
  firstLineItems,
  secondLineItems = [],
  showMoreButton = false,
}: HorizontalStoreListProps) => {
  return (
    <View>
      <View style={styles.horizontalStoreListHeaderWrapper}>
        <View style={styles.horizontalStoreListFirstLineWrapper}>
          <Text style={styles.horizontalStoreListTitle}>{title}</Text>
          {showMoreButton && (
            <Pressable>
              <Text style={styles.horizontalStoreListShowMoreButtonText}>
                Ver mais
              </Text>
            </Pressable>
          )}
        </View>
        {subtitle && (
          <Text style={styles.horizontalStoreListSubtitle}>{subtitle}</Text>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.horizontalStoreListScrollViewContainer}
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
