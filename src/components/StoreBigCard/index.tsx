import React from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

export type StoreBigCardType = {
  source: ImageSourcePropType;
  name: string;
  deliveryDay: string;
  deliveryTime: number[];
};

type StoreBigCardProps = {
  storeInfo: StoreBigCardType;
};

const StoreBigCard = ({ storeInfo }: StoreBigCardProps) => {
  const { source, name, deliveryDay, deliveryTime } = storeInfo || {};

  const [deliveryTimeMin, deliveryTimeMax] = deliveryTime;

  return (
    <View style={styles.storeContainer}>
      <View style={styles.storeImageContainer}>
        <Image style={styles.storeImage} source={source} />
      </View>
      <Text style={styles.storeName} numberOfLines={1}>
        {name}
      </Text>
      <Text
        style={styles.storeGenericText}
        numberOfLines={1}
      >{`${deliveryDay}, entre ${deliveryTimeMin}h-${deliveryTimeMax}h`}</Text>
    </View>
  );
};

export default StoreBigCard;
